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