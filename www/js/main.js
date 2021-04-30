"use strict";
import { randomNum } from "./helpers.js";

function fight(playerInput) {
  const options = ["Piedra", "Papel", "Tijeras"];
  const computerOption = options[randomNum(0, 3)];
  const userOption = options[playerInput];
  const result = getResult(userOption, computerOption);
  const resultSpan = document.querySelector("#resultArea");
  const userResultSpan = document.querySelector("#playerOption");
  const computerResultSpan = document.querySelector("#computerOption");

  resultSpan.innerText = result;
  computerResultSpan.innerText = computerOption;
  userResultSpan.innerText = userOption;
}

function getResult(player, computer) {
  if (player !== computer) {
    switch (player) {
      case "Piedra":
        return computer === "Tijeras" ? "Persona" : "Máquina";
      case "Papel":
        return computer === "Piedra" ? "Persona" : "Máquina";
      case "Tijeras":
        return computer === "Papel" ? "Persona" : "Máquina";
    }
  }
  return "Empate";
}

const buttons = document.querySelectorAll(".button");

for (let button of buttons) {
  const option = button.dataset.option;

  button.addEventListener("click", () => fight(option));
}
