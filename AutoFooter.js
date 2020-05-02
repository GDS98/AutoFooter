// Settings for AutoFooter
const fromYear            = 2001;
const showRange           = true;
const showMiddleChar      = true;
const middleChar          = "-";
const showCopyright       = true;
const copyrightFormat     = 2;
const showTime            = true;
const parseAsParagraph    = false;
const finalString         = "AutoFooter Inc. All rights reserved.";

var currentYear=(new Date).getFullYear(),cc="",space=" ";if(showCopyright)switch(copyrightFormat){case 0:cc="©";break;case 1:cc="Copyright";break;case 2:cc="Copyright ©";break;case 3:cc="© Copyright";break;default:cc="©"}var cr=showCopyright?cc+space:"";if(showTime)if(showRange)if(currentYear>fromYear){var mc=showMiddleChar?middleChar:"";out(cr+fromYear+space+mc+space+currentYear)}else out(cr+currentYear);else out(cr+currentYear);else out(cr);function out(r){r=r+space+finalString,parseAsParagraph?document.write("<p>"+r+"</p>"):document.write(r)}
