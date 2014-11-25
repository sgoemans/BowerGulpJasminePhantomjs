describe("todoView class...", function() {
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