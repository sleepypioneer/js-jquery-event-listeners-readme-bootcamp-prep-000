function getIt() {
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt() {
  $('img').on('load', function() {
    $('img').append('<style class="tasty"></style>')
  })
}

function pressIt() {
  $('#typing').on('keydown', function(e){
    const key = parseInt(e.detail || e.which);
    if (key ==== 71) {
      alert("Your using the G key!")
    }
  })
}

function submitIt() {
  $('form').on('submit', function(){
    alert("Your form is going to be submitted now.")
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
