var counter = 0;

counter_elt = document.querySelector('#counter-value');
warning_elt = document.querySelector('#warning');

function addToCounter(x) {
  if (x === -1 && counter === 0) {
    warning_elt.innerHTML = 'Cannot go below zero';
  } else {
    warning_elt.innerHTML = '';
    counter = counter += x;

    counter_elt.innerHTML = counter;
    if (x === -1) counter_elt.style.color = 'red';
    else counter_elt.style.color = 'green';
  }
}
