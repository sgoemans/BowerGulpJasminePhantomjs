App.Collections.TodoCollection = Backbone.Collection.extend({

	localStorage: new Backbone.LocalStorage("SomeCollection"), // Unique name within your app.

	model: App.Models.TodoModel

});
// instance of the Collection
app.todoCollection = new App.Collections.TodoCollection();