//切换页面
$('.lottery_btn').click(function(){
    $('.begin_page').css('display','none');
    $('.lottery_draw_page').css('display','block');
});
$('.activity_reg_btn').click(function(){
    $('.hide').css('display','none');
    $('.activity_reg_wrap').css('display','block');
})
$('.activity_prize_btn').click(function(){
    $('.hide').css('display','none');
    $('.activity_prize_wrap').css('display','block');
})
$('.close_btn').click(function(){
    $('.activity_reg_page').css('display','none');
    $('.activity_prize_page').css('display','none');
    $('.hide').css('display','none');    
})

//图片显示数字
var days=234,
    days_str;
var numSkin = function(obj , strBox ,_class){
    $num = $(obj);
    $num.each(numObj);
    function numObj(){
        var numVal = strBox;
        if(numVal.length == 0) return false;
        $(this).find(strBox).remove();
        $(this).find('em').remove();
        var numBox = '';
        //numBox+= "<i class='"+_class+"JS-base-num "+_class+"JS-num-add' alt='add'></i>";
        for(var i=0; i <= numVal.length - 1; i++) {
            var numInfo = numVal[i];
            if(numVal[0] === undefined)  numInfo = numVal.charAt(i);
            switch (numInfo){
                case '0':
                    numBox += "<i class='"+_class+"JS-base-num "+_class+"JS-num-0' alt='0'></i>";
                    break;
                case '1':
                    numBox += "<i class='"+_class+"JS-base-num "+_class+"JS-num-1' alt='1'></i>";
                    break;
                case '2':
                    numBox += "<i class='"+_class+"JS-base-num "+_class+"JS-num-2' alt='2'></i>";
                    break;
                case '3':
                    numBox += "<i class='"+_class+"JS-base-num "+_class+"JS-num-3' alt='3'></i>";
                    break;
                case '4':
                    numBox += "<i class='"+_class+"JS-base-num "+_class+"JS-num-4' alt='4'></i>";
                    break;
                case '5':
                    numBox += "<i class='"+_class+"JS-base-num "+_class+"JS-num-5' alt='5'></i>";
                    break;
                case '6':
                    numBox += "<i class='"+_class+"JS-base-num "+_class+"JS-num-6' alt='6'></i>";
                    break;
                case '7':
                    numBox += "<i class='"+_class+"JS-base-num "+_class+"JS-num-7' alt='7'></i>";
                    break;
                case '8':
                    numBox += "<i class='"+_class+"JS-base-num "+_class+"JS-num-8' alt='8'></i>";
                    break;
                case '9':
                    numBox += "<i class='"+_class+"JS-base-num "+_class+"JS-num-9' alt='9'></i>";
                    break;
            }
        };
        //alert(numBox);
        $(numBox).prependTo(this);
    };
};
days_str=days.toString();
numSkin('.days-JS-num-set',days_str,"days_");

//转盘抽奖
var flag=0;
var prizeBox = '';
$(function(){      
    var plateBtn = $('.plateBtn');
    plateBtn.click(function(){
        //rotateFunc(1,60,'谢谢参与');
        //zhuan();
        if(!flag){
            flag=1;
            var data = [ 1, 2, 3, 4, 5];
            data = data[Math.floor(Math.random()*data.length)];
            switch(data){
                case 1:
                    rotateFunc(1,0,'姬存希蜗牛原液生机精华霜');
                    break;
                case 2:
                    rotateFunc(2,72,'姬存希蜗牛原液蚕丝洁面乳');
                    break;
                case 3:
                    rotateFunc(3,144,'姬存希自然萃取黄瓜凝胶');
                    break;
                case 4:
                    rotateFunc(4,216,'姬存希焕颜尊享美肌体验装');
                    break;
                case 5:
                    rotateFunc(5,288,'谢谢参与');
                    break;
            }
        }else{
            $('.apply_warp').css('display','none');
            $('.csyw_warp').css('display','block');
        }       
    })   
});
var rotateFunc = function (awards, angle) {  //awards:奖项，angle:奖项对应的角度       
    var plateBtn = $('.plateBtn');
    /*plateBtn.css('-webkit-transform-origin','320px 280px');
    plateBtn.css('transform-origin','320px 280px');*/
    plateBtn.stopRotate();
    plateBtn.rotate({
        angle: 0,
        duration: 5000,
        animateTo: angle + 1440,  //angle是图片上各奖项对应的角度，1440是让指针固定旋转4圈
        callback: function () {
            switch (awards) {
                case 1:                        
                    $('.apply_warp').css('display','block');
                    $('.awards').text("姬存希蜗牛原液生机精华霜");
                    prizeBox += "<span class='msg'>恭喜您已抽中<span class='highlight'>价值228元</span>的<span class='prize'>蜗牛原液生机精华霜</span></span>";
                    $('.prize_display').html(prizeBox);
                    break;
                case 2:                         
                    $('.apply_warp').css('display','block');
                    $('.awards').text("姬存希蜗牛原液蚕丝洁面乳");
                    prizeBox += "<span class='msg'>恭喜您已抽中<span class='highlight'>价值88元</span>的<span class='prize'>蜗牛原液蚕丝洁面乳</span></span>";
                    $('.prize_display').html(prizeBox);
                    break;                       
                case 3:                        
                    $('.apply_warp').css('display','block');
                    $('.awards').text("姬存希自然萃取黄瓜凝胶");
                    prizeBox += "<span class='msg'>恭喜您已抽中<span class='highlight'>价值48元</span>的<span class='prize'>自然萃取黄瓜凝胶</span></span>";
                    $('.prize_display').html(prizeBox);
                    break;                       
                case 4:                        
                    $('.apply_warp').css('display','block');
                    $('.awards').text("姬存希焕颜尊享美肌体验装");
                    prizeBox += "<span class='msg'>恭喜您已抽中<span class='highlight'>价值138元</span>的<span class='prize'>焕颜尊享美肌体验装</span></span>";
                    $('.prize_display').html(prizeBox);
                    break;
                case 5:
                    //$('.apply_warp').css('display','none');
                    $('.no_draw_warp').css('display','block');
                    break;
            }
        }
    });
};
//验证数据有效性
var checkRealName=function(){
    var str = $(".name").val();
    var ret = /[\u4E00-\u9FA5]{2,7}/g;
    //var ret=/^[A-Za-z\u4e00-\u9fa5]+$/; 
    if(!ret.test(str)){
        alert('请填写2-6位中文字符');
        //alert("只能输入字母或中文哦");
        $(".name").focus();
    }else{
        return true;
    }
}
var checkMobile=function(){
    var str = $(".tel").val();
    var ret = /^0?1[3|4|5|8][0-9]\d{8}$/;
    if(!ret.test(str)){
        alert('请填写正确的11位手机号码');
        $(".tel").focus();
    }else{
        return true;
    }
}
var checkAddress=function(){
    var str = $(".address").val();
    if(!str){
        alert('请填写您的地址');
        $(".address").focus();
    }else{
        return true;
    }
}
$('.submit_btn').click(function(){
    if(checkRealName()&&checkMobile()&&checkAddress()){
        $('.apply_warp').css('display','none');
        $('.xxcy_warp').css('display','block');
    }
})