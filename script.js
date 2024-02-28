var allStudents = [];
function submit() {
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var mailphone = document.getElementById("mailphone").value;
  var password = document.getElementById("password").value;

  if (
    firstname === "" ||
    lastname === "" ||
    mailphone === "" ||
    password === ""
  ) {
    emptyErrorMessage.style.display = "block";
    setTimeout(() => {
      emptyErrorMessage.style.display = "none";
    }, 5000);
  } else {
    var studentObj = { firstname, lastname, mailphone, password };
    var pushedStudent = allStudents.push(studentObj);
    if (pushedStudent) {
        
        successMessage.style.display = "block";
        setTimeout(() => {
            successMessage.style.display = "none";
        }, 3000);
        localStorage.setItem("userData", JSON.stringify(studentObj));
        window.location.href = "login.html";
    } else {
      alert("failed to submit");
    }
    console.log(allStudents);

    document.getElementById("firstname").value = "";
    document.getElementById("lastname").value = "";
    document.getElementById("mailphone").value = "";
    document.getElementById("password").value = "";
  }

  // Store data in local storage
  // var userData = {
  //     firstname:firstname,
  //     lastname: lastname,
  //     mailphone: mailphone,
  //     password: password
  // }
  document.getElementById("successMessage").style.display = "block";
}
