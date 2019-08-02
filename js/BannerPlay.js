//一、类（轮播图）

// new BannerPlayer({
// 	width:100,
// 	height:100,
// 	color:"pink",
// 	highColor:"red",
// },
// 	$("#box")
// )

class BannerPlayer{
	//构造函数
	constructor(obj,boxDom){
		//1、属性（数据）
		this.boxDom = boxDom;
		this.imgDoms = [];//存储所有的图片标签
		this.liDoms = [];//存储所有的li标签（豆豆）
		this.arrowBoxDom = null;//存储左右箭头的容器
		let defaultObj = {
			width:400,
			height:300,
			imgs:["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg"],
			timeSpace:1000,
			douColor:"pink",
			douHighColor:"red",
			douOpacity:.9,
			douHighOpacity:1,
			douWidth:10,
			douHeight:10,
			douPos:"下",
			douIsCircle:true,
			myTimer:null,
			ord:0,
			type:"fade"//切换效果的类型
		}

		for(let key in defaultObj){
			if(obj[key]){
				this[key] = obj[key];
			}else{
				this[key] = defaultObj[key];
			}
		}
		//2、创建外观（把数据应用在外观上）
		this.render();
		this.addEvent();
		this.autoPlay();
	}

	//外观（html和css代码）
	render(){
		this.boxDom.style.position = "relative";

		//1、创建图片
		for(let i=0;i<this.imgs.length;i++){
			let aDom = document.createElement("a");
			aDom.href = "#";
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = `
				position: absolute;
				left:0px;
				top:0px;
				width: 100%;
				height: 100%;	
				z-index: 1;`;	

			switch(this.type){
				case "fade":imgDom.style.opacity = (i==0?1:0);break;
			}
			if(i==0){
				imgDom.style.zIndex = 2;
			}
			aDom.appendChild(imgDom);
			this.boxDom.appendChild(aDom);
			this.imgDoms.push(imgDom);
		}
		//2、创建豆豆
		//1)、豆豆的容器ul
		let doudouBox = document.createElement("ul");
		doudouBox.style.cssText = `
				padding:0px;
				position: absolute;
				list-style: none;
				margin-left:70px;
				z-index: 3;`;
		if(this.douPos=="上"){
			console.log((this.width-(this.douSize*(this.imgs.length*2-1)))/2);
			doudouBox.style.left = `${(this.width-(this.douWidth*(this.imgs.length*2-1)))/2}px`;
			doudouBox.style.top = "20px";			
		}else if(this.douPos=="下"){
			// doudouBox.style.right = "20px";//
			doudouBox.style.left = `${(this.width-(this.douWidth*(this.imgs.length*2-1)))/2}px`;
			doudouBox.style.bottom = "18px";
		}	
		this.boxDom.appendChild(doudouBox);
		//2)、豆豆 li
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement("li");
			liDom.setAttribute("index",i);
			liDom.style.cssText = `
				float:left;
				width:${this.douWidth}px;
				height: ${this.douHeight}px;
				margin-right: ${this.douSize}px;
				background-color: ${this.douColor};
				opacity: ${this.douOpacity};
				margin-right:8px;
			`;
			if(!this.douIsCircle){
				liDom.style.borderRadius="50%";
			}
			if(i==0){
				liDom.style.backgroundColor=this.douHighColor;
				liDom.style.opacity=this.douHighOpacity;
			}
			doudouBox.appendChild(liDom);
			this.liDoms.push(liDom);//放在数组里，方便其它函数使用
		}

		//3、创建左右按钮
		//1)、创建左右箭头的容器
		this.arrowBoxDom = document.createElement("div");

		this.arrowBoxDom.style.cssText = `
				position: absolute;
				left:0px;
				top:${(this.height-60)/2}px;
				width: 100%;
				height: 80px;
				z-index: 4;`;
		this.boxDom.appendChild(this.arrowBoxDom);

