"use strict";
/**
 * Genera un número aleatorio entre el mínimo (incluído) y el máximo (excluído)
 * @param {Integer} min Mínimo del rango
 * @param {*} max Máximo del rango
 * @returns Un entero aleatorio comprendido dentro del rango anterior
 */
export function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
