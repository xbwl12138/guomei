

window.onload = function(){
    topActivity();
    cookieSkip();   //头部的登录
    
    createShoppingCar(); //动态创建购物车商品

    createSettlement();  //创建结算

    allCheckbox();
}


// 全选框
function allCheckbox(){
    let shoppingCheckedDom = $(".shopping_checked");
    // 上面的全选
    $("#allCheckboxId")[0].oninput = function(){
        for(let i=0;i<3;i++){
            if($("#allCheckboxId")[0].checked == true){
                $("#checkBoxDomBotId")[0].checked = true;
                shoppingCheckedDom[i].checked = true;
            }else{
                $("#checkBoxDomBotId")[0].checked = false;
                shoppingCheckedDom[i].checked = false;
            }
        }
    }
    // 下面的全选
    $("#checkBoxDomBotId")[0].oninput = function(){
        for(let i=0;i<3;i++){
            if($("#checkBoxDomBotId")[0].checked == true){
                $("#allCheckboxId")[0].checked = true;
                shoppingCheckedDom[i].checked = true;
            }else{
                $("#allCheckboxId")[0].checked = false;
                shoppingCheckedDom[i].checked = false;
            }
        }
    }

    
}

// 动态创建购物车商品
function createShoppingCar(){
    for(let i=0;i<3;i++){
        let shoppingDom = document.createElement("div");
        shoppingDom.style.cssText = `
            width:968px;
            padding: 20px 10px 100px;
            background:#fffaf4;
            border:1px solid #e6e6e6;`;
        $(".shopping_car_box")[0].appendChild(shoppingDom);
        let ulDom = document.createElement("ul");
        ulDom.style.cssText = `
            width:968px;`;
        shoppingDom.appendChild(ulDom);
        let liDoms = [];
        for(let i=0;i<9;i++){
            let liDom = document.createElement("li");
            liDoms.push(liDom);
            ulDom.appendChild(liDom);
        }
        // input框
        liDoms[0].style.cssText = `
            width:16px;
            height:20px;
            float:left;`;
        let checkBoxDom = document.createElement("input");
        checkBoxDom.style.cssText = `
            width: 16px;
            height: 16px;`;
        checkBoxDom.setAttribute("class","shopping_checked")
        checkBoxDom.type = "checkBox";
        liDoms[0].appendChild(checkBoxDom);
        // 商品图片
        liDoms[1].style.cssText =`
            width:80px;
            height:100px;
            float:left;
            margin: 0 10px;`;
        let aImgDom = document.createElement("a");
        aImgDom.style.cssText =`
            display:block;
            width:80px;
            height:80px;
            border:1px solid #eee;`;
        aImgDom.href = "#";
        liDoms[1].appendChild(aImgDom);
        let imgDom = document.createElement("img");
        imgDom.style.cssText = `
            width:80px;
            height:80px;`;
        imgDom.src = `indexImg/banner_shouji_big_${i+1}.webp`;
        aImgDom.appendChild(imgDom);
        // 商品介绍
        liDoms[2].style.cssText = `
            width:208px;
            height:100px;
            float:left;
            padding-top:3px;`;
        let apDom = document.createElement("a");
        apDom.href = "#";
        liDoms[2].appendChild(apDom);
        let pDom = document.createElement("p");

        pDom.style.cssText = `
            width:210px;
            height:34px;
            font:12px/1.5 arial;
            color:#333;`;
        pDom.innerHTML = "Apple iPhone XS Max 256G 金色 移动联通电信4G手机";
        apDom.appendChild(pDom);
        // p的动画
        // pDom[0].hover(function () {
        //         $(this).css(color,"red");
        //     }, function () {
        //         $(this).css(color,"#eee");
        //     }
        // );
        
        let aSevenDom = document.createElement("a");
        aSevenDom.href = "#";
        liDoms[2].appendChild(aSevenDom);
        let sevenDom = document.createElement("div");
        sevenDom.style.cssText = `
            width:16px;
            height:16px;
            background:url(shoppingCarImg/sprite.png) -872px 0;
            margin-top:8px;`;
        aSevenDom.appendChild(sevenDom);
        let addvalueDom = document.createElement("div");
        addvalueDom.style.cssText = `
            width:210px;
            height:16px;
            margin-top:4px;`;
        liDoms[2].appendChild(addvalueDom);
        let aValueDom = document.createElement("a");
        aValueDom.style.cssText = `
            display:block;
            width:210px;
            height:16px;
            font:12px/1.5 arial;`;
        aValueDom.href = "#";
        addvalueDom.appendChild(aValueDom);
        let iDom1 = document.createElement("i");
        iDom1.style.cssText = `
            display:inline-block;
            width:16px;
            height:16px;
            background:url(shoppingCarImg/sprite.png) -515px -64px;
            float:left;`;
        aValueDom.appendChild(iDom1);
        let iDom2 = document.createElement("i");
        iDom2.style.cssText = `
            display:inline-block;
            width:75px;
            height:16px;
            color:#333;
            font-style:normal;
            float:left;
            margin-left:4px;`;
        iDom2.innerHTML = "选购增值服务";
        aValueDom.appendChild(iDom2);
        let iDom3 = document.createElement("i");
        iDom3.style.cssText = `
            display:inline-block;
            width:8px;
            height:8px;
            color:#333;
            background:url(shoppingCarImg/sprite.png) -563px -90px;
            float:left;
            margin-top:5px;
            margin-left:5px;`;
        aValueDom.appendChild(iDom3);

        liDoms[3].style.cssText = `
            width:120px;
            height:57px;
            padding:10px;
            float:left;
            color:#a7a7a7;
            font:12px/1.5 arial;`;
        let pColorDom = document.createElement("p");
        pColorDom.style.cssText = `
            width:120px;
            height:16px;`;
        pColorDom.innerHTML = "颜色 ：金色";
        liDoms[3].appendChild(pColorDom);
        let pvDom = document.createElement("p");
        pvDom.style.cssText = `
            width:120px;
            height:16px;`;
        pvDom.innerHTML = "版本 ：全网通256G";
        liDoms[3].appendChild(pvDom);

        // 单价
        liDoms[4].style.cssText = `
            width:80px;
            height:80px;
            float:left;
            padding-top:14px;
            color:#333;
            text-align:center;
            font:12px/1.5 arial;`;
        let spanDom1 = document.createElement("span");
        spanDom1.innerHTML = "￥";
        liDoms[4].appendChild(spanDom1);
        let spanDom2 = document.createElement("span");
        spanDom2.innerHTML = "8488.00";
        liDoms[4].appendChild(spanDom2);

        // 数量
        liDoms[5].style.cssText = `
            width:86px;
            height:57px;
            padding:10px;
            margin: 0 20px 0 42px;
            float:left;
            color:#a7a7a7;
            font:12px/1.5 arial;`;
        let minSpan = document.createElement("span");
        minSpan.style.cssText = `
            width:18px;
            height:22px;
            color:black;
            border:1px solid #eee;
            border-right:none;
            cursor:pointer;
            background:#fff;
            float:left;
            text-align:center;
            line-height:22px;
            font-size:16px;`;
        minSpan.innerHTML = "-";
        liDoms[5].appendChild(minSpan);
        let inputBtn = document.createElement("input");
        inputBtn.type = "text";
        inputBtn.value = "1";
        inputBtn.style.cssText = `
            width:44px;
            height:22px;
            color:black;
            border:1px solid #eee;
            line-height:23px;
            outline:none;
            float:left;
            text-align:center;
            font-size:14px;`;
        inputBtn.innerHTML = "-";
        liDoms[5].appendChild(inputBtn);
        let addSpan = document.createElement("span");
        addSpan.style.cssText = `
            width:18px;
            height:22px;
            color:black;
            border:1px solid #eee;
            border-left:none;
            background:#fff;
            cursor:pointer;
            float:left;
            text-align:center;
            line-height:23px;
            font-size:16px;`;
        addSpan.innerHTML = "+";
        liDoms[5].appendChild(addSpan);

        // 小计
        liDoms[6].style.cssText = `
            width:70px;
            height:57px;
            padding:10px;
            text-align:center;
            margin-left:20px;
            float:left;
            font-size:13px;
            font-weight:700;
            color:#333;`;
        let subtotalSpanDom1 = document.createElement("span");
        subtotalSpanDom1.innerHTML = "￥";
        liDoms[6].appendChild(subtotalSpanDom1);
        let subtotalSpanDom2= document.createElement("span");
        subtotalSpanDom2.innerHTML = "8488.00";
        liDoms[6].appendChild(subtotalSpanDom2);
        // 操作
        liDoms[7].style.cssText = `
            width:70px;
            height:57px;
            padding:10px;
            text-align:center;
            margin-left:50px;
            float:left;
            color:#666;
            font:12px/1.5 arial`;
        let deletePDom = document.createElement("p");
        deletePDom.style.cssText = `
            cursor:pointer;
            text-align:left;`;
        deletePDom.innerHTML  = "删除";
        liDoms[7].appendChild(deletePDom);
        let CollectionPDom = document.createElement("p");
        CollectionPDom.style.cssText = `
            cursor:pointer;
            text-align:left;`;
        CollectionPDom.innerHTML  = "移入收藏夹";
    liDoms[7].appendChild(CollectionPDom);
    }
}