		//2)、创建左右箭头
		let leftDivDom = document.createElement("div");
		leftDivDom.style.cssText = `
				float:left;
				height: 100%;
				width: 46px;
				margin-left:656px;
				margin-right:2px;
				background-color: black;
				opacity: 0.2;`;
		this.arrowBoxDom.appendChild(leftDivDom);
		let spanLeftDom = document.createElement("span");
		spanLeftDom.style.cssText = `
				display:block;
				width:40px;
				height:60px;
				margin-top:10px;
				margin-left:2px;
				background-image:url(indexImg/ui.png);
				background-position:0 -122px`;
		leftDivDom.appendChild(spanLeftDom);
		let rightDivDom = document.createElement("div");
		rightDivDom.style.cssText = `
				float:left;
				height: 100%;
				width: 46px;
				background-color: black;
				opacity: 0.2;`;
		this.arrowBoxDom.appendChild(rightDivDom);
		let spanRightDom = document.createElement("span");
		spanRightDom.style.cssText = `
				display:block;
				width:40px;
				height:60px;
				margin-top:10px;
				margin-left:2px;
				background-image:url(indexImg/ui.png);
				background-position:-42px -122px`;
		rightDivDom.appendChild(spanRightDom);
	}

	//添加事件
	addEvent(){
		//2、鼠标放在轮播图上会停止
		this.boxDom.onmouseover = ()=>{
			this.stopPlay();	
		}

		//3、鼠标离开轮播图会继续播放
		this.boxDom.onmouseout = ()=>{
			this.autoPlay();	
		}

		let obj = this;
		//4、点击豆豆，跳转到对应的图片
		for(var i=0;i<this.liDoms.length;i++){
			this.liDoms[i].onclick = function(){
				obj.goImg(parseInt(this.getAttribute("index")));
			};
		}

		//5、左右按钮
		let leftBtn = this.arrowBoxDom.firstElementChild;
		leftBtn.onclick = ()=>{
			this.preImg();
		}
		let rightBtn = this.arrowBoxDom.lastElementChild;
		rightBtn.onclick = ()=>{
			this.nextImg();
		}
	}

	//自动播放
	autoPlay(){
		if(this.myTimer!=null){//如果有定时器，就不再启动新的定时器了
			return;//
		}

		this.myTimer = setInterval(()=>{
			//一、改变数据
			//1、计算数据（改变图片的下标）
			var preOrd = this.ord;//上一张的序号 4
			this.ord++;//5

			//2、边界
			if(this.ord>this.imgs.length-1){
				this.ord = 0;
			}

			//二、改变外观
			this.reRender(preOrd,this.ord);
		},this.timeSpace)

	}
	
	//停止播放
	stopPlay(){
		window.clearInterval(this.myTimer);//根据定时器编号，找到定时器对象，进行清除
		this.myTimer = null;//把定时器编号清除掉
	}

	//跳转到对应的图片上
	//参数：图片的下标
	// goImg(3);
	goImg(transOrd){
		//一、改变数据
		//1、计算数据（改变图片的下标）
		var preOrd = this.ord;//上一张的序号 
		this.ord = transOrd;//5

		//2、边界
		if(this.ord>this.imgs.length-1){
			this.ord = 0;
		}else if(this.ord<0){
			this.ord = this.imgs.length-1;
		}

		//二、改变外观
		this.reRender(preOrd,this.ord);
	}

	//改变外观的函数(重新渲染)
	reRender(preOrd,ord){
		// //1)、改图片
		// this.imgDoms[preOrd].style.opacity = 1;
		this.imgDoms[ord].style.opacity = 0;		
		this.fadeInOut(this.imgDoms[ord],this.imgDoms[preOrd],this.timeSpace/2);
		
		//2)、改豆豆的颜色
		this.liDoms[preOrd].style.backgroundColor=this.douColor;
		this.liDoms[ord].style.backgroundColor= this.douHighColor;
		// 3)、改豆豆的透明度
		this.liDoms[preOrd].style.opacity=this.douOpacity;
		this.liDoms[ord].style.opacity= this.douHighOpacity;
	}

	preImg(){
		this.goImg(this.ord-1);
	}

	nextImg(){
		this.goImg(this.ord+1);
	}

	//两个dom元素的淡入和淡出
	//参数：
	//domObjIn
	//domObjOut
	//时长
	fadeInOut(domObjIn,domObjOut,timeLong){
		var currOpacity = 0;
		var step = 1/(timeLong/10);
		var myTimer = setInterval(function(){
			//一、改变数据（逻辑）
			//1、修改数据
			currOpacity+=step;//
			//2、边界处理
			if(currOpacity>=1){
				currOpacity=1;
				window.clearInterval(myTimer);
			}
			//二、改变外观（呈现）
			domObjIn.style.opacity = currOpacity;
			domObjOut.style.opacity = 1- currOpacity;
		},10);
	}

}

