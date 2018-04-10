var isMagic = function (param) {
  var magic = 0x5f3759df;
  return (param == magic);
};
anything.prototype.isMagic = isMagic;
