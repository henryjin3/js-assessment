exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var i;
    var pattern = '(.)\\1{'+(amount)+'}';
    while((i = str.search(pattern)) != -1) {
      str = str.substr(0,i+amount) + str.substr(i+amount+1);
    }
    return str;
  },
  wordWrap: function(str, cols) {
    var words = str.split(' ');
    var lengthCounter = words[0].length;
    var result = words[0];

    for(var i in words) {
      if(i == 0) continue;
      var word = words[i];
      if(lengthCounter + word.length > cols) {
        result += '\n' + word;
        lengthCounter = word.length;
      } else {
        result += ' ' + word;
        lengthCounter += word.length + 1;
      }
    }

    return result;
  },
  reverseString: function(str) {
    return str.split('').reverse().join('');
  }
};
