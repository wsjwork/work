/**
 * Created by lenovo on 2015/7/26.
 */
function classof(o){
    if (o === null){

    }
    if (o === undefined){

    }
    return Object.prototype.toString.call(o).slice(8,-1);
}
var test = "1";
console.log(classof(test));



