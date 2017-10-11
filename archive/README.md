# Accordion-Module

Accordion Ui Module with native (_vanilla_) javascript, adapted from [Accordion by Pinceladas da Web](https://github.com/pinceladasdaweb/accordion)

![screenshot of accordion module](http://atelierbram.github.io/Accordion-Module/assets/img/accordion-module-screengrab.png "screenshot of accordion module")

### Demo
- [here on GitHub](http://atelierbram.github.io/Accordion-Module/)
- [on Codepen](http://codepen.io/atelierbram/pen/NqZpVg)


Minimal required HTML-markup is:

```html
<section class="accordion js-accordion">

  <h3>Sub Title</h3>
  <div>
    <div class="accordion_inner">
      <!-- stuff -->
    </div>
  </div>

  <h3>Sub Title</h3>
  <div>
    <div class="accordion_inner">
      <!-- stuff -->
    </div>
  </div>

<!-- and so on -->
</section>

```

Include javascript in the bottom of HTML

```html
<script src="assets/js/dom-ready.js" async defer></script>
<script src="assets/js/accordion.js" async defer></script>
```

Better, combine those in one request:
```html
<script src="assets/js/all.min.js" async defer></script>
```

For more info on the css see [`assets/css/style.css`](https://github.com/atelierbram/Accordion-Module/blob/master/assets/css/style.css) but also the Sass file in [`assets/sass/modules/_accordion.scss`](https://github.com/atelierbram/Accordion-Module/blob/master/assets/sass/modules/_accordion.scss)

### Resources
- [Accordion by Pinceladas da Web](https://github.com/pinceladasdaweb/accordion)
- SVG icons from [Google Material Design](https://github.com/google/material-design-icons)
- javascript `for` [Loop Over querySelectorAll Matches](https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/)
