Design tokens are the visual design atoms of the design system — specifically, they are named entities that store visual design attributes. We use them in place of hard-coded values (such as hex values for color or pixel values for spacing) in order to maintain a scalable and consistent visual system for UI development.

[Design tokens](https://medium.com/eightshapes-llc/25dd82d58421) are named entities that store visual design information. These are used in place of hard-coded values (such as hex values for color or pixels for spacing) in order to maintain a scalable, consistent system for UI development.

## Color Palettes
{% for palette, values in colors %}
**{{ palette | capitalize }}** palette values. Accessed via `map(colors, {{ palette }}, <key>)`
{% include "@palette-sample" %}
{% endfor %}

## Borders
Width and radii tokens are used to style element borders. Accessed via `map(borders, <key>)`.

Key         | Value
------------|------------
{% for key, value in borders -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## Breakpoints
Breakpoint tokens are used within `@media` queries. Accessed via `map(breakpoints, <key>)`.

Key         | Value
------------|------------
{% for key, value in breakpoints -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## Font families
Font family tokens are used for typographic styling. Accessed via `map(fonts, <key>)`.

Key         | Value
------------|------------
{% for key, value in fonts -%}
`{{ key }}` | <span style="font: 1.25em/1 {{ value }}">{{ value }}</span>
{% endfor -%}

## Layers
Layering tokens set the `z-index` layer value for elements. Accessed via `map(layers, <key>)`.

Key         | Value
------------|------------
{% for key, value in layers -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## Sizes
Sizing tokens describe the dimensions of elements. Accessed via `map(sizes, <key>)`.

Key         | Value
------------|------------
{% for key, value in sizes -%}
`{{ key }}` | {{ value }}
{% endfor -%}

## Spacing
Spacing tokens describe the distance between elements. Accessed via `map(spaces, <key>)`.

Key         | Value
------------|------------
{% for key, value in spaces -%}
`{{ key }}` | {{ value }}
{% endfor -%}


## Categories

Background Color
Text Color
Border Color
Font
Font Size
Opacity
Line Height
Spacing
Radius
Sizing
Shadow
Time
Media Query
Z-index


```
$color-background-button-brand-active       : rgb(72, 25, 69);
$color-background-button-brand-disabled     : rgb(224, 229, 238);
$color-background-button-brand-hover        : rgb(87, 31, 83);
$color-background-button-brand              : rgb(105, 37, 101);
$color-background-button-secondary-active   : rgb(225, 109, 10);
$color-background-button-secondary-disabled : rgb(224, 229, 238);
$color-background-button-secondary-hover    : rgb(244, 118, 11);
$color-background-button-secondary          : rgb(245, 130, 32);
$color-background-secondary                 : hsla(28, 91%, 54%, 1);
$color-border-secondary                     : hsla(28, 91%, 54%, 1);
$color-background-secondary-hover           : rgb(244, 118, 11);
$color-background-button-secondary-active   : rgb(225, 109, 10);
$color-background-toast-success             : rgb(4, 132, 75);
$color-background-toast-error               : rgb(194, 57, 52);

$color-border-secondary-active              : rgb(225, 109, 10);
$color-border-brand                         : rgb(105, 37, 101);
$color-border-button-brand-disabled         : rgba(0, 0, 0, 0);
$color-border-button-brand                  : rgb(105, 37, 101);
$color-border-button-default                : rgb(216, 221, 230);
$color-border-button-inverse-disabled       : rgba(255, 255, 255, 0.15);
$color-border-button-secondary-disabled     : rgba(0, 0, 0, 0);
$color-border-button-secondary              : rgb(245, 130, 32);
$color-text-button-brand-active             : rgb(255, 255, 255);
$color-text-button-brand-disabled           : rgb(255, 255, 255);
$color-text-button-brand-hover              : rgb(255, 255, 255);
$color-text-button-brand                    : rgb(255, 255, 255);
$color-text-button-default-active           : rgb(0, 112, 210);
$color-text-button-default-disabled         : rgb(216, 221, 230);
$color-text-button-default-hint             : rgb(159, 170, 181);
$color-text-button-default-hover            : rgb(0, 112, 210);
$color-text-button-default                  : rgb(0, 112, 210);
$color-text-button-inverse-disabled         : rgba(255, 255, 255, 0.15);
$color-text-button-inverse                  : rgb(224, 229, 238);
$color-text-button-secondary-active         : rgb(0, 112, 210);
$color-text-button-secondary-disabled       : rgb(216, 221, 230);
$color-text-button-secondary-hint           : rgb(159, 170, 181);
$color-text-button-secondary-hover          : rgb(252, 252, 252);
$color-text-button-secondary                : rgb(255, 255, 255);
$color-text-link-hover                      : rgb(0, 95, 178);
$color-text-link                            : rgb(105, 37, 101);

$vui-color-link                             : hsla(196, 99%, 32%, 1); // #0178a3

$color-brand                                : $color-border-brand;
$color-border-input-active                  : $color-border-brand;
$shadow-button-focus                        : $color-border-brand;
// $color-background-input                     : $color-border-brand;


$font-family-body                           : 'Roboto-Regular', Arial, sans-serif;
$font-family-light                          : 'Roboto-Light', Arial, sans-serif;
$font-family-strong                         : 'Roboto-Bold', Arial, sans-serif;
$font-family                                : 'Roboto', Arial, sans-serif;
$font-size-large                            : 1.25rem;
$font-size-medium                           : 1rem;
$font-size-small                            : 0.875rem;
$font-size-x-large                          : 1.5rem;
$font-size-x-small                          : 0.625rem;
$font-size-xx-large                         : 2rem;
$font-weight-bold                           : 700;
$font-weight-light                          : 300;
$font-weight-regular                        : 400;
```
