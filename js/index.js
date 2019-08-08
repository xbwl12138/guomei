

// form输入框搜索关键字
function inputKeyWord(){
	$name("#idja").onchange = function(){
		let searchLisDom = $name("#search-list").children;
		for(let i=0;i<searchLisDom.length;i++){
			searchLisDom[i].onclick = function(){
				$name("#idja").value = this.innerHTML;
			}
		}
		for(let i=0;i<searchLisDom.length;i++){
			searchLisDom[i].onmouseover = function(){
				this.style.backgroundColor = "#eee";
			}
			searchLisDom[i].onmouseout = function(){
				this.style.backgroundColor = "#fff";
			}
		}
	}
}
// 侧边栏函数
function asideFun(){
	$("#asideTop1").mouseenter(function(){
	$("#gmId1").css('display','block');
	$("#gmId1").animate({width:"100px"},500);
	});
	$("#asideTop1").mouseleave(function(){
		$("#gmId1").animate({width:"0px"},500);
		$("#gmId1").css('display','none');

	});

	$("#asideTop2").mouseenter(function(){
		$("#gmId2").css('display','block');
		$("#gmId2").animate({width:"100px"},500);

	});
	$("#asideTop2").mouseleave(function(){
		$("#gmId2").animate({width:"0px"},500);
		$("#gmId2").css('display','none');

	});

	$("#asideTop3").mouseenter(function(){
		$("#gmId3").css('display','block');
		$("#gmId3").animate({width:"140px"},500);

	});
	$("#asideTop3").mouseleave(function(){
		$("#gmId3").animate({width:"0px"},500);
		$("#gmId3").css('display','none');

	});

	$("#asideTop4").mouseenter(function(){
		$("#gmId4").css('display','block');
		$("#gmId4").animate({width:"100px"},500);

	});
	$("#asideTop4").mouseleave(function(){
		$("#gmId4").animate({width:"0px"},500);
		$("#gmId4").css('display','none');

	});

	$("#asideTop5").mouseenter(function(){
		$("#gmId5").css('display','block');
		$("#gmId5").animate({width:"100px"},500);

	});
	$("#asideTop5").mouseleave(function(){
		$("#gmId5").animate({width:"0px"},500);
		$("#gmId5").css('display','none');

	});
	// 侧边栏的购物车
	$("#asideTop6").mouseenter(function(){
		$("#gmId6").css('display','block');
		$("#gmId6").animate({width:"250px"},500);

	});
	$("#asideTop6").mouseleave(function(){
		$("#gmId6").animate({width:"0px"},500);
		$("#gmId6").css('display','none');
	});

	// 侧边栏的回到顶部
	$("#asideTopGo").click(function(){
		$("html,body").animate({scrollTop:0},300); 
	})
}

// let domTop = $(".content").offset().top+$(".content").height()
// 	$(document).scroll(function(){
// 		let top = $(document).scrollTop()

// 		if(top>domTop){
// 			$(".search-two").slideDown(300,function(){
// 				$(".search-two").css({
// 					"display":"block"
// 				})
// 			})
// 		}else{
// 			$(".search-two").slideUp(300,function(){
// 				$(".search-two").css({
// 					"display":"none"
// 				})
// 			})
// 		}
// 	})
// }	



function topActivity(){

	// 头部活动
	// 点击span活动图片消失消失
	$name("#top_delete").onclick = function(){
		this.parentNode.style.display = "none";
	}
	// 划过span标签换背景和字体颜色
	$name("#top_delete").onmouseover = function(){
		this.style.backgroundColor = "#245982";
		this.children[0].style.backgroundPosition = "-72px -466px";

	}
	$name("#top_delete").onmouseout = function(){
		this.style.backgroundColor = "";
		this.children[0].style.backgroundPosition = "-60px -466px";
	}
	// 鼠标进入国美会员(未登录)
	$name("#li_vip").onmouseover = function(){
		$name("#li_vip_a").style.cssText = `
				background-color:#fff;
				border-left:1px solid #e6e6e6;
				border-right:1px solid #e6e6e6;
				border-bottom:1px solid #fff;`;
		$name("#vip_guoMei").style.cssText = `
				display:block;`;
		// 旋转箭头
		this.firstElementChild.children[0].style.cssText = `
				transform: rotate(180deg);`;
	}
	// 鼠标移出
	$name("#li_vip").onmouseout = function(){
		this.firstElementChild.style.cssText = `
				background-color:#f8f8f8;
				border-top:none;
				`;
		$name("#vip_guoMei").style.cssText = `
				display:none;`;
		// 登陆成功的
		this.firstElementChild.children[0].style.cssText = `
				transform: rotate(0deg);`;
	}

	// 鼠标进入国美会员(登录)
	$name("#li_vip2").onmouseover = function(){
		$name("#li_vip_a2").style.cssText = `
				background-color:#fff;
				border-left:1px solid #e6e6e6;
				border-right:1px solid #e6e6e6;
				border-bottom:1px solid #fff;`;
				$name("#guoMeiUser").style.cssText = `font-style:normal;`;
		$name("#vip_guoMei").style.cssText = `
				display:block;`;
		$name("#vip_guoMei_logain").style.cssText = `
				display:block;`;
		// 旋转箭头
		this.firstElementChild.children[1].style.cssText = `
				transform: rotate(180deg);`;
	}
	// 鼠标移出
	$name("#li_vip2").onmouseout = function(){
		this.firstElementChild.style.cssText = `
				background-color:#f8f8f8;
				border-top:none;
				`;
		$name("#vip_guoMei").style.cssText = `
				display:none;`;
		$name("#guoMeiUser").style.cssText = `font-style:normal;`;
		$name("#vip_guoMei_logain").style.cssText = `
				display:none;`;
		// 登陆成功的
		this.firstElementChild.children[1].style.cssText = `
				transform: rotate(0deg);`;
	}
	// 抽奖切换
	var myTime1 = null;
	var myTime2 = null;
	var lef = 0;
	$name("#btn_right").onclick = function(){
		if (myTime1) {
			return;
		}
		myTime1 = setInterval(function(){
			lef= lef-8;
			// 边界判断
			var n =Math.abs(lef);
			if (n%208==0) {
				window.clearInterval(myTime1);
				myTime1=null;
			}
			if(lef<=-416){
				lef = -416;
				window.clearInterval(myTime1);
				myTime1 = null;
			}
			
			$name("#btn_center_ul").style.left = lef+"px";

		},20);

	}
	$name("#btn_left").onclick = function(){
		if (myTime2) {
			return;
		}	
		myTime2 = setInterval(function(){
			lef= lef+8;
			// 边界判断
			var n =Math.abs(lef);
			if (n%208==0) {
				window.clearInterval(myTime2);
				myTime2=null;
			}
			if(lef>=0){
				lef = 0;
				window.clearInterval(myTime2);
				myTime2 = null;
			}
		$name("#btn_center_ul").style.left = lef+"px";

		},20);
	}

	var myTime11 = null;
	var myTime22 = null;
	var lef2 = 0;
	$name("#btn_right2").onclick = function(){
		if (myTime11) {
			return;
		}
		myTime11 = setInterval(function(){
			lef2= lef2-8;
			// 边界判断
			var n =Math.abs(lef2);
			if (n%208==0) {
				window.clearInterval(myTime11);
				myTime11=null;
			}
			if(lef2<=-416){
				lef2 = -416;
				window.clearInterval(myTime11);
				myTime11 = null;
			}
			
			$name("#btn_center_ul2").style.left = lef2+"px";

		},20);

	}
	$name("#btn_left2").onclick = function(){
		if (myTime22) {
			return;
		}	
		myTime22 = setInterval(function(){
			lef2= lef2+8;
			// 边界判断
			var n =Math.abs(lef2);
			if (n%208==0) {
				window.clearInterval(myTime22);
				myTime22=null;
			}
			if(lef2>=0){
				lef2 = 0;
				window.clearInterval(myTime22);
				myTime22 = null;
			}
		$name("#btn_center_ul2").style.left = lef2+"px";

		},20);
	}

	// 顶部的退出登录
	$name("#quit_btn").onclick = function(){
		let username = getCookie("username");
		let userpass = getCookie("userpass");
		saveCookie("username",username,-1);
		saveCookie("userpass",userpass,-1);
		location.reload();
	}

}
// 输入框获得焦点
function inputFocus(){
	$name("#idja").onfocus = function(){
		this.placeholder = "";
	}
}

