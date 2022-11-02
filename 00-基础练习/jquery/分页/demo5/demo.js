window.onload = function pager() {

    //模拟数据
    let obj = {
        other: {},
        value: [11, 22, 33, 44, 55, 66, 77, 88, 99, 0, 11, 22, 33, 44, 55, 66, 77, 100, 88, 99, 0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 0, 11, 22, 33, 44, 55, 66, 77, 88, 99, 0]
        // value: [12, 3, 4, 5, 6, 7, 8, 9, 10, 11, 2, 3, 4, 5, 6, 7]
    };

    //ajax请求的数据
    let data = obj.value;
    // 　　几个必填的容器class，和几个可以修改的默认数据参数
    let pager = {
        paginationBox: 'pagination-nick',//分页容器--必填
        mainBox: 'main-box-nick',//内容盒子--必填
        numBtnBox: 'num-box-nick',//数字按钮盒子-- 必填
        btnBox: 'btn-box-nick',//按钮盒子 --必填
        ipt: 'page-ipt-nick',//input class-- 必填
        goBtn: 'go-btn-nick',//go btn class --必填
        currentBtn: 'active-nick',//当前按钮class name --必填
        nick: 'nick', //< > 按钮
        pageSize: 5,//每页显示几条数据
        numBtnCount: 3,//当前页左右两边各多少个数字按钮
        currentPage: 1,//当前页码data-page，首屏默认值
        pageMaxCount: 0,//ajax请求数据分成的最大页码
        firstIndex: 0, //起始索引位置
        lastIndex: 0, //末尾索引位置
        dataMaxCount: 0, //数据总条数

        //
    };
    //设置总索引数
    pager.dataMaxCount = data.length;
    //设置总页数
    pager.pageMaxCount = (pager.dataMaxCount % pager.pageSize) === 0 ? pager.dataMaxCount / pager.pageSize : Math.trunc(pager.dataMaxCount / pager.pageSize) + 1;
    pager = setPager(pager);
    createNumBtn(pager);
    return pager;
}

//填充pager的属性
function setPager(pager) {
    //起始索引位置
    pager.firstIndex = (pager.currentPage - 1) * pager.pageSize;
    //末尾索引位置
    pager.lastIndex = pager.currentPage * pager.pageSize <= pager.dataMaxCount ? pager.pageSize * pager.currentPage - 1 : pager.dataMaxCount - 1;
    return pager;
}

// 创建数字按钮
function createNumBtn(pager) {

    // 将数字按钮区分成当前页左右2边分析，需要注意的地方都加注释了
    let str = '';
    let pageMaxCount = pager.pageMaxCount;//总页数
    let currentPage = pager.currentPage; //当前页数
    let numBtnCount = pager.numBtnCount;//数字按钮数
    //css修饰
    let currentBtn = pager.currentBtn;//当前按钮
    let numBtnBox = pager.numBtnBox;//数字按钮盒子
    let btnBox = pager.btnBox;//按钮盒子
    if (pageMaxCount > numBtnCount * 2) {//若最大页码数大于等于固定数字按钮总数（pager.numBtnCount*2+1）时
        //此页左边右边各numBtnCount个数字按钮
        str = str += "<button data-page='first' >首页</button>";
        str += "<button data-page='prev'   >上一页</button>";
        for (let i = 1; i <= numBtnCount * 2; i++) {
            str += '<button data-page="' + i + '">' + i + '</button>';
        }

        //添加跳转
        str += "<button data-page='next'  >下一页</button>";
        str += "<button data-page='last'  >尾页</button>";

    } else {

        //添加跳转并设置跳转按钮失效
        str = "<button data-page=" + currentPage + "  class=" + currentBtn + " disabled='disabled'><</button>";
        for (let i = 1; i <= pageMaxCount; i++) {
            str += '<button data-page="' + i + '">' + i + '</button>';
        }
        //添加跳转并设置跳转按钮失效
        str += "<button data-page=" + currentPage + " class=" + currentBtn + " disabled='disabled'>></button>";

    }

    str += '<button id="go-btn-nick" data-page="go-btn-nick">跳转</button>' + '<input id="page-ipt-nick" type="text" name="page-ipt-nick" style="width: 20px">页'
    $('.' + numBtnBox).html(str);

    //每个btn绑定请求数据页面跳转方法
    $('.' + numBtnBox + ' button').each(function (i, v) {
        $(this).css("margin-right", '3px');

        $(this).click(function () {
            goPage(v.getAttribute('data-page'), pager);
        });
    });

    //按钮禁用
    // $('.' + btnBox + ' button').not('.' + currentBtn).attr('disabled', false);
    // if (currentPage === 1) {//首页时
    //     $('.' + btnBox + ' .first-btn').attr('disabled', true);
    //     $('.' + btnBox + ' .prev-btn').attr('disabled', 'disabled');
    // }
    // if (currentPage === pageMaxCount - 1) {//尾页时
    //     $('.' + btnBox + ' .last-btn').attr('disabled', true);
    //     $('.' + btnBox + ' .next-btn').attr('disabled', true);
    // }

}

