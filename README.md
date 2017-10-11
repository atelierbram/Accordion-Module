# Accordion-Module

Accordion Ui Module with native (_vanilla_) javascript, adapted from [10up WP Component Library](https://github.com/10up/wp-component-library) and [CSS+JS Accordion to get dynamic max-height value](https://codepen.io/aaronbushnell/pen/eGVdzv) by [Aaron Bushnell](https://aaronmbushnell.com/)

![screenshot of accordion module](http://atelierbram.github.io/Accordion-Module/assets/img/accordion-module-screengrab.png "screenshot of accordion module")

### Demo
- [here on GitHub](http://atelierbram.github.io/Accordion-Module/)
- [on Codepen](https://codepen.io/atelierbram/pen/eGKNMe)

Minimal required HTML-markup is:

```html
<section class="js-accordion">
  <div class="Accordion" data-accordion>
    <h3 class="accordion_header" data-title><button class="accordion_button" type="button">Alorem</button></h3>
    <div class="accordion_content" data-content>
      <h4 class="accordion_label">Alorem</h4>
      <!-- stuff -->
    </div><!-- .accordion_content -->
  </div><!-- .Accordion -->
<!-- and so on -->
</section>
```

Include javascript and initiate in the bottom of HTML

```html
<script src="assets/js/all.min.js"></script>
```

### Resources
- [10up WP Component Library](https://github.com/10up/wp-component-library) and
- [CSS+JS Accordion to get dynamic max-height value](https://codepen.io/aaronbushnell/pen/eGVdzv) by [Aaron Bushnell](https://aaronmbushnell.com/)

### Notes
An ealier version of this ui-module, with much simpler javaScript has been archived: see archive directory.

