/**
 * Created by lenovo on 2015/7/26.
 */
var o ={x:1,y:2};
function test1(){
    delete o.x;
}
function test2(){
    typeof o.x;
}
function test3(){
    delete o.x;
}
console.log(delete o.x);
console.log(test2());
console.log(test3());
console.log(delete  o.y);
alert("访问错误");
    kjk
throw new Error("there have a error");
