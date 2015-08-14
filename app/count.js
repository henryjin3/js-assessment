exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    this.cancel = false;
    var i = start;
    var timer;
    var doLog = function() {
      console.log(i++);

      if(i <= end) {
        timer = setTimeout(doLog, 100);
      }
    }

    doLog();

    return {
      cancel: function() {
        if(timer) {
          clearTimeout(timer);
        }
      }
    }
  }
};
