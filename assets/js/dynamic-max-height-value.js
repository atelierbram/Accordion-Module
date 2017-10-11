'use strict';
// https://codepen.io/aaronbushnell/pen/eGVdzv
// Simple CSS+JS dynamic max-height accordions by Aaron Bushnell https://codepen.io/aaronbushnell/
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Accordion = function () {
  function Accordion($el) {
    _classCallCheck(this, Accordion);

    this.$el = $el;
    this.$title = this.$el.querySelector('[data-title]');
    this.$content = this.$el.querySelector('[data-content]');
    this.isOpen = false;
    this.height = 0;

    this.events();
    this.close();
  }

  Accordion.prototype.events = function events() {
    this.$title.addEventListener('click', this.handleClick.bind(this));
    this.$content.addEventListener('transitionend', this.handleTransition.bind(this));
  };

  Accordion.prototype.handleClick = function handleClick() {
    this.height = this.$content.scrollHeight;

    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  };

  Accordion.prototype.close = function close() {
    var _this = this;

    this.isOpen = false;
    this.$el.classList.remove('is-active');
    this.$content.style.maxHeight = this.height + 'px';

    setTimeout(function () {
      _this.$content.style.maxHeight = 0 + 'px';
    }, 1);
  };

  Accordion.prototype.open = function open() {
    var _this2 = this;

    this.isOpen = true;
    this.$el.classList.add('is-active');
    this.$el.classList.remove('is-hidden');
    this.$content.style.maxHeight = 0 + 'px';

    setTimeout(function () {
      _this2.$content.style.maxHeight = _this2.height + 'px';
    }, 1);
  };

  Accordion.prototype.handleTransition = function handleTransition() {
    if (!this.isOpen) {
      this.$el.classList.add('is-hidden');
    }

    this.$content.style.maxHeight = '';
  };

  return Accordion;
}();
