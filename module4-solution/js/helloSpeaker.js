(function (window) {
	var sayhello=function (name){
		console.log("Hello"+" "+name);
	}
	window.sayhello=sayhello;
})(window);