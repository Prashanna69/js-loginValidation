const form = document.getElementById("form");
const user = document.getElementById("Name");
const pass = document.getElementById("Password");
const post = document.getElementById("purpose");
const errorEle = document.getElementById("error");

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let message = [];
    if (pass.value.length < 6) {
      message.push("Password must be longer !");
    } else {
      message.push("");
    }
    if (pass.value.length >= 20) {
      message.push("Password must be shorter!");
    }
    if (message.length > 0) {
      errorEle.innerHTML = message.join(" ");
    }
    if (
      user.value == "Prashanna" &&
      pass.value == "admin123" &&
      post.value == "Admin"
    ) {
      alert("Welcome Admin!!");
    } else {
      alert("Access Denied!!");
    }
    if (
      user.value == "Prashanna" &&
      pass.value == "student" &&
      post.value == "Student"
    ) {
      alert("Welcome Student!!");
    } else {
      alert("Access Denied!!");
    }
    if (
      user.value == "Prashanna" &&
      pass.value == "teacher" &&
      post.value == "Tutor"
    ) {
      alert("Welcome Teacher!!");
    } else {
      alert("Access Denied!!");
    }
  });
}
