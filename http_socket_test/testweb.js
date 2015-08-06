/**
 * Created by lenovo on 2015/7/28.
 */

// 创建Web Socket对象
var webSocket = new WebSocket("ws://127.0.0.1:4567");
// 当WebSocket建立网络连接时激发该函数
webSocket.onopen= function()
{
    alert("已打开连接");
    // 发送消息
    webSocket.send("JS客户端");
}
// 为onmessage事件绑定监听器，接收消息
webSocket.onmessage= function(event)
{
    // 接收消息
    alert("收到的消息是：" + event.data);
}