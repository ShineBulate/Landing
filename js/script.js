
window.onload = function(){
   
    let btn = document.querySelectorAll('button');
    btn.forEach(function(element) {
        element.onclick = showModal;
    });
    
    let modal_view = document.getElementById('modal_view');
    let span = document.getElementsByClassName("close")[0];
       
    function showModal(){
          
         modal_view.style.display = "block";
}
    span.onclick = function() {
        modal_view.style.display = "none";
      }
    


  
}