//参数：
//滑入入的dom对象
//滑出的dom对象
//时长；
// function slideInOut(domInObj,domOutObj,timeLong,func){
	
// 	let timeSpace = 10 ;//时间间隔 = 总时间/步子数
// 	let stepCount = timeLong/timeSpace; //步子数 = 总时间/时间间隔
// 	let step = domInObj.offsetWidth/stepCount ;//步长 = 路程/步子数


// 	let currLeft = 0;
// 	let myTimer = setInterval(()=>{

// 		currLeft -= step;

// 		if(currLeft<=-1*domInObj.offsetWidth){
// 			currLeft=-1*domInObj.offsetWidth;
// 			clearInterval(myTimer);
// 			func&&func();
// 		}

// 		domInObj.style.left =(currLeft+domInObj.offsetWidth)+"px";
// 		domOutObj.style.left = currLeft+"px";
// 	},timeSpace);
// }



// 右边的li

// input框左边的
function inputLeft(){
	var shangpingIdLiDom = $name("#shangpingId_ul").children;
	for(let i=0;i<shangpingIdLiDom.length;i++){
		shangpingIdLiDom[i].onclick = function(){
			$name("#shangpingId_ul_sp").innerHTML = this.innerHTML;
		}
	}
}

// 自动播放
function autoBanUl(){
	var top_ba = 0;
	setInterval(function(){
		top_ba -= .45;
		if (top_ba <= -115) {
			top_ba = 2;
		}
		$name("#navBanUlId").style.top = top_ba + "px";
	},20);
}

// 全部商品的ul的划过
function wholeHover(){
	let navLiDioms = $name("#navBigUl").children;
	for(let i=0;i<navLiDioms.length;i++){
		navLiDioms[i].onmouseover = function(){
			this.style.backgroundColor = "rgba(255,255,255)";
			this.children[1].style.display = "block";
		}
		navLiDioms[i].onmouseout = function(){
			this.style.backgroundColor = "";
			this.children[1].style.display = "none";
		}
	}
}

// 划过话费的li  下拉框向上移动出现
function phoneCost(){
	var myTimeLi;
	var huaFeiBoxTop = 120;
	// 点击❌消失
	
	$name("#huaFeiLi").onmouseover = function(){
		$name("#huaFeiBox").style.display = "block";
		if(myTimeLi){
			return;
		}
		myTimeLi = setInterval(function(){
			huaFeiBoxTop = huaFeiBoxTop-1;
			if (huaFeiBoxTop <= 71) {
				huaFeiBoxTop = 71;
				window.clearInterval(myTimeLi);
				myTimeLi = null;
			}
			// console.log("进入"+huaFeiBoxTop);

			$name("#huaFeiBox").style.top = huaFeiBoxTop+"px";
			
		},1);
		
		
	}
	
	$name("#spanBtnCuo").onclick = function(){
		$name("#huaFeiBox").style.display = "none";
		huaFeiBoxTop = 120;
		$name("#huaFeiBox").style.top =  "120px";

	}
	

	$name("#chZhiMon").onclick = function(){
		$name("#moneyUlYuan").style.display = "block";
	}


	var moneyArr = ["￥10-10.3元","￥20-20.3元","￥30-30.3元","￥50-50.3元","￥100-100.3元","￥200-200.3元","￥300-300.3元","￥500-500.3元"];
	var moneyLiDom =  $name("#moneyUlYuan").children;
	for(let i=0;i<moneyLiDom.length;i++){
		moneyLiDom[i].onclick = function(){
			$name("#chZhiMon").placeholder = this.innerHTML;
			this.parentNode.style.display = "none";
			$name("#monSpanYuan").innerText = moneyArr[i];
		}
		moneyLiDom[i].onmouseover = function(){
			this.style.backgroundColor = "#eee";
		}
		moneyLiDom[i].onmouseout = function(){
			this.style.backgroundColor = "";
		}
	}
}
var colorArr = ["#db2124","#f16118","#b2e9fe","#0071fe","#ff8a07","0071fe","0071fe","#0071fe"];
function BannerAutoColor(){
	var i = 0; 
	setInterval(function(){
		++i;
		if (i>=8) {
			i=0;
		}
		// console.log(i);
		$name("#bannerId").style.backgroundColor = colorArr[i];
	},2000);

}
// 倒计时
function renderTime(){
	for(let i=0;i<3;i++){
		let divDom = document.createElement("div");
		divDom.style.cssText = `
			display: inline-block;
			width: 27px;
			height: 27px;
			background-color: #f5004b;
			margin-right: 4px;
			border-radius:6px;
			color:#fff;
			float:left;
			font-size:18px;
			text-align:center;
			line-height:27px;`;		
		$name("#timeCount2").appendChild(divDom);
		if (i>=2) {
			return;
		}
		let spanDom = document.createElement("span");
		spanDom.style.cssText = `
			display: inline-block;
			width: 12px;
			height: 27px;
			line-height: 23px;
			float: left;`;
		spanDom.innerHTML = ":";
		$name("#timeCount2").appendChild(spanDom);
	}
	timeCount();
}

