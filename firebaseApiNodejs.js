var PythonShell = require('python-shell');
var cron = require('node-cron');


function pythonCall() {
var pyshell = new PythonShell.run('./firebaseApiCall.py');

// get message back
pyshell.on('message', function (message) {
  // received a message sent from the Python script (a simple "print" statement) 
  //console.log("on line 8");
  console.log(message);
});

// end the input stream and allow the process to exit 
pyshell.end(function (err) {
	//console.log('on line 14');  
  console.log('end');
  if (err) throw err;
  //console.log('on line 18');
  console.log('exit');
});
};
cron.schedule('* * * * *', function(){
  console.log('running a python function every hour');
  pythonCall();
});
