
// document.addEventListener('DOMContentLoaded', function () {
// 		document.getElementsByTagName("html")[0].style.userSelect = "auto";
// 		document.getElementsByTagName("html")[0].style.webkitUserSelect = "auto";
// 		document.getElementsByTagName("body")[0].style.userSelect = "auto";
// 		document.getElementsByTagName("body")[0].style.webkitUserSelect = "auto";
// 		console.log("DOMContentLoaded");
// });

// document.addEventListener('load', function () {
// 	console.log("load");
// })


chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {
		document.getElementsByTagName("html")[0].style.userSelect = "auto";
		document.getElementsByTagName("html")[0].style.webkitUserSelect = "auto";
		document.getElementsByTagName("body")[0].style.userSelect = "auto";
		document.getElementsByTagName("body")[0].style.webkitUserSelect = "auto";
		console.log("DOMContentLoaded");
    }
  }
);