//跳转页
function goPage(btn, pager) {
    let buts = $('.' + pager.numBtnBox + ' button');
    let index = -1;
    //设置当前页码
    if (!isNaN(btn)) {//数字按钮
        $("button[data-page = " + pager.currentPage + "]").removeClass(pager.currentBtn);
        pager.currentPage = parseInt(btn);
        $("button[data-page = " + pager.currentPage + "]").addClass(pager.currentBtn);

    } else {
        switch (btn) {
            //返回首页
            case 'first':
                buts.each(function (i, v) {
                    if (!isNaN(btn)) {
                        console.log('--------')
                        index++;
                        $(this).text(index);
                        $(this).setAttribute('data-page', index.toString());
                    }
                });
                $("button[data-page = " + pager.currentPage + "]").removeClass(pager.currentBtn);
                pager.currentPage = 1;
                $("button[data-page = " + pager.currentPage + "]").addClass(pager.currentBtn);
                console.log(pager.currentPage)
                break;
            //上一页
            case 'prev':
                if (pager.currentPage > 1 && pager.currentPage <= pager.numBtnCount * 2) {

                    //如果当前页数小于数字按钮数量，
                    $("button[data-page = " + pager.currentPage + "]").removeClass(pager.currentBtn);
                    pager.currentPage = pager.currentPage - 1;
                    $("button[data-page = " + pager.currentPage + "]").addClass(pager.currentBtn);

                } else if (pager.currentPage > pager.numBtnCount * 2 && pager.currentPage < pager.pageMaxCount - pager.pageMaxCount *2) {
                    $("button[data-page = " + pager.currentPage + "]").removeClass(pager.currentBtn);
                    pager.currentPage--;
                    buts.each(function (i, v) {

                        if (!isNaN(btn)) {
                            index++;
                            $(this).text(pager.currentPage + index);
                            $(this).setAttribute('data-page', pager.currentPage + index);
                        }
                    });
                    $("button[data-page = " + pager.currentPage + "]").addClass(pager.currentBtn);
                }
                break;
                //下一页
            case 'next':
                if(pager.currentPage > 0 && pager.currentPage < pager.numBtnCount * 2){

                    $("button[data-page = " + pager.currentPage + "]").removeClass(pager.currentBtn);
                    pager.currentPage = pager.currentPage + 1;
                    $("button[data-page = " + pager.currentPage + "]").addClass(pager.currentBtn);

                }else if (pager.currentPage >= pager.numBtnCount * 2 && pager.currentPage < pager.pageMaxCount ) {

                    pager.currentPage++;
                    buts.each(function (i, v) {
                        if (!isNaN(btn)) {
                            index++;
                            $(this).text(pager.currentPage - pager.numBtnCount*2 +1 +index);
                            $(this).setAttribute('data-page', pager.numBtnCount*2 +1+ index.toString());
                        }
                    });


                }
                // else if(pager.currentPage >= pager.pageMaxCount - pager.pageMaxCount *2 &&pager.currentPage <pager.pageMaxCount){
                //
                // }
                break;
            case 'last':
                pager.currentPage = pager.pageMaxCount;
                break;
            case 'go-btn-nick':

                let page = parseInt($("#page-ipt-nick").val());
                if (page >= 1 && page <= pager.pageMaxCount) {
                    pager.currentPage = page;
                } else {
                    window.alert('不合理的跳转页数')
                }

                break;
        }
    }

    //跳转页
    // function changePageBut() {
    //     let index = -1;
    //     $('.' + pager.numBtnBox + ' button').each(function (i, v) {
    //         index++;
    //         if (!isNaN(btn)) {
    //             // class=" + currentBtn + "
    //
    //             $(this).text(pager.currentPage + index);
    //             $(this).setAttribute('data-page', pager.currentPage + index);
    //         }
    //     });
    // }

}
