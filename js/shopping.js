

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
        width:448,
        height:448,
        mirrorWidth:120,
        mirrorHeight:140,
        mirrorBG:"shoppingImg/wang.png"
    },$name("#jingBoxId"),4);

    createRight();
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


// 创建右边的详情
function createRight(){
    let topDivDom = document.createElement("div");
    topDivDom.style.cssText =`
        width:610px;
        background:skyblue;
        position:relative;
        margin:4px 0;
        height:100px;`;
    $(".jing_box_right")[0].appendChild(topDivDom);
    // 创建h2
    let h3Dom = document.createElement("h2");
    h3Dom.style.cssText = `
        display:block;
        width:610px;
        font-size: 16px;
        line-height: 26px;
        color: #5e5e5e;
        font-weight: 600;`;
    h3Dom.innerHTML = "华为手机P30 Pro (VOG-AL00) 8GB+128GB 超大广角 超感光徕卡四摄10倍混合变焦 移动联通电信 天空之境";
    topDivDom.appendChild(h3Dom);
    // 创建p
    let h4Dom = document.createElement("h4");
    h4Dom.style.cssText = `
        width:610px;
        font-size: 12px;
        line-height: 20px;
        color: #e3101e;
        overflow: hidden;`;
    h4Dom.innerHTML = "麒麟980芯片，6.47英寸OLED曲面屏，4000万徕卡四摄，10倍混合变焦，屏内指纹，更多华为旗舰【套购0元得配件】";
    topDivDom.appendChild(h4Dom);
    // 创建点击参与
    let aH4Dom = document.createElement("a");
    aH4Dom.style.cssText = `
        font-size: 12px;
        line-height: 20px;
        color: blue;`;
    aH4Dom.href = "#";
    aH4Dom.innerHTML = "点击参与";
    h4Dom.appendChild(aH4Dom);
    // 创建右边的盒子
    let topDivRightDom = document.createElement("span");
    topDivRightDom.style.cssText = `
        width:45px;
        height:24px;
        float:right;
        border:1px solid #ccc;
        position:absolute;
        text-align:center;
        font:12px/12px arial,Microsoft YaHei;
        right:-100px;
        font:#5e5e5e;
        line-height:26px;
        cursor:pointer;
        top:10px;
        display:block;`;
    topDivRightDom.innerHTML = "对比";
    topDivDom.appendChild(topDivRightDom);

    // 创建818活动条
    let huoDongDom = document.createElement("div");
    huoDongDom.style.cssText = `
        width:720px;
        height:38px;`;
    $(".jing_box_right")[0].appendChild(huoDongDom);
    // 创建a
    let aImgDom = document.createElement("a");
    aImgDom.style.cssText = `
        width:720px;
        height:38px;`;
    huoDongDom.appendChild(aImgDom);
    let imgDom = document.createElement("img");
    imgDom.style.cssText = `
        width:720px;
        float:left;
        height:38px;`;
    imgDom.src = "shoppingImg/818.webp";
    aImgDom.appendChild(imgDom);

    // 创建价格盒子
    let priceBoxDom = document.createElement("div");
    priceBoxDom.style.cssText = `
        width:690px;
        height:80px;
        padding:20px 10px 0 20px;
        background:#f6f6f6;
        color: #5e5e5e;
        font: 12px/12px arial,Microsoft YaHei;`;
    $(".jing_box_right")[0].appendChild(priceBoxDom);
    // 创建价格盒子
    let priceLeftDom = document.createElement("div");
    priceLeftDom.style.cssText = `
        width:690px;
        height:52px;
        background:yellow;
        line-height:52px;`;
    priceBoxDom.appendChild(priceLeftDom);
    // 创建价格
    let priceDom = document.createElement("div");
    priceDom.style.cssText = `
        width:300px;
        height:52px;`;
    priceDom.innerHTML = "国美价";
    priceLeftDom.appendChild(priceDom);
    let span1 = document.createElement("span");
    span1.style.cssText = `
        font:16px;
        margin-left:12px;
        font-weight:900;
        color:#e3101e;`;
    span1.innerHTML = "￥";
    priceDom.appendChild(span1);
    let span2 = document.createElement("span");
    span2.style.cssText = `
        // display: block;
        font-family: Arial;
        font-size: 24px;
        color: #e3101e;
        font-weight: 700;
        margin-right: 10px`;
    span2.innerHTML = "2899.00";
    priceDom.appendChild(span2);
    // 创建a
    let aJiangJiaDom = document.createElement("a");
    aJiangJiaDom.innerHTML = "降价通知";
    aJiangJiaDom.href = "#";
    aJiangJiaDom.style.color = "blue";
    priceDom.appendChild(aJiangJiaDom);
    aJiangJiaDom.onmouseover = function(){
        this.style.textDecoration = "underline";
    }
    aJiangJiaDom.onmouseout = function(){
        this.style.textDecoration = "none";
    }
    // 创建右边的好评
    let goodPingDom = document.createElement("div");
    goodPingDom.style.cssText = `
        width:70px;
        height:33px;
        float:right;
        background:yellow;
        border-left:2px solid #eee`;
    priceLeftDom.appendChild(goodPingDom);  
    

    

}





