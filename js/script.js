function newItem() {
  let li = $("<li></li>");
  let inputValue = $("#input").val();
  li.append(inputValue);
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    $("#list").append(li);
    // Clear input text field
    $("#input").val("");
  }

  //On double click on the list item toggle strikeout mark
  li.on("dblclick", function crossOut() {
    li.toggleClass("strike");
  });

  let crossOutButton = $("<crossOutButton></crossOutButton>");
  function crossOut() {
    li.toggleClass("strike");
  }
  crossOutButton.append(document.createTextNode("X"));
  // Append delete button to the list item
  li.append(crossOutButton);
  crossOutButton.on("click", deleteListItem);
  function deleteListItem() {
    li.addClass("delete");
  }
  $("#list").sortable();

  //Enable entering list item by pressing "Enter"
  $("#input").on("keypress", function (event) {
    if (event.which === 13) {
      event.preventDefault();
      newItem();
    }
  });
}
