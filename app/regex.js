exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
    return str.search(/[0-9]/) != -1;
  },

  containsRepeatingLetter : function(str) {
    return str.search(/([a-zA-z])\1/) != -1;
  },

  endsWithVowel : function(str) {
    return str.search(/[aeiouAEIOU]$/) != -1;
  },

  captureThreeNumbers : function(str) {
    var index = str.search(/[0-9]{3}/);
    if(index == -1) {
      return false;
    }
    return str.substr(index, 3);
  },

  matchesPattern : function(str) {
    var result = str.match(/[0-9]{3}-[0-9]{3}-[0-9]{4}/);
    return result != null && result.index == 0 && result[0].length == str.length;
  },
  isUSD : function(str) {
    var pattern = /^\$[0-9]{1,3}(?:,[0-9]{3})*(?:\.[0-9]{2})*/;
    var result = str.match(pattern);
    return result != null && result.index == 0 && result[0].length == str.length;
  }
};
