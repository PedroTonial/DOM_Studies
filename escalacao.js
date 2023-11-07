function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;
  //.value pega o valor que está dentro do input
  const confirmation = confirm(
    "Confirmar escalação:" +
      "\nNome: " +
      name +
      "\nPosição: " +
      position +
      "\nNúmero: " +
      number
  );

  if (confirmation) {
    const teamList = document.getElementById("team-list");
    const player = document.createElement("li");
    player.id = "player-" + number;
    player.innerText = position + ": " + name + " - " + number;
    teamList.appendChild(player);

    //LIMPANDO OS INPUTS
    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerRemove = document.getElementById("player-" + number);

  const confirmation = confirm(
    "Remover o jogador: " + playerRemove.innerText + "?"
  );
  if (confirmation) {
    const teamList = document.getElementById("team-list");
    playerRemove.remove();
    // ou  teamList.removeChild(playerRemove);
    document.getElementById("numberToRemove").value = "";
  }
}
