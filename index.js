var page = require('webpage').create();
var system = require('system');
var args = system.args;
page.open(args[1], function(status){
    console.log("Status: "+ status);
    if(status === "success"){
        page.render('example.png')
    }
    phantom.exit();
});