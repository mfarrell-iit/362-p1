$.noConflict();
(function($){
  $(document).ready(
    function(){
      $("#weatherform").on('submit', function (e){e.preventDefault();})
    })
})

function formSubmit(){
      alert("Thank you for subscribing to Daily Weather Mailer!");
    }