// 倒计时
function timeCount(){
	let date=new Date(),//当前时间
	    h=date.getHours(),
	    m=date.getMinutes(),
	    s=date.getSeconds();
  	let stopTime=new Date("8 9 2019 00:00:00"),//结束时间
	    stopH=stopTime.getHours(),
	    stopM=stopTime.getMinutes(),
	    stopS=stopTime.getSeconds();
  	let shenyu=stopTime.getTime()-date.getTime(),//倒计时毫秒数
	    shengyuD=parseInt(shenyu/(60*60*24*1000)),//剩余的毫秒数转换为天
	    D=parseInt(shenyu)-parseInt(shengyuD*60*60*24*1000),//除去天的毫秒数
	    shengyuH=parseInt(D/(60*60*1000)),//减去天的毫秒数转换成小时
	    H=D-shengyuH*60*60*1000,//减去天、小时的毫秒数
	    shengyuM=parseInt(H/(60*1000)),//减去天的毫秒数转换成分钟
	    M=H-shengyuM*60*1000;//减去天、小时、分的毫秒数
	    S=parseInt((shenyu-shengyuD*60*60*24*1000-shengyuH*60*60*1000-shengyuM*60*1000)/1000)//除去天、小时、分的毫秒数转化为秒

	    if (shengyuH.toString().length == 1) {
	    	shengyuH = "0"+shengyuH;
	    	// console.log(shengyuH);
	    }
	    if (shengyuM.toString().length == 1) {
	    	shengyuM = "0"+shengyuM;
	    	// console.log(shengyuM);
	    }
	    if (S.toString().length == 1) {
	    	S = "0"+S;
	    	// console.log(shengyuH);
	    }
	    
	    $name("#timeCount2").children[0].innerHTML = shengyuH;
	    $name("#timeCount2").children[2].innerHTML = shengyuM;
	    $name("#timeCount2").children[4].innerHTML = S;
 	setTimeout(timeCount,500);
}
let domDivBann =[];
let pMovearr =[
			"三文鱼，大人小孩都爱吃，速速购买，立减200元",
			"飞利浦led灯泡E27暖白黄灯泡3.5w螺旋lamp超亮球泡单灯(白色磨砂 黄光)",
			"40包开心朵朵本色竹浆抽纸3层加厚整箱家庭装(40包整箱)",
			"荣耀畅玩8 2 32G 极光蓝",
			"戴尔（DELL）魔方14MF 灵越2505 14英寸轻薄便携二合一平板笔记本电脑（i5-8265U 8G内存 256G固态 PCIE）银",
			"爱博尔V6-2成人情侣声波电动牙刷38000转声波震动式智能提醒全身防水杜邦刷毛清洁美白牙齿2支刷头(V6-2声波电动牙刷少女粉款2刷头 少女粉)",
			"华为 HUAWEI Mate 20 Pro 全网通版4G手机(极光色 6GB+128GB)",
			"小度智能音箱大金刚",
			"艾比格特(IBIG Stor) IBSP6291 旗舰版 无线 移动硬盘 2TB 远程传输 黑",
			"尼康全画幅单反D750(24-120mm)",
			"智能提醒全身防水杜邦刷毛清洁美白牙齿2支刷头(V6-2声波电动牙刷少女粉款2刷头)",
			"海信65英寸人工智能电视",
			"声波电动牙刷少女粉款2刷头 少女粉",
			"iphoneXR-128G-黑色"];
