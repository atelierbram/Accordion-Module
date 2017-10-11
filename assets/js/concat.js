/********************************
https://github.com/10up/wp-component-library
	Name: WordPress Accessible Accordion
	Usage:

	TenUp.accordion( {
		target: '.accordion', // ID (or class) of accordion container
	}, function() {
		console.log( 'Amazing callback function!' );
	} );

********************************/

( function() {
  'use strict';

  // Define global TenUp object if it doesn't exist
  if ( 'object' !== typeof window.TenUp ) {
    window.TenUp = {};
  }

  // This is our global accordion index to keep unique ids
  var topIndex = 0;

  window.TenUp.accordion = function( options, callback ) {
    if ( 'undefined' === typeof options.target ) {
      return false;
    }

    var accordion = document.querySelector( options.target );

    if ( ! accordion ) {
      return;
    }

    // Simple iterator for reuse
    var forEach = function( array, callback, scope ) {
      for ( var i = 0, imax = array.length; i < imax; i++ ) {
        callback.call( scope, i, array[i] ); // passes back stuff we need
      }
    };

    var accordionContent = accordion.getElementsByClassName( 'accordion_content' ),
      accordionHeader  = accordion.getElementsByClassName( 'accordion_header' );

    topIndex++;

    forEach( accordionHeader, function( index, value ) {
      var head  = value,
        index = index + 1;

      // Set ARIA and ID attributes
      head.setAttribute( 'id', 'tab' + topIndex + '-' + index );
      head.setAttribute( 'aria-selected', 'false' );
      head.setAttribute( 'aria-expanded', 'false' );
      head.setAttribute( 'aria-controls', 'panel' + topIndex + '-' + index );
      head.setAttribute( 'role', 'tab' );

      head.addEventListener( 'click', accordionHandle );

      function accordionHandle() {

        var nextPanel = value.nextElementSibling,
          nextPanelLabel = nextPanel.getElementsByClassName( 'accordion_label' )[0];

        value.classList.toggle( 'is-active' );

        nextPanel.classList.toggle( 'is-active' );

        nextPanelLabel.setAttribute( 'tabindex', -1 );
        nextPanelLabel.focus();

        if ( nextPanel.classList.contains( 'is-active' ) ) {

          head.setAttribute( 'aria-selected', 'true' );
          head.setAttribute( 'aria-expanded', 'true' );
          nextPanel.setAttribute( 'aria-hidden', 'false' );

        } else {

          head.setAttribute( 'aria-selected', 'false' );
          head.setAttribute( 'aria-expanded', 'false' );
          nextPanel.setAttribute( 'aria-hidden', 'true' );

        }
      }
    });

    forEach( accordionContent, function( index, value ) {
      var content = value,
        index   = index + 1;

      // Set ARIA and ID attributes
      content.setAttribute( 'id', 'panel' + topIndex + '-' + index );
      content.setAttribute( 'aria-hidden', 'true' );
      content.setAttribute( 'aria-labelledby', 'tab' + topIndex + '-' + index );
      content.setAttribute( 'role', 'tabpanel' );
      //content.setAttribute( 'tabindex', '-1' );
    });

    // Execute the callback function
    if ( typeof callback === 'function' ) {
      callback.call();
    }
  }
} )();

TenUp.accordion( {
  target: '.js-accordion', // ID (or class) of accordion container
}, function() {
  // console.log( 'Amazing callback function!' );
} );

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

/*
 * Instantiate a new Accordion
*/
new Accordion(document.querySelector('[data-accordion-1]'));
new Accordion(document.querySelector('[data-accordion-2]'));
new Accordion(document.querySelector('[data-accordion-3]'));
new Accordion(document.querySelector('[data-accordion-4]'));
new Accordion(document.querySelector('[data-accordion-5]'));
