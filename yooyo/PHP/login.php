<?php
header("Content-Type: application/json;charset=utf-8");

//$username = $_GET['username'];
//$pwd = $_GET['pwd'];

$sql = "SELECT * FROM `login` WHERE 1";

$res = getlist($sql);

//if($res){
//    $info["status"] = 1;
//    $info["info"] = "登录成功";
//}else{
//    $info["status"] = 0;
//    $info["info"] = "登录失败";
//}
echo json_encode($res);


//查询数据函数
function getlist($sql){
	//连接数据库
	$link = mysqli_connect("localhost","root","","php-project");
	//设置编码格式
	mysqli_query($link, "set names utf8");
	//执行sql
	$res = mysqli_query($link, $sql);
//常用
	$arr = array();
	while($list = mysqli_fetch_assoc($res)){
		$arr[] = $list;
	}
    return $arr;

}




 ?>