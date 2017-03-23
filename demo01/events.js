
var ev = require("events");
var event = new ev.EventEmitter();

//监听器1
let listener1 = function listener1() { console.log('监听器1 lostener1 执行') }

//监听器2
let listener2 = function listener2(){ console.log('监听器2 listener2 执行') }

//绑定 connection 事件， 处理函数为listener1  这个是绑定到最后的
event.on('con', listener1);

//绑定con 事件 处理函数是  listener2
event.on('con',listener2);

//有几个监听器
let listevent = ev.EventEmitter.listenerCount(event,'con');
console.log(listevent+"个监听器监听连接事件。");

//处理con 事件
event.emit('con');

//移除绑定的listenet1 函数
event.removeListener('con',listener1);
console.log('listener1 不再受监听');

//触发链接事件
event.emit('con');
listevent = ev.EventEmitter.listenerCount(event,'con');
console.log(listevent+"个监听器监听连接事件。");
console.log('程序执行完毕！')
// // 监听事件
//    listener1执行
//    listener2执行
//    listener1不再受监听
//    listener2 执行
//    监听事件
//    执行完毕