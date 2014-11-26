BowerGulpJasminePhantomjs
=========================

Now with 'usemin' support
Goal: Develop a simple Backbone Javascript ToDo-app which allows the user to store Todos in browser local storage. Jasmine shall be used for unit testing. For automated unit testing, Gulp shall be used as a task runner and Phantomjs for headless testing (no browser). Finally, Gulp shall create a /dist folder which contains all distributables in concatenated and compressed form. In order to synchronize the reduced number of files with index.html, gulp-usemin shall be used.

1) Prerequisites:
Install node / npm
Install bower
2) Create a new project in WebStorm 'BackboneSassBowerGulpJamine'
3) Create a folder structure:
/src
/src/js
/src/scss
/test
/test/specs
4) Create a package.json (Build modules are Gulp, various Gulp plugins, Bower, Phantomjs):
```
{
  "name": "BowerGulpJasminePhantomjs",
  "version": "0.0.1",
  "description": "Creating Gulp tasks für a Backbone application",
  "author": "SGoemans",
  "homepage": "",
  "repository": {
    "type": "git",
    "url": "git://github.com/sgoemans/BackboneBowerGulpJasmine/"
  },
  "devDependencies": {
    "gulp": "*",
    "gulp-jasmine": "*",
    "gulp-jshint": "*",
    "gulp-uglify": "*",
    "gulp-jasmine2-phantomjs": "*",
    "gulp-rename": "*",
    "gulp-concat": "*",
    "gulp-sass": "*",
    "bower": "*",
    "phantomjs": "*"
  }
}
```

5) Create a bower.json file:
```
{
  "name": "BowerGulpJasminePhantomjs",
  "version": "0.0.1",
  "authors": [
    "John Doe <john.Doe@gmail.com>"
  ],
  "description": "Bower / Gulp / Jasmine / Phantomjs Template",
  "main": "index.html",
  "keywords": [
    "backbone",
    "jasmine",
    "gulp"
  ],
  "license": "MIT",
  "private": true,
  "ignore": [
    "**/.*",
    "node_modules",
    "bower_components",
    "test"
  ],
  "dependencies": {
    "jquery": "*",
    "backbone": "*",
    "backbone.localStorage": "*",
    "underscore": "*",
    "bootstrap": "*"
  },
  "devDependencies": {
    "jasmine": "*",
    "jasmine2-junit": "*"
  }
}
```

6) In the Terminal windows of WebStorm, enter "npm install"
7) Run "bower install"
8) Create an index.html file which includes a template for the items in the todoView:
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title></title>
    <script type="text/template" id="item-template">
        <div class="view">
            <input class="toggle" type="checkbox">
            <label><%- title %></label>
        </div>
    </script>
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>
    <script src="../bower_components/underscore/underscore.js"></script>
    <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../bower_components/backbone/backbone.js"></script>
    <script src="../bower_components/backbone.localStorage/backbone.localStorage-min.js"></script>
    <script src="js/namespace.js"></script>
    <script src="js/todoModel.js"></script>
    <script src="js/todoItem.js"></script>
    <script src="js/todoCollection.js"></script>
</head>
<body>
<div id="container">
    <section id="todoapp">
        <header id="header">
            <h1>Todos</h1>
            <input id="new-todo" placeholder="What needs to be done?">
        </header>
        <section id="main">
            <ul id="todo-list"></ul>
        </section>
    </section>
</div>
<script src="js/todoView.js"></script>
</body>
</html>
```

9) Create a /test/SpecRunner.html file. Make sure some jasmine2-junit libraries are included instead of the original Jasmine ones. Please note that the Todo item template must also be included:
```
<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title>Backbone Testing</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <script type="text/template" id="item-template">
        <div class="view">
            <input class="toggle" type="checkbox">
            <label><%- title %></label>
        </div>
    </script>

    <!-- Distribution libraries -->
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>
    <script src="../bower_components/underscore/underscore.js"></script>
    <script src="../bower_components/backbone/backbone.js"></script>
    <script src="../bower_components/backbone.localStorage/backbone.localStorage-min.js"></script>

    <!-- Application modules -->

    <!-- DevDependencies for testing -->
    <link rel="shortcut icon" type="image/png" href="../bower_components/jasmine/images/jasmine_favicon.png">
    <link rel="stylesheet" href="../bower_components/jasmine/lib/jasmine-core/jasmine.css" />
    <script src="../bower_components/jasmine/lib/jasmine-core/jasmine.js"></script>
    <script src="../bower_components/jasmine/lib/jasmine-core/jasmine-html.js"></script>
    <!-- The JUnit reporter should go before the boot script -->
    <script src="../bower_components/jasmine2-junit/jasmine2-junit.js"></script>
    <!-- This boot.js is a modified version of Jasmine's default boot.js! -->
    <script src="../bower_components/jasmine2-junit/boot.js"></script>
    <!--<script type="text/javascript" src="../bower_components/jasmine/lib/jasmine-core/boot.js"></script>-->

     <!-- Spec files -->