// 动态创建商品  开始
function createShopping(data){
	for(let i=0;i<8;i++){
		let domDiv = document.createElement("div")
		domDiv.style.cssText = `
				width: 196px;
				height: 179px;
				text-align: center;
				padding: 0 16px;
				border-right: 1px dashed #eee;
				float: left;`;
		let aDiv = document.createElement("a");
		aDiv.style.cssText = `
				color: #ff1827;
				font-size: 24px;`;
		aDiv.href = "#";
		domDiv.appendChild(aDiv);
		let imgDom = document.createElement("img");
		imgDom.style.cssText =`
				display: block;
				margin:0 auto;
				width: 120px;
				height: 120px;`;
		imgDom.src = data[i].goodsImg;
		aDiv.appendChild(imgDom);
		let spanDom = document.createElement("span");
		spanDom.innerHTML = "￥";
		spanDom.style.float = "left";
		aDiv.appendChild(spanDom);
		let iDom = document.createElement("i");
		iDom.style.cssText = `
				font-style: normal;
				float: left;`;
		iDom.innerHTML = data[i].goodsPrice+".00";
		aDiv.appendChild(iDom);
		let eDom = document.createElement("e");
		eDom.style.cssText = `
				color: #999999;
				margin-top: 12px;
				float: left;
				font-size: 12px;
				padding-left: 2px;
				text-decoration: line-through;`;
		eDom.innerHTML = "￥"+data[i].beiyong13+".00";
		aDiv.appendChild(eDom);
		let pDom = document.createElement("p");
		pDom.style.cssText = `
				width: 196px;
				height: 22px;
				overflow:hidden;
				color: #5e5e5e;
				font-size: 14px;
				line-height: 22px;
				text-align:left;`;
		pDom.innerHTML = data[i].goodsDesc;
		aDiv.appendChild(pDom);
		$name("#bannerBottom").appendChild(domDiv);
		domDivBann.push(domDiv);
	}
	domDivBann[3].style.borderRight = "none";
	// 动态创建商品  结束
	// 点击按钮切换商品
	$name("#btnA_sapn2").onclick = function(){
		for(let i=2;i<6;i++){
			this.parentNode.children[i].style.display= "none";
		}
		for(let i=6;i<9;i++){
			this.parentNode.children[i].style.display= "block";
		}
	}
	$name("#btnA_sapn1").onclick = function(){
		for(let i=6;i<9;i++){
			this.parentNode.children[i].style.display= "none";
		}
		for(let i=2;i<6;i++){
			this.parentNode.children[i].style.display= "block";
		}
	}
	// 划过出现按钮
	$name("#everyBanner").onmouseover = function(){
		$name("#btnA_sapn1").style.display = "block";
		$name("#btnA_sapn2").style.display = "block";
	}
	$name("#everyBanner").onmouseout = function(){
		$name("#btnA_sapn1").style.display = "none";
		$name("#btnA_sapn2").style.display = "none";
	}
}
// 动态创建猜你喜欢的商品
// 动态创建猜你喜欢的商品
function ajaxLIke(){
	$.ajax({
		type: "get",
		url: "getGoodsList.php",
		data: "",
		dataType: "json",
		success: function (response) {
			youLikeShopping(response);

			createShopping(response);
			console.log(response);
		}
		
	});
	
}
function youLikeShopping(data){
	for(let i=0;i<6;i++){
		// console.log(data);
		let aDiv = document.createElement("a");
		aDiv.style.cssText = `
				display: inline-block;
				// width: 210px;
				// height: 210px;
				text-align: center;
				border-right: 1px solid #eee;
				padding-left: 20px;
				margin-bottom: 17px;`;
		aDivArrs.push(aDiv);
		let imgDom = document.createElement("img");
		imgDom.style.cssText =`
				display: block;
				margin:0 auto;
				width: 120px;
				height: 120px;`;
		imgDom.src = data[i].goodsImg;
		aDiv.appendChild(imgDom);
		let p1Dom = document.createElement("p");
		p1Dom.style.cssText =`
				width: 190px;
				height: 38px;
				overflow: hidden;
				font-size: 12px;
				color: #5e5e5e;
				line-height: 18px;
				text-align: left;
				margin-top: 32px;`;
		p1Dom.innerHTML = data[i].goodsDesc;
		aDiv.appendChild(p1Dom);
		let p2Dom = document.createElement("p");
		p2Dom.style.cssText =`
				width: 220px;
				height: 22px;
				overflow: hidden;
				font-size: 16px;
				color: #ff0027;
				text-align: left;`;
		p2Dom.innerHTML = "￥"+data[i].goodsPrice;
		aDiv.appendChild(p2Dom);
		$name("#likeShopping").appendChild(aDiv);
	}
	aDivArrs[4].style.border = "none";
}
// 点击左右按钮切换商品   猜你喜欢的按钮
function likeBtn(){
	let aLikeBtnBoxs = $name("#aLikeBtnBox").children;
	for(let i=0;i<2;i++){
		aLikeBtnBoxs[i].onmouseover = function(){
			this.style.color = "red";
		}
		aLikeBtnBoxs[i].onmouseout = function(){
			this.style.color = "#5e5e5e";
		}
	}
}

// 必买清单

