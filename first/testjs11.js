/**
 * Created by lenovo on 2015/7/29.
 */
var objXMLHttp = new XMLHttpRequest();
/**
 * 通过GET请求
 * */
function getSend(){
    var value = document.getElementById("content").value;
    //alert(value);
    //初始化XMLHttpRequest对象
    createXMLHttpRequest();
    alert("创建成功");
    //创建请求的URL,get方式采用url拼接参数
    var url = "http://192.168.0.103:8080/aaaa/AjaxServlet?value="+value;
    objXMLHttp.open("GET", url, true);
    //设置处理响应的回调函数
    objXMLHttp.onreadystatechange = processResponse;
    objXMLHttp.send(null);
}
