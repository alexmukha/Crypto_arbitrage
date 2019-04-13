// when user clicks add-btn
console.log("Blahblah")
$(document).ready(()=>{

  $("#add-btn").on("click", function(event) {
    event.preventDefault();
    console.log("Adding new users...");
    // make a newUsers obj
    var newUsers = {
      name: $("#email1").val().trim(),
      password: $("#password1").val().trim()
    };
  
    // send an AJAX POST-request with jQuery
    $.post("/api/register", newUsers)
      .then(function(data) {
        console.log(data);
      });
  
    // empty each input box by replacing the value with an empty string
    $("#email1").val("");
    $("#password1").val("");
  
  });
})