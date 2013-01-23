var raf = require('raf'),
    emitter = require('emitter');

var running = false;

var EVT = 'beforedraw';

var AnimLoop = {
    start: function() {
        if(!running){
            running = true;
            runloop();
        }
    },
    stop: function(){
        running = false;
    }
};

emitter(AnimLoop);

module.exports = AnimLoop;

function runloop(){
    if(running){
        AnimLoop.emit(EVT);
        raf(runloop);
    }
}

