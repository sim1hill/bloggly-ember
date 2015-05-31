import Ember from 'ember';

export default Ember.Controller.extend({

  
  actions: {
    getGif: function(){
      if ($('input.form-control input-lg').val() === ""){
        alert("Nice try...type something first!");
      } else {
        var gifsearchwords = $('#blog-content p').text();
        var searchslug = "";
        if (gifsearchwords.split(" ").length > 0){
          
          searchslug = gifsearchwords.split(" ").pop();
          if (searchslug === "," || searchslug === "." || searchslug === "!" || searchslug === "?"){
            searchslug = gifsearchwords.split(" ").slice(-1,-1);
          }
        } else {
          searchslug = gifsearchwords
        }
        $.getJSON("http://localhost:3000/gifs?q=" + searchslug + "&format=json", function(result){
         var embedGif = result['urls'][0];
        $('#new-gif').append('<img src=' + embedGif + '>&nbsp');
      })
      }
    }, //end of getGIF action
  deleteButton: function(){
    $('#new-gif').empty();  
  },

  savePost: function(){
    var title = $('#blog-content h4')
    var copy = $('#blog-content p')
    var gifs = $('#new gif img')
    debugger;
    // $.post("http://localhost:3000/gifs", {title: title, content: copy, gifs: gifs })

  },

  title: function(){

  }
  }
});