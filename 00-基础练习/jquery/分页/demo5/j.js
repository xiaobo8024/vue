$(function () {
    //模拟数据
    let obj = {
        other: {},
        value: [11, 22, 33, 44, 55, 66, 77, 88, 99, 0, 11, 22, 33, 44, 55,11, 22, 33, 44, 55, 66, 77, 88, 99, 0, 11, 22, 33, 44, 55,11, 22, 33, 44, 55, 66, 77, 88, 99, 0, 11, 22, 33, 44, 55,11, 22, 33, 44, 55, 66, 77, 88, 99, 0, 11, 22, 33, 44, 55,11, 22, 33, 44, 55, 66, 77, 88, 99, 0, 11, 22, 33, 44, 55,11, 22, 33, 44, 55, 66, 77, 88, 99, 0, 11, 22, 33, 44, 55, 66, 77, 100, 88, 99, 0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 0]
       // value: [12, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6, 7]
    };
 // let  values= [12, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6, 7];
  //  $(".main-box-nick").html('<h>你好啊</h>');
    CreateNewTabel()

    let pager1 = pager(obj.value);
    console.log(pager1)
})


function CreateNewTabel() {
    // let tableStr='<table id="inspector-table"  style="height: auto"; border="1px">' +
    //     '<thead><tr class="active">' +
    //     '<th width="14%">#</th>' +
    //     '<th width="14%">实例名</th>' +
    //     '<th width="14%">状态</th>' +
    //     '<th width="14%">实例总数</th>' +
    //     '<th width="14%">节点ID</th>' +
    //     '<th width="14%">节点IP</th>' +
    //     '<th width="14%">消费进度</th>' +
    //     '</tr>' +
    //     '</thead>' +
    //     '</table>';
    // // $(".main-box-nick").html(tableStr)
    // $(".main-box-nick").append(tableStr)
}

