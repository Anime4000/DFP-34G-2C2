
function moveErrLayer(left, top)
{
document.getElementById("myLayer").style.left = left + "px";
document.getElementById("myLayer").style.top  = top  + "px";
}
function ShowNote(notetitle, msg)
{
document.getElementById("errnote").innerHTML = notetitle;
document.getElementById("errmsg").innerHTML  = msg;
document.getElementById("myLayer").style.visibility = "visible" ;
}
function ShowNoteNew(ctl, notetitle, msg)
{
document.getElementById("errnote").innerHTML = notetitle;
document.getElementById("errmsg").innerHTML  = msg;
document.getElementById("myLayer").style.visibility = "visible" ;
if(ctl != null && ctl.disabled == false)
{
try
{
ctl.focus();
}
catch(e)
{
}
}
}
function ShowNoteForCom(frmid, fntid, msg)
{
var fntmsg;
var strmsg;
if(document.getElementById(fntid) == null)
{
if(fntid == null)
fntmsg = "";
else
fntmsg = fntid;
}
else
{
fntmsg = document.getElementById(fntid).innerHTML;
}
strmsg = fntmsg + msg;
ShowNoteNew(document.getElementById(frmid), "Note", strmsg);
}
function ShowError(ctl, msg)
{
var tmpStr = g_errorInfo;
if(tmpStr == "undefined")
{
tmpStr = "Error";
}
document.getElementById("errnote").innerHTML = tmpStr;
document.getElementById("errmsg").innerHTML = msg;
document.getElementById("myLayer").style.visibility = "visible" ;
if(ctl != null && ctl.disabled == false)
{
try
{
ctl.focus();
}
catch(e)
{
}
}
}
function ShowErrorForCom(frmid, fntid, msg)
{
var fntmsg;
var strmsg;
if(document.getElementById(fntid) == null)
{
if(fntid == null)
fntmsg = "";
else
fntmsg = fntid;
}else
{
fntmsg = document.getElementById(fntid).innerHTML;
}
strmsg = fntmsg + msg;
ShowError(document.getElementById(frmid),strmsg );
}
function getMsgFormArray(str, arg)
{
var errid = 0;
var min   = 0;
var max   = 0;
var param = -1;
var msg   = "";
var num = arg.length;
if(num == 1)
{
errid = arg[0];
}
else
if(num == 3)
{
errid = arg[0];
min   = arg[1];
max   = arg[2];
}
else
if(num == 2)
{
errid = arg[0];
param = arg[1];
}
else
return null;
for(var i = 0; i < str.length; i ++)
{
if(typeof(str[i]) == "undefined")
{
alert("Initializing array error, please check your code！i = "+ i);
return null;
}
if(errid == str[i][0])
{
if(min == max && min == 0)
{
if(param == -1)
{
msg = str[i][1];
}
else
{
msg = str[i][1] + param + str[i+1][1];
}
}
else
msg = str[i][1] + min + "~" + max + str[i+1][1];
return msg;
}
}
return null;
}
function getEvent(event) {
var ev = event || window.event;
if (!ev)
{
var c = this.getEvent.caller;
while (c)
{
ev = c.arguments[0];
if (ev &&
(Event == ev.constructor || MouseEvent == ev.constructor))
{
break;
}
c = c.caller;
}
}
return ev;
}
function setTextFocusEnd()
{
var evt = getEvent();
if (evt.srcElement)
{
var elm = evt.srcElement;
var textRange  = elm.createTextRange();
textRange.moveStart('character', elm.value.length);
textRange.collapse(true);
textRange.select();
}
}
function get_width(){
return (document.body.clientWidth+document.body.scrollLeft);
}
function get_height(){
return (document.body.clientHeight+document.body.scrollTop);
}
function get_left(w){
var bw=document.body.clientWidth;
w=parseFloat(w);
return (bw/2-w/2+document.body.scrollLeft);
}
function get_top(h){
var bh=document.body.clientHeight;
h=parseFloat(h);
return 100;
}
function create_mask(){
var mask=document.createElement("div");
mask.id="mask";
mask.style.position="absolute";
mask.style.filter="progid:DXImageTransform.Microsoft.Alpha(style=4,opacity=25)";
mask.style.opacity=0.4;
mask.style.zIndex=1000;
document.body.appendChild(mask);
re_mask();
}
function create_msgbox(w,h,t){
var box=document.createElement("div");
box.id="msgbox";
box.style.position="absolute";

box.style.width=w+"px";
box.style.height=h+"px";

box.style.overflow="visible";
box.innerHTML=t;
box.style.zIndex=1001;
document.body.appendChild(box);
re_pos();
}
function re_mask(){
var mask=document.getElementById("mask");
if(null==mask)return;
mask.style.background="black";
mask.style.top="0px";
mask.style.left="0px";
mask.style.width=get_width()+"px";
mask.style.height=get_height()+"px";
}
function re_pos(){
window.document.onkeydown=showKeyDown;
var box=document.getElementById("msgbox");
if(null!=box){
var w=box.style.width;
var h=box.style.height;

box.style.left=get_left(w)+"px";

box.style.top=get_top(h)+"px";
}
}
function remove_msgbox(){
var mask=document.getElementById("mask");
var msgbox=document.getElementById("msgbox");
if(null==mask&&null==msgbox)return;
document.body.removeChild(mask);
document.body.removeChild(msgbox);
}
function msgbox(msgJSONData){
window.parent.scrollTo(0,0);
create_mask();
var temp="<table id=\"Tbl_msgbox\" cellpadding=\"0\" cellspacing=\"0\" class=\"msgtb\">";
temp+="<tr><td width=\"355\" height=\"22\" class=\"msgtr1\" colspan=2>"+msgJSONData.title+"</td></tr>";
temp+="<tr><td width=\"30\" height=\"75\" class=\"msgtr2\">&nbsp;<img src=\"img/infomsg.gif\">&nbsp;&nbsp;</td><td width=\"325\" class=\"msgtr2\"><font face=\"宋体\" size=\"2\">"+msgJSONData.content+"</font></td>";
temp+="</tr><tr><td width=\"355\" height=\"22\" align=\"center\" class=\"msgtr3\" colspan=2><input name=\"msgconfirmb\" type=\"button\" class=\"msgbutton\" id=\"msgconfirmb\" value=\"" + msgJSONData.confirmLabel + "\" onclick=\"remove_msgbox();"+msgJSONData.confirmCallback+";\">";
if("yes"==msgJSONData.cancelDisplay){temp+="&nbsp;&nbsp;<input name=\"msgcancelb\" type=\"button\" class=\"msgbutton\" id=\"msgcancelb\" value=\"" + msgJSONData.cancelLabel + "\" onclick=\"remove_msgbox();\"></td>";}
temp+="</tr><tr><td class=\"msgtr4\" width=\"355\" height=\"8\" colspan=2></td></tr></table>";
create_msgbox(400,200,temp);
if(msgJSONData.focusButtun=="Confirm"){document.getElementById("msgconfirmb").focus();}
else {document.getElementById("msgcancelb").focus();}
}
function showKeyDown(e)
{
e=(e)?e:window.event;

var box=document.getElementById("msgbox");
if(null!=box)
{
if(e.keyCode == 37)
{
document.getElementById("msgconfirmb").focus();
}
if(e.keyCode == 39)
{
document.getElementById("msgcancelb").focus();
}
}
}