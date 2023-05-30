var counter = 0;

counter_elt = document.querySelector('#counter-value');
warning_elt = document.querySelector('#warning');

function addToCounter(x) {
  if (x === -1 && counter === 0) {
    warning_elt.innerHTML = 'Cannot go below zero';
  } else {
    warning_elt.innerHTML = '';
    counter = counter += x;

    // show nothing if count does not have a value
    counter_elt.innerHTML = counter;
  }
}
