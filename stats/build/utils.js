"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStrintToDate = void 0;
const dateStrintToDate = function (dateString) {
    const date = dateString.split("/").map(function (str) {
        return parseInt(str);
    });
    return new Date(date[2], date[1] - 1, date[0]);
};
exports.dateStrintToDate = dateStrintToDate;
