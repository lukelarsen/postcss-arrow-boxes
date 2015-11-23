[PostCSS]:                 https://github.com/postcss/postcss

# PostCSS Arrow Boxes

<img align="right" width="135" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo-leftp.png">

[PostCSS] plugin that will create boxes with arrows in any direction.

It is often useful to have some content in a box and have that box have an arrow that points to something. A simple example would be an open tool tip pointing at the icon that opened the tooltip. Creating those boxes with the pointer arrows is easy with this plugin.

## Example
```html
<div class="arrow-box  arrow-box--bottom-right"></div>
```

```css
/* You define properties of your box. */
.arrow-box{
    position: relative;
    display: block;
    width: 120px;
    height: 75px;
}

/* Let the plugin position the arrow. */
.arrow-box--bottom-right{
    arrow-box: bottom, left, gray, 10px;
}
```

Will output:

```css
.arrow-box{
    position: relative;
    display: block;
    width: 120px;
    height: 75px;
}

.arrow-box--bottom-right{
    background-color: gray;
}

.arrow-box--bottom-right:before{
    border-top-color: gray !important;
    border: 10px solid transparent;
    position: absolute;
    top: 100%;
    border-collapse: separate;
    content: "";
    left: 10px;
}
```

## Usage

```
npm install postcss-arrow-boxes --save-dev
```

### Gulp
```js
var postcss = require('gulp-postcss');
var arrowBoxes = require('postcss-arrow-boxes');

gulp.task('css', function () {
    var processors = [
        arrowBoxes
    ];
    return gulp.src('./src/*.css')
        .pipe(postcss(processors))
        .pipe(gulp.dest('./dest'));
});
```

### Options
arrow-box: (side), (position), (color), (size);

#### side
Side can be either top, right, bottom, or left.

#### postion
Position options change a bit depending on what was chosen for the 'side' option.
If 'side' is top or bottom position can be right, left, or center.
If 'side' is left or right position can be top, bottom, or center.

#### color
Color can be set to any color value.

#### size
Size will control the size of your arrow. It should be in px.

#### Example
```css
arrow-box: top, left, red, 8px;
```
This would place the arrow on the top side of the box on the left edge. It would be red and sized to 8px.