window.onload=function() {
    setFooter();
};

window.onresize=function() {
    setFooter();
};

function setFooter() { //set the footer position to "absolute" if the page height is less than the window height
    var footer=document.getElementById("footer");
    var pageHeight=document.getElementById("header").offsetHeight+document.getElementById("content").offsetHeight+footer.offsetHeight; 
    //not using document.body.offsetHeight because it works only onload. onresize it fails to add the footer"s height because its positioning in CSS
    var windowHeight = window.innerHeight;
    if (windowHeight>pageHeight) {
		footer.style.position="absolute";
    } 
    else {
        footer.style.position="relative";
    }
}

document.getElementById("filename").onchange=function() {
    var filename=this.value;
    //replace the label text to show the filename(without the path)
    document.getElementById("filename-label").innerHTML=filename.split("\\").pop();
    document.getElementById("upload").value="Upload file";
};

document.getElementById("upload").onclick=function() {
    var filename=document.getElementById("filename").value;
    //replace "Upload file" with "No file" if submitting an empty form
    if (!filename) {
        document.getElementById("upload").value="No file";
    }
};

  
