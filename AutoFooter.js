// Settings for AutoFooter.
var fromYear            = 2001;
var showRange           = true;
var showMiddleChar      = true;
var middleChar          = "-";
var showCopyright       = true;
var copyrightFormat     = 2;
var showTime            = true;
var parseAsParagraph    = false;
var finalString         = "AutoFooter Inc. All rights reserved.";



var currentYear = new Date().getFullYear();
var cc = "";
var space = " ";
if (showCopyright) {
    switch (copyrightFormat) {
        case 0:
            cc = "©";
            break;
        case 1:
            cc = "Copyright";
            break;
        case 2:
            cc = "Copyright ©";
            break;
        case 3:
            cc = "© Copyright";
            break;
        default:
            cc = "©";
            break;
    }
}

var cr = showCopyright ? cc + space : "";
if (showTime) {
    if (showRange) {
        if (currentYear > fromYear) {
            var mc = showMiddleChar ? middleChar : "";
            out(cr + fromYear + space + mc + space + currentYear);
        } else out(cr + currentYear);
    } else out(cr + currentYear);
} else {
    out(cr);
}

function out(str) {
    str = str + space + finalString;
    if (parseAsParagraph) {
        document.write("<p>" + str + "</p>");
    } else document.write(str)
}
