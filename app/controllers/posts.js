import Ember from 'ember';

export default Ember.Controller.extend({

  
  actions: {
    getGif: function(){
      debugger;
      $.getJSON("http://localhost:3000/gifs?q=cats&format=json", function(result){
       var embedGif = result['urls'][0]
        $('#new-gif').append('<img src=' + embedGif + '>');
      })
      // $.ajax(
      //   url: "http://reddit.com/r/node.json?jsonp=?",
      //   method: "GET",
      //   dataType: "jsonp"
      // });
    }
  }
});