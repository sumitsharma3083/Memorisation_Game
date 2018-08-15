var swipes = document.getElementById('swipe-number');
var cards= document.getElementsByClassName('cards');
 var front = document.querySelectorAll('.front');
 var back = document.querySelectorAll('.back');
 var gameoverBlock = document.getElementById('gameover-overlay');
var first = '';
var second = '';
var swipeleft = 5; 
var hides = [];
var playagainBtn = document.getElementById('playagain-btn');
 swipes.innerHTML = swipeleft;

       playagainBtn.onclick = function()
       {
             gameoverBlock.style.display = 'none';
             swipeleft = 5;
             swipes.innerHTML = swipeleft;
             for(var i=0; i<front.length ; i++ )
             {
                   front[i].style.display = 'block';
             }
       }
  for(var i=0 ; i<front.length ; i++)
  {

        front[i].onclick = function(){
              this.style.display= 'none';
              hides.push(this);
          if(first == '')
          {
             first = back[this.getAttribute('id')].getAttribute('src');
           }
           else
           {
                 second = back[this.getAttribute('id')].getAttribute('src');
           }

           if(first != '' && second != '')
           {
                  if(first == second)
                  {
                       
                        first = '';
                        second = '';
                     hides = [];
                  }
                  else{
                        
                        first = '';
                        second = '';
                        setTimeout(() => {
                              for(var i=0 ; i<hides.length ; i++)
                              {
                                    hides[i].style.display = 'block';
                              }
                              hides = [];
                              swipeleft -= 1;
                              swipes.innerHTML = swipeleft;
                        }, 1000);
                     
                  }
           }
           setTimeout(() => {
                  if(swipeleft == 0)
                  {
                gameoverBlock.style.display = 'block';
                  }
           }, 1000);
          
        }
  }