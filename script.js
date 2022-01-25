let secretNumber =  Math.floor(Math.random() * 5);
var audio = new Audio('clap.WAV');
var audio1 = new Audio('wrong.WAV');


const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
  };
  
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);
    document.querySelector('.check').style.display="none";
    document.querySelector('.replay').style.display = "block";

  if (!guess) {
    displayMessage('⛔️ No number!');
  }
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number-box').style.display = "none";
    document.querySelector('.number').style.display = "block";
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.start').textContent = "Congrats!!!";
    audio.play();
    
  }
  else if (guess !== secretNumber) {
      displayMessage('Try Again');
      document.querySelector('.start').textContent = "What a waste!!!";
      document.querySelector('body').style.backgroundColor = 'red';
      audio1.play();
  }
});

document.querySelector('.replay').addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 5);
  
    displayMessage('Good Luck!');
    audio.pause();
    audio1.pause();
    document.querySelector('.guess').value = '';
    document.querySelector('.replay').style.display="none";
    document.querySelector('.check').style.display="block";
    document.querySelector('body').style.backgroundColor = 'rgb(196, 124, 124)';
    document.querySelector('.number-box').style.display = "block";
    document.querySelector('.number').style.display = "none";
    
  });
  