
function myTrim(str, chr)
{
var reg=new RegExp('((' + chr + ')*$)','g');
return str.replace(reg,"");
}
function calcSubNet(ipaddr, netmask)
{
var ips = ipaddr.split(".");
var ns  = netmask.split(".");
var sub = "";
if(ips.length != 4 || ns.length != 4)
return "0.0.0.0";
for(var i = 0; i < 4; i++)
{
sub += ips[i] & ns[i];
sub += ".";
}
sub = myTrim(sub, ".");
return sub;
}
function checkNull(value)
{
if(value == "" || value == null)
return false;
else
return true;
}
function checkGenString(sz)
{
if(checkNull(sz) == false)
return -1;
if (sz.match("[^0-9a-zA-Z_-]") != null)
return false;
return true;
}
function checkGenStringForASC(value)
{
var length = value.length;
for(var j = 0 ;j < length; j++)
{
var xx = value.charCodeAt(j);
if(xx <=0 || xx > 255)
{
return false;
}
}
return true;
}
function in_array(needle, haystack)
{
for(var key in haystack)
{
if(needle === haystack[key])
{
return true;
}
}
return false;
}
function checkStrLengthRange(value, min, max)
{
if(checkNull(value) == false)
{
return -1;
}
var len = value.length;
if((len < min) || (len > max))
{
return -3;
}
return true;
}
function checkInteger(str)
{
if(str.match("^[-]{0,1}[0-9]{1,}$"))
return true;
return false;
}
function checkIntegerRange(value, minValue, maxValue)
{
if(checkNull(value) == false)
{
return -1;
}
if(checkInteger(value) != true)
return -2;
if (value < minValue || value > maxValue)
{
return -3;
}
return true;
}
function checkIntegerRangeById(FrmId, minValue, maxValue)
{
ReSetValueRmZero(FrmId);
var val = getValue(FrmId);
return checkIntegerRange(val , minValue, maxValue);
}
function checkGenInt(str)
{
if(checkIntegerRange(str, -2147483648, 2147483647) != true)
return false;
return true;
}
function checkUnSingleInt(str)
{
if(checkIntegerRange(str, 0, 4294967295) != true)
return false;
return true;
}
function checkName(strName, iLeng)
{
var len       = strName.length;
var firstChar = strName.substr(0,1);
var lastChar  = strName.substr(len-1,1);
var leftChar  = "";
var rightChar = "";
var iDotCount = 0;
var i         = 0;
var preDotPos = 0;
var statu = checkStrLengthRange(strName, 1, iLeng);
if(statu != true)
{
return statu;
}
if (strName.match("[^0-9a-zA-Z.-]") != null)
{
return false;
}
if(firstChar.match("[^0-9a-zA-Z]") != null)
{
return false;
}
if(lastChar.match("[^0-9a-zA-Z]") != null)
{
return false;
}
var pos = strName.lastIndexOf(".");
if(pos == -1)
{
var str = strName;
var len = strName.length;
for(var i=0;i<len;i++)
{
var value = str.substring(i,i+1);
if(isNaN(parseInt(value)))
{
return true;
}
}
return false;
}
else
{
var str = strName.substr(pos+1);
var len = strName.length - (pos + 1);
for(var i=0;i<len;i++)
{
var value = str.substring(i,i+1);
if(isNaN(parseInt(value)))
{
return true;
}
}
return false;
}
return true;
}
function checkHostName(HostName)
{
return checkName(HostName, 256);
}
function checkDomainName(domain_name)
{
return checkName(domain_name, 64);
}
function checkEssid(value)
{
var statu = checkStrLengthRange(value, 1, 32);
if(statu != true)
{
return statu;
}
var length = value.length;
for(var j = 0; j < length; j++)
{
var xx = value.charCodeAt(j);

if (xx < 32 || xx > 126)
{
return false;
}
}
return true;
}
function checkURL(url)
{
var statu = checkStrLengthRange(url, 1, 256);
if(statu != true)
{
return statu;
}
if (url.match("[^0-9a-zA-Z.:;,!@%#?_/&=+*'$()\\[\\]-]") != null)
{
return false;
}
return true;
}
function checkIpAddress(value, num)
{
var ipaddr = value;
var re     = /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;
if(re.test(ipaddr) == true)
{
var parts = ipaddr.split(".");
for(var i=0; i<parts.length; i++)
{
if(parts[i].indexOf("0") == 0 && parts[i].length > 1)
return false;
if (parseInt((parts[i]),10) > 255 || parseInt((parts[i]),10) < 0)
{
return false;
}
}
if(num == 2)
{
if(parseInt(parts[0],10) == 0 || parseInt(parts[3],10)==0)
{
return false ;
}
if( parseInt(parts[0],10) == 255 || parseInt(parts[3],10)==255)
{
return false ;
}
if (parseInt(parts[0],10) > 223)
return false ;
}
if(num == 3)
{
for(var i=0; i<parts.length; i++)
{
if (parseInt((parts[i]),10) == 0)
break;
}
if(i == parts.length)
{
if ( (parseInt(parts[1],10) != 255)||
(parseInt(parts[2],10) != 255)||
(parseInt(parts[3],10) != 255))
{
return false;
}
}
for(var j=i; j < parts.length; j++)
{
if (parseInt((parts[j]),10) != 0)
{
return false;
}
}
}
return true;
}
return false;
}
function checkIPV6Address(str)
{
if (str.match("[^0-9a-fA-F:.]") != null)
return false;
addrParts   = str.split(':');
Doublecolon = str.split('::');
ipv4Parts   = str.split('.');
if(addrParts.length<3||addrParts.length>8)
{
return false;
}
else if(Doublecolon.length==1&&ipv4Parts.length==1&&addrParts.length!=8)
{
return false;
}
else if(Doublecolon.length==1&&ipv4Parts.length>1&&addrParts.length!=6)
{
return false;
}
else if(Doublecolon.length>1&&ipv4Parts.length>1&&addrParts.length>6)
{
return false;
}
else if(Doublecolon.length>2||str.split(':::').length>1)
{
return false;
}
else
{
if(addrParts[0]==""&&addrParts[1]!="")
{
return false;
}
for(var i=0;i<addrParts.length;i++)
{
if(i==addrParts.length-1&&addrParts[i]==""&&addrParts[i-1]!="")
{
return false;
}
if(addrParts[i].length>4 && addrParts[i].split('.').length<2)
{
return false;
}
}
}
var pos = str.lastIndexOf(":");
var ipv4Parts = str.split('.');
if(ipv4Parts.length>1)
{
var ipv4=str.substring(pos+1,str.length);
if(true != checkIpAddress(ipv4,""))
{
return false;
}
}
return true;
}
function checkGateway(Address)
{
var address = Address.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
var digits;
var i;
if(address == null)
{
return false;
}
digits = address[0].split(".");
if (digits.length != 4 )
{
return false;
}
for(i=0; i < 4; i++)
{
if( (Number(digits[i]) > 255 )||
(Number(digits[i]) < 0 )  ||
(Number(digits[0]) > 223))
{
return false;
}
}
return true;
}
function checkMACAddress(Addr)
{
var pattern = /^\s*([A-Fa-f0-9]{2}\:){5}[A-Fa-f0-9]{2}\s*$/;
if(Addr=="00:00:00:00:00:00")
{
return false;
}
if(!pattern.test(Addr))
{
return false;
}
return true;
}
function checkMaskAddress(MaskAddr)
{
var mask = MaskAddr.match("^[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}$");
var digits;
var bMask = 0;
var watch = false;
var i;
var error=null;
if(mask == null)
{
return false;
}
digits = mask[0].split(".");
if (digits.length != 4 )
{
return false;
}
for(i=0; i < 4; i++)
{
if((Number(digits[i]) > 255 ) || (Number(digits[i]) < 0 ) ||
(digits[i].indexOf("0") == 0 && digits[i].length > 1)
)
{
return false;
}
bMask = (bMask << 8) | Number(digits[i]);
}
bMask = bMask & 0x0FFFFFFFF;
if((bMask & 0x01) == 1)
watch = true;
for(i=0; i<32; i++)
{
if((watch == true) && ((bMask & 0x1)==0))
{
return false;
}
bMask = bMask >> 1;
if((bMask & 0x01) == 1)
watch=true;
}
return true;
}
function checkIPNet(ipaddr, netmask)
{
var ret = checkIpAddress(ipaddr);
if(ret != true)
return ret;
if (netmask == null)
return null;
ret = checkMaskAddress(netmask);
if(ret != null)
return ret;
var ips = ipaddr.split(".");
var subnet = calcSubNet(ipaddr, netmask);
var subs = subnet.split(".");
var s = "";
for(var i = 0; i < 4; i++)
{
s += parseInt(ips[i]) ^ parseInt(subs[i]);
s += ".";
}
if (s == "0.0.0.0.")
return true;
return false;
}
function checkPort(port)
{
var value=port;
if(port=="-1")
return false;
else
return true;
}
function valIpMask(ipaddr, netmask)
{
var ss = netmask.split(".");
var mac = 0;
for(var i = 0; i < 4; i++)
{
mac = mac << 8;
mac = mac + parseInt(ss[i]);
}
var ip = 0;
var as=ipaddr.split(".");
for(var i = 0; i < 4; i++)
{
ip = ip << 8;
ip = ip + parseInt(as[i]);
}
if(mac && ((ip & mac) == ip))
{
return false;
}
if(mac && ((ip & (~mac)) == ~mac))
{
return false;
}
return true;
}
