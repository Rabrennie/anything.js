var alertBox = function(){
    var defaults = {
        title: 'this is a title',
        cancel: function() {},
        confirm: function() {}
    };

    var util = {
        touchMoveHandle: function touchMoveHandle(e) {
            e.preventDefault();
            return false;
        },

        insertStyles: function insertStyles(){
            var doc,
                cssCode=[],
                cssText;

            var head,
                style,
                firstStyle;

            var len = arguments.length;
            if(len == 1){
                doc = document;
                cssCode.push(arguments[0])
            }else if(len == 2){
                doc = arguments[0];
                cssCode.push(arguments[1]);
            }else{
                alert("only two param");
            }

            head = doc.getElementsByTagName("head")[0];
            styles= head.getElementsByTagName("style");

            if(styles.length == 0){
                if(doc.createStyleSheet){//ie
                    doc.createStyleSheet();
                }else{//FF
                    var tempStyle = doc.createElement("style");
                    tempStyle.setAttribute("type","text/css");
                    head.appendChild(tempStyle);
                }
            }

            firstStyle = styles[0];
            cssText=cssCode.join("\n");

            if(!+"\v1"){//opacity detective
                var str = cssText.match(/opacity:(\d?\.\d+);/);
                if(str!=null){
                    cssText = cssText.replace(str[0],"filter:alpha(opacity="+pareFloat(str[1])*100+")");
                }
            }

            if(firstStyle.styleSheet){
                firstStyle.styleSheet.cssText += cssText;
            }else if(doc.getBoxObjectFor){
                firstStyle.innerHTML += cssText;
            }else{
                firstStyle.appendChild(doc.createTextNode(cssText));
            }
        }
    }

    var hooks = {
        beforeShowMask: function(cb) {
            document.addEventListener('touchmove', util.touchMoveHandle, false);
            cb && cb();
        },

        afterHideMask: function(cb) {
            document.removeEventListener('touchmove', util.touchMoveHandle);
            cb && cb();
        }
    };

    var cssText = " .ui-alert-mask { position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 1000; width: 100%; height: 100%; background-color: rgba(4, 0, 0, 0.5);  } \
                    .ui-alert-mask .ui-alert { position: absolute; top: 50%; left: 50%; -webkit-transform: translate(-50%, -50%); transform: translate(-50%, -50%); width: 75%; padding: 0 25px; border-radius: 8px; background-color: #fff; text-align: center; } \
                    .ui-alert-mask .ui-alert .ui-alert-hd { padding: 0; } \
                    .ui-alert-mask .ui-alert .ui-alert-hd:after {content: ''; display: block; width: 100%;height: 1px; background-color: #e6e6e6; -webkit-transform: scaleY(.5);transform: scaleY(.5);} \
                    .ui-alert-mask .ui-alert .ui-alert-hd h2 { line-height: 1.5; margin: 0; padding: 10px 0; font-size: 0.75rem; font-weight: normal;} \
                    .ui-alert-mask .ui-alert .ui-alert-bd { width: 100%; display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; -webkit-box-pack: justify; -webkit-justify-content: space-between; -ms-flex-pack: justify; justify-content: space-between; padding: 15px 0; } \
                    .ui-btn { display:block;width: 45%; padding: 6px 0; font-size: 0.75rem; border-radius: 4px; text-decoration: none;} \
                    .ui-btn-cancel { color: #666; border: 1px solid #e6e6e6; } \
                    .ui-btn-confirm { color: #ef4f4f; border: 1px solid #ef4f4f; } \
                    ";

    var domText = '<div class="ui-alert-mask"> \
                        <div class="ui-alert"> \
                            <div class="ui-alert-hd"> \
                                <h2 id="js-alert-title"></h2> \
                            </div> \
                            <div class="ui-alert-bd"> \
                                <a href="javascript:void(0)" class="ui-btn ui-btn-cancel" id="js-alert-cancel">cancel</a> \
                                <a href="javascript:void(0)" class="ui-btn ui-btn-confirm" id="js-alert-confirm">confirm</a> \
                            </div> \
                        </div> \
                    </div> \
                  ';

    return {
        init: function(opts) {
            this.op = $.extend(defaults, opts || {});
            this.title = this.op.title;
            this.cancelCallback = this.op.cancel;
            this.confirmCallback = this.op.confirm;
        },

        bind: function() {
            var _this = this;
            $('#js-alert-cancel').on('tap', function(e) {
                _this.cancelCallback && _this.cancelCallback();
                _this.hide();
            });

            $('#js-alert-confirm').on('tap', function(e) {                
                _this.confirmCallback && _this.confirmCallback();
                _this.hide();
            });
        },

        render: function() {
            if (!$('.ui-alert-mask').length) {
                $('body').append(domText);
                $('#js-alert-title').html(this.title);
            }
            this.bind();
        },

        destroy: function() {
            $('#js-alert-cancel').off('tap');
            $('#js-alert-confirm').off('tap');
            $('.ui-alert-mask').remove();
        },

        show: function(opts) {
            this.init(opts);

            hooks.beforeShowMask(function() {
                if($('style').length) {
                    $('style').each(function(index, item) {
                        if ($(item).html().indexOf('.ui-alert-mask') == -1) {
                            util.insertStyles(cssText);
                        }
                    });
                } else {
                    util.insertStyles(cssText);
                }
            });

            this.render();
        },

        hide: function() {
            var _this = this;
            hooks.afterHideMask(function() {
                _this.destroy();
            });
        }
    };
}

anything.prototype.alertBox = alertBox;