var $new = function(name) {
  return document.createElement(name);
};

var load_asset_image = function(src,callback,errorCallback) {
  var img = new Image();
  img.onload  = function() {
    callback(img);
  };
  img.onerror = errorCallback;
  img.src = src;
};

var audio_mime_types = { mp3: "audio/mpeg", 
                         ogg: "audio/ogg; codecs=\"vorbis\"",
                         m4a: "audio/m4a",
                         wav: "audio/wav" };

var load_asset_audio = function(src,callback,errorCallback) {

  var snd = new Audio();


  return snd;
};

var load_asset_other = function(src,callback,errorCallback) {
  //  创建XMLHttpRequest
  var request = new XMLHttpRequest();
      //split()是以""里的字符分割字符串
  var fileParts = src.split(".");
      //toLowerCase()表示全部变为小写
      fileExt = fileParts[fileParts.length-1].toLowerCase();
  //  设置回调函数
  request.onreadystatechange = function() {
    if(request.readyState === 4) {
      if(request.status === 200) {
        if(fileExt === 'json') {
          callback("GET",JSON.parse(request.responseText));
        } else {
          callback("GET",request.responseText);
        }
      } else {
        errorCallback();
      }
    }
  };
  //  初始化XMLHttpRequest组建
  request.open("GET", src, true);
  //  发送请求
  request.send(null);
  return request;
};
var load_asset_other_post = function(src,callback,errorCallback) {
  //  创建XMLHttpRequest
  var request = new XMLHttpRequest();
  //split()是以""里的字符分割字符串
  var fileParts = src.split(".");
  //toLowerCase()表示全部变为小写
  fileExt = fileParts[fileParts.length-1].toLowerCase();
  //  设置回调函数
  request.onreadystatechange = function() {
    if(request.readyState === 4) {
      if(request.status === 200) {
        if(fileExt === 'json') {
          callback("POST",JSON.parse(request.responseText));
        } else {
          callback("POST",request.responseText);
        }
      } else {
        errorCallback();
      }
    }
  };
  //  初始化XMLHttpRequest组建
  request.open("POST", src, true);
  //  POST要定义编码方式
  request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  //  发送请求
  request.send("username=zhangsan&password=123");


  return request;
};
var callback = function(way,response){
  document.write("使用"+way+"方式访问,"+"服务器返回： "+response);
}
var errorCallback =function(){
  alert("出错！");
}


var urlget = "http://192.168.0.108:8080/WebServerTest/WsjServer?username=zhangsan&password=123";
var urlpost = "http://192.168.0.108:8080/WebServerTest/WsjServer";



//load_asset_other(urlget,callback,errorCallback);
load_asset_other_post(urlpost,callback,errorCallback);





