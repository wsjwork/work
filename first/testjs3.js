/**
 * Created by lenovo on 2015/7/27.
 */
function inherit(p){
    if (p == null) throw typeerror();
    if (Object.create){
        return Object.create(p);
    }
    var t = typeof p;
    if (t!=="object"&& t !="function")throw typeerror();
    function f(){};
    f.prototype = p;
    return new f();
}