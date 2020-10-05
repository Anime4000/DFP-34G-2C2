
function getObj(id)
{
return(document.getElementById(id));
}
function jslSetValue(dst, src, action)
{
var src_o = getObj(src);
var dst_o = getObj(dst);
dst_o.value= String(src_o.value);
switch (action)
{
case "GET":
if (dst_o.setAttribute)
{
dst_o.setAttribute("_initValue", dst_o.value)
}
break;
case "SET":
if (src_o.getAttribute)
{
var initValue = src_o.getAttribute("_initValue");
if (initValue == src_o.value)
{
dst_o.value = "NULL";
}
}
break;
default:
break;
}
}
function setValue(id,value)
{
getObj(id).value = value;
}
function Transfer_meaning(id,value)
{
getObj(id).value = value;
}
function getValue(id)
{
return(getObj(id).value);
}
function setHTML(id, html)
{
getObj(id).innerHTML = html;
}
function getHTML(id)
{
return (getObj(id).innerHTML);
}
function getDisabled(id)
{
return(getObj(id).disabled);
}
function getDisplay(id)
{
if(getObj(id).style.display == "none")
return false;
else
return true;
}
function getChecked(id)
{
return(getObj(id).checked);
}
function setChecked(id,value)
{
getObj(id).checked = value;
}
function jslDiDisplay(id)
{
var i = 0;
var num = arguments.length;
for(;i < num; i++)
{
getObj(arguments[i]).style.display = "none";
}
}
function jslEnDisplay(id)
{
var i = 0;
var num=arguments.length;
for(;i < num; i++)
{
getObj(arguments[i]).style.display = "";
}
}
function jslDisable(id)
{
var i = 0;
var num = arguments.length;
for(;i < num; i++)
{
getObj(arguments[i]).disabled = true;
}
}
function jslEnable(id)
{
var i = 0;
var num=arguments.length;
for(;i < num; i++)
{
getObj(arguments[i]).disabled=false;
}
}
function HiddenParaInit(arr)
{
var num = arguments.length;
for(var i=0; i<num; i++)
{
var leng = arguments[i].length;
for(var j=0; j<leng; j++)
{
setValue(arguments[i][j], "NULL");
}
}
}
function HiddenMultiInstParaInit(arr, index)
{
var leng = arr.length;
for(var i=0; i<leng; i++)
{
setValue(arr[i]+index, "NULL");
}
}
function ChangeTagStatus(names)
{
var leng = arguments.length;
var arrs, leng1, result;
for(var i = 0; i < leng-1; i++)
{
var arrs = document.getElementsByTagName(arguments[i]);
leng1 = arrs.length;
for (var j = 0; j < leng1; j++)
{
if ("hidden" != arrs[j].type && "file" != arrs[j].type )
{
arrs[j].disabled = arguments[leng-1];
}
}
}
}
function DisableALL()
{
ChangeTagStatus('input', 'select', true);
}
function EnableALL()
{
ChangeTagStatus('input', 'select', false);
}
function jslViewToPostCheckBox(PostId, ViewId)
{
var value = 0;
if (getChecked(ViewId))
{
value = "1";
}
setValue(PostId,value);
}
function jslPostToViewCheckBox(ViewId, PostId)
{
var value = false;
if (getValue(PostId) == "1")
{
value = true;
}
setChecked(ViewId, value);
}
function jslGetRadioValue(radioObject)
{
if (radioObject)
{
if (radioObject.length)
{
for (var i = 0; i < radioObject.length; i++)
{
if (radioObject[i].checked)
{
return radioObject[i].value;
}
}
}
else if (radioObject.checked)
{
return radioObject.value;
}
}
return -1;
}
function jslSetRadioValue(radioObject, value)
{
if(radioObject)
{
if(radioObject.length)
{
for(var i=0;i<radioObject.length; i++)
{
if(radioObject[i].value == value)
{
radioObject[i].checked = true;
return true;
}
}
}
else if (radioObject.value == value)
{
radioObject.checked = true;
}
}
return false;
}
function jslDoShowComboBox(viewid,postid)
{
var i = 0;
var selector = getObj(viewid);
var value=getObj(postid).value;
if(selector==null) return;
for(; i < selector.length; i++)
{
if(selector.options[i].value == value)
{
selector.selectedIndex = i;
return;
}
}
selector.selectedIndex = -1;
}
function addSelectOption(id, val, txt)
{
var o = getObj(id);
if (isValInSelect(val, id)==0)
{
var op = document.createElement('option');
op.text = txt;
op.value = val;
try
{
o.add(op,null);
}
catch(ex)
{
o.add(op);
}
}
}
function getOptionIndexByValue(sid, val)
{
var sObj = getObj(sid);
for ( var i=0; i<sObj.length; i++ )
{
if ( val == sObj.options[i].value )
{
return i;
}
}
return -1;
}
function deleteSelectOption(id, val)
{
var o = getObj(id);
var i = getOptionIndexByValue(id, val);
if(i > -1)
{
o.remove(i);
}
}
function deleteSelectOptions(selectID, keyWord)
{
var obj = getObj(selectID);
for ( var i=0; i<obj.options.length; )
{
if ( obj.options[i].value.match(keyWord) != null )
{
obj.remove(i);
}
else
{
i++;
}
}
}
function clearSelect(id)
{
var o = getObj(id);
while(o.options.length > 0)
{
o.remove(0);
}
}
function isValInSelect(val, sid)
{
if(getOptionIndexByValue(sid, val) > -1)
{
return 1;
}
return 0;
}
function setSelOtherValue(obj, value, id)
{
var flag = 0;
var mm = "";
if(id == null)
{
mm = "";
}
else
{
mm = getValue(id);
}
if (("" == mm) || ("N/A" == mm) || (null == mm))
{
var num = obj.length;
for (var i = num ;i > 0 ;i-- )
{
var name = obj.options[i-1].value;
var text = obj.options[i-1].text;
obj.options[i] = new Option(text, text);
obj.options[i].value = name;
}
obj.options[0] = new Option(value,value);
obj.options[0].value = value;
obj.options[0].text = value;
flag = 1;
}
return flag;
}
function colorizeInfoTbl(id)
{
var objTable = document.getElementById(id);
var clasName;
var colorFlg = true;
if(objTable)
{
for(var i = 0; i < objTable.rows.length; i++)
{
if(objTable.rows[i].style.display != "none")
{
if(colorFlg)
{
clasName = "white_1";
colorFlg = false;
}
else
{
clasName = "blue_1";
colorFlg = true;
}
}
objTable.rows[i].setAttribute("class", clasName);
objTable.rows[i].setAttribute("className", clasName);
}
}
}
function RmZero(str)
{
while(str.indexOf("0") == 0 && str.length > 1)
{
str = str.substr(1);
}
return str;
}
function IpRmZero(IpAddrValue)
{
var addrParts = IpAddrValue.split('.');
var leng = addrParts.length;
for (var i = 0; i < leng; i++)
{
addrParts[i]=RmZero(addrParts[i]);
}
return addrParts.join(".");
}
function ReSetIpRmZero(ID)
{
var num = arguments.length;
var re  = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
var obj;
if(num == 0) return;
for(i = 0;i < num; i++)
{
obj = getObj(arguments[i]);
if((obj != null && obj.value != "" && obj.value != null )&&(re.test(obj.value) == true))
{
obj.value = IpRmZero(obj.value);
}
}
}
function ReSetValueRmZero(ID)
{
var num = arguments.length;
var obj;
for(i = 0;i < num; i++)
{
obj = getObj(arguments[i]);
if(obj != null && obj.value != null && obj.value != "")
{
obj.value = RmZero(obj.value);
}
}
}
String.prototype.ReplaceAll = function(value)
{
return this.replace(/\s/g,value);
}
String.prototype.TrimLR = function()
{
return this.replace(/(^\s*)|(\s*$)/g, "");
}
String.prototype.LTrim = function()
{
return this.replace(/(^\s*)/g, "");
}
String.prototype.RTrim = function()
{
return this.replace(/(\s*$)/g, "");
}
function HtmlShowSpace(value,id)
{
getObj(id).innerHTML = value.ReplaceAll("&nbsp;");
}
function HtmlInputShowSpace(value,id)
{
getObj(id).value = value.ReplaceAll("&nbsp;");
}
function trimLSpaces(str){
return str.LTrim();
}
function trimRSpaces(str){
return str.RTrim();
}
function trimAllSpaces(str)
{
return str.ReplaceAll("");
}
function trimLRSpaces(str)
{
return str.TrimLR();
}
function setNULLToSepPort(Port, Val)
{
var portvalue=Port;
if(portvalue=="")
{
portvalue = Val;
}
return portvalue;
}
function getSepPortToNULL(Port, Val)
{
var portvalue=Port;
if(portvalue==Val)
{
portvalue="";
}
return portvalue;
}
function setNULLToPort(Port)
{
var portvalue=Port;
if(portvalue=="")
{
portvalue = "-1";
}
return portvalue;
}
function getPortToNULL(Port)
{
var portvalue=Port;
if(portvalue=="-1")
{
portvalue="";
}
return portvalue;
}
function setNULLToMAC(MAC)
{
var macaddr=MAC;
if(macaddr=="")
{
macaddr="00:00:00:00:00:00";
}
return macaddr;
}
function getMACToNULL(MAC)
{
var macaddr=MAC;
if(macaddr=="00:00:00:00:00:00")
{
macaddr="";
}
return macaddr;
}
function setNULLToIP(IP)
{
var ipvalue=IP;
if(ipvalue=="")
{
ipvalue="0.0.0.0";
}
return ipvalue;
}
function getIPToNULL(IP)
{
var ipvalue=IP;
if(ipvalue=="0.0.0.0")
{
ipvalue="";
}
return ipvalue;
}
function encode64(input)
{
var keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
input = escape(input);
var output = "";
var chr1, chr2, chr3 = "";
var enc1, enc2, enc3, enc4 = "";
var i = 0;
do {
chr1 = input.charCodeAt(i++);
chr2 = input.charCodeAt(i++);
chr3 = input.charCodeAt(i++);
enc1 = chr1 >> 2;
enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
enc4 = chr3 & 63;
if (isNaN(chr2))
{
enc3 = enc4 = 64;
}
else if (isNaN(chr3))
{
enc4 = 64;
}
output = output +
keyStr.charAt(enc1) +
keyStr.charAt(enc2) +
keyStr.charAt(enc3) +
keyStr.charAt(enc4);
chr1 = chr2 = chr3 = "";
enc1 = enc2 = enc3 = enc4 = "";
} while (i < input.length);
return output;
}
function decode64(input)
{
var output = "";
var chr1, chr2, chr3 = "";
var enc1, enc2, enc3, enc4 = "";
var i = 0;
var base64test = /[^A-Za-z0-9\+\/\=]/g;
var keyStr = "ABCDEFGHIJKLMNOP" + "QRSTUVWXYZabcdef" + "ghijklmnopqrstuv" + "wxyz0123456789+/" + "=";
if (base64test.exec(input)) {
alert("There were invalid base64 characters in the input text.\n" +
"Valid base64 characters are A-Z, a-z, 0-9, '+', '/', and '='\n" +
"Expect errors in decoding.");
}
input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
do {
enc1 = keyStr.indexOf(input.charAt(i++));
enc2 = keyStr.indexOf(input.charAt(i++));
enc3 = keyStr.indexOf(input.charAt(i++));
enc4 = keyStr.indexOf(input.charAt(i++));
chr1 = (enc1 << 2) | (enc2 >> 4);
chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
chr3 = ((enc3 & 3) << 6) | enc4;
output = output + String.fromCharCode(chr1);
if (enc3 != 64) {
output = output + String.fromCharCode(chr2);
}
if (enc4 != 64) {
output = output + String.fromCharCode(chr3);
}
chr1 = chr2 = chr3 = "";
enc1 = enc2 = enc3 = enc4 = "";
} while (i < input.length);
return unescape(output);
}
function fnBreakWordAll(o) {
var o = o || {},
iWord = o.word || 13,
iRe = o.re || '[a-zA-Z0-9]',
bAll = o.all || false,
sClassName = o.className || 'word-break-all',
aEls = o.els || ( function() {
var aEls = [],
aAllEls = document.getElementsByTagName( '*' ),
re = new RegExp( '(?:^|\\s+)' + sClassName + '(?:\\s+|$)' );
for ( var i = 0, iLen = aAllEls.length; i < iLen; ++i ) {
if ( re.test( aAllEls[i].className ) ) {
aEls[aEls.length] = aAllEls[i];
}
}
return aEls;
} )() || [],
fnBreakWord = function( oEl ) {

if( !oEl || oEl.nodeType !== 1 ) {
return false;
} else if ( oEl.currentStyle && typeof(oEl.currentStyle.wordWrap) === 'string' ) {
breakWord = function( oEl ) {
if (oEl.runtimeStyle)
{
oEl.runtimeStyle.wordWrap = 'break-word';
}
return true;
};
return breakWord( oEl );
} else if ( document.createTreeWalker ) {
var trim = function  ( str ) {
str = str.replace( /^\s\s*/, '' );
var ws = /\s/,
i = str.length;
while ( ws.test( str.charAt( --i ) ) );
return str.slice(0, i + 1);
};
breakWord = function( oEl ) {
var dWalker = document.createTreeWalker( oEl, NodeFilter.SHOW_TEXT, null, false );
var node, s, c = String.fromCharCode( '8203' ),

re = new RegExp( '(' + iRe + '{0,' + iWord + '})' );
while ( dWalker.nextNode() ) {
node = dWalker.currentNode;
s = trim( node.nodeValue ).split( re ).join( c );
node.nodeValue = s;
}
return true;
};
return breakWord( oEl );
}
};
for( var i=0, n=aEls.length; i<n; ++i ) {
var sUa = navigator.userAgent, sTn = aEls[i].tagName.toLowerCase();
if ( ( /Opera/ ).test( sUa ) || ( /Firefox/ ).test( sUa ) || ( ( /KHTML/ ).test( sUa ) && ( sTn === 'td' || sTn === 'th') ) || bAll ) {
fnBreakWord(aEls[i]);
}
}
}
function getInputtoHtml(id, value)
{
return ("<input type=\"text\" class=\"uiNoBorder\" value=\""
+ HTMLEnCode(value) + "\"  id=\"" + id + "\"  readonly>");
}
function getNameValue(id, value)
{
return ("<input type=\"text\" class=\"uiNoBorder\" value=\""
+ value + "\"  id=\"" + id + "\"  readonly>");
}
function getImage(src, strmethod, id)
{
var imageHTML = "<input type=\"button\" id=\""
+ id
+ "\" onclick=\""
+ strmethod
+ "\" class =\"multiImg\" "
+ "style=\"background:url(" + src + ");\">";
return (imageHTML);
}
function showIsEnableImage(isEnable, cellId)
{
var strId = "";
if("" != cellId)
{
strId = "id=" + cellId;
}
if("1" == isEnable)
{
return ("<input type=\"image\" src=\"img/enable.gif\" style=\"cursor:default\" " + strId + ">");
}
else
{
return ("<input type=\"image\" src=\"img/disable.gif\" style=\"cursor:default\" " + strId + ">");
}
}
function getImagefrmClass(ImgClass, strmethod, id)
{
var imageHTML = "<input type=\"button\" id=\""
+ id
+ "\" onclick=\""
+ strmethod
+ "\" class =\""
+ ImgClass
+ "\" >";
return (imageHTML);
}
function getXMLHTTPObj()
{
var xmlHttp = null;
try
{

xmlHttp=new XMLHttpRequest();
}
catch (e)
{
try
{
xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
}
catch (e)
{
try
{
xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
}
catch (e){}
}
}
return xmlHttp;
}
var xmlHTTPStatus = new Array();
xmlHTTPStatus['Uninitialized']  = 0;
xmlHTTPStatus['Open']           = 1;
xmlHTTPStatus['Sent']           = 2;
xmlHTTPStatus['Receiving']      = 3;
xmlHTTPStatus['Loaded']         = 4;
function AJAXObj()
{
this.obj = getXMLHTTPObj();
this.postStr = "";
this.addPostItem = function(name, value)
{
this.postStr += name + "=" + value + "&";
};
this.post = function(requestURL, responseFunc)
{
this.obj.open("POST", requestURL, true);
this.obj.onreadystatechange = responseFunc;
this.obj.send(this.postStr);
this.postStr = "";
};
this.getResponseText = function()
{
return this.obj.responseText;
};
this.getReadyState = function()
{
return this.obj.readyState;
};
this.getStatus = function()
{
return this.obj.status;
};
}
function getXMLDoc(xmlStr)
{
var xmlDoc;
try
{
xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
xmlDoc.async="false";
xmlDoc.loadXML(xmlStr);
return(xmlDoc);
}
catch(e)
{
try
{
parser=new DOMParser();
xmlDoc=parser.parseFromString(xmlStr,"text/xml");
return(xmlDoc);
}
catch(e)
{
}
}
return(null);
}
function getAJAXResponseXMLDoc(xmlStr)
{
if (xmlStr.match(/^\s*<ajax_response_xml_root>/m) != null)
{
return getXMLDoc(xmlStr);
}
return null;
}
function XMLDocObj(xmlStr)
{
this.xmlDoc = getAJAXResponseXMLDoc(xmlStr);
this.getXMLNodeValue = function(nodeName)
{
var nodeValue = "";
try
{
nodeValue = this.xmlDoc.getElementsByTagName(nodeName)[0].childNodes[0].nodeValue;
}
catch(e)
{
}
return nodeValue;
};
this.getXMLNode = function(nodeName)
{
return this.xmlDoc.getElementsByTagName(nodeName)[0];
};
this.getCMAPIParaValue = function(OBJNAME, instID, paraName)
{
var paraValue = "";
var instObj   = null;
var o = this.getXMLNode(OBJNAME);
var insts = o.childNodes;
for (var i=0; i<insts.length; i++)
{
var attrs = insts[i].childNodes;
for (var j=0; j<attrs.length; j++)
{
if (attrs[j].nodeName=="ID" && instID==attrs[j].childNodes[0].nodeValue)
{
instObj = insts[i];
break;
}
}
}
if (null != instObj)
{
var attrs = instObj.childNodes;
for (var j=0; j<attrs.length; j++)
{
if (attrs[j].nodeName == "Parameters")
{
var paras = attrs[j].childNodes;
for (var k=0; k<paras.length; k++)
{
if (paras[k].nodeName == paraName)
{
try
{
paraValue = paras[k].childNodes[0].nodeValue;
}
catch(e)
{
}
break;
}
}
}
}
}
return paraValue;
};
this.getMIIDListArr = function(OBJNAME)
{
var idListArr = new Array();
var arrIndex = 0;
var o = this.getXMLNode(OBJNAME);
var insts = o.childNodes;
for (var i=0; i<insts.length; i++)
{
var attrs = insts[i].childNodes;
for (var j=0; j<attrs.length; j++)
{
if (attrs[j].nodeName=="ID")
{
idListArr[arrIndex++] = attrs[j].childNodes[0].nodeValue;
}
}
}
return idListArr;
};
}
function appendHiddenInput(fid, id, value)
{
var o = getObj(fid);
if (o != null)
{
var is = o.getElementsByTagName("input"); 
var il = is.length;
for (var i=0; i<il; i++)
{
var sid = is[i].id;
if ( id == sid )
{
is[i].value = value;
break;
}
}
if ( i == il )
{
var i = document.createElement("input");
i.type = "hidden";
i.id = id;
i.name = id;
i.value = value;
o.appendChild(i);
}
}
}
function deleteHiddenInput(fid, id)
{
var o = getObj(fid);
var t = getObj(id);
o.removeChild(t);
}
function clearfSubmit(fid)
{
var o = getObj(fid);
var clds = o.childNodes;
while (clds.length > 0)
{
o.removeChild(clds[0]);
}
}
function checkSameInput(fid)
{
var o = getObj(fid);
if (o != null)
{
var is = o.getElementByTagName("input");
var il = is.length;
for (var i=0; i<il-1; i++)
{
var sid = is[i].id;
for (var j=i+1; j<il; j++)
{
if (sid == is[j].id)
{
alert(fid+" has Same Inputs, ID:"+sid);
}
}
}
}
}
function getCookie(c_name)
{
if (document.cookie.length>0)
{
var c_start=document.cookie.indexOf(c_name + "=");
if ( -1 != c_start )
{
c_start = c_start + c_name.length + 1;
var c_end=document.cookie.indexOf(";", c_start);
if ( c_end == -1 )
{
c_end=document.cookie.length;
}
return unescape( document.cookie.substring(c_start, c_end) );
}
}
return null;
}
function setCookie(c_name,value,expiredays)
{
var exdate = new Date();
exdate.setDate( exdate.getDate() + expiredays );
var cookieContent = c_name + "=" + escape(value);
if ( null != expiredays )
{
cookieContent += "; expires=" + exdate.toGMTString();
}
document.cookie = cookieContent;
}
function HTMLEnCode(str)
{
str = str.replace(/&/g, "&amp;");
str = str.replace(/</g, "&lt;");
str = str.replace(/>/g, "&gt;");
str = str.replace(/ /g, "&nbsp;");
str = str.replace(/\"/g, "&quot;");
return str;
}
function HTMLDeCode(str)
{
str = str.replace(/&lt;/g, "<");
str = str.replace(/&gt;/g, ">");
str = str.replace(/&nbsp;/g, " ");
str = str.replace(/&quot;/g, "\"");
str = str.replace(/&amp;/g, "&");
return str;
}
function HTMLAddBr(str, wdth)
{
var str1 = "";
for (var i=0; i<Math.ceil(str.length/wdth); i++)
{
str1 += HTMLEnCode( str.substr(i*wdth, wdth) );
if ( Math.ceil(str.length/wdth) != i+1 )
{
str1 += "<br>";
}
}
return str1;
}
function CheckLen(obj,val)
{
if (val.length == obj.maxLength)
{
var curIndex = obj.id.match(/\d+$/);
var nextIndex = parseInt(curIndex, 10)+1;
var nextID = obj.id.replace(/\d+$/,"")+nextIndex;
if (getObj(nextID) == null)
{
return;
}
document.getElementById(nextID).focus();
document.getElementById(nextID).select();
}
else if (val.length == 0)
{
var curIndex = obj.id.match(/\d+$/);
var prevIndex = parseInt(curIndex, 10);
if (prevIndex > 1)
{
prevIndex = prevIndex - 1;
}
var prevID = obj.id.replace(/\d+$/,"")+prevIndex;
if (getObj(prevID) == null)
{
return;
}
document.getElementById(prevID).focus();
document.getElementById(prevID).select();
}
else
{
return;
}
}