function createBuy(domObj){
	let buyBoxLeftDom = document.createElement("div");
	buyBoxLeftDom.style.cssText = `
		width: 900px;
		height: 425px;
		float:left;`;
	let leftTopDom = document.createElement("div");
	leftTopDom.style.cssText = `
		width: 900px;
		height: 38px;
		padding-top: 20px;`;
	buyBoxLeftDom.appendChild(leftTopDom);
	let hDom = document.createElement("h3");
	hDom.style.cssText = `
		float: left;
		font-size: 18px;
	    line-height: 38px;
	    color: #333;
		font-weight: 500;`;
	hDom.innerHTML = "必买清单";
	leftTopDom.appendChild(hDom);
	let aDom = document.createElement("a");
	aDom.style.cssText = `
		float: right;	
		font-size: 12px;
	    color: #888;
	    line-height: 38px;`;
	aDom.href = "#";
	aDom.innerHTML = "发现惊喜>";
	leftTopDom.appendChild(aDom);
	domObj.appendChild(buyBoxLeftDom);
	// 创建ul
	let ulShoppingDom = document.createElement("ul");
	ulShoppingDom.style.cssText = `
		width: 900px;
		height: 338px;
		background-color:#fff;
		`;
	// ul放进父盒子
	buyBoxLeftDom.appendChild(ulShoppingDom);

	for(let i=0;i<3;i++){
		// 创建li
		let liShoppingDom = document.createElement("li");
		liShoppingDom.style.cssText = `
			width:280px;
			padding-bottom: 8px;
			background-color: #fff;
			float:left;
			padding-right:25px;`;
			if (i>1) {
				liShoppingDom.style.cssText = `
					width:280px;
					padding-bottom: 8px;
					background-color: #fff;
					float:left;
					padding-right:0px;`;
			}
		ulShoppingDom.appendChild(liShoppingDom);
		// 创建第一个div
		let ulDivBox1 = document.createElement("div");
		ulDivBox1.style.width = "306px";
		liShoppingDom.appendChild(ulDivBox1);
		// 创建a
		let aDom1 = document.createElement("a");
		aDom1.src = "#";
		ulDivBox1.appendChild(aDom1);
		// 创建图片
		let imgDom = document.createElement("img");
		imgDom.style.width = "290px";
		imgDom.style.height = "180px";
		imgDom.src = `indexImg/buy_1_${i+1}.jpg`;
		aDom1.appendChild(imgDom);
		// 创建第二个小div
		let ulDivBox2 = document.createElement("div");
		ulDivBox2.style.padding = "20px";
		liShoppingDom.appendChild(ulDivBox2);
		let adom2 =document.createElement("a");
		adom2.style.cssText = `
				font-size: 16px;
			    line-height: 28px;
			    color: #333;
			    display: block;
			    width: 306px;
			    height: 28px;
			    overflow: hidden;
			    margin-bottom: 12px;`;
		adom2.href = "#";
		adom2.innerHTML = "游戏本两大实力派系，怎么选？";
		ulDivBox2.appendChild(adom2);
		let adom3 =document.createElement("a");
		adom3.style.cssText = `
				display: block;
			    font-size: 12px;
			    line-height: 16px;
			    color: #5e5e5e;
				width: 280px;`;
		adom3.href = "#";
		adom3.innerHTML = "10K这个价位段，联想拯救者与惠普暗影精灵同配置下有什么区别，到底哪一台更好呢？	";
		ulDivBox2.appendChild(adom3);



		// 创建第三个小div
		let ulDivBox3 = document.createElement("div");
		ulDivBox3.style.padding = "20px";
		liShoppingDom.appendChild(ulDivBox3);

		let aDOm_1 = document.createElement("a");
		aDOm_1.style.cssText = `
			float: left;
		    margin-right: 38px;
		    font-size: 12px;
		    color: #5e5e5e;
		    cursor: default;`;
	    let ran = parseInt(Math.random()*1000); //随机数
	 	aDOm_1.innerText = ran;
		ulDivBox3.appendChild(aDOm_1); 
		let span_1 = document.createElement("span");
		span_1.style.cssText = `
			content:"";
			display: inline-block;
			width: 16px;
			height: 12px;
			padding-right: 2px;
			float:left;
			background:url(indexImg/love.png) no-repeat 0 50%;`;
		aDOm_1.appendChild(span_1); 
		let aDOm_2 = document.createElement("a");
		aDOm_2.style.cssText = `
			float: left;
		    margin-right: 38px;
		    color: #5e5e5e;
		    font-size: 12px;
		    cursor: default;`;
	 	aDOm_2.innerText = `${i*2}`;
		ulDivBox3.appendChild(aDOm_2); 
		let span_2 = document.createElement("span");
		span_2.style.cssText = `
			content:"";
			display: inline-block;
			width: 16px;
			padding-right: 4px;
			float:left;
			height: 12px;
			background:url(indexImg/discuss.png) no-repeat 0 50%;`;
		aDOm_2.appendChild(span_2); 			
	}


	// 创建右边的盒子(动态圈子)
	let buyBoxRightDom = document.createElement("div");
	buyBoxRightDom.style.cssText = `
		width: 280px;
		height: 425px;
		float:left;
		margin-left:20px;`;
	let rightTopDom = document.createElement("div");
	rightTopDom.style.cssText = `
		width: 280px;
		height: 38px;
		padding-top: 20px;`;
	buyBoxRightDom.appendChild(rightTopDom);
	let hDom2 = document.createElement("h3");
	hDom2.style.cssText = `
		float: left;
		font-size: 18px;
	    line-height: 38px;
	    color: #333;
		font-weight: 500;`;
	hDom2.innerHTML = "我的圈子";
	rightTopDom.appendChild(hDom2);
	let aRightDom = document.createElement("a");
	aRightDom.style.cssText = `
		float: right;	
		font-size: 12px;
	    color: #888;
	    line-height: 38px;`;
	aRightDom.href = "#";
	aRightDom.innerHTML = "更多商品>";
	rightTopDom.appendChild(aRightDom);
	$name("#buyBox").appendChild(buyBoxRightDom);

	// 创建右边下面的大盒子
	let rightBothDom = document.createElement("div");
	rightBothDom.style.cssText = `
		width: 280px;
		height: 320px;
		background-color:#fff;
		padding-top: 20px;`;
	buyBoxRightDom.appendChild(rightBothDom);
	// 创建右边下面里面第一个的大盒子
	let BothTopDom = document.createElement("div");
	BothTopDom.style.cssText = `
		width: 240px;
		height: 160px;
		margin: 0 auto;
		border-bottom:1px dashed #eee;
		padding-bottom:10px;`;
	rightBothDom.appendChild(BothTopDom);
	let div_1_1_Dom = document.createElement("div");
	BothTopDom.appendChild(div_1_1_Dom);
	let a_1_1_Dom = document.createElement("a");
	a_1_1_Dom.href = "#";
	div_1_1_Dom.appendChild(a_1_1_Dom);
	let img_1_1_Dom = document.createElement("img");
	img_1_1_Dom.style.width = "240px";
	img_1_1_Dom.href = "#";
	img_1_1_Dom.src = `indexImg/taste_1.jpg`;
	a_1_1_Dom.appendChild(img_1_1_Dom);
	// 创建手机-智享家
	let div_1_2_Dom = document.createElement("div");
	div_1_2_Dom.style.cssText = `
		width:240px;
		height:30px;`;
	BothTopDom.appendChild(div_1_2_Dom);
	let span_2_1 = document.createElement("span");
	span_2_1.style.cssText = `
		display:inline-block;
		line-height:18px;
		text-align:center;
		width:30px;
		height:18px;
		background-color:#ff7612;
		border-radius:2px;
		color:#fff;
		font-size:12px;`;
	span_2_1.innerHTML = "手机";
	div_1_2_Dom.appendChild(span_2_1);

	let a_dom_2_1 = document.createElement("a");
	a_dom_2_1.style.cssText = `
		display:inline-block;
		height:24px;
		margin-left:8px;
		padding-top:4px;
		line-height:24px;
		text-align:center;
		color:black;
		font-size:14px;`;
	a_dom_2_1.href = "#";
	a_dom_2_1.innerHTML = "智享家";
	div_1_2_Dom.appendChild(a_dom_2_1);

	// 创建成员
	let span_2_2 = document.createElement("span");
	span_2_2.style.cssText = `
		display:inline-block;
		line-height:18px;
		text-align:center;
		color:#a5a5a5;
		font-size:12px;
		margin:0px 15px;`;
	span_2_2.innerHTML = "成员1200";
	div_1_2_Dom.appendChild(span_2_2);
	let span_2_3 = document.createElement("span");
	span_2_3.style.cssText = `
		display:inline-block;
		line-height:18px;
		text-align:center;
		color:#a5a5a5;
		font-size:12px;`;
	span_2_3.innerHTML = "话题1399";
	div_1_2_Dom.appendChild(span_2_3);

	// 创建话题
	let BothBotDom = document.createElement("div");
	BothBotDom.style.cssText = `
		width: 240px;
		height: 140px;
		margin:10px auto 0px;`;
	rightBothDom.appendChild(BothBotDom);
	for(let i=0;i<3;i++){
		let aDom_1_1 = document.createElement("a");
		aDom_1_1.style.cssText = `
			display:inline-block;
			width:240px;
			height:20px;
			overflow:hidden;
			color:#5e5e5e;`;
		aDom_1_1.href = "#";
		aDom_1_1.innerHTML = "[话题]  零基础做面包！这波操作厉害了";
	BothBotDom.appendChild(aDom_1_1);
	}

}

