document.getElementById("loginForm").addEventListener("submit", async function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const res = await fetch("students.json");
    const students = await res.json();

    const student = students.find(s => s.username === username && s.password === password);

    if (student) {
      sessionStorage.setItem("loggedInStudent", JSON.stringify(student));
      window.location.href = "student-page.html";
    } else {
      alert("Invalid username or password.");
    }
  } catch (error) {
    alert("Error loading student data.");
    console.error(error);
  }
});
