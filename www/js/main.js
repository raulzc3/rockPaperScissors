"use strict";
import { randomNum } from "./helpers.js";
//Objeto en el que guardamos las estadísticas de la sesión de juego
const stats = {
  matches: 0,
  player: 0,
  computer: 0,
  tie: 0,
};

//Array con los botones de opción del usuario
const buttons = document.querySelectorAll(".button");

for (let button of buttons) {
  const option = button.dataset.option;
  button.addEventListener("click", () => fight(option));
}

/**
 * Determina el ganador y aplica cambios en el HTML
 * @param {Number} playerInput Número entre 0 y 2 (incluídos)
 */
function fight(playerInput) {
  //Obtenemos un ganador y actualizamos las estadísticas
  const options = ["Piedra", "Papel", "Tijeras"];
  const computerOption = options[randomNum(0, 3)];
  const userOption = options[playerInput];
  const result = getResult(userOption, computerOption);
  updateStats(result);

  //Mostramos el resultado en el HTML
  const resultSpan = document.querySelector("#resultArea");
  const userResultSpan = document.querySelector("#playerOption");
  const computerResultSpan = document.querySelector("#computerOption");
  const totalMatchesSpan = document.querySelector("#totalMatches");
  const playerWinsSpan = document.querySelector("#playerWins");
  const computerWinsSpan = document.querySelector("#computerWins");
  const tiesSpan = document.querySelector("#ties");

  resultSpan.innerText = result;
  computerResultSpan.innerText = computerOption;
  userResultSpan.innerText = userOption;
  totalMatchesSpan.innerText = stats.matches;
  playerWinsSpan.innerText = stats.player;
  computerWinsSpan.innerText = stats.computer;
  tiesSpan.innerText = stats.tie;
}

/**
 * Actualiza el objeto de las estadísticas en base al ganador de la partida
 * @param {String} winner Jugador o Máquina
 */
function updateStats(winner) {
  stats.matches++;

  stats.matches > 0 &&
    document.querySelector(".results").classList.remove("hidden");

  if (winner === "Jugador") {
    stats.player++;
  } else if (winner === "Máquina") {
    stats.computer++;
  } else {
    stats.tie++;
  }
}

/**
 * Decide si gana el usuario o la máquina
 * @param {String} player Elección del usuario
 * @param {String} computer Elección de la máquina
 * @returns El ganador de la partida o empate
 */
function getResult(player, computer) {
  if (player !== computer) {
    switch (player) {
      case "Piedra":
        return computer === "Tijeras" ? "Jugador" : "Máquina";
      case "Papel":
        return computer === "Piedra" ? "Jugador" : "Máquina";
      case "Tijeras":
        return computer === "Papel" ? "Jugador" : "Máquina";
    }
  }
  return "Empate";
}