// 动态创建优质大牌的商品
let aDivArrs = [];
let imgDivArrs = [];
function goodShopping(domObj){
	for(let i=0;i<10;i++){
		let aDiv = document.createElement("a");
		aDiv.style.cssText = `
				width:187px;
				height:234px;			
				border-right:1px solid #eee;
				border-bottom:1px solid #eee;
				padding-left:10px;
				// padding-bottom:px;
				display: inline-block;
				text-align: center;`;
		aDivArrs.push(aDiv);
		let imgDom = document.createElement("img");
		imgDom.style.cssText =`
				display: block;
				padding-top:20px;
				margin-left:24px;
				width: 130px;
				height: 130px;`;
		imgDom.src = `indexImg/banner_shouji_big_${i+1}.webp`;
		imgDivArrs.push(imgDom);
		aDiv.appendChild(imgDom);
		let p1Dom = document.createElement("p");
		p1Dom.style.cssText =`
				width: 160px;
				height: 38px;
				overflow: hidden;
				font-size: 12px;
				color: #5e5e5e;
				line-height: 18px;
				text-align: left;
				margin-top: 20px;`;
		p1Dom.innerHTML = pMovearr[i];
		aDiv.appendChild(p1Dom);
		let p2Dom = document.createElement("p");
		p2Dom.style.cssText =`
				width: 220px;
				height: 22px;
				overflow: hidden;
				font-size: 14px;
				color: #ff0027;
				text-align: left;`;
		p2Dom.innerHTML = "￥"+(33.82+i*3);
		aDiv.appendChild(p2Dom);
		domObj.appendChild(aDiv);
	}
}

// 划过的时候(优质大牌)
// function ulTopTab1(){
// 	let liTopTabDom = $name("#ulTopTab").children;
// 	for(let i=0;i<ulTopTabDom.length;i++){
// 		ulTopTabDom[i].onmousmove = function(){
// 			this.style.backgroundColor = "#719ef7";
// 			this.style.color = "#719ef7";
// 		}
// 	}
// }

