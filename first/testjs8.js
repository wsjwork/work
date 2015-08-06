/**
 * Created by lenovo on 2015/7/29.
 */
var userName;
var passWord;
var xmlHttpRequest;
//XmlHttpRequest对象
function createXmlHttpRequest() {
    if (window.ActiveXObject) { //如果是IE浏览器
        return new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) { //非IE浏览器
        return new XMLHttpRequest();
    }
    function onLogin() {
        var url = "http://localhost:8080/aaaa/LoginServer?username=zhangsan&password=123";
        //1.创建XMLHttpRequest组建
        xmlHttpRequest = createXmlHttpRequest();

        //2.设置回调函数
        xmlHttpRequest.onreadystatechange = zswFun();

        //3.初始化XMLHttpRequest组建
        xmlHttpRequest.open("POST", url, true);

        //4.发送请求
        xmlHttpRequest.send(null);
    }

    //回调函数
    function zswFun() {
        if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
            var b = xmlHttpRequest.responseText;
            console.log(" fan hui " + b);
            return b;

        }
    }
}
createXmlHttpRequest();




