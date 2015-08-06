var objXMLHttp;
/**
 * 进行createXMLHttpRequest对象的创建，由于不同的浏览器厂商对于XMLHttpRequest的支持不一样，因此创建的时候需要根据不同的浏览器进行创建
 * */
function createXMLHttpRequest(){
    //对于Firefox,Opera等遵守DOM 2规范的浏览器
    if(window.XMLHttpRequest){
        objXMLHttp = new XMLHttpRequest();
    }
    //对于IE浏览器
    else{
        //将IE浏览器不同的XMLHttp实现声明为数组
        var MSXML = ['MSXML2.XMLHTTP.5.0', 'MSXML2.XMLHTTP.4.0', 'MSXML2.XMLHTTP.3.0', 'MSXML2.XMLHTTP', 'Microsoft.XMLHTTP'];
        //依次对每个XMLHttp创建XMLHttpRequest对象
        for(var i = 0; n< MSXML.length; i++){
            try{
                //微软发布的是ActiveX控件
                objXMLHttp = new ActiveXObject(MSXML[i]);
                //如果正常创建XMLHttpRequest对象就使用break跳出循环
                break;
            }catch(e){
                alert("创建XMLHttpRequest对象失败");
            }
        }
    }
}
/**
 * 通过post方式提交
 * */
function postSend(){
    var value = document.getElementById("content").value;
    alert(value);
    //初始化XMLHttpRequest对象
    createXMLHttpRequest();
    //创建请求的URL
    var url = "http://192.168.0.103:8080/aaaa/AjaxServlet"
    //打开与服务器的连接，使用post方式
    objXMLHttp.open("POST", url, true);
    //post方式需要设置请求消息头
    objXMLHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //设置处理响应的回调函数
    objXMLHttp.onreadystatechange = processResponse;
    //发送请求并设置参数，参数的设置为param=value的形式
    objXMLHttp.send("value="+value);
}
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
/**
 * 设定的回调函数
 * */
function processResponse(){
    //响应完成且响应正常
    if(objXMLHttp.readyState == 1){
        alert("XMLHttpRequest对象开始发送请求");
    }else if(objXMLHttp.readyState == 2){
        alert("XMLHttpRequest对象的请求发送完成");
    }else if(objXMLHttp.readyState == 3){
        alert("XMLHttpRequest对象开始读取服务器的响应");
    }else if(objXMLHttp.readyState == 4){
        alert("XMLHttpRequest对象读取服务器响应结束");
        if(objXMLHttp.status == 200){
            //信息已经成功返回，开始处理信息
            //先捕获下所有的请求头
            var headers = objXMLHttp.getAllResponseHeaders();
            alert("所有的请求头= "+headers);
            //得到服务器返回的信息s
            var infor = objXMLHttp.responseText;
            alert("服务器端的响应 = "+infor);
        }else{
            alert("所请求的服务器端出了问题");
        }
    }
}