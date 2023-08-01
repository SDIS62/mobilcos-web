module.exports = function(eleventyConfig) {
  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");

  // Copy error page
  eleventyConfig.addPassthroughCopy("src/error.html");

  return {
    templateFormats: ['html', 'liquid', 'md'],
    dir: {
      input: "src",
      output: "dist"
    }
  };
}