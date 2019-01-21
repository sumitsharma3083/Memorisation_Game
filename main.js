var images = ['<img src="images/download.png" alt="" class="back">','<img src="images/react.png" alt="" class="back">','<img src="images/vue.png" alt="" class="back">','<img src="images/rails.jpg" alt="" class="back">','<img src="images/angular.png" alt="" class="back">','<img src="images/github.png" alt="" class="back">'];
var php   = 0;
var react = 0;
var vue   = 0;
var github = 0;
var angular = 0;
var rails = 0

var cards= document.getElementsByClassName('cards');
       
   for(var i=0; i<cards.length ; i++)
   {
         var num = Math.trunc(Math.random()*10);     
          if(num<6)
          {
                if(num == 0)
                {
                      php += 1;
                }
                else if(num == 1)
                {
                      react += 1;
                }
                else if(num == 2)
                {
                      vue += 1;
                }
                else if(num == 3)
                {
                 rails +=1;
                }
                else if(num ==4)
                {
                 angular += 1;
                }
                else
                {
                      github +=1;
                }
                if(php<=2 && react <=2 && rails <=2 && angular <=2 && github <=2 &&  vue <=2 )
                {
                  cards[i].innerHTML += images[num];
                }
             else
             {
                    i -=1; 
                    if(react > 2)
                    {
                          react -= 1;
                    }
                    if(angular>2)
                    {
                          angular -= 1;
                    }
                    if(vue >2)
                    {
                          vue -= 1;
                    }
                    if(github >2)
                    {
                          github -=1;
                    }
                    if(php > 2)
                    {
                          php -=1;
                    }
                    if(rails>2) 
                    {
                       rails -=1;
                    }
             }
          }
          else
          {
                i -= 1;
          }
       
   }
   

var swipes = document.getElementById('swipe-number');
var back = document.querySelectorAll('.back');
var front = document.querySelectorAll('.front');
 
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
                  else
                  {
                        
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