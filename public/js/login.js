// when user clicks add-btn
$(document).ready(()=>{

  // $("#login").on("click", function(event) {
  //   event.preventDefault();
  
  //   function getUsers(login) {
  //     console.log(Sequelize);
  //     // var loginString = login || "";
  //     // if (loginString) {
  //       // loginString = "/login/" + loginString;
  //     // }
  //     // $.get("/api/users" + loginString, function(data) {
  //     //   console.log("users", data);
  //     //   users = data;
  //     //   if (!users || !users.length) {
  //     //     cookie();
  //     //   }
  //     //   else {
  //     //     nocookie();
  //     //   }
  //     // });
  //   }

  //   getUsers();
  //   // console.log("Adding new users...");
  //   // make a newUsers obj
  //   // var newUsers = {
  //   //   login: $("#email1").val().trim(),
  //   //   password: $("#password1").val().trim()
  //   // };
  
  //   // send an AJAX POST-request with jQuery
  //   $.get("/api/users", Users)
  //     .then(function(data) {
  //       // console.log(data);
  //     });
  
  //   // empty each input box by replacing the value with an empty string
  //   // $("#email1").val("");
  //   // $("#password1").val("");
  
  // });

  // function readCookie(name) {
  //   var nameEQ = name + "=";
  //   var ca = document.cookie.split(";");
  //   for (var i = 0; i < ca.length; i++) {
  //     var c = ca[i];
  //     while (c.charAt(0) === " ") c = c.substring(1, c.length);
  //     if (c.indexOf(nameEQ) === 0) {
  //       return c.substring(nameEQ.length, c.length);
  //     }
  //   }
  //   return null;
  // }

  // // Capture Button Click
  // $("#loginsss").on("click", function(event) {
  //   event.preventDefault();

  //  var email = $("#Email1").val().trim();
  //   // console.log(email);
  //  $("#Email1").text(email);
  //  document.cookie = "email=; max-age=600";

  //   document.cookie = "email=" + email;
  // var cookieEmail = readCookie("email");

  // });

  // // By default display the content from the cookieString
  // // $("#Email1").text(readCookie("email"));
  // // $("#Password1").text(readCookie("password"));


});