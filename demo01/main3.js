var events = require('events');

var Event = new events.EventEmitter();

  Event.on('jianting',function(age1,age2){
        console.log('jianting _1:',age1,age2);
  })
  Event.on('jianting',function(age3,age4){
        console.log('jianting _2:',age4,age3);
  })

     Event.emit('jianting','参数异','参数二');

