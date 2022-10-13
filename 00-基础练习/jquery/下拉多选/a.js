$(function(){
    var data = "action=getlink&id="+$(".tel").val()
    $.getJSON("cl_sms.php",data,function(json){$("#chk").html(json.message);
    });

    let conditionItem=['A','B','C','D'];
    console.log(conditionItem)
    let inputName='';
    console.log($("span"));

    //隐藏选择列表
    $("#nr").hide();
    //点击输入框，显示选择列表
    $("#search").focus(function(){
        $("#nr").show();
    });
    //输入内容展示选择列表
    $("#search").keyup(function(){
        var search = $("#search").val();
        $("ul li").each(function() {
            var name = $(this).attr("name");
            var cityName = $(this).attr("cityName");
            if (name.indexOf(search) !== -1
                || cityName.indexOf(search) !== -1) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    });
    //鼠标放在选择框的选择属性上变颜色
    $("ul li").mouseover(function(){
        $(this).css({
            "color":"red",
            "background-color":"#98bf21"
        });
    });
    //鼠标一处选择框的选择属性换为原则框颜色
    $("ul li").mouseout(function(){
        $(this).css({
            "color":"",
            "background-color":""
        });
    });
    //点击选择框中的属性，赋值给text input
    $("ul li").click(function(){
        if(inputName !==''){
            inputName +=';';
        }
        inputName +=$(this).text();
        console.log(inputName)
        $("#search").val(inputName);

        $("#nr").hide();
    });
});