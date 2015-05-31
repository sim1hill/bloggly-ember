import Ember from 'ember';

export default Ember.Controller.extend({

  
  actions: {
    getGif: function(){
      var gifsearchwords = $('#blog-content').text();
      var searchslug = "";
      if (gifsearchwords.split(" ").length > 0){
        // debugger;
        searchslug = gifsearchwords.split(" ").pop();
        if (searchslug === "," || searchslug === "." || searchslug === "!" || searchslug === "?"){
          searchslug = gifsearchwords.split(" ").slice(-1,-1);
        }
      } else {
        searchslug = gifsearchwords
      }
      $.getJSON("http://localhost:3000/gifs?q=" + searchslug + "&format=json", function(result){
              // debugger;
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