</head>
<body>
</body>
</html>
```

10) Add your first test file to the 'Spec files' section in SpecRunner.html:
```
    <script src="specs/namespace.spec.js"></script>
```

11) Create tests for the chosen namespace
```javascript
describe("Namespace…", function() {
   it("must include views, models, and collections", function() {
      expect(App).toBeDefined();
   });
   it("must include the 'app' namespace for instantiated objects", function () {
      expect(app).toBeDefined()
   });
});
```

12) While in the SpecRunner.html WebStorm editor pane, start Chrome to see the Jasmine output.
13) Create the Javascript namespace for the app
```javascript
var App = App || {};
App.Views = {};
App.Models = {};
App.Collections = {};
App.Routers = {};
var app = app || {};
```

14) Add the namespace file to the 'Application modules' section in SpecRunner.html and refresh the Chrome Jamsine output page to see the tests succeed.
```javascript
<script src="../src/js/namespace.js"></script>
```

15) Create tests for the Backbone model and add it to SpecRunner.html:
```javascript
describe("todoModel...", function() {
   it(" should exist", function() {
      expect(App.Models.TodoModel).toBeDefined();
   });
   it("newly instantiated objects should have proper values", function() {
      var todoModel = new App.Models.TodoModel( { title: "My own title!", completed: true } );
      expect(todoModel.get('completed')).toEqual(true);
      expect(todoModel.get('title')).toEqual("My own title!");
   });
});
```

SpecRunner.html:
```
    <script src="specs/todoModel.spec.js"></script>
```
Refresh the Chrome Jasmine output page.

16) Create the Backbone model javascript file, add it to the SpecRunner.html file, and see if the tests now succeed.
```javascript
App.Models.TodoModel = Backbone.Model.extend({
   defaults: {
      title: '',
      createdAt: new Date(),
      completed: false
   },
   initialize: function(){
      this.on("change", function(model){
         console.log("Changing model attribute values");
      });
   }
});
```

SpecRunner.html:
```
<script src="../src/js/todoModel.js"></script>
```

17) Create a test file for the app‘s Todo items and add it to SpecRunner.html:
```javascript
describe("todoItem...", function() {
   var $fixture = $("<div id='todoview-fixture'></div>");
   var self = this;
   beforeEach(function() {
      $('body').append($('<div id="fixtures"></div>'));
      // Empty out and rebind the fixture for each run.
      $fixture.empty().appendTo($("#fixtures"));
      var myTodoModel = new App.Models.TodoModel({
         title : 'My view test title',
         completed: true
      });
      self.view = new App.Views.TodoItem({  model: myTodoModel});
      $('#todoview-fixture').html(self.view.render().el);

   });
   afterEach(function() {
      $('#fixtures').remove();
   });

   it("must be defined", function() {
      expect(App.Views.TodoItem).toBeDefined();
   });
   it("should render a model correctly", function() {
      console.log($('label'));
      expect($('label').text()).toEqual("My view test title");
   })
});
```

SpecRunner.html:
```
    <script src="specs/todoItem.spec.js"></script>
```

18) Create the corresponding Backbone itemView, add it to the SpecRunner.html file, and see if the tests now succeed.
```javascript
App.Views.TodoItem = Backbone.View.extend({
   tagName: 'li',
   initialize: function() {
      console.log("View initialized");
      this.render();
   },
   template: _.template($('#item-template').html()),
   render: function(){
      this.$el.html(this.template(this.model.toJSON()));
      return this; // enable chained calls
   }
});
```

SpecRunner.html:
```
<script src="../src/js/todoItem.js"></script>
```

19) For headless testing (no browser) with Phantomjs, create a Gulpfile.js which defines three tasks: 
lint -> gulp-jshint (optional)
test -> gulp-jasmine2-phantomjs
default -> lint, test

```javascript
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jasmine = require('gulp-jasmine');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var jasminePhantomJs = require('gulp-jasmine2-phantomjs');

