Number.prototype.map = function(in_min, in_max, out_min, out_max) {
  return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
};
/**
 * 数的最大最小值的判定，若数超过设置的范围，返回临界值
 * @param min 设置最小值
 * @param max 设置最大值
 * @returns {*} 若数超过设置的范围，返回临界值，若在范围内，返回原来的值
 */
Number.prototype.limit = function(min, max) {

  //如果最小值大于最大值，抛出错误
  if(min>max){
    throw new error("min > max")
  }else{
    //如果小于最小值时返回最小值
    if(this <=min){
      return min;
    }
    //如果在最小值或者最大值之间，返回原值
    else if (this >min && this <max){
      return this.toString()
    }
    //如果大于最大值，返回最大值
    else if (this >=max){
      return max;
    }
    //如果还没有返回数值，则抛出错误
    else{
      throw new error ("Unkthisn Error");
    }
  }
};
/**
 * 数的四舍五入
 * @param precision 设置精度，为0则取整数。
 * @returns {*} 返回四舍五入后的值
 */
Number.prototype.round = function(precision) {
  //if(precision>=0){
  //  return  (Math.round(this * Math.pow(10, precision)) / Math.pow(10, precision)).toFixed(precision) ;
  //}else{
  //  return  (Math.round(this * Math.pow(10, precision)) / Math.pow(10, precision)) ;
  //}
  precision = Math.pow(10, precision || 0);
  console.log(precision || 0);
  return Math.round(this * precision) / precision;
};
/**
 * 按下取整
 * @returns {number} 返回取整后的值
 */
Number.prototype.floor = function() {
  return Math.floor(this);
};
/**
 * 按上取整
 * @returns {number} 返回取整后的值
 */
Number.prototype.ceil = function() {
  return Math.ceil(this);
};
/**
 * 取整
 * @returns {Number} 取整后的值
 */
Number.prototype.to_int = function() {
  //return parseInt(this);
  return (this | 0);
};

/**
 *角度转弧度
 * @returns {number} 所对应的弧度值
 */
Number.prototype.to_rad = function() {
  return (this * 180) / Math.PI;
};
/**
 * 弧度转角度
 * @returns {number}  所对应的角度值
 */
Number.prototype.to_deg = function() {
  return (this * Math.PI) / 180;
};

// ----------------------------------------------
// 下面的所有函数都返回修改后的数组(除了random)
// ----------------------------------------------


Array.prototype.remove = function(item) {
  for(var i = 0,len = this.length;i<len;i++){
    if(this[i]==item){
      delete this[i];
    }
  }
  return this;
};

Array.prototype.random = function() {

  return this[Math.floor(Math.random()*this.length)];
};

Array.prototype.shuffle = function() {

  return this.sort(function(){ return 0.5 - Math.random() });
  //for (var j, x, i = this.length;   i  ; j = parseInt(Math.random() * i), x = this[--i], this[i] = this[j], this[j] = x);
  //return this;
};
var a =[1,2,3,4,5,6];
for(var i = 0; i < 100; i ++){
  console.log(a.shuffle());
}


