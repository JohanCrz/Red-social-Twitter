<font face="Arial, Helvetica, sans-serif" size="2"><script language="JavaScript" type="text/javascript">
//<![CDATA[
 
var timerID = null
var timerRunning = false
var charNo = 0
var charMax = 0
var lineNo = 0
var lineMax = 4
var lineArr = new Array(lineMax)
var urlArr = new Array(lineMax)
 
lineArr[1] = "Codigos Hmtl"
urlArr[1] ="http://disemucho.jimdo.com/codigos-html-para-jimdo/"
lineArr[2] = "Videos Graciosos"
urlArr[2] = "http://disemucho.jimdo.com/videos/"
lineArr[3] = "Busqueda Jimdo-Google"
urlArr[3] = "http://disemucho.jimdo.com/busqueda-google/"
lineArr[4] = "http://disemucho.jimdo.com"
urlArr[4] = "http://disemucho.jimdo.com"
 
var lineText = lineArr[1]
function StartShow() {
StopShow()
ShowLine()
timerRunning = true
}
function FillSpaces() {
for (var i = 1; i <= lineWidth; i++) {
spaces += " "
}
}
function StopShow() {
if (timerRunning) {
clearTimeout(timerID)
timerRunning = false
}
}
function ShowLine() {
if (charNo == 0) {
if (lineNo < lineMax) {
lineNo++
}
else {
lineNo = 1
}
lineText = lineArr[lineNo]
charMax = lineText.length
}
if (charNo <= charMax) {
document.formDisplay.buttonFace.value = lineText.substring(0, charNo)
charNo++
timerID = setTimeout("ShowLine()", 100)
}
else {
charNo = 0
timerID = setTimeout("ShowLine()", 3000)
}
}
function GotoUrl(url)
{
top.location.href = url
}
document.write("<form name=\"formDisplay\">");
document.write("<input type=\"button\" name=\"buttonFace\" value=\"&{lineText}\" size=\"18\" onClick=\"GotoUrl(urlArr[lineNo])\">");
document.write("<\/form>");
StartShow();
//]]>
</script></font>