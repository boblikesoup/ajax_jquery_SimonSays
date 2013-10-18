SimonSays = function(){
  
  $("#get_color").click(function(e){
    console.log("button intercepted")
    e.preventDefault();
    $.ajax({
      type: 'post',
      url: '/color',
      dataType: 'json'
    }).done(function(response){
      simon_says(response);
    });
  });

  simon_says = function(data){
    $("ul li:nth-child(" + data.cell + ")").css("background-color", data.color);
  };



}
