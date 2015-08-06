/**
 * Created by Administrator on 2015/8/2 0002.
 */
//do{
//    var name = prompt("What is your name?");
//    var correct = confirm("You entered'" + name + "'.\n"+"Click")
//}while(!correct){
//    alert("Hello,"+name);
//    var test = prompt("please enter");
//    var test1 = confirm("етЪЧ"+"ddd");
//
//}

document.getElementById("testbtn").onclick = function(){
    var openurl = window.open();
    openurl.location = "http://192.168.0.108:8080/test/images/test.jpg";
    openurl.alert("welcome!");

}
