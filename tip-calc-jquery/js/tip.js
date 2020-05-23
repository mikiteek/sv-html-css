var tip_minus = $('#tip-minus');
var tip_plus = $('#tip-plus');
var tip = $('#input-tip');

var number_minus = $('#number-minus');
var number_plus = $('#number-plus');
var number = $('#input-number');

var result = $('#input-result');
var result_tip_title = $('#result-tip-title');
var result_tip_price = $('#result-tip-price');
var result_total_title = $('#result-total-title');
var result_total_price = $('#result-total-price');
// /* for listen buttons + and - */
$(function () {
  tip_minus.click(function () {
    if (Number(tip.val()) <= 0) {
      tip.val(0);
    } else {
      tip.val(Number(tip.val()) - 1);
    }
  });
});

$(function () {
  tip_plus.click(function () {
    if (Number(tip.val()) >= 100) {
      tip.val(100);
    } else {
      tip.val(Number(tip.val()) + 1);
    }
  });
});

$(function () {
  number_minus.click(function () {
    if (Number(number.val()) <= 1) {
      number.val(1);
    } else {
      number.val(Number(number.val()) - 1);
    }
  });
});

$(function () {
  number_plus.click(function () {
    number.val(Number(number.val()) + 1);
  });
});

/* result function*/
$(function () {
  result.click(function () {
    var bill = parseFloat($('#input-bill').val());
    result_tip_title.html('Tip');
    result_total_title.html('Total');
    result_tip_price.html(
      ((bill / 100) * Number(tip.val()) * Number(number.val())).toFixed(2),
    );
    result_total_price.html(
      (
        (bill + (bill / 100) * Number(tip.val())) *
        Number(number.val())
      ).toFixed(2),
    );
  });
});
