var style = document.getElementById("style");

setInterval(function(){
	var isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	if(isDark){style.innerHTML='<link href="dark.css" rel="stylesheet" id="style">';}
	else{style.innerHTML='<link href="light.css" rel="stylesheet" id="style">';}
}, 10);
