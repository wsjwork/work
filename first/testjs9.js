/**
 * Created by lenovo on 2015/7/29.
 */
function httpget(url){
    var xmlHttp = new XMLHttpRequest();

    xmlHttp.open("GET",url,true);

    xmlHttp.onreadystatechange = function(){

        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {

            document.write(xmlHttp.responseText);
        }

    }
    xmlHttp.send(null);
}
var urltest = "http://192.168.0.103:8080/aaaa/LoginServer?username=zhangsan&password=123";

httpget(urltest);
