import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    // return Ember.$.getJSON('http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC'),
    // return this.store.find('post', params.post_id);
  }
});
