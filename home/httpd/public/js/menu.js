
function getURL()
{
var ret = "getpage.gch?pid=1002&nextpage=";
var len = arguments.length;
if ( 0 != (len-1)%2 )
{
ShowErrorForCom(null, null, "arguments len err of getURL!");
return;
}
for (var i=0; i<len; i++)
{
if ( i%2 == 1 )
{
ret += "&" + arguments[i] + "=";
}
else
{
ret += arguments[i];
}
}
return ret;
}
function menuURLGen()
{
for ( var supId in meta_menu )
{
meta_menu[supId]['URL'] = getURL(meta_menu[supId]['page']);
for ( var midId in menu_items[supId] )
{
menu_items[supId][midId]['URL'] = getURL(menu_items[supId][midId]['page']);
for ( var subId in menu_subitems[supId][midId] )
{
menu_subitems[supId][midId][subId]['URL'] = getURL(menu_subitems[supId][midId][subId]['page']);
}
}
}
}
function menuURLGen_Top()
{
for ( var supId in meta_menu )
{
meta_menu[supId]['URL'] = getURL(meta_menu[supId]['page']);
}
}
function menuDisp()
{
menuURLGen();
menuUpdate();
}
function ReplaceDemo(ss)
{
var r, re;
re = / /g;
r = ss.replace(re, "&nbsp;");
return r;
}
function openLink(pageurl)
{
var tag = getObj("IF_UPLOADING").value;
if (tag == "1")
{
top.mainFrame.location.href = "#";
}
else
{
if(getObj("temClickURL").value == "")
{
getObj("temClickURL").value = pageurl;
top.mainFrame.location.href = ReplaceDemo(pageurl);
}
else
{
if(getObj("temClickURL").value != pageurl)
{
getObj("temClickURL").value = pageurl;
top.mainFrame.location.href = ReplaceDemo(pageurl);
}
else
{
top.mainFrame.location.href = "#";
}
}
}
}
function getMidMenuStat(supId, midId)
{
var len = 0;
for ( var i in menu_subitems[supId][midId] )
{
len++;
}
if ( 0 == len )
{
return "single";
}
for (var subId in menu_subitems[supId][midId] )
{
if ( selectPage == menu_subitems[supId][midId][subId]['page'] )
{
return "open";
}
}
return "closed";
}
function isMetaMenuWithChild(supId)
{
var len = 0;
for ( var i in menu_items[supId] )
{
len++;
}
if ( 0 == len )
{
return false;
}
return true;
}
function OnMenuItemClick(supId, midId)
{
selectPage  = menu_items[supId][midId]['page'];
selectSupId = supId;
menuUpdate();
}
