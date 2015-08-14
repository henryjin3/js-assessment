exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var result = num & Math.pow(2,bit-1);
    return result > 0 ? 1 : 0;
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var result = '';
    for(var i = 8; i >= 1; i--) {
      result += this.valueAtBit(num, i);
    }
    return result;
  },

  multiply: function(a, b) {
    return 1000*a*b/1000;
  }
};
