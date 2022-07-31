var items = [{ "item": "Do your project", "done": 0 },
{ "item": "Watch video on youtube", "done": 0 }];

var itemsStr = JSON.stringify(items);
localStorage.setItem("toDoList", itemsStr);

chrome.runtime.onInstalled.addListener(() => {
  var item = localStorage.getItem("toDoList");
});

