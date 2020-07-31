// More depreciated bullshit commmented out, it's late and I need sleep. Will clean up later

// alert("outside");
// console.log("outside");

// document.addEventListener('DOMContentLoaded', function () {
// 	var activeTab = tabs[0];
//     chrome.tabs.sendMessage(activeTab.id, {"message": "clicked_browser_action"});
// });

// document.addEventListener('load', function () {
// 	console.log("load");
// })

window.onload=function() {
	document.getElementsByTagName("html")[0].style.userSelect = "auto";
	document.getElementsByTagName("html")[0].style.webkitUserSelect = "auto";
	document.getElementsByTagName("body")[0].style.userSelect = "auto";
	document.getElementsByTagName("body")[0].style.webkitUserSelect = "auto";
}