var tip_minus = document.getElementById('tip-minus');
var tip_plus = document.getElementById('tip-plus');
var tip = document.getElementById('input-tip');

var number_minus = document.getElementById('number-minus');
var number_plus = document.getElementById('number-plus');
var number = document.getElementById('input-number');

var result = document.getElementById('input-result');

var result_tip_title = document.getElementById('result-tip-title');
var result_tip_price = document.getElementById('result-tip-price');
var result_total_title = document.getElementById('result-total-title');
var result_total_price = document.getElementById('result-total-price');
/* for listen buttons + and - */

tip_minus.addEventListener(
  'click',
  function () {
    if (Number(tip.value) <= 0) {
      tip.value = 0;
    } else {
      tip.value = Number(tip.value) - 1;
    }
  },
  false,
);
tip_plus.addEventListener(
  'click',
  function () {
    if (Number(tip.value) >= 100) {
      tip.value = 100;
    } else {
      tip.value = Number(tip.value) + 1;
    }
  },
  false,
);

number_minus.addEventListener(
  'click',
  function () {
    if (Number(number.value) <= 1) {
      number.value = 1;
    } else {
      number.value = Number(number.value) - 1;
    }
  },
  false,
);
number_plus.addEventListener(
  'click',
  function () {
    number.value = Number(number.value) + 1;
  },
  false,
);

result.addEventListener(
  'click',
  function () {
    var bill = parseFloat(document.getElementById('input-bill').value);
    result_tip_title.innerHTML = 'Tip';
    result_total_title.innerHTML = 'Total';
    result_tip_price.innerHTML =
      (((bill / 100) * Number(tip.value)) / Number(number.value)).toFixed(2) +
      '$';
    result_total_price.innerHTML =
      (
        (bill + (bill / 100) * Number(tip.value)) /
        Number(number.value)
      ).toFixed(2) + '$';
  },
  false,
);
