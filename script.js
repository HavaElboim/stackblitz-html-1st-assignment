var counter = 0;
regular_bg_color =
  'linear-gradient(45deg, rgba(9, 221, 203, 0.877) 2.43%, rgba(167, 162, 118, 0.5) 100%)';

counter_elt = document.querySelector('#counter-value');
warning_elt = document.querySelector('#warning');
plus_button = document.querySelector('#plus');
minus_button = document.querySelector('#minus');

function addToCounter(x) {
  if (x === -1 && counter === 0) {
    warning_elt.innerHTML = 'Cannot go below zero';
  } else {
    warning_elt.innerHTML = '';
    counter = counter += x;

    counter_elt.innerHTML = counter;
    if (x === -1) {
      counter_elt.style.color = 'red';
      minus_button.style.background = 'rgb(245, 38, 2)';
      plus_button.style.background = regular_bg_color;
    } else {
      counter_elt.style.color = 'green';
      plus_button.style.background = 'rgb(50, 245, 2)';
      minus_button.style.background =
        'linear-gradient(45deg, rgba(9, 221, 203, 0.877) 2.43%, rgba(167, 162, 118, 0.5) 100%)';
    }
  }
}
