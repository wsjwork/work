/**
 * Created by lenovo on 2015/7/29.
 */
var objXMLHttp = new XMLHttpRequest();
/**
 * ͨ��GET����
 * */
function getSend(){
    var value = document.getElementById("content").value;
    //alert(value);
    //��ʼ��XMLHttpRequest����
    createXMLHttpRequest();
    alert("�����ɹ�");
    //���������URL,get��ʽ����urlƴ�Ӳ���
    var url = "http://192.168.0.103:8080/aaaa/AjaxServlet?value="+value;
    objXMLHttp.open("GET", url, true);
    //���ô�����Ӧ�Ļص�����
    objXMLHttp.onreadystatechange = processResponse;
    objXMLHttp.send(null);
}
