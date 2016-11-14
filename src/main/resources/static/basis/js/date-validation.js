/**
 * Created by Xue on 11/13/16.
 */
function isValidDate(d){
    var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/;
    var result = d.match(reg);
    if(result == null){return false};
    var dt = new Date(result[1],result[3]-1,result[4]);
    if(Number(dt.getFullYear())!=Number(result[1])){return false;}
    if(Number(dt.getMonth())+1!=Number(result[3])){return false;}
    if(Number(dt.getDate())!=Number(result[4])){return false;}
    return true;
}