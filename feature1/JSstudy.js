/**
 * Created by Administrator on 2015/6/23.
 */
//常用互动方法


/*
//输出内容
document.write("nihao");
//警告消息对话框
alert("警告");
//提问消息对话框
confirm("确定是孙");
//打开新窗口 window.open(<URL>, <窗口名称>, <参数字符串>)
//window.open('http://www.imooc.com','_blank','width=300,height=200,menubar=no,toolbar=no, status=no,scrollbars=yes')
window.open("http://www.apple.com.cn");
//关闭窗口
window.close();//关闭本窗口
mywin=window.open("http://www.baidu.com");
mywin.close();//关闭指定窗口
*/

/*
//DOM基本操作
//document.getElementsById
var newh = document.getElementById("title");
document.write(newh.innerHTML);

//HTML样式 Object.style.property=new style
var newsty = document.getElementById("con");
newsty.style.color= "red";
newsty.style.background="blue";

//显示或者隐藏
function hide(){
    document.getElementById("con").style.display="none";
}
function show(){
    document.getElementById("con").style.display="block";
}

 <p id="con">today is a bad day</p>
 <form>
 <input type="button" onclick="hide()" value="隐藏"/>
 <input type="button" onclick="show()" value="显示"/>
 </form>



//网页交互
function dianji(){
    document.write("鼠标单击");
}

function move(){
    alert("鼠标经过");
}

function leave(){
    alert("鼠标离开");
}

function focusa(){
    alert("光标聚焦");
}

function blura(){
    alert("光标失焦");
}

function mes(){
    alert("选中");
}

function mes1(){
    alert("改变");
}

<form>
    <input type="button" name="btn" value="单击" onclick="dianji()">
     <input type="button" name="btn1" value="鼠标经过" onmousemove="move()">
    <input type="button" name="btn2" value="鼠标离开" onmouseout="leave()">
    <input type="text" name="tex1" value="光标聚焦" onfocus="focusa()">
    <input type="text" name="tex2" value="光标失焦" onblur="blura()">
    <input type="text" name="tex3" value="选中" onselect="mes()">
    <input type="text" name="tex4" value="改变" onchange="mes1()">
</form>


//JS内置对象
//date
//返回设置年份
var mydate=new Date();
document.write(mydate+"<br>");
document.write(mydate.getFullYear()+"<br>");
mydate.setFullYear(81);
document.write(mydate.getFullYear()+"<br>");

//返回星期
var weekday=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
var num=mydate.getDay();
document.write(mydate.getDay()+"<br>");
document.write(weekday[num]+"<br>");

document.write(mydate);
mydate.setTime(mydate.getTime()+60*60*1000);
document.write(mydate);


//string
//小写转换成大写
var newStr = "I love you";
var myStr = newStr.toUpperCase();
document.write(myStr+"<br>");
document.write(newStr[2]+"<br>");
//返回指定字符首次出现的位置indexOf()
document.write(newStr.indexOf("o",0)+"<br>");
document.write(newStr.split(" ")+"<br>");
//提取两个字符之间的字符串
document.write(newStr.substring(1,5)+"<br>");
//提取开始字符后的多少个字符串
document.write(newStr.substr(1,5)+"<br>");


//math对象
var a = 5.3849839;
document.write(a+"<br>");
document.write(Math.ceil(a)+"<br>");//向上取整
document.write(Math.floor(a)+"<br>");//向下取整
document.write(Math.round(a)+"<br>");
document.write(Math.random()*10+"<br>");


//Array对象
var myArr1 = [0,1,1,3];
var myArr2 = [5,4,3,1];
document.write(myArr1.concat(4,5)+"<br>");
document.write(myArr1.concat(myArr2)+"<br>");
//以一定的分隔符返回一个字符串
document.write(myArr1.join("。")+"<br>");
//颠倒顺序
document.write(myArr1.reverse()+"<br>");
//选定返回的元素，与string的substr相似
document.write(myArr1.slice(0)+"<br>");
//排序
function sortnum(a,b){
    return a-b;//升序，降序为b-a
}
document.write(myArr1.sort(sortnum));
*/

//浏览器对象navigator
