exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    return arr.reduce(function(p, c) {
      return p+c;
    });
  },

  remove : function(arr, item) {
    return arr.filter(function(val) {
      return val !== item;
    });
  },

  removeWithoutCopy : function(arr, item) {
    while(arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.splice(0,0,item);
    return arr;
  },

  curtail : function(arr) {
    arr.splice(0,1);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    return arr.filter(function(val) {
      return val === item;
    }).length;

  },

  duplicates : function(arr) {
    var newArr = [];
    arr.forEach(function(val, i, a) {
      if(i != a.indexOf(val) && newArr.indexOf(val) == -1)
        newArr.push(val);
    });
    return newArr;
  },

  square : function(arr) {
    arr.forEach(function(val, i, a) {
      a[i] = val*val;
    });
    return arr;
  },

  findAllOccurrences : function(arr, target) {
    var newArr = [];
    arr.forEach(function(val, i, a) {
      if(val === target)
        newArr.push(i);
    });
    return newArr;
  }
};
