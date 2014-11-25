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
