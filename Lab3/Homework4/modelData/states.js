"use strict";

/*
 * Load the model data of the problem 2 of cs142's project4.
 * We load into the property cs142models.statesModel a function that returns  an array of
 * strings with the names of the states.
 *
 * See README.md for more details
 */

var cs142models;

if (cs142models === undefined) {
  cs142models = {};
}

cs142models.statesModel = function () {
  return [
    "quận 1",
    "quận 3",
    "quận 4",
    " quận 5",
    "quận 6, quận 7, quận 8, quận 10, quận 11, quận 12, quận Bình Thạnh, quận Phú Nhuận, quận Gò Vấp, TP Thủ Đức, quận Bình Tân, quận Tân Phú, quận Tân Bình",
  ];
};
