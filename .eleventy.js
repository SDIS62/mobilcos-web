module.exports = function(eleventyConfig) {
  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("img");
  eleventyConfig.addPassthroughCopy("css");

  // Copy error page
  eleventyConfig.addPassthroughCopy("error.html");

  return {
    templateFormats: ['html', 'liquid', 'md']
  };
}