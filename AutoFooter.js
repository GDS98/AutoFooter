var currentYear = new Date().getFullYear();
const nil = "";
const space = " ";

// Settings for AutoFooter module.
var fromYear            = 2001;
var showRange           = true;
var showMiddleChar      = true;
var middleChar          = "-";
var showCopyright       = true;
var copyrightFormat     = 2;
var showTime            = true;
var parseAsParagraph    = false;
var finalString         = "AutoFooter Inc. All rights reserved.";


var cc = nil;
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

var cr = showCopyright ? cc + space : nil;
if (showTime) {
    if (showRange) {
        if (currentYear > fromYear) {
            var mc = showMiddleChar ? middleChar : nil;
            out(cr + fromYear + space + mc + space + currentYear);
        } else {
            // No range available
            out(cr + currentYear);
        }
    } else {
        out(cr + currentYear);
    }
} else {
    out(cr);
}

function out(str) {
    str = str + space + finalString;
    if (parseAsParagraph) {
        document.write("<p>" + str + "</p>");
    } else document.write(str)
}