// 全部商品的划过
function ulTopTab1(){
	let ulTopTabDom = $name("#ulTopTab").children;
	let storeyBotRightDom = $name("#storeyBotRight").children;
	for(let i=0;i<ulTopTabDom.length;i++){
		ulTopTabDom[i].onmouseover = function(){
			for(let j=0;j<ulTopTabDom.length;j++){
				ulTopTabDom[j].backgroundColor = "#fff";
				ulTopTabDom[j].color = "black";
			}
			this.style.backgroundColor = "#719ef7";
			this.style.color = "#fff";
			storeyBotRightDom[i+1].style.display="block";
		}
		ulTopTabDom[i].onmouseout = function(){
			for(let j=0;j<ulTopTabDom.length;j++){
				ulTopTabDom[j].backgroundColor = "black";
				ulTopTabDom[j].color = "#fff";
			}
			this.style.backgroundColor = "#fff";
			this.style.color = "#719ef7";
			storeyBotRightDom[i+1].style.display="none";
		}

		storeyBotRightDom[i+1].onmouseover=function(){
			this.style.display="block";
		}

		// if(i=0){
		// 	ulTopTabDom[i].onmouseover = function(){
		// 		$name("#storeyBannSm1").style.display = "block";
		// 		$name("#storeyBannShopp").style.display = "block";
		// 	}
		// 	ulTopTabDom[i].onmouseout = function(){
		// 		$name("#storeyBannSm1").style.display = "none";
		// 		$name("#storeyBannShopp").style.display = "none";
		// 	}
		// }


	}
}
function storeySkip(){
	// 楼层
	let liDoms = $name("#liftDom").firstElementChild.children;

	window.onscroll = function(){
		let scrollTop1 = document.body.scrollTop || document.documentElement.scrollTop;
		// console.log(scrollTop1);
		// 侧边栏的回到顶部的出现
		if (scrollTop1>100) {
			$("#asideTopGo").css('display','block');
		}else{
			$("#asideTopGo").css('display','none');
		}
		// 楼层的出现
		if (scrollTop1 <1900) {
			$name("#liftDom").style.display = "none";
			$name("#topFloat1").style.display = "none";
		} 
		if(scrollTop1 >=1900){
			$name("#liftDom").style.display = "block";
			$name("#topFloat1").style.display = "block";
			if (scrollTop1>=6500) {
				$name("#liftDom").style.display = "none";
			}

			// 楼层的红色小三角
			if (scrollTop1>=1900 && scrollTop1 < 2900) { //一楼
				$name("#redMoveSpan").style.top = "30px";
				liDoms[1].style.color = "#f5004b";
				liDoms[2].style.color = "#000";
			}
			if (scrollTop1>=2900 && scrollTop1 < 3900) { //二楼
				$name("#redMoveSpan").style.top = "76px";
				liDoms[2].style.color = "#f5004b";
				liDoms[1].style.color = "#000";
				liDoms[3].style.color = "#000";
			}
			if (scrollTop1>=3554 && scrollTop1 < 4300) { //三楼
				$name("#redMoveSpan").style.top = "122px";
				liDoms[3].style.color = "#f5004b";
				liDoms[2].style.color = "#000";
				liDoms[4].style.color = "#000";
			}
			if (scrollTop1>=4300 && scrollTop1 < 4950) { //四楼
				$name("#redMoveSpan").style.top = "170px";
				liDoms[4].style.color = "#f5004b";
				liDoms[3].style.color = "#000";
				liDoms[5].style.color = "#000";
			}
			if (scrollTop1>=4950 && scrollTop1 < 5400) { //五楼
				$name("#redMoveSpan").style.top = "218px";
				liDoms[5].style.color = "#f5004b";
				liDoms[4].style.color = "#000";
				liDoms[6].style.color = "#000";
			}
			if (scrollTop1>=5400 && scrollTop1 < 6200) { //六楼
				$name("#redMoveSpan").style.top = "264px";
				liDoms[6].style.color = "#f5004b";
				liDoms[7].style.color = "#000";
				liDoms[5].style.color = "#000";
			}
			if (scrollTop1>=6200 && scrollTop1 < 6500) { //七楼
				$name("#redMoveSpan").style.top = "312px";
				liDoms[7].style.color = "#f5004b";
				liDoms[6].style.color = "#000";
			}
		}	


		// let divDomTop = document.createElement("div");
		// divDomTop.style.cssText = `
		// 		width:100%;
		// 		height:50px;
		// 		background-color:#fff;
		// 		opacity:.9;
		// 		position:fixed;
		// 		top:0px;
		// 		left:0px;
		// 		z-index:99;`; 
		// document.body.appendChild(divDomTop);

		// 顶部悬浮的出现与消失
		if (scrollTop1 >2000) {
			$name("#input_top_x").style.position = "fixed";
			$name("#input_top_x").style.top = "-20px";
			$name("#input_top_x").style.left = "25%";
			$name("#input_top_x").style.zIndex = "101";
			$name("#inputBottomUl").style.display = "none";
			

		}
		if (scrollTop1 <=2000) {
			$name("#input_top_x").style.position = "";
			$name("#inputBottomUl").style.display = "block";
			$name("#input_top_x").style.top = "";
			$name("#input_top_x").style.left = "";
		}
	}
	// 楼层的跳转
	liDoms[1].onclick=function(){ 
		$("html,body").animate({scrollTop:1900},300); /* 持续时间为 300ms */
		// return false;
	};
	liDoms[2].onclick=function(){ 
		$("html,body").animate({scrollTop:2900},300); 
		return false;
	};
	liDoms[3].onclick=function(){ 
		$("html,body").animate({scrollTop:3653},300); 
		return false;
	};
	liDoms[4].onclick=function(){ 
		$("html,body").animate({scrollTop:4300},300); 
		return false;
	};
	liDoms[5].onclick=function(){ 
		$("html,body").animate({scrollTop:5050},300); 
		return false;
	};
	liDoms[6].onclick=function(){ 
		$("html,body").animate({scrollTop:5400},300); 
		return false;
	};
	liDoms[7].onclick=function(){ 
		$("html,body").animate({scrollTop:6260},300); 
		return false;
	};
	liDoms[8].onclick=function(){ 
		$("html,body").animate({scrollTop:0},300); 
		return false;
	};
	liDoms[9].onclick=function(){ 
		$("html,body").animate({scrollTop:6956},300); 
		return false;
	};
}	

// <button onclick="toTop(outer)"></button>
//     <script>
//         function toTop(ele) {
//             // ele.scrollTop = 0;
//             let dy = ele.scrollTop / 4; // 每次更新scrollTop改变的大小
//             if (ele.scrollTop > 0) {
//                 ele.scrollTop -= Math.max(dy, 10);
//                 setTimeout(() => {
//                     toTop(ele, dy);
//                 }, 30);
//             }
//         }
//     //     初始化

// for (let i = 0; i<233; i++){
// 	inner.innerText += `第${i}行\n`;
// } 
function cookieSkip(){
	let username = getCookie("username");
	if(username){
		// alert("欢迎你！"+username);
		$name("#guoMeiUser").innerHTML = "hi,"+username;
		$name("#userId").innerHTML = username;
		$name("#ul_id_one").style.display = "none";
		$name("#ul_id_two").style.display = "block";
	}else{
		$name("#ul_id_two").style.display = "none";
		$name("#ul_id_one").style.display = "block";
	}
}