// 创建结算
function createSettlement(){
    let ulDom = document.createElement("ul");
    ulDom.style.cssText = `
        width:978px;
        height:30px;
        padding-top:18px;
        padding-left:12px;`;
    $(".settlement_box")[0].appendChild(ulDom);
    let liDoms = [];
    for(let i=0;i<7;i++){
        let liDom = document.createElement("li");
        liDoms.push(liDom);
        ulDom.appendChild(liDom);
    }
    // input框
    liDoms[0].style.cssText = `
            width:16px;
            height:20px;
            float:left;`;
    let checkBoxDom = document.createElement("input");
    checkBoxDom.setAttribute("id","checkBoxDomBotId");
    checkBoxDom.style.cssText = `
        width: 18px;
        height: 18px;`;
    checkBoxDom.type = "checkBox";
    liDoms[0].appendChild(checkBoxDom);
    // 全选
    liDoms[1].style.cssText = `
            width:40px;
            height:20px;
            margin:0 10px;
            float:left;
            font-size:12px;
            line-height:20px;`;
    liDoms[1].innerHTML =  "全选";
    // 删除
    liDoms[2].style.cssText = `
            width:40px;
            height:20px;
            margin:0 10px;
            float:left;
            font-size:12px;
            line-height:20px;`;
    let deleteSpanDom = document.createElement("span");
    deleteSpanDom.style.cssText  =  `
        cursor:pointer;`;
    deleteSpanDom.innerHTML = "删除";
    liDoms[2].appendChild(deleteSpanDom);
    // 已选n件商品
    liDoms[3].style.cssText = `
            width:120px;
            height:40px;
            margin:0 10px;
            float:left;
            font-size:12px;
            margin-left:300px;
            line-height:20px;`;
    let aleadeyPDom = document.createElement("p");
    aleadeyPDom.style.cssText  =  `
        height:30px;
        font-size:12px;
        display:inline-block;
        line-height:20px;
        float:left;
        `;
    aleadeyPDom.innerHTML = "已选";
    liDoms[3].appendChild(aleadeyPDom);
    let nShoppingSpanDom = document.createElement("span");
    nShoppingSpanDom.style.cssText =  `
        display:inline-block;
        height:30px;
        color:red;
        margin:0 8px;
        font-size:16px;
        font-weight:700;
        float:left;
        `;
    nShoppingSpanDom.innerHTML = "3";
    liDoms[3].appendChild(nShoppingSpanDom);
    let shoppingPDom = document.createElement("p");
    shoppingPDom.style.cssText = `
        width:50px;
        height:30px;
        font-size:12px;
        display:inline-block;
        line-height:20px;
        float:left;
        position:relative`;
    shoppingPDom.innerHTML = "件商品";
    liDoms[3].appendChild(shoppingPDom);
    // 箭头
    let arrowIDom = document.createElement("i");
    arrowIDom.style.cssText = `
        display:inline-block;
        width:7px;
        height:4px;
        background:url(shoppingCarImg/sprite.png) -117px -92px;
        position:absolute;
        right:2px;
        top:9px;`;
    shoppingPDom.appendChild(arrowIDom);

    // 总计（不含运费）
    liDoms[4].style.cssText = `
            height:20px;
            margin:0 10px;
            float:left;
            font-size:12px;
            line-height:20px;`;
    let zongSpanDom = document.createElement("span");
    zongSpanDom.style.cssText  =  `
        cursor:pointer;`;
    zongSpanDom.innerHTML = "总计（不含运费）:";
    liDoms[4].appendChild(zongSpanDom);

    liDoms[5].style.cssText = `
            // width:80px;
            // height:80px;
            float:left;
            color:#e3101e;
            margin-top:-2px;
            text-align:center;
            font-weight:900;
            font-size:18px;`;
    let spanDom1 = document.createElement("span");
    spanDom1.innerHTML = "￥";
    liDoms[5].appendChild(spanDom1);
    let spanDom2 = document.createElement("span");
    spanDom2.innerHTML = "25464.00";
    liDoms[5].appendChild(spanDom2);

    // 结算
    liDoms[6].style.cssText = `
        width:100px;
        height:32px;
        background:#ff5757;
        padding:14px;
        margin-top:-18px;
        float:right;`;
    let settlSpanDom = document.createElement("span");
    settlSpanDom.style.cssText = `
        display:block;
        width:64px;
        height:30px;
        font-family: microsoft YaHei;
        font-size: 16px;
        font-weight: 700;
        // font-indent:12px;
        line-height:30px;
        position:relative;
        color:#fff;
        cursor:pointer;
        margin-left:18px;`;
    settlSpanDom.innerHTML = "去结算";
    liDoms[6].appendChild(settlSpanDom);

    let iDom = document.createElement("i");
    iDom.style.cssText = `
        display:inline-block;
        position:absolute;
        top:4px;
        right:4px;
        width:12px;
        height:13px;
        margin-top:4px;
        background:url(shoppingCarImg/sprite.png) -292px -83px`;;
        settlSpanDom.appendChild(iDom);

}

