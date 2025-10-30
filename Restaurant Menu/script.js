function showDetails(title, price) {
  document.getElementById("details").style.display = "block";
  document.getElementById("dishTitle").innerText = title;
  document.getElementById("dishPrice").innerText = "$" + price + ".00";
 
}

function closeDetails() {
  document.getElementById("details").style.display = "none";
}
