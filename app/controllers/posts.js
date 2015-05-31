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
         var embedGif = result['urls'][Math.floor(Math.random()*result['urls'].length)];
        $('#new-gif').append('<img src=' + embedGif + '>&nbsp');
      })
      }
    }, //end of getGIF action
  deleteButton: function(){
    $('#new-gif').empty();  
  },

  savePost: function(){
    var title = $('#blog-content h4').text();
    var copy = $('#blog-content p').text();
    var gifs = $('#new-gif')
    $.post("http://localhost:3000/gifs", {post:{title: title, content: copy}})
    .done(function(response){
      response["posts"].forEach(function(post){
        $('#past-posts').append('<h4>' + post['title'] + '</h4><p>' + post['content'] + '</p>')
      })
      
    })


  },

  title: function(){

  },

  deleteOneGif: function(){

  }
  }
});