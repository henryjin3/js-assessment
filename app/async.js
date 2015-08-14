exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
    var p = new Promise(function(resolve, reject) {
      resolve(value);
    });
    return p;
  },

  manipulateRemoteData : function(url) {
    return $.getJSON(url).then(function(result) {
      var names = [];
      result.people.forEach(function(val) {
        names.push(val.name);
      })
      return names.sort();
    });
  }
};
