/**
 * Created by lenovo on 2015/7/29.
 */
var userName;
var passWord;
var xmlHttpRequest;
//XmlHttpRequest����
function createXmlHttpRequest() {
    if (window.ActiveXObject) { //�����IE�����
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) { //��IE�����
        return new XMLHttpRequest();
    }
    function onLogin() {
        var url = "http://localhost:8080/aaaa/LoginServer?username=zhangsan&password=123";
        //1.����XMLHttpRequest�齨
        xmlHttpRequest = createXmlHttpRequest();

        //2.���ûص�����
        xmlHttpRequest.onreadystatechange = zswFun();

        //3.��ʼ��XMLHttpRequest�齨
        xmlHttpRequest.open("POST", url, true);

        //4.��������
        xmlHttpRequest.send(null);
    }

    //�ص�����
    function zswFun() {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var b = xmlHttpRequest.responseText;
            console.log(" fan hui " + b);
            return b;

        }
    }
}
createXmlHttpRequest();




