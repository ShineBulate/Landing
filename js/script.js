new Vue({
    el: '#user-column',
    data:{
        text:[
            {id:1, head:'Почему углеродный след Utopia P2P низкий?', message:'Все данные пользователей шифруются и передаются по ячеистой сети. В результате не используются дополнительные источники питания.',},
            {id:2, head:'Как Utopia P2P экономит электроэнергию?',message:'Какой то текст'},
            {id:3, head:'Безопасна ли Утопия?',message:'Ваш текст',}
        ],
        isActive: 0,
    },

    methods:{
        open:function(){
        
            switch(this.isActive){
                case 0: this.isActive = 1;
                break;
                case 1: this.isActive = 0;
                break;
            }
         
            
            
        },
    }
})
window.onload = function(){
    let btn = document.querySelectorAll('button');
    btn.forEach(function(element) {
        element.onclick = showModal;
    })

    let modal_view = document.getElementById('modal_view');
    let span = document.getElementsByClassName("close")[0];
       
    function showModal(){
          
         modal_view.style.display = "block";
}
    span.onclick = function() {
        modal_view.style.display = "none";
      }
 
}
        