import DS from 'ember-data';

debugger;
var hasMany = DS.hasMany;

export default DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    gifURL: DS.attr('string')
});
// App.Post = Ember.Object.extend();
// App.Post.reopenClass({
//   all: function() {
//     return $.getJSON("http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC").then(function(response){
      

      
//     });
//   }

// });