
function redirect(){
	let url = window.location.toString()
	let searchQuery = url.split("=").pop()
    	location.replace("https://www.google.com/search?q="+searchQuery);
}
redirect()
