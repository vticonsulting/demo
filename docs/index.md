---
hidden: true
title: Patterns Lab Overview
handle: guide
context:
  items:
    - Finish the docs
    - Write tests
    - Make the tea
  food:
    ketchup: 5 tbsp
    mustard: 1 tbsp
    pickle: 0 tbsp
---

You are viewing the front-end component library for Videa. It is powered by [Fractal](http://fractal.build), a tool that enables the rapid development of components, templates and pages.

### Component categories

  * **Utilities:** Components with a single purpose and specific role
  * **Common:** Components that may appear anywhere on the site
  * **Global:** Components that appear on every page on the site
  * **Layout:** Components concerned with macro layout
  * **Scopes:** Components used to style scoped areas of content
  * **Templates:** Templates for particular page types

### Source code

The [source code is available on TFS](https://github.com/24ways/frontend). See the [README](https://github.com/24ways/frontend/blob/master/README.md) for installation instructions.


{% for item in items %}
* {{ item }}
{% endfor %}

{% for ingredient, amount in food %}
  Use {{ amount }} of {{ ingredient }}
{% endfor %}


[videa demo](https://sandbox.videa.design)

[colors]:https://videa.design/patterns/docs/colors.html
[design-tokens]:https://videa.design/patterns/docs/design-tokens.html
[getting-started]:https://videa.design/patterns/docs/getting-started.html
[icons]:https://videa.design/patterns/docs/icons.html
[sizing]:https://videa.design/patterns/docs/sizing.html
[spacing]:https://videa.design/patterns/docs/spacing.html
[typography]:https://videa.design/patterns/docs/typography.html



[1]: https://videa.design/patterns/components/detail/app-header.html
[2]: https://videa.design/patterns/components/preview/app-header.html
[3]: https://sandbox.videa.design

## For Developers

Requirements: Node.js

`git clone http://tfs.videa.tv/video-demo`

`cd videa-demo`

`git checkout v3`

`npm run dev`

## Videa UI/UX Styleguide and Patterns Lab


### For the styleguide

Install fractal-cli
fractal start --sync

[1]: http://nodejs.org
[2]: http://vuejs.org.guide
[3]: http://nuxt.
