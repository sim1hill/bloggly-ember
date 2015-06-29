import Ember from 'ember';

export default Ember.Controller.extend({

  init: function(){

    $.get("http://localhost:3000/saved-posts", function (response){
      response['posts'].forEach(function(post){
      $('.list-group').append('<a href="#" class="list-group-item"><h4 class="list-group-item-heading">' + post['title'] + '</h4>' + '<p class="list-group-item-text">' + post['content'] + '</p></a>');

      });
    });
  },



  
  actions: {
    getGif: function(){
      if ($('.form-control').val() === ""){
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
          searchslug = gifsearchwords;
        }
        $.getJSON("http://localhost:3000/gifs?q=" + searchslug + "&format=json", function(result){
         var embedGif = result['urls'][Math.floor(Math.random()*result['urls'].length)];
        $('#new-gif').append('<img src=' + embedGif + '>&nbsp');
      });
      }
    }, //end of getGIF action
  deleteButton: function(){
    $('#new-gif').empty();  
  },

  savePost: function(){
    var title = $('#blog-content h4').text();
    var copy = $('#blog-content p').text();
    // var gif = $('#new-gif img').attr();
    $.post("http://localhost:3000/gifs", {post:{title: title, content: copy}})
    .done(function(response){
      debugger;
      
       $('.list-group').append('<a href="#" class="list-group-item"><h4 class="list-group-item-heading">' + response["post"]['title'] + '</h4>' + '<p class="list-group-item-text">' + response["post"]['content'] + '</p></a>');
        
      
    });


  },

  title: function(){

  },

  deleteOneGif: function(){

  }
  }
});