# Accordion-Module

Accordion Ui Module with native (_vanilla_) javascript, adapted from [Accordion by Pinceladas da Web](https://github.com/pinceladasdaweb/accordion)

### Demo
- [here on GitHub](http://atelierbram.github.io/Accordion-Module/)
- [on Codepen](http://codepen.io/atelierbram/)


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

Include javascript in the bottom page, (_or better combine those in one request_)

```html
<script src="assets/js/dom-ready.js" async defer></script>
<script src="assets/js/accordion.js" async defer></script>
```



### Resources
- SVG icons from [Google Material Design](https://github.com/google/material-design-icons)
- javascript `for` [Loop Over querySelectorAll Matches](https://css-tricks.com/snippets/javascript/loop-queryselectorall-matches/)
