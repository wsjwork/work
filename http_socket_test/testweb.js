/**
 * Created by lenovo on 2015/7/28.
 */

// ����Web Socket����
var webSocket = new WebSocket("ws://127.0.0.1:4567");
// ��WebSocket������������ʱ�����ú���
webSocket.onopen= function()
{
    alert("�Ѵ�����");
    // ������Ϣ
    webSocket.send("JS�ͻ���");
}
// Ϊonmessage�¼��󶨼�������������Ϣ
webSocket.onmessage= function(event)
{
    // ������Ϣ
    alert("�յ�����Ϣ�ǣ�" + event.data);
}