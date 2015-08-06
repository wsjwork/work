/**
 * Created by lenovo on 2015/7/26.
 */
var a = [1,2,3];
delete a[2];
function exist(){
    return 2 in a;
}
console.log(exist());
console.log(a[1]);
console.log(a.length);
console.log(a[2]);