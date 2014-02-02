/**
 * Created with JetBrains WebStorm.
 * User: taka
 * Date: 2014/02/02
 * Time: 13:13
 * To change this template use File | Settings | File Templates.
 */

var helper = {};

/** 数字を２桁にそろえます
 * 余裕あったら引数に桁数もらって、それを埋める関数にしてもいいかも。
 * 引数 * 0の数 で
 * @param num
 * @returns {string}
 */
helper.adjustDigit = function(num , digit){
    if(digit == undefined){
        digit = 2;
    }
    var prefix = '';
    //digit分頭に0を付与
    for(var i = 0; i < digit; i++){
        prefix += '0';
    }
    return (prefix + num).slice(-digit);

};

/** 現在の時刻を作成します
 *
 *
 * @returns {string} : yyyy-mm-dd hh:mi:ss
 */
helper.makeNowDateTime = function(){
    var DateObj = new Date();

    var yy = DateObj.getFullYear(),
        mm = DateObj.getMonth() + 1,
        dd = DateObj.getDate(),
        hh = DateObj.getHours(),
        mi = DateObj.getMinutes(),
        ss = DateObj.getSeconds();

    //一桁なら0をつける
    mm = helper.adjustDigit(mm);
    dd = helper.adjustDigit(dd);
    hh = helper.adjustDigit(hh);
    mi = helper.adjustDigit(mi);
    ss = helper.adjustDigit(ss);

    return yy + '-' + mm + '-' + dd + ' ' + hh + ':' + mi + ':' + ss;

};


module.exports = helper;