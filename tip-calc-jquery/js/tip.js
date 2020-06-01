let bill = $('#input-bill');

let tip_minus = $('#tip-minus');
let tip_plus = $('#tip-plus');
let tip = $('#input-tip');

let number_minus = $('#number-minus');
let number_plus = $('#number-plus');
let number = $('#input-number');

let result = $('#input-result');
let result_tip_title = $('#result-tip-title');
let result_tip_price = $('#result-tip-price');
let result_total_title = $('#result-total-title');
let result_total_price = $('#result-total-price');
// /* for listen buttons + and - */
$(() => {
  tip_minus.click(() => {
    if (Number(tip.val()) <= 0) {
      tip.val(0);
    } else {
      tip.val(Number(tip.val()) - 1);
    }
  });

  tip_plus.click(() => {
    if (Number(tip.val()) >= 100) {
      tip.val(100);
    } else {
      tip.val(Number(tip.val()) + 1);
    }
  });

  number_minus.click(() => {
    if (Number(number.val()) <= 1) {
      number.val(1);
    } else {
      number.val(Number(number.val()) - 1);
    }
  });

  number_plus.click(() => {
    number.val(Number(number.val()) + 1);
  });

  result.click(() => {
    if (bill.val() < 0) {
      bill.val(Math.abs(bill.val()));
    }
    if (tip.val() < 0) {
      tip.val(Math.abs(tip.val()));
    }
    number.val(Math.round(Math.abs(number.val())));

    result_tip_title.html('Tip');
    result_total_title.html('Total');
    result_tip_price.html(
      (
        ((parseFloat(bill.val()) / 100) * Number(tip.val())) /
        Number(number.val())
      ).toFixed(2) + '$',
    );
    result_total_price.html(
      (
        (parseFloat(bill.val()) +
          (parseFloat(bill.val()) / 100) * Number(tip.val())) /
        Number(number.val())
      ).toFixed(2) + '$',
    );
  });
});
