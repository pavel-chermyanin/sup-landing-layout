let mix = require("laravel-mix");
mix.js("src/js/app.js", "js");

mix
  .sass("src/scss/normalize.scss", "css")
  .sass("src/scss/slick.scss", "css")
  .sass("src/scss/app.scss", "css")
  .options({
    processCssUrls: false,
  });

mix.setPublicPath("dist");
