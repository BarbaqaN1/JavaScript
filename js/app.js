/*var player = document.querySelector('.player');
var Score = document.querySelector('.score');
var Timer = document.querySelector('.timer');

var realTimer = 20;
var realScore = 0;
var IntervalCounter = 400;

setInterval(startTimer, IntervalCounter);

player.addEventListener('click', function() {
    realScore++;

    Score.textContent = 'SCORE' + ' ' + realScore;
    var RandomPosX = Math.floor(Math.random() * 700);
    var RandomPosY = Math.floor(Math.random() * 700);
    var RandomScale = Math.floor(Math.random() * 100);

   player.style.marginLeft = RandomPosX + 'px';
   player.style.marginTop = RandomPosY + 'px';
   player.style.width = RandomScale + 'px';
   player.style.height = RandomScale + 'px';

   if(RandomScale < 10) {
    player.style.width = '30px';
    player.style.height = '30px';
   }
});

function startTimer() {
    realTimer--;
    Timer.textContent = realTimer + 's';

    if(realTimer < 10) {
        Timer.style.color = 'yellow';
        if(realTimer < 5) {
            Timer.style.color = 'red';
        }
        if(realTimer < 1) {
            alert('შენ დამარცხდი, სცადე მოგვიანებით !');
        }
    }
}*/

// ახალი გაკვეთილი !


