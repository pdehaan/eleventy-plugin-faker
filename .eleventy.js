const faker = require("faker");
const _get = require("lodash.get");

function fakerFn(api, ...args) {
  return _get(faker, api)(...args);
}

module.exports = (eleventyConfig) => {
  // http://marak.github.io/faker.js/
  eleventyConfig.addFilter("faker", fakerFn);
  eleventyConfig.addFilter("faker_tmpl", faker.fake);

  eleventyConfig.addShortcode("faker", fakerFn);
  eleventyConfig.addShortcode("faker_tmpl", faker.fake);
};
