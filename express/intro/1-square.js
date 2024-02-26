#!/usr/bin/node

const area = function (width) {
  return width * width;
};

const perimeter = width => width * 4;

module.exports = {
  perimeter: perimeter,
  area: area
};
