exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function (data, dirName) {
    var listFilesFunction = function myself(data, dirName, inSubDir) {
      var prop = 'files';
      var files = data[prop];
      var arr = [];

      if(data.dir === dirName) {
        inSubDir = true;
      }

      for(var index in files) {
        var obj = files[index];
        if(obj.hasOwnProperty(prop)) {
          arr = arr.concat(myself(obj, dirName, inSubDir));
        } else if(inSubDir){
          arr.push(obj);
        }
      }
      return arr;
    }
    return listFilesFunction(data, dirName, arguments.length !== 2);
  },

  permute: function myself(arr) {
    if(arr.length == 2) {
      return [arr, [arr[1], arr[0]]];
    } else {
      var returnValue = [];
      for(var index in arr) {
        var value = arr[index];
        var remaining = arr.filter(function(val) {
          return val !== value;
        });
        var remainingResult = myself(remaining);
        for(var resIndex in remainingResult) {
          remainingResult[resIndex].splice(0,0,value);
        }
        returnValue = returnValue.concat(remainingResult);
      }
      return returnValue;
    }
  },

  fibonacci: function myself(n) {
    if(n <= 1 || n === 2) return 1;
    else return myself(n-1) + myself(n-2);
  },

  validParentheses: function myself(n) {
    if(n == 1) {
      return ['()'];
    } else {
      var result = [];
      var remainingResult = myself(n-1);
      for(var i in remainingResult) {
        var value = remainingResult[i];
        result.push('(' + value + ')');
        result.push('()' + value);
        result.push(value + '()');
      }
      return _.uniq(result);
    }
  }
};