class BannerPlayerSm{
	//构造函数
	constructor(obj,boxDom){
		//1、属性（数据）
		this.boxDom = boxDom;
		this.imgDoms = [];//存储所有的图片标签
		this.liDoms = [];//存储所有的li标签（豆豆）
		this.arrowBoxDom = null;//存储左右箭头的容器
		let defaultObj = {
			width:400,
			height:300,
			imgs:["img/01.jpg","img/02.jpg","img/03.jpg","img/04.jpg"],
			timeSpace:1000,
			douColor:"pink",
			douHighColor:"red",
			douOpacity:.9,
			douHighOpacity:1,
			douWidth:10,
			douHeight:10,
			douPos:"下",
			douIsCircle:true,
			myTimer:null,
			ord:0,
			type:"fade"//切换效果的类型
		}

		for(let key in defaultObj){
			if(obj[key]){
				this[key] = obj[key];
			}else{
				this[key] = defaultObj[key];
			}
		}
		//2、创建外观（把数据应用在外观上）
		this.render();
		this.addEvent();
		this.autoPlay();
	}

	//外观（html和css代码）
	render(){
		this.boxDom.style.position = "relative";

		//1、创建图片
		for(let i=0;i<this.imgs.length;i++){
			let aDom = document.createElement("a");
			aDom.href = "#";
			let imgDom = document.createElement("img");
			imgDom.src = this.imgs[i];
			imgDom.style.cssText = `
				position: absolute;
				left:0px;
				top:0px;
				width: 100%;
				height: 100%;	
				z-index: 1;`;	

			switch(this.type){
				case "fade":imgDom.style.opacity = (i==0?1:0);break;
			}
			if(i==0){
				imgDom.style.zIndex = 2;
			}
			aDom.appendChild(imgDom);
			this.boxDom.appendChild(aDom);
			this.imgDoms.push(imgDom);
		}
		//2、创建豆豆
		//1)、豆豆的容器ul
		let doudouBox = document.createElement("ul");
		doudouBox.style.cssText = `
				padding:0px;
				position: absolute;
				list-style: none;
				margin-left:-156px;
				z-index: 3;`;
		if(this.douPos=="上"){
			console.log((this.width-(this.douSize*(this.imgs.length*2-1)))/2);
			doudouBox.style.left = `${(this.width-(this.douWidth*(this.imgs.length*2-1)))/2}px`;
			doudouBox.style.top = "20px";			
		}else if(this.douPos=="下"){
			// doudouBox.style.right = "20px";//
			doudouBox.style.left = `${(this.width-(this.douWidth*(this.imgs.length*2-1)))/2}px`;
			doudouBox.style.bottom = "120px";
		}	
		this.boxDom.appendChild(doudouBox);
		//2)、豆豆 li
		for(let i=0;i<this.imgs.length;i++){
			let liDom = document.createElement("li");
			liDom.setAttribute("index",i);
			liDom.style.cssText = `
				float:left;
				width:${this.douWidth}px;
				height: ${this.douHeight}px;
				margin-right: ${this.douSize}px;
				background-color: ${this.douColor};
				opacity: ${this.douOpacity};
				margin-right:8px;
			`;
			if(!this.douIsCircle){
				liDom.style.borderRadius="50%";
			}
			if(i==0){
				liDom.style.backgroundColor=this.douHighColor;
				liDom.style.opacity=this.douHighOpacity;
			}
			doudouBox.appendChild(liDom);
			this.liDoms.push(liDom);//放在数组里，方便其它函数使用
		}

		//3、创建左右按钮
		//1)、创建左右箭头的容器
		this.arrowBoxDom = document.createElement("div");

		this.arrowBoxDom.style.cssText = `
				position: absolute;
				left:0px;
				top:${(this.height-60)/2}px;
				width: 100%;
				height: 80px;
				z-index: 4;
				display:none;`;
		this.boxDom.appendChild(this.arrowBoxDom);

		//2)、创建左右箭头
		let leftDivDom = document.createElement("div");
		leftDivDom.style.cssText = `
				float:left;
				height: 100%;
				width: 44px;
				margin-left:0px;
				margin-right:2px;
				background-color: black;
				opacity: 0.2;`;
		this.arrowBoxDom.appendChild(leftDivDom);
		let spanLeftDom = document.createElement("span");
		spanLeftDom.style.cssText = `
				display:block;
				width:40px;
				height:60px;
				margin-top:10px;
				background-image:url(indexImg/ui.png);
				background-position:0 -122px`;
		leftDivDom.appendChild(spanLeftDom);
		let rightDivDom = document.createElement("div");
		rightDivDom.style.cssText = `
				float:right;
				height: 100%;
				width: 44px;
				background-color: black;
				opacity: 0.2;`;
		this.arrowBoxDom.appendChild(rightDivDom);
		let spanRightDom = document.createElement("span");
		spanRightDom.style.cssText = `
				display:block;
				width:40px;
				height:60px;
				margin-top:10px;
				margin-left:4px;
				background-image:url(indexImg/ui.png);
				background-position:-42px -122px`;
		rightDivDom.appendChild(spanRightDom);
	}

