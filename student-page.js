function logout() {
    sessionStorage.clear();
    window.location.href = "index.html";
}

window.onload = function () {
    const studentData = sessionStorage.getItem("loggedInStudent");

    if (!studentData) {
        alert("Please login first.");
        window.location.href = "index.html";
        return;
    }

    const student = JSON.parse(studentData);

    document.getElementById("studentName").textContent = student.name;
    document.getElementById("studentUsername").textContent = student.username;
    document.getElementById("studentGrade").textContent = student.grade;
    document.getElementById("studentCourse").textContent = student.course;

    const tbody = document.getElementById("attendanceTable");
    student.attendance.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.exp}</td>
            ${row.lastWeek.map(day => `<td>${day}</td>`).join("")}
            ${row.thisWeek.map(day => `<td>${day}</td>`).join("")}
            <td>
              ${row.course}<br>
              <a href="mailto:${row.email}">Email ${row.teacher} - Rm: ${row.room}</a>
            </td>
            <td>[i]</td>
            <td>[i]</td>
            <td>[i]</td><td>[i]</td><td>[i]</td>
            <td>${row.absences}</td>
            <td>${row.tardies}</td>
          `;
        tbody.appendChild(tr);
    });
};