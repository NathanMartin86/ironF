var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var _ = require('underscore');
var tmpl = require('./templates');
var IronFundModel = require('./ironFundModel');
var IronFundCollection = require('./ironFundCollection');

module.exports = Backbone.View.extend({
  className: 'addProject',
  template: _.template(tmpl.form),
  // model: null, // just here as placeholder, but need a model up on instantiation
  events: {
    'submit form': 'onAddProject'
  },
  initialize: function () {
    if(!this.model) {
      this.model = new IronFundModel();
    }
  },
  onAddProject: function (evt) {
    evt.preventDefault();
    var newProject = {
      title: this.$el.find('input[id="title"]').val(),
      // startdate: this.$el.find('input[id="startDate"]').val(),
      // startDate: new Date.getTime(),
      // photo: this.$el.find('input[id="image"]').val(),
      finishdate: this.$el.find('input[id="finishDate"]').val(),
      description: this.$el.find('input[id="description"]').val(),
      // balance: this.$el.find('input[name="balance"]').val(),
      goal: this.$el.find('input[id="Goal"]').val()
    };
    this.model.set(newProject);
    this.model.save();
    this.collection.add(this.model);
    // console.log("this.model:", this.model);
    // console.log("this:", this);
    console.log("this.collection:", this.collection);
    this.$el.find('input, value').val('');
  },
  render: function () {
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);
    // in order to call .el off of render we need to return this
    // projectViewInstance.render().el - yields all markup and data from model
    return this;
  }
});
