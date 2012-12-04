var session = {
  'whoami': 'C'
};

var scores = {
};

var commandList = {
  'iam': function (args) {
    var result = {};
    session.whoami = args[0];
    result.text = 'Welcome, ' + session.whoami;
    if (!scores[args[0]]) scores[args[0]] = 0;
    result.points = 0;
    return result;
  },
  'default': function (args) {
    var result = {};
    result.text = '"0" is not a recognized command.'.replace('0', args);
    result.points = -1;
    return result;
  }
};

var ConsoleParse = function (command) {
  var elementArray = command.split(' ');
  var id = elementArray.shift();
  var activeFunc = commandList[id] ? commandList[id] : function() {return commandList['default'](id);};
  result = activeFunc(elementArray);
  scores[session.whoami] += result.points;
  return result.text;
}