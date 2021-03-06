const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .sass('resources/sass/admin.scss', 'public/css')
    .sass('resources/sass/question.scss', 'public/css')
    .js('resources/js/toggleEditUpdate.js', 'public/js')
    .js('resources/js/changeAnswerByQuestionType.js', 'public/js')
    .js('resources/js/hiddenCheckbox.js', 'public/js');
