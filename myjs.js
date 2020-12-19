window.onload=function(){
    if(document.getElementById("fo") != null){
        document.getElementById("fo").onsubmit=function(){
            var yhm = document.getElementById("user01");
            var mm = document.getElementById("password01");

            if(!(/^1\d{10}$/.test(yhm.value))){          
                alert("输入用户名格式错误，请重新输入以1开头的11位数用户名！");
                return false;
            }

            if (mm.value != 12345) {
                alert("密码输入错误，请重新输入！");
                return false;
            }
            return ture;
        }

    }
}

var date = new Date();
var date1=date.getDate();
var month=date.getMonth()+1;
var year = date.getYear()+1900;
document.write("今天是"+year+"年"+month+"月"+date1+"日");



window.onload = function(){
    var btnTop = document.getElementById("btnTop");
    var timer = null;

    window.onscroll = function(){
        var backTop = getScrollTop();
        if(backTop >= 20){ 
            btnTop.style.display = "block";
        }else {
            btnTop.style.display = "none";
        }
    };

    btnTop.onclick = function(){
            var backTop = getScrollTop();
            var speedTop = backTop ;
            setScrollTop(backTop - speedTop);
    };

    var getScrollTop = function(){
        var sTop ;
        if (document.compatMode == "BackCompat")
        {
            sTop = document.body.scrollTop;
        }
        else
        {
            sTop = document.documentElement.scrollTop == 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        }
        return sTop;
    };
    var setScrollTop = function(top){

        if (document.compatMode == "BackCompat")
        {
            document.body.scrollTop = top;
        }
        else
        {
            if(document.documentElement.scrollTop == 0){
                document.body.scrollTop = top;
            }else{
                document.documentElement.scrollTop = top;
            }
        }
    }
};
