<?php
	header("Content-type:text/html;charset=utf-8");

	//1、接受前端的输入（接受前端传来的数据）；

	$username = $_POST['username'];//接受到用户名
	$userpass = $_POST['userpass'];
	
	//2、保存
	//1)、建立连接
	$conn = mysql_connect('localhost','root','root');

	if(!$conn){
		die('连接失败');
	}
	//2)、选择数据库
	mysql_select_db('fawang',$conn);

	//3)、执行SQL语句
	$sqlstr="select * from vip where username='$username' and userpass='$userpass'";
	$result = mysql_query($sqlstr);// $result:是表格（查询结果）


	//4)、关闭数据库
	mysql_close($conn);

	//3、响应
	//判断查询出来的表格的行数。
	$rows = mysql_num_rows($result);

	if($rows==1){
		echo 1;
	}else{
		echo 0;
	}
	// if($rows==1){
	// 	echo "亲，登录成功";
	// 	header('Location: index.html');
	// }else{
	// 	echo "亲，登录失败，请重新<a href='login.html'>登录</a>！";
	// }
?>