/**
 * Created by lenovo on 2015/7/28.
 */
function max(/* ...*/){
    var max = Number.NEGATIVE_INFINITY;
    for (var i = 0 ; i <arguments.length; i++){
        if (arguments[i]>max ){
            max = arguments[i];
        }
    }
    return max;
}
 var largest = max(1,2,3,4,5,6,7,8,9,20);
console.log(largest);