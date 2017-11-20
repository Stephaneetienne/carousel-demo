var imageNames = ["images/food1.jpg","images/food2.jpg","images/food3.jpg","images/food4.jpg","images/food5.jpg","images/food6.jpg","images/food7.jpg","images/food8.jpg"];

var x = 0


$("#skip").on("click",function(){
 x = x + 1
 if (x == 7) {
   x = 0
 }

 $("#image-to-vote-on").attr("src",imageNames[x]);

});



$("#back").on("click",function(){

 x = x - 1
 if (x == -1) {
   x = 7
 }


  $("#image-to-vote-on").attr("src",imageNames[x]);
});