window.onload = function(){
	inputKeyWord();  //输入框的关键字
	inputFocus();   //输入框获得焦点清空placeholder
	inputLeft();    //input框左边的
	topActivity();  //头部的活动  抽奖 
	wholeHover();   //全部商品的ul的划过
	autoBanUl();    //
	phoneCost();   //划过话费的li  下拉框向上移动出现
	storeySkip();   //楼层跳转
	new BannerPlayer({
		width:750,
		height:450,
		douWidth:30,
		douHeight:5,
		douColor:"#000",
		douHighColor:"#f5004b",
		douOpacity:.3,
		imgs:["indexImg/banner_1.jpg","indexImg/banner_2.jpg","indexImg/banner_3.jpg","indexImg/banner_4.jpg","indexImg/banner_5.jpg","indexImg/banner_6.jpg","indexImg/banner_7.jpg","indexImg/banner_8.jpg"],
		douPos:"下",
		timeSpace:2000,
	},$name("#bannerBox"));

	BannerAutoColor();   //轮播图的背景改变

	renderTime();  //创建倒计时的盒子
	timeCount();  //倒计时函数
	// createShopping();  //创建商品
	// youLikeShopping();  //创建你喜欢的商品
	ajaxLIke();   //ajax请求商品 并创建
	
	likeBtn();   //猜你喜欢的按钮

	createBuy($name("#buyBox"));  //创建必买清单

	new BannerPlayerSm({   //轮播图
		width:750,
		height:450,
		douWidth:30,
		douHeight:5,
		douColor:"#000",
		douHighColor:"#f5004b",
		douOpacity:.3,
		imgs:["indexImg/sm_banner_1.jpg","indexImg/sm_banner_2.jpg","indexImg/sm_banner_3.jpg"],
		douPos:"下",
		timeSpace:2000,
	},$name("#storeyBannSm1"));

	

	ulTopTab1();
	goodShopping($name("#tabBox1"));
	goodShopping($name("#tabBox2"));
	goodShopping($name("#tabBox3"));


	new BannerPlayerSm({
		width:750,
		height:450,
		douWidth:30,
		douHeight:5,
		douColor:"#000",
		douHighColor:"#f5004b",
		douOpacity:.3,
		imgs:["indexImg/sm_banner_2.jpg","indexImg/sm_banner_1.jpg","indexImg/sm_banner_3.jpg"],
		douPos:"下",
		timeSpace:2500,
	},$name("#storeyBannSm2"));

	new BannerPlayerSm({
		width:750,
		height:450,
		douWidth:30,
		douHeight:5,
		douColor:"#000",
		douHighColor:"#f5004b",
		douOpacity:.3,
		imgs:["indexImg/sm_banner_3.jpg","indexImg/sm_banner_2.jpg","indexImg/sm_banner_1.jpg"],
		douPos:"下",
		timeSpace:2500,
	},$name("#storeyBannSm3"));

	new BannerPlayerSm({
		width:750,
		height:450,
		douWidth:30,
		douHeight:5,
		douColor:"#000",
		douHighColor:"#f5004b",
		douOpacity:.3,
		imgs:["indexImg/sm_banner_1.jpg","indexImg/sm_banner_2.jpg","indexImg/sm_banner_3.jpg"],
		douPos:"下",
		timeSpace:2500,
	},$name("#storeyBannSm4"));

	new BannerPlayerSm({
		width:750,
		height:450,
		douWidth:30,
		douHeight:5,
		douColor:"#000",
		douHighColor:"#f5004b",
		douOpacity:.3,
		imgs:["indexImg/sm_banner_2.jpg","indexImg/sm_banner_1.jpg","indexImg/sm_banner_3.jpg"],
		douPos:"下",
		timeSpace:2500,
	},$name("#storeyBannSm5"));

	new BannerPlayerSm({
		width:750,
		height:450,
		douWidth:30,
		douHeight:5,
		douColor:"#000",
		douHighColor:"#f5004b",
		douOpacity:.3,
		imgs:["indexImg/sm_banner_3.jpg","indexImg/sm_banner_2.jpg","indexImg/sm_banner_1.jpg"],
		douPos:"下",
		timeSpace:2500,
	},$name("#storeyBannSm6"));

	new BannerPlayerSm({
		width:750,
		height:450,
		douWidth:30,
		douHeight:5,
		douColor:"#000",
		douHighColor:"#f5004b",
		douOpacity:.3,
		imgs:["indexImg/sm_banner_1.jpg","indexImg/sm_banner_2.jpg","indexImg/sm_banner_3.jpg"],
		douPos:"下",
		timeSpace:2500,
	},$name("#storeyBannSm7"));



	asideFun();//侧边栏划过出现函数

	// 获取cookie
	cookieSkip();
}


// var btnMoveLeftNode = $name("#btn_left");
// var btnMoveRightNode = $name("#btn_right");
// var moveBox = $name("#btn_center_ul");
// //html里面子节点的个数（页数）
// var count = moveBox.children.length;
// //第几页 （索引从1开始）
// var clickCount = 1;
// //往后、往前动态添加子节点
// moveBox.innerHTML += moveBox.children[0].outerHTML;
// moveBox.innerHTML = moveBox.children[count - 1].outerHTML + moveBox.innerHTML;
// //容器可见区域的宽度
// var width = parseInt(moveBox.children[0].style.width);
// //显示第一个的话，margin-left要置为负的显示区域的宽度（单位必不可少）
// moveBox.style.marginLeft = "-" + width + "px";
// //容器的总宽度
// moveBox.style.width = width * moveBox.children.length + "px";
// //按钮现在可以被点
// var flag = true;
// //点击左按钮
// btnMoveLeftNode.onclick = function() {
//     if (flag) {
//         flag = false;
//         //获取容器的向左偏移的值
//         var left = parseFloat(moveBox.style.marginLeft);
//         //要显示的是第几页
//         clickCount++;
//         var interval = setInterval(function() {
//             //往左偏移
//             left -= 21;
//             //本次点击偏移的距离大于width的话
//             if (left <= -(width * clickCount)) {
//                 //最后一页上继续往左的情况
//                 if (clickCount == count + 1) {
//                     //当移动结束后，置换动态添加到最后的节点的margin-left值为第一个的margin-left值
//                     clickCount = 1;
//                     left = "-" + width;
//                 } else { //非最后一页往左
//                     left = -(width * clickCount);
//                 }
//                 //赋上移动结束后的margin-left值（普通的和需要置换的）
//                 moveBox.style.marginLeft = left + "px";
//                 //移动结束后，清除时钟
//                 clearInterval(interval);
//                 flag = true;
//             } else { //本次点击偏移的距离还不到width的话
//                 moveBox.style.marginLeft = left + "px";
//             }
//         }, 30);
//     }
// };
// btnMoveRightNode.onclick = function() {
//     if (flag) {
//         flag = false;
//         var left = parseFloat(moveBox.style.marginLeft);
//         clickCount--;
//         var interval = setInterval(function() {
//             left += 21;
//             if (left >= -(width * clickCount)) {
//                 if (clickCount == 0) {
//                     clickCount = count;
//                     left = -width * count;
//                 } else {
//                     left = -(width * clickCount);
//                 }
//                 moveBox.style.marginLeft = left + "px";
//                 clearInterval(interval);
//                 flag = true;
//             } else {
//                 moveBox.style.marginLeft = left + "px";
//             }
//         }, 30);
//     }
// };
