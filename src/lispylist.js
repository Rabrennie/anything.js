/**
 * This monstrocity taken to 11. http://danthedev.com/2015/09/09/lisp-in-your-language/
 * It's got macros. Run for your lives.
 *
 * Some notes: 
 *  - ['a', 'b', 'c'] is a function all. If you want lists, do ['list', 'a', 'b', 'c']
 *  - if you need a literal string that won't resolve to a variable, use '`string'
 *  - the interpreter is mostly able to pull variables from outside a lisp context... mostly.
 *  - if you add to the stdlib, do it in the block of lisp code inside natives.
 *  - evaluate with either lispy(['a', 'b', 'c']) or ['a', 'b', 'c'].lispy(); this returns the value of the statement
 */ 

var lispy = (function(){

    Function.prototype.lazy = function(){
        this.__lazy__ = true;
        return this;
    }
    Function.prototype.isLazy = function(){
        return !!this.__lazy__;
    }

    function LiteralArray(original){
        Array.call(this);
        var thiz = this;
        this.original = original
        original.forEach(function(x,i){
            thiz[i] = x
        });
        this.isLiteral = function(){
            return true;
        };
    }
    LiteralArray.prototype = Array.prototype;

    Array.prototype.literal = function(){
        return new LiteralArray(this);
    }
    Array.prototype.isLiteral = function(){
            return false;
    };

    var global = this;
    var util = {
        toArray: function(arrayLike){
            return Array.prototype.slice.call(arrayLike);
        }
    };

    function Natives(){

        this.__clone__ = function(){
            return Object.create(this);
        };

        // primitives
        this.list = function(){
            return util.toArray(arguments);
        };

        this.print = console.log.bind(console);

        this.obj = (function(){
            var it ={};
            var thiz = this;
            util.toArray(arguments).forEach(function(x){
                it[lispy(x[0], thiz)] = lispy(x[1], thiz); 
            });
            return it;
        }).lazy();

        this.lit = (function(s){
            return typeof s === 'string' ? s : ''
        }).lazy();

        this.def = (function(name, value){
            return this[name] = lispy(value, this);
        }).lazy();

        this.lambda = (function(defArgs, expr){
            var childScope = this.__clone__();
            return function(){
                var callArgs = util.toArray(arguments);
                var isVarArgs = false;
                defArgs.forEach(function(argName, index){
                    if(isVarArgs) return;
                    if(argName === '&rest'){
                        var argName = defArgs[index + 1];
                        var arr = callArgs.slice(index)
                        if(arr.length === 1 && arr[0] instanceof Array){
                            arr = arr[0];
                        
                        childScope[argName] = arr;
                        isVarArgs = true;
                    } else{
                        childScope[argName] = callArgs[index];
                    }

                    var it = childScope[argName];
                    if(it instanceof Array)
                        childScope[argName] = it.literal();
                    }
                });

                return lispy(expr, childScope);
            };
        }).lazy();

        this.macro = (function(defArgs, expr){
            var thiz = this;
            var f = this.lambda.call(this, defArgs, expr);
            return (function(){ 
                return lispy(f(util.toArray(arguments)),this);
            }).lazy();
        }).lazy();

        this.defmacro = (function(name, defArgs, expr){
            return this.def.call(this, name, 
                this.macro.call(this, defArgs, expr)
            );
        }).lazy();

        this.fn = this.lambda;

        this.defn = (function(name, args, expr){
            return this.def.call(this, name, 
                this.lambda.call(this, args, expr)
            );
        }).lazy();

        this.apply = (function(){
            var args = util.toArray(arguments).slice(1);
            var f = lispy(arguments[0], this);
            var thiz = this;
            if(!f.isLazy()){
                args = args.map(function(x){return lispy(x,thiz)});
            }
            return f.apply(this, args);
        }).lazy();

        this['do'] = function(){
            var args = util.toArray(arguments);
            return args[args.length - 1]
        };

        this['if'] = (function(condition, trueExpr, falseExpr){
            return lispy(lispy(condition, this) ? trueExpr : falseExpr, this);
        }).lazy();

        // math
        this['='] = function(){
            var terms = util.toArray(arguments);
            var ideal = terms[0];

            return terms.reduce(function(equal, x){
                return equal && (x === ideal);
            }, true);
        };
        this['+'] = function(){
            var args = util.toArray(arguments);
            if(args.length === 0)
                return 0;
            if(args.length === 1)
                return +args[0];
            else return args.reduce(function(x,y){
                return x+y;
            });
        };
        this['-'] = function(){
            var args = util.toArray(arguments);
            if(args.length === 1)
                return -args[0];
            else return args.reduce(function(x,y){
                return x-y;
            });
        };
        this['*'] = function(){
            return util.toArray(arguments).reduce(function(x,y){
                return x*y;
            }, 1);
        };
        this['**'] = function(){
            return util.toArray(arguments).reduce(function(x,y){
                return Math.pow(x,y);
            }, 1);
        };
        this['/'] = function(){
            return util.toArray(arguments).reduce(function(x,y){
                return x/y;
            });
        };
        this['%'] = function(){
            return util.toArray(arguments).reduce(function(x,y){
                return x%y;
            });
        };
        this['&'] = function(){
            return util.toArray(arguments).reduce(function(x,y){
                return x&y;
            }, -1);
        };
        this['|'] = function(){
            return util.toArray(arguments).reduce(function(x,y){
                return x|y;
            }, 0);
        };
        this['^'] = function(){
            return util.toArray(arguments).reduce(function(x,y){
                return x^y;
            }, 0);
        };
        this['<'] = function(x,y){
            return x<y;
        };
        this['>'] = function(x,y){
            return x>y;
        };
        this['<='] = function(x,y){
            return x<=y;
        };
        this['>='] = function(x,y){
            return x>=y;
        };
        this.and = (function(){
            var terms = util.toArray(arguments);
            var thiz = this;
            return terms.reduce(function(p, q){
                if(p == false) return false;
                else return p && lispy(q, thiz);
            }, true);

        }).lazy();
        this.or = (function(){
            var terms = util.toArray(arguments);
            var thiz = this;
            return terms.reduce(function(p, q){
                if(p == false) return false;
                else return p || lispy(q, thiz);
            }, true);

        }).lazy();
        this.not = function(p){
            return !p;
        };

        // functional
        this.map = function(xs, f){
            return xs.map(f.bind(this));
        };
        this.filter = function(xs, f){
            return xs.filter(f.bind(this));
        };
        this.head = function(xs){
            return xs[0];
        };
        this.tail = function(xs){
            return xs.slice(1);
        };
        this.init = function(xs){
            return xs.slice(0, xs.length - 1);
        };
        this.last = function(xs){
            return xs[xs.length - 1];
        };
        this.cons = function(x, xs){
            return [x].concat(xs);
        }
        this.append = function(xs, x){
            return xs.concat([x]);
        }
        this.any = function(xs, p){
            return xs.filter(p.bind(this)).length > 0;
        };
        this.every = function(xs, p){
            return xs.filter(p.bind(this)).length === coll.length;
        };
        this.reduce = function(xs, f, x){
            return x === undefined ? xs.reduce(f) : xs.reduce(f, x);
        };
        this.reduceRight = function(xs, f, x){
            return x === undefined ? xs.reduceRight(f) : xs.reduceRight(f, x);
        };

        // OO
        this.get = function(obj, key){
            return obj[key];
        };
        this.set = function(obj, key, val){
            obj[key] = val;
            return obj;
        };
        this.del = function(obj, key){
            return delete obj[key];
        };
        this['in'] = function(obj, key){
            return obj[key] !== undefined;
        };
        this.req = function(name){
            return require(name);
        };
        this.global = function(){
            return global;
        };
        this['typeof'] = function(x){
            return typeof x;
        };
        this['instanceof'] = function(obj, type){
            if(typeof type === 'string'){
                type = global[type];
            }
            return obj instanceof type;
        }
        this['new'] = function(){
            var type = arguments[0];
            if(typeof type === 'string'){
                type = global[type];
            }
            var args = util.toArray(arguments).slice(1);
            
            return new (Function.prototype.bind.apply(type, args));
        };

        this['while'] = (function(cond, f){
            while(lispy(cond, this)) lispy(f, this);
        }).lazy();

        ['do',

            ['defn', 'length', ['xs'], ['get', 'xs', '`length']],
            ['def', 'nil', ['list']],

            ['defmacro', '->', ['&rest', 'fs'],
                ['reduceRight', 'fs', 
                    ['fn', ['x', 'f'], ['append', 'f', 'x']]
                ]],
            ['defmacro', 'out', ['x'], ['print', 'x']],

            ['defn', 'null?'     , ['x'], ['=', 'x', null]],
            ['defn', 'undefined?', ['x'], ['=', 'x', undefined]],
            ['defn', 'obj?'      , ['x'], ['instanceof', 'x', 'Object']],
            ['defn', 'string?'   , ['x'], ['=', ['typeof', 'x'], 'string']],
            ['defn', 'number?'   , ['x'], ['=', ['typeof', 'x'], 'number']],
            ['defn', 'list?'     , ['x'], ['instanceof', 'x', 'Array']], ['def', 'array?', 'list?'],
            ['defn', 'fn?'       , ['x'], ['=', ['typeof', 'x'], 'function']],
            ['defn', 'zero?'     , ['x'], ['=', 'x', 0]],

            ['defn', 'swap', ['f'], ['fn', ['x', 'y'], ['f', 'y', 'x']]]

        ].lispy(this);
    }

    function lispy(it, scope){
        if(it === null || typeof it !== 'object')
            return it;
        else return it.lispy(scope);
    }

    Object.prototype.lispy = function(scope, returnScope){

        var scope = scope || new Natives();

        if(!(this instanceof Array)){
            return this;
        }
        var expr = this.map(function(symbol){
            if (typeof symbol === 'string' && symbol.indexOf('`', 0) === 0){
                return symbol.substring(1);
            } else if (typeof symbol === 'string' && symbol in scope){
                return scope[symbol];
            } else{
                return symbol;
            }
        })

        var f = this.length === 0 ? function(){return [];} : expr[0];

        if(f instanceof Function){
            var args = f.isLazy() ? this.slice(1) : expr.slice(1).map(function(arg){
                if(arg instanceof Array && !arg.isLiteral()){
                    return arg.lispy(scope);
                } else{
                    return arg;
                }
            });
            args = args.map(function(arg){
                if(arg instanceof Array && arg.isLiteral()){
                    return arg.original;
                }
                return arg;
            });
        }
        var res = (f instanceof Function) ? f.apply(scope, args) : f
        if(returnScope){
            scope.__result__ = res;
            return scope;
        } else return res;
    }

    return lispy;
})()

anything.prototype.lispy = lispy;
