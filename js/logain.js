function focusFn(){
	//获得焦点显示×
	$("#username").focus(function(){
		$(this).next().css('display','block');
	});	$("#password").focus(function(){
		$(this).next().css('display','block');
	});
	// 点击清空内容
	let nameDelBtn = $("#username").next();
	nameDelBtn.click(function(){
		$(this).prev().val("");
	});

	let passDelBtn = $("#password").next();
	passDelBtn.click(function(){
		$(this).prev().val("");
	});
	$("#btn").click(function(){
		ajaxByPromise("loginCheck.php","post",{username:$("#username").val(),userpass:$("#password").val()},true)
		.then(
			 	(str)=>{
					if(str==1){
						if ($("#checkId").attr('checked')) {
							saveCookie("username",$("#username").val(),7);
							saveCookie("userpass",$("#password").val(),7);
						}
						window.location.href = "index.html";
					}else{
						alert("亲，登录失败,请检查账号密码是否正确,请重新");
					}
				},
				(str)=>{
			 		alert(str);
				 }
		);
	});
	//注册跳转
	// $("#regAbtn").click(function(){
	// 	window.location.href = "register.html";
	// });


	// 二维码移动
	let myTimeImg1 = null;
	let myTimeImg2 = null;
	let imgMaLeft1 = 90;
	$("#img_ma").mouseenter(function(){
		if(myTimeImg1){
			return;
		}
		myTimeImg1 = setInterval(() => {
			imgMaLeft1= imgMaLeft1 - 2;
			if(imgMaLeft1<=10){
				imgMaLeft1 = 10;
				window.clearInterval(myTimeImg1);
				myTimeImg1 = null;
				$("#img_ma").next().css('display','block');
			}
			$("#img_ma").css("left",(imgMaLeft1 + "px"));
		}, 10);
	});
	$("#img_ma").mouseleave(function(){
		$("#img_ma").next().css('display','none');
		if(myTimeImg2){
			return;
		}
		myTimeImg2 = setInterval(() => {
			imgMaLeft1= imgMaLeft1 + 2;
			if(imgMaLeft1>=90){
				imgMaLeft1 = 90;
				window.clearInterval(myTimeImg2);
				myTimeImg2 = null;
			}
			$("#img_ma").css("left",(imgMaLeft1 + "px"));
		}, 10);
	});

	// tab切换
	$(".sao_ma_2").click(function(){
		$(".logain_ma").css('display','block');
		$(".logain_ma").prev().css('display','none');
		$(this).css('color','#e3101e');
		$(".sao_ma_3").css('color','#5e5e5e');
	});
	$(".sao_ma_3").click(function(){
		$(".logain_input").css('display','block');
		$(".logain_input").next().css('display','none');
		$(this).css('color','#e3101e');
		$(this).prev().css('color','#5e5e5e');
	});
	
}

//nidawd

$(document).ready(function(){
	focusFn();
	
});


