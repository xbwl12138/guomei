

window.onload = function(){
    inputKeyWord(); //form输入框搜索关键字
    topActivity();  //头部活动
    inputFocus();   //输入框获得焦点
    cookieSkip();   //头部的cookie登录
    inputLeft();    //input框左边的
    // ----以上是首页头部的函数----

    createSerise();  //创建商品系列
    createShoppingNav(); //创建导航条

    new NbeiJing({
        imgs:"shoppingImg/shopping_1.webp",
        width:450,
        height:450,
        mirrorWidth:120,
        mirrorHeight:140,
        mirrorBG:"shoppingImg/wang.png"
    },$name("#jingBoxId"),4);
}

// 创建商品系列
function createSerise(){
    let aDoms = [];
    let ulDom = document.createElement("ul");
    ulDom.style.cssText = `
        width:1200px;
        height:40px;`;
    $(".series_box")[0].appendChild(ulDom);
    for(let i=0;i<8;i++){
        let liDom = document.createElement("li");
        liDom.style.cssText =  `
            float:left;
            padding:0 10px;
            text-align:center;
            // background:red;
            height:40px;`;
        liDom.onmouseover = function(){
            this.style.background = "#000";
        }
        liDom.onmouseout = function(){
            this.style.background = "";
        }
        ulDom.appendChild(liDom);
        let aDom = document.createElement("a");
        aDom.href = "#";
        aDom.style.cssText = `
            display:inline-block;
            floatLleft;
            width:72px;
            height:40px;
            font:16px/40px "microsoft yahei";
            color:#fff; 
            `;
        liDom.appendChild(aDom);
        aDoms.push(aDom);
    }
    aDoms[0].style.cssText = `
        display:inline-block;
        floatLleft;
        width:40px;
        height:40px;
        font:16px/40px "microsoft yahei";
        color:#fff; `;
    aDoms[0].innerHTML = "首页";
    aDoms[1].innerHTML = "Meta系列";
    aDoms[2].innerHTML = "P系列";
    aDoms[3].innerHTML = "nova系列";
    aDoms[4].innerHTML = "畅想系类";
    aDoms[5].style.cssText = `
        display:inline-block;
        floatLleft;
        width:87px;
        height:40px;
        font:16px/40px "microsoft yahei";
        color:#fff; `;
    aDoms[5].innerHTML = "平板/笔记本";
    aDoms[6].innerHTML = "智能手表";
    aDoms[7].innerHTML = "智能手环";
}

// 创建导航条
function createShoppingNav(){
    let aDoms = [];
    for(let i=0;i<3;i++){
        let aDom = document.createElement("a");
        aDom.href = "#";
        aDom.style.cssText = `
            display:inline-block;
            padding:0 10px;
            height:42px;
            font-size: 12px;
            color: #5e5e5e;
            overflow:hidden;`;
        aDoms.push(aDom);
        $(".shoppingNav_box")[0].appendChild(aDom);
        if(i>=2){
            continue;   
        }
        let sapnDom = document.createElement("span");
        sapnDom.style.cssText = `
            display:inline-block;
            width: 7px;
            height: 11px;
            margin: 0 2px 14px;
            background:url(shoppingImg/bg-sprite.png) no-repeat;
            background-position:0 0;
            `;
        $(".shoppingNav_box")[0].appendChild(sapnDom);
    }
    aDoms[0].innerHTML = "手机";
    aDoms[1].innerHTML = "手机通讯";
    aDoms[2].innerHTML = "华为手机P30 Pro (VOG-AL00) 8GB+128GB 超大广角 超感光徕卡四摄10倍混合变焦 移动联通电信 天空之境";
    aDoms[aDoms.length-1].style.cssText = `
        display:inline-block;
        padding:0 10px;
        width:100px;
        height:42px;
        font-size: 12px;
        color: #5e5e5e;
        white-space:nowrap;
        overflow:hidden;
        text-overflow:ellipsis;`;

    // 右边的(不创建了)
    // let rightDiv = document.createElement("div");
    // rightDiv.style.cssText = `
    //     width:`;
}

// 创建放大镜的ul


