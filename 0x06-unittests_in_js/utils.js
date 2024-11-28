const Utils = {
  calculateNumber: function (type, a, b) {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    return 0;
  }
};
module.exports = Utils;
