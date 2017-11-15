
let stop = document.getElementById('stopButton');
let slow = document.querySelector('#slowButton');
let go = document.querySelector('#goButton');

stop.addEventListener('click', function() {
  let stopB = document.getElementById('stopLight');
  stopB.classList.toggle('stop');
})
slow.addEventListener('click', function() {
  let slowB = document.getElementById('slowLight');
  slowB.classList.toggle('slow');

})
go.addEventListener('click', function() {
  let goB = document.getElementById('goLight')
  goB.classList.toggle('go');
})
let buttons = document.getElementsByClassName('button');

for (let i = 0; i < buttons.length; i++) {
  // console.log('hi');

  let button = buttons[i];
  button.addEventListener('mouseenter', function() {
    console.log(button.textContent + ' bulb on');
  })
  button.addEventListener('mouseleave', function() {
    console.log(button.textContent + ' bulb off');
  })
};
