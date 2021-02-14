# eleventy-plugin-faker

> Faker.js plugin for 11ty.

## INSTALLATION

```sh
npm i github:pdehaan/eleventy-plugin-faker -D
```

## SETUP

```js
const faker = require("eleventy-plugin-faker");

module.exports = (eleventyConfig) => {
  eleventyConfig.addPlugin(faker);

  return {
    // ...
  };
};
```

## USAGE

### Shortcode

```liquid
{% faker "name.firstName" %}
```

```liquid
{% faker_tmpl "{{name.lastName}}, {{name.firstName}}" %}
```

### Filter

```liquid
{{ "name.lastName" | faker }}
```

```liquid
{{ "lorem.paragraphs" | faker: 7 | newline_to_br }}
```

```liquid
{% comment %} LiquidJS example {% endcomment %}
{% assign author = "{{name.lastName}}, {{name.firstName}}" %}
{{ author | faker_tmpl }}
```

```njk
{# Nunjucks example #}
{% set author = "{{name.lastName}}, {{name.firstName}}" %}
{{ author | faker_tmpl }}
```