gulp.task("lint", function() {
   return gulp.src("src/**/*.js")
      .pipe(jshint())
      .pipe(jshint.reporter());
});
gulp.task("test", function() {
   return gulp.src("test/**/*.html").pipe(jasminePhantomJs());
});
// Default Task
gulp.task('default', ['lint', 'test']);
```

20) Create a WebStorm Gulp run configuration using Gulpfile.js. Check whether a Gulp window appears in WebStorm. If not, try restarting WebStorm.

21) Running the app using index.html requires the code for the main Backbone view:
```javascript
// renders the full list of todo items calling TodoView for each one.
App.Views.TodoView = Backbone.View.extend({
   el: '#todoapp',
   initialize: function () {
      this.input = this.$('#new-todo');
      // when new elements are added to the collection render then with addOne
      app.todoCollection.on('add', this.addOne, this);
      app.todoCollection.on('reset', this.addAll, this);
      app.todoCollection.fetch(); // Loads list from local storage
   },
   events: {
      'keypress #new-todo': 'createTodoOnEnter'
   },
   createTodoOnEnter: function(e){
      if ( e.which !== 13 || !this.input.val().trim() ) { // ENTER_KEY = 13
         return;
      }
      app.todoCollection.create(this.newAttributes());
      this.input.val(''); // clean input box
   },
   addOne: function(todo){
      var view = new App.Views.TodoItem({model: todo});
      $('#todo-list').append(view.render().el);
   },
   addAll: function(){
      this.$('#todo-list').html(''); // clean the todo list
      app.todoCollection.each(this.addOne, this);
   },
   newAttributes: function(){
      return {
         title: this.input.val().trim(),
         completed: false
      }
   }
});
//--------------
// Initializers
//--------------
app.todoView = new App.Views.TodoView();
```

22) In order to concatinate as much files as possible and to automatically modify index.html to reflect the smaller number of referenced css and javascript files, a new Gulp taks can be created. This task uses the usemin gulp plugin to concatenate files and to replace the corresponding <script> and <link> tags in the index.html file. See the new Gulpfile.js:
```javascript
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var jasmine = require('gulp-jasmine');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var jasminePhantomJs = require('gulp-jasmine2-phantomjs');
var usemin = require('gulp-usemin');
var uglify = require('gulp-uglify');
var minifyHtml = require('gulp-minify-html');
var minifyCss = require('gulp-usemin');
var rev = require('gulp-rev');

gulp.task("lint", function() {
   return gulp.src("src/**/*.js")
      .pipe(jshint())
      .pipe(jshint.reporter());
});
gulp.task("test", function() {
   return gulp.src("test/**/*.html").pipe(jasminePhantomJs());
});

gulp.task('build', function() {
   gulp.src('src/*.html')
      .pipe(usemin({
         css: [minifyCss(), 'concat'],
         html: [minifyHtml({empty: true})],
         js: [uglify(), rev()]
      }))
      .pipe(gulp.dest('dist/'));
});
// Default Task
gulp.task('default', ['lint',  'test' ]);
```

Don’t forget to add following devDependencies in package.json and run npm install again:
"gulp-usemin": "~0.3.8",
"gulp-minify-html": "~0.1.7",
"gulp-minify-css": "~0.3.11",
"gulp-rev": "~2.0.1"

For usemin to recognize which collection of files to concatenate and to automatically reduce the corresponding <script> or <link> tags, comments are used to denote the concatinations. See the new index.html (watch out for the block comment like <!-- build:js app.js -->):
```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">
    <title></title>
    <script type="text/template" id="item-template">
        <div class="view">
            <input class="toggle" type="checkbox">
            <label><%- title %></label>
        </div>
    </script>

    <!-- build:css style.css -->
    <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="../bower_components/bootstrap/dist/css/bootstrap-theme.min.css">
    <!-- endbuild -->

    <!-- build:js lib.js -->
    <script src="../bower_components/jquery/dist/jquery.min.js"></script>
    <script src="../bower_components/underscore/underscore.js"></script>
    <script src="../bower_components/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="../bower_components/backbone/backbone.js"></script>
    <script src="../bower_components/backbone.localStorage/backbone.localStorage-min.js"></script>
    <!-- endbuild -->

</head>
<body>
<div id="container">
    <section id="todoapp">
        <header id="header">
            <h1>Todos</h1>
            <input id="new-todo" placeholder="What needs to be done?">
        </header>
        <section id="main">
            <ul id="todo-list"></ul>
        </section>
    </section>
</div>
<!-- build:js app.js -->
<script src="js/namespace.js"></script>
<script src="js/todoModel.js"></script>
<script src="js/todoItem.js"></script>
<script src="js/todoCollection.js"></script>
<script src="js/todoView.js"></script>
<!-- endbuild -->
</body>
</html>
```

23) Now we want to add the Javascript code style checker JSCS to our gulp tasks. First, install the corresponding gulp plugin by entering npm install --save-dev gulp-jscs in a terminal window. This command installs the JSCS gulp plugin and adds a corresponding entry in package.json.
24) In Gulpfile.js require the gulp-jscs plugin:
var jscs = require('gulp-jscs');

… and add the corresponding task:
```javascript
gulp.task('jscs', function() {
   return gulp.src('src/js/*.js')
      .pipe(jscs({
         "requireCurlyBraces": true
      }));
});
```

25) The build task should only continue to its end if the lint and jscs tasks have finished successfully. To accomplish that, modify the build task as follows:
```javascript
gulp.task('build', [ 'lint', 'jscs' ], function() {
   return gulp.src('src/*.html')
      .pipe(usemin({
         css: [minifyCss(), 'concat'],
         html: [minifyHtml({empty: true})],
         js: [uglify()/*, rev()*/]
      }))
      .pipe(gulp.dest('dist/'));
});
```
 This ensures that usemin creates the app files in the /dist folder only if the lint and jscs tasks have finished without error.

Don’t forget to reload the gulp tasks in the WebStorm gulp pane.
