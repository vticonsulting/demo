---
title: Component Template
---
## Demo

{% set items = [
        { name: 'james', type: 'green' },
        { name: 'john', type: 'blue' },
        { name: 'jim', type: 'blue' },
        { name: 'jessie', type: 'green' }
    ]
%}

{% for type, items in items | groupby("type") %}
    <b>{{ type }}</b> :
    {% for item in items %}
        {{ item.name }}
    {% endfor %}<br>
{% endfor %}


{% set items = {
    'e': 1,
    'd': 2,
    'c': 3,
    'a': 4,
    'f': 5,
    'b': 6
} %}

{% for item in items | dictsort %}
  {{ item[0] }}
{% endfor %}

{% from "forms.html" import field, label as description %}

{{ description('Username') }}
{{ field('user') }}
{{ description('Password') }}
{{ field('pass', type='password') }}

{% raw %}
  {{ hello }}
{% endraw %}

[Demo here](https://apertureless.github.io/vue-password-strength-meter/)

## Install

`npm install vue-password-strength-meter` or `yarn add vue-password-strength-meter`

## Usage

```js
import Password from 'vue-password-strength-meter'
export default {
  components: { Password }
}
```

```html
<template>
  <password></password>
</template>
```

## Props

| Prop                   |  Type    |  Default Value                 | Description
|------------------------|:--------:|--------------------------------|------------------------------------------------|
| id                     |  String  | password                       | input field id attribute                       |
| placeholder            |  String  | Please enter your password     | input field placeholder attribute              |
| name                   |  String  | password                       | input field name attribute                     |
| required               |  Boolean | true                           | input field required attribute                 |
| secureLength           |  Number  | 7                              | password min length                            |
| badge                  |  Boolean | true                           | display password count badge                   |
| defaultClass           |  String  | Password__field                | input field class                              |
| errorClass             |  String  | has-error                      | error class for password count badge           |
| successClass           |  String  | is-success                     | success class for password count badge         |
| strengthMeterClass     |  String  | Password__strength-meter       | strength-meter class                           |
| strengthMeterFillClass |  String  | Password__strength-meter--fill | strength-meter class for individual data fills |

## Customizing

You can customize the styling of the input field, badge and strength-meter by passing your own css classes
to `defaultClass`, `strengthMeterClass` etc.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
