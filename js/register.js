
var arr = ["username","userpass","userphone"];
// 密码
$("#userpassId").onfocus = function(){
	$("#userPassTit").innerHTML = "6-20个字符，包含字母、数字或符号";
	$("#userPassTit").style.display = "block";
};
$("#userpassId").onblur = function(){
	if(check(this.value,"userpass")){
		this.nextElementSibling.style.display = "block";
		$("#userPassTit").style.display = "none";
		$("#checkpass").removeAttribute('disabled');
		$("#checkpass").style.backgroundColor = "#fff";
	}else{
		$("#userPassTit").innerHTML = "请输入正确的密码";
		$("#userPassTit").style.color = "red";
		this.nextElementSibling.style.display = "none";
	}
}
// 确认密码
$("#checkpass").onfocus = function(){
	$("#checkpassTit").innerHTML = "请再次输入密码";
	$("#checkpassTit").style.display = "block";
};
$("#checkpass").onblur = function(){
	if(checkpass()){
		this.nextElementSibling.style.display = "block";
		$("#checkpassTit").style.display = "none";
	}else{
		$("#checkpassTit").innerHTML = "两次密码输入不一致";
		$("#checkpassTit").style.color = "red";
		this.nextElementSibling.style.display = "none";
	}
}
// 手机
$("#userphoneId").onfocus = function(){
	$("#userPhoneTit").innerHTML = "请输入11位手机号码";
	$("#userPhoneTit").style.display = "block";
};
$(`#userphoneId`).onblur = function(){
	if(check(this.value,"userphone")){
		this.nextElementSibling.style.display = "block";
		$("#userPhoneTit").style.display = "none";
	}else{
		$("#userPhoneTit").innerHTML = "请输入正确的密码";
		$("#userPhoneTit").style.color = "red";
		this.nextElementSibling.style.display = "none";
	}
}

// 用户名
$("#usernameId").onfocus = function(){
	$("#userNameTit").innerHTML = "4-20个字符，支持汉字、字母、数字及”_“、”-“组合";
	$("#userNameTit").style.display = "block";
};
$(`#usernameId`).onblur = function(){
	this.nextElementSibling.innerHTML = "";
	if(check(this.value,"username")){//前端验证
		//后端验证
		ajaxByPromise("checkuser.php","get",{username:$("#usernameId").value},true)
		.then(
			 	(str)=>{
					if(str=="1"){
						$("#userNameTit").innerHTML = "用户名已经存在";
						$("#userNameTit").style.color = "red";
						this.nextElementSibling.style.display = "none";
					}else{
						this.nextElementSibling.style.display = "block";
						$("#userNameTit").style.display = "none";
					}
				},
				(str)=>{
			 		alert(str);
			 	}
		);
	}else{
		$("#userNameTit").innerHTML = "用户名格式不正确";
		$("#userNameTit").style.color = "red";
		this.nextElementSibling.style.display = "none";
	}
}

//注册按钮绑定事件
$("#btnReg").onclick = function(){
	//1、先看前端验证是否全部通过
	if(!frontCheck() || !checkpass()){
		alert("请正确填写以上信息");
		return;
	}
	//2、后端注册
	ajaxByPromise("checkuser.php","get",{username:$("#usernameId").value},true)
		.then(
			 	(str)=>{
					if(str!="1"){
						regSave();
					}else{
						alert("用户名已经存在！");
						$("#userNameTit").innerHTML = "用户名已经存在";
						$("#userNameTit").style.color = "red";
						$("#userNameId").style.display = "none";
					}
				},
				(str)=>{
			 		alert(str);
			 	}
		);
}


//前端验证
function frontCheck(){
	for(let i in arr){
		if(!check($(`#${arr[i]}Id`).value,arr[i])){
			return false;
		}
	}
	return true;
}

//重复密码的验证
function checkpass(){
	return $("#userpassId").value == $("#checkpass").value;
}

//用户名是否存在
var isExistsUser = false;
//后端验证用户名是否存在
function afterCheckUser(func){
	 
}

//后端注册
function regSave(){
	ajaxByPromise(
		"regSave.php",
		"post",
		{
			username:$("#usernameId").value,
		    userpass:$("#userpassId").value,
		    userphone:$("#userphoneId").value
		},
		true
		).then(
		(str)=>{
			if(str==1){
				open('skip.html')
			}else{
				alert("亲，不好意思，注册失败！请重新输入内容");
			}
		},(str)=>{
			alert(str);
		});
}

function $(str){
	if(str.charAt(0)=="#"){
		return document.getElementById(str.substring(1));
	}else if(str.charAt(0)=="."){
		return document.getElementsByClassName(str.substring(1));
	}else{
		return document.getElementsByTagName(str);
	}
}