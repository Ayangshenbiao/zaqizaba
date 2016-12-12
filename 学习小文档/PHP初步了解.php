
<!-- 创建php文件 后缀名.php -->
以<?php开头  以?>结尾

1.声明变量 是用$直接跟上变量名
var name = "hanmy";
$name = "hanmy";

2.所有的语句结束后都要用";"

3.for in  foreach(数组名 as 变量){
	
}

4.创建数组
var arr = ["hanmy","zhoushujuan","wuchengan"];
arr[0]
$arr = array("hanmy","zhoushujuan","wuchengan");

$arr2 = array("name"=>"hanmy")
$arr2["name"];

字符串拼接 .(点符号)
<!-- 1.索引素组 2.关联数组-->

如何运行php文件

1. 打开编辑器
<?php
echo "Hello World";
?> 
保存为test.php
放在xampp的htdocs文件夹下

2.运行xampp
3.打开浏览器
输入http://localhost/test.php
就可以运行了(不可以直接右键用chrome等打开 显示不出来正确结果)