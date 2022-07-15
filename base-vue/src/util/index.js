
const setCookie = (name,value,seconds)=>{
    seconds = seconds || 0;
    var expires = "";
    if(seconds != 0){
        var date = new Date();
        date.setTime(date.getTime() + (seconds * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + escape(value) + expires + "; path=/";
}

const getCookie = (c_name)=>{
    if(document.cookie.length > 0){
        let c_start = document.cookie.indexOf(c_name + "=");
        if(c_start > -1){
            c_start = c_start + c_name + 1;
            let c_end = document.cookie.indexOf(";",c_start);
            if( c_end === -1 )c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start,c_end))
        }
        return null;
    }
}

 const clearCookie = (name)=>{
    setCookie(name,"",-1);
}

export default{
    setCookie,
    getCookie,
    clearCookie
}