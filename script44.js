function enrollCourse(courseName, videoUrl) {
  alert("You have successfully enrolled in " + courseName + "!");
  document.getElementById("videoFrame").src = videoUrl;

  // Show banner image dynamically when user enrolls
  const banner = document.getElementById("courseBanner");
  banner.src = "BANER.png";
  banner.style.display = "block";

  // Increase progress for the course
  if (courseName === "Web Development") {
    let progress = document.getElementById("webProgress");
    if (progress.value < 100) progress.value += 20;
  } else if (courseName === "Python Programming") {
    let progress = document.getElementById("pythonProgress");
    if (progress.value < 100) progress.value += 20;
  }
}
