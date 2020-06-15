function keluar() {
			keluar.clicked();
 		}
  
function openhtml(url) {
			window.frames['layar'].location.replace(url); 
			}

function bacatogel(x){
  var z = document.getElementById(x);

   if (z.style.display === "none") {
    z.style.display = "block";
				z.style.transform = "translateY(0)"; 
  } else {
    z.style.display = "none";
 		 z.style.transform = "translateY(-900px)";  }}

function menutogel(x){
  var z = document.getElementById(x);
  var style = window.getComputedStyle(z); 
 	var matrix = new WebKitCSSMatrix(style.webkitTransform); 
		console.log('translateX: ', matrix.m41); 
  if (matrix.m41 < 0 ){
		z.style.transform = "translateX(0)";
}
else{z.style.transform = "translateX(-195px)";
}
}
    
function menumundur(x){  
		var z = document.getElementById(x);
  z.style.transform = "translateX(-195px)";
}
    
function menumaju(x){  
		var z = document.getElementById(x);
  z.style.transform = "translateX(0)";
}


