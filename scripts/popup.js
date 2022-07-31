
fetchList();

$(".add").on("click", function () {
  console.log("adding new items");
  saveList();
})

$(".delete-all").on("click", function () {
  deleteAllItems();
})

function fetchList() {

  var item = localStorage.getItem("toDoList");
  var itemArr = JSON.parse(item);
  // console.log(itemArr);
  var new_items = "";
  for (var i = 0; i < itemArr.length; i++) {
    if (itemArr[i].done === 0) {
      new_items += "<li " + 'class="listitem"' + ">" + itemArr[i].item + '<div class="buttons"><span><button class="completed btn btn-light btn-sm">✔</button></span><span><button class="delete deleted btn btn-light btn-sm">❌</buton></span></div></li>';
      // console.log(new_items);
    }
    else {
      new_items += "<li " + 'class="listitem"' + "><s>" + itemArr[i].item + '</s><div class="buttons"><span><button class="completed btn btn-light btn-sm">✔</button></span><span><button class="delete deleted btn btn-light btn-sm">❌</buton></span></div></li>';

    }

  }

  $(".my-lists").empty();
  $(".my-lists").html(new_items);

  $(".delete").on("click", function () {
    var index = $(".delete").index($(this));
    console.log("deleting item from local storage");

    deleteItem(index);

  })

  $(".completed").on("click", function () {
    var index = $(".completed").index($(this));
    completeItem(index);
  })
}

function saveList() {

  var newtask = $(".new-task").val();
  console.log(newtask);

  var item = localStorage.getItem("toDoList");
  var itemArr = JSON.parse(item);

  var obj = {
    item: newtask,
    done: 0
  };

  itemArr.push(obj);
  console.log(itemArr)
  itemsStr = JSON.stringify(itemArr);

  localStorage.setItem("toDoList", itemsStr);
  fetchList();
}

function deleteItem(i) {
  var item = localStorage.getItem("toDoList");
  var itemArr = JSON.parse(item);

  itemArr.splice(i, 1);

  itemsStr = JSON.stringify(itemArr);
  localStorage.setItem("toDoList", itemsStr);

  fetchList();
}

function deleteAllItems() {
  var item = localStorage.getItem("toDoList");
  var itemArr = JSON.parse(item);

  itemArr.length = 0;

  itemsStr = JSON.stringify(itemArr);
  localStorage.setItem("toDoList", itemsStr);

  fetchList();
}

function completeItem(index) {
  var item = localStorage.getItem("toDoList");
  var itemArr = JSON.parse(item);
  itemArr[index].done = 1;

  itemsStr = JSON.stringify(itemArr);
  localStorage.setItem("toDoList", itemsStr);

  fetchList();

}







