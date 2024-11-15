//Part1//
const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
 
  star.addEventListener("click", () => {
    
    stars.forEach((star, index2) => {
      
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});

//Part 2//
$(document).ready(function() {
 
    $('.method').on('click', function() {
      $('.method').removeClass('blue-border');
      $(this).addClass('blue-border');
    });
   
  })
  var $cardInput = $('.input-fields input');
   
  $('.next-btn').on('click', function(e) {
   
    $cardInput.removeClass('warning');
   
    $cardInput.each(function() {    
       var $this = $(this);
       if (!$this.val()) {
         $this.addClass('warning');
       }
    })
  });