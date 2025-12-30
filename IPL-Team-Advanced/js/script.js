function searchPlayer(value) {
  let players = document.querySelectorAll("#playerList li");
  players.forEach(player => {
    player.style.display =
      player.innerText.toLowerCase().includes(value.toLowerCase())
      ? "block" : "none";
  });
}

function submitForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    alert("Please fill all fields");
    return false;
  }

  alert("Thank you for your feedback ❤️");
  return false;
}
