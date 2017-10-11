/*
 * Accordion
 * Simple Accordion done in Vanilla JS
 * Example and documentation at: https://github.com/atelierbram/Accordion-Module
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 */

domready(function () {

  var accs = document.querySelectorAll('.js-accordion'), j;
  for (j = 0; j < accs.length; ++j) {

    var h3El = accs[j].querySelectorAll('h3');
    var size = h3El.length, i, h3Node;

    for (i = 0; i < size; i++) {
      h3Node = h3El[i];

      h3Node.setAttribute("class", "toggle");
      h3Node.nextElementSibling.classList.add("closed");

      h3Node.onclick = function () {
        var h3 = this;

        if (h3.getAttribute("class") == "toggle") {
          h3.setAttribute("class", "toggle-active");
          h3.nextElementSibling.classList.remove("closed");
          h3.nextElementSibling.classList.add("opened");
        }
        else {
          h3.setAttribute("class", "toggle");
          h3.nextElementSibling.classList.add("closed");
          h3.nextElementSibling.classList.remove("opened");
        }
      }
    }
  }

});
