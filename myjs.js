window.onload=function(){
    if(document.getElementById("fo") != null){
        document.getElementById("fo").onsubmit=function(){
            var yhm = document.getElementById("user01");
            var mm = document.getElementById("password01");

            if(!(/^1\d{10}$/.test(yhm.value))){          
                alert("�����û�����ʽ����������������1��ͷ��11λ���û�����");
                return false;
            }

            if (mm.value != 12345) {
                alert("��������������������룡");
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
document.write("������"+year+"��"+month+"��"+date1+"��");



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
