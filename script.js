
document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); 

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const country = document.getElementById("country").value.trim();
  const comments = document.getElementById("comments").value.trim();

  if (fullName === "" || email === "" || country === "" || comments === "") {
    alert("Please fill in all fields before submitting.");
    return;
  }

  alert("Thank you, " + fullName + "! Your form was submitted successfully.");
  this.reset();
});
