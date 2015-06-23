/**
 * Created by Administrator on 2015/6/23.
 */
var isIE = navigator.userAgent.indexOf("MSIE") > -1;
//obj tooltip超链接元素
//id tooltip提示框

//html tooltip提示框HTML
function showToolTip(obj,id,html,width,height){
    if(document.getElementById(id)==null){
        //创建 <div class="tooltip-box" id="xx"></div>
        var TooltipBox =document.createElement("div");
        TooltipBox.className = "tooltip-box";
        TooltipBox.id = id;
        TooltipBox.innerHTML = html;
        obj.appendChild(TooltipBox);

        TooltipBox.style.width = width? width+"px":"auto";
        TooltipBox.style.height = height? height+"px":"auto";
        if(!width && isIE){
            TooltipBox.style.width = TooltipBox.offsetWidth;
        }

        TooltipBox.style.position = "absolute";
        TooltipBox.style.display = "block";

        var left = obj.offsetLeft ;
        var top = obj.offsetTop + 20;
        //left 不让Tooltip提示框超出浏览器
        if(left + TooltipBox.offsetWidth > document.body.clientWidth){
            var demoleft = document.getElementById("demo").offsetLeft;
            left = document.body.clientWidth - TooltipBox.offsetWidth - demoleft;
            if(left < 0){
                left = 0;
            }
        }

        TooltipBox.style.left = left+ "px";
        TooltipBox.style.top = top+ "px";


        obj.onmouseleave = function(){
          document.getElementById(id).style.display = "none";
        }
    }
    else{
        //显示
        document.getElementById(id).style.display = "block";
    }
}
var t1 = document.getElementById("tooltip1");
var t2 = document.getElementById("tooltip2");
var t3 = document.getElementById("tooltip3");
var t4 = document.getElementById("tooltip4");
var t5 = document.getElementById("tooltip5");
var t6 = document.getElementById("tooltip6");


t1.onmouseenter = function(){
    showToolTip(this,"t1","中华人民共和国",200);
}
t2.onmouseenter = function(){
    showToolTip(this,"t2","NBA",200);
}
t3.onmouseenter = function(){
    showToolTip(this,"t3","春晓",200);
}
t4.onmouseenter = function(){
    showToolTip(this,"t4","<img src='u=319527388,3785426784&fm=21&gp=0.jpg'width='400'/>",200);
}
t5.onmouseenter = function(){
    var _html="<div ><img src='u=319527388,3785426784&fm=21&gp=0.jpg' ><p><span>bin</span></p><p>我的简历</p></div> ";
    showToolTip(this,"t5",_html,500);
}
t6.onmouseenter = function(){
    var _html = "<iframe src='http://www.baidu.com/' width='480' height='300'></iframe>"
    showToolTip(this,"t6",_html,600);
}

//优化编码
//1.简化代码
//var GetEI = function(id){
// return document.getElementById(id);
// }
//2.优化事件绑定方式
//functions addEvent(element,event,callbackFunction){
//  if(element.addEventListener){
//      element.addEventListener(event,callbackFunction,false); //W3C标准写法
// }else if(element.attachEvent){
//      element.attachEvent('on' + event, callbackFunction);//IE写法
// }
// }
//3.冒泡方法
//addEvent(demo, "mouseover",function(e){
//  var event = e || window.event//(IE);
//  var target = event.target || event.srcElement;

// if(target.classNamr == "tooltip"){
//  var _html;
//  var _id;
//  var _width = 200;
//
//  switch(target.id){
// case "tooltip1":
//  _id = "t1";
//  _html = "中华人民共和国";
//  break;
//case "tooltip2":
//  _id = "t2";
//  _html = "中华人民共和国";
//  break;
// }

//  showToolTip(target,_id,_html,_width);
// }
// })