	//添加事件
	addEvent(){
		//2、鼠标放在轮播图上会停止
		this.boxDom.onmouseover = ()=>{
			this.stopPlay();	
		}

		//3、鼠标离开轮播图会继续播放
		this.boxDom.onmouseout = ()=>{
			this.autoPlay();	
		}

		let obj = this;
		//4、点击豆豆，跳转到对应的图片
		for(var i=0;i<this.liDoms.length;i++){
			this.liDoms[i].onclick = function(){
				obj.goImg(parseInt(this.getAttribute("index")));
			};
		}

		//5、左右按钮
		let leftBtn = this.arrowBoxDom.firstElementChild;
		leftBtn.onclick = ()=>{
			this.preImg();
		}
		let rightBtn = this.arrowBoxDom.lastElementChild;
		rightBtn.onclick = ()=>{
			this.nextImg();
		}

		// 划过大盒子出现左右按钮
		this.boxDom.onmouseover = ()=>{
			this.arrowBoxDom.style.display = "block";
		}
		this.boxDom.onmouseout = ()=>{
			this.arrowBoxDom.style.display = "none";
		}
	}

	//自动播放
	autoPlay(){
		if(this.myTimer!=null){//如果有定时器，就不再启动新的定时器了
			return;//
		}

		this.myTimer = setInterval(()=>{
			//一、改变数据
			//1、计算数据（改变图片的下标）
			var preOrd = this.ord;//上一张的序号 4
			this.ord++;//5

			//2、边界
			if(this.ord>this.imgs.length-1){
				this.ord = 0;
			}

			//二、改变外观
			this.reRender(preOrd,this.ord);
		},this.timeSpace)

	}
	
	//停止播放
	stopPlay(){
		window.clearInterval(this.myTimer);//根据定时器编号，找到定时器对象，进行清除
		this.myTimer = null;//把定时器编号清除掉
	}

	//跳转到对应的图片上
	//参数：图片的下标
	// goImg(3);
	goImg(transOrd){
		//一、改变数据
		//1、计算数据（改变图片的下标）
		var preOrd = this.ord;//上一张的序号 
		this.ord = transOrd;//5

		//2、边界
		if(this.ord>this.imgs.length-1){
			this.ord = 0;
		}else if(this.ord<0){
			this.ord = this.imgs.length-1;
		}

		//二、改变外观
		this.reRender(preOrd,this.ord);
	}

	//改变外观的函数(重新渲染)
	reRender(preOrd,ord){
		// //1)、改图片
		// this.imgDoms[preOrd].style.opacity = 1;
		this.imgDoms[ord].style.opacity = 0;		
		this.fadeInOut(this.imgDoms[ord],this.imgDoms[preOrd],this.timeSpace/2);
		
		//2)、改豆豆的颜色
		this.liDoms[preOrd].style.backgroundColor=this.douColor;
		this.liDoms[ord].style.backgroundColor= this.douHighColor;
		// 3)、改豆豆的透明度
		this.liDoms[preOrd].style.opacity=this.douOpacity;
		this.liDoms[ord].style.opacity= this.douHighOpacity;
	}

	preImg(){
		this.goImg(this.ord-1);
	}

	nextImg(){
		this.goImg(this.ord+1);
	}

	//两个dom元素的淡入和淡出
	//参数：
	//domObjIn
	//domObjOut
	//时长
	fadeInOut(domObjIn,domObjOut,timeLong){
		var currOpacity = 0;
		var step = 1/(timeLong/10);
		var myTimer = setInterval(function(){
			//一、改变数据（逻辑）
			//1、修改数据
			currOpacity+=step;//
			//2、边界处理
			if(currOpacity>=1){
				currOpacity=1;
				window.clearInterval(myTimer);
			}
			//二、改变外观（呈现）
			domObjIn.style.opacity = currOpacity;
			domObjOut.style.opacity = 1- currOpacity;
		},10);
	}

}





