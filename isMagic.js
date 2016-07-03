var isMagic = function (param) {
  var magic = 0x5f3759df;
  if (param == magic)
  {
    return true;
  }
  return false;
};
anything.prototype.isMagic = isMagic;
