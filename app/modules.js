exports = (typeof window === 'undefined') ? global : window;

exports.modulesAnswers = {
  createModule : function(str1, str2) {
    var module = {};
    module.sayIt = function() { return this.greeting + ', ' + this.name; };
    module.name = str2;
    module.greeting = str1;
    return module;
  }
};
