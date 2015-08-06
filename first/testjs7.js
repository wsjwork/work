/**
 * Created by lenovo on 2015/7/29.
 */
//function gettext(url,callback){
//    var request = new XMLHttpRequest();
//    request.open("GET",url);
//    request.onreadystatechange = function(){
//        if (request.readyState === 4 && request.status === 200){
//            var type = request.getResponseHeader("Content - Yype");
//            if (type.match(/^text/)){
//                callback(request.responseText);
//            }
//        }
//    };
//    request.send(null);
//}
    function getTextSync(url){
    var request = new XMLHttpRequest();
    request.open("GET",url,true);
    request.send(null);
    if (request.readyState === 4 && request.status === 200) {


        console.log(request.getResponseHeader());
        return request.responseText;
    }else{
        alert("连接失败");
    }
}
var urltest = "http://localhost:8080/aaaa/LoginServer?username=zhangsan&password=123";
getTextSync(urltest);