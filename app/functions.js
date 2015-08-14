exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0], arr[1], arr[2]);
  },

  speak : function(fn, obj) {
    return fn.bind(obj)();
  },

  functionFunction : function(str) {
    return function(str2) {
      return str + ', ' + str2;
    };
  },

  makeClosures : function(arr, fn) {
    var newArr = [];
    arr.forEach(function(val, i, a) {
      newArr.push(function() {
        return fn(val);
      });
    });
    return newArr;
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn(str1, str2, str3);
    };
  },

  useArguments : function() {
    return Array.prototype.slice.call(arguments).reduce(function(p, c) {
      return p+c;
    });
  },

  callIt : function(fn) {
    fn.apply(this, Array.prototype.slice.call(arguments, 1));
  },

  partialUsingArguments : function(fn) {
    // var args = Array.prototype.slice.call(arguments, 1);
    // return function() {
    //   args = args.concat(Array.prototype.slice.call(arguments));
    //   return fn.apply(this, args);
    // };
    return _.partial.apply(this, arguments);
  },

  curryIt : function(fn) {
    // var args = Array.prototype.slice.call(arguments, 1);
    // return function() {
    //   return fn.apply(this, args.concat(Array.prototype.slice.call(arguments)));
    // };
    var args = [];
    return function myself(val) {
      args.push(val);
      if(args.length == 3) {
        return fn.apply(this, args);
      } else {
        return myself;
      }
    };
  }
};
