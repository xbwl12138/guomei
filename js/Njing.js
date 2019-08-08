
// N倍放大镜
// 参数：domOnj,放大倍数

class NbeiJing{
	constructor(obj,domObj,n){
		this.domObj = domObj;    	//容器
		this.n = n;             	 //放大倍数
		this.boxDom = null;		
		this.mirrorBoxDom = null;
		this.showBoxDom = null;	
		this.ulArr = []; //存放需要移动的ul
		this.liArr = []; //存放所有的li
		this.btnArr = []; //存放左右按钮		
		let defaultImg = {      	 //默认值
			imgs:"img/1100.jpg",   	//要放大的图片
			width:500,				//盒子宽 = 图片的宽高
			height:600,				//盒子高
			mirrorWidth:120,		
			mirrorHeight:140,
			mirrorBG:"img/wang.png"  //背景
		}
		for(let key in defaultImg){
			if (obj[key]) {
				this[key] = obj[key];
			}else{
				this[key] = defaultImg[key];
			}
		}


		this.render();
		this.addEvent();
		this.btnMove();
	}
	// 动态创建
	render(){
		// 创建大盒子
		this.boxDom = document.createElement("div");
		this.boxDom.style.cssText = `
				width: ${this.width}px;
				height: ${this.height}px;
				background-image:url(${this.imgs});
				background-size: ${this.width}px ${this.height}px;
				position: relative;`;
		// 创建两个小盒子
		this.mirrorBoxDom =document.createElement("div");
		this.mirrorBoxDom.style.cssText = `
				width: ${this.mirrorWidth}px;
				height: ${this.mirrorHeight}px;
				background-image:url("${this.mirrorBG}");
				opacity: .8;
				position: absolute;
				display: none;
				cursor:move`;
		// 将mirrorBox添加进大盒子
		this.boxDom.appendChild(this.mirrorBoxDom);
		// 闯将show盒子
		this.showBoxDom =document.createElement("div");
		this.showBoxDom.style.cssText = `
				position: absolute;
				left: ${this.width+10}px;
				width: ${this.width}px;
				height: ${this.height}px;
				background-image:url(${this.imgs});
				background-size: ${this.width*this.n}px ${this.height*this.n}px;
				display: none;
				z-index:99;`;
		// 将showBox添加进大盒子
		this.boxDom.appendChild(this.showBoxDom);
        this.domObj.appendChild(this.boxDom);
        // 创建ul的大盒子
        let ulJingBoxDom = document.createElement("div");
        ulJingBoxDom.style.cssText = `
        margin-top:8px;
            width:${this.width}px;
            height:60px;`;
        this.domObj.parentNode.appendChild(ulJingBoxDom);
        // 创建左箭头
        let leftDom = document.createElement("div");
        leftDom.style.cssText = `
            width:11px;
            height:32px;
            float:left;
            padding-left:10px;
            padding-top:22px;`;
        ulJingBoxDom.appendChild(leftDom);
        let leftIDom1 = document.createElement("i");
        leftIDom1.style.cssText = `
            display:block;
            background:url(shoppingImg/bg-sprite.png) 0 -834px;
            width:11px;
            height:21px;
		;`;
		this.btnArr.push(leftDom);
        leftDom.appendChild(leftIDom1);
        // 创建存放ul的盒子
        let ulBoxDom = document.createElement("div");
        ulBoxDom.style.cssText = `
            width:400px;
            float:left;
            margin-left:4px;
            overflow:hidden;
			position: relative;
			height:62px;`;
        ulJingBoxDom.appendChild(ulBoxDom);
        // 创建ul
        let ulDom = document.createElement("ul");
        ulDom.style.cssText = `
            width:580px;
            float:left;
            position:absolute;
            left:0px;
            top:0px;
            height:60px;`;
		this.ulArr.push(ulDom);
        ulBoxDom.appendChild(ulDom);
        // 创建li
        for(let i=0;i<7;i++){
            let liDom = document.createElement("li");
            liDom.style.cssText = `
                width:60px;
                float:left;
                background:url(shoppingImg/shopping_${i+1}.webp);
                background-size:60px 60px;
				text-align:center;
				border:1px solid #fff;	
                margin:0 10px;
				height:60px;`;
			this.liArr.push(liDom);
            ulDom.appendChild(liDom);  
        }
        // 创建右箭头
        let rightDom = document.createElement("span");
        rightDom.style.cssText = `
            width:11px;
            height:32px;
            float:left;
            padding-left:10px;
            padding-top:22px;`;
        let leftIDom2 = document.createElement("i");
        leftIDom2.style.cssText = `
            display:block;
            background:url(shoppingImg/bg-sprite.png) 0 -865px;
            width:11px;
            height:21px;
        ;`;
		this.btnArr.push(rightDom);
        rightDom.appendChild(leftIDom2);
        ulJingBoxDom.appendChild(rightDom);

	}
	addEvent(){
		// 鼠标移动事件
		this.boxDom.onmousemove = (event)=>{
			let evt = event || W.event;
			let left1 = evt.pageX - this.boxDom.offsetLeft - this.mirrorBoxDom.offsetWidth/2;
			let top1 = evt.pageY - this.boxDom.offsetTop - this.mirrorBoxDom.offsetHeight/2;
			// 边界处理
			if(left1<0){
				left1 = 0;
			}else if (left1>this.boxDom.offsetWidth - this.mirrorBoxDom.offsetWidth) {
				left1 = this.boxDom.offsetWidth - this.mirrorBoxDom.offsetWidth;
			}
			if(top1<0){
				top1 = 0;
			}else if (top1>this.boxDom.offsetHeight - this.mirrorBoxDom.offsetHeight) {
				top1 = this.boxDom.offsetHeight - this.mirrorBoxDom.offsetHeight;
			}

			this.mirrorBoxDom.style.left = left1 + "px";
			this.mirrorBoxDom.style.top = top1 + "px";

			this.showBoxDom.style.backgroundPosition = `-${left1*this.n}px -${top1*this.n}px`;
		}
		// 鼠标进入
		this.boxDom.onmouseover = ()=>{
			this.showBoxDom.style.display = "block";
			this.mirrorBoxDom.style.display = "block";
		}
		// 鼠标移出
		this.boxDom.onmouseout = ()=>{
			this.showBoxDom.style.display = "none";
			this.mirrorBoxDom.style.display = "none";
		}
		let ord;
		for(let i=0;i<this.liArr.length;i++){
			this.liArr[i].onmouseover = ()=>{
				ord = i;
				this.liArr[i].style.border = "1px solid red";
				// this.liArr[ord].style.border = "1px solid #fff";

				this.boxDom.style.backgroundImage = getStyle(this.liArr[i],"background-image");
				this.showBoxDom.style.backgroundImage = getStyle(this.liArr[i],"background-image");

			}
			this.liArr[i].onmouseout = ()=>{
				ord = i;
				this.liArr[i].style.border = "1px solid #fff";
				// this.liArr[ord].style.border = "1px solid #fff";
			}
		}
		

				
	}
	btnMove(){
		// 左右按钮移动事件
		let myTimeleft = null;
		let left1 = 0;
		let ord;
		let myTimeright = null;
		this.btnArr[0].onclick = ()=>{
			if(myTimeleft){
				return;
			}
			myTimeleft = setInterval(()=>{
				left1 = left1 - 2;
				ord = Math.abs(left1);
				if(left1<= -400){
					left1 = -400;
				}
				if(ord%400 == 0){
					window.clearInterval(myTimeleft);
					myTimeleft = null;
				}
				this.ulArr[0].style.left = left1 + "px";
			},10);
		}
		this.btnArr[1].onclick = ()=>{
			if(myTimeright){
				return;
			}
			console.log(left1);
			myTimeright = setInterval(()=>{
				left1 = left1 + 2;
				ord = Math.abs(left1);
				if(left1>= 0){
					left1 = 0;
				}
				if(ord%400 == 0){
					window.clearInterval(myTimeright);
					myTimeright = null;
				}
				this.ulArr[0].style.left = left1 + "px";
			},10);
		}
	}
    
}


