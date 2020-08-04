const height = document.querySelector('#height');
const userHeight = document.querySelector('#user-height');

const heightList = document.querySelector('#height-list');

const activity = document.querySelector('#activity');
const userActivity = document.querySelector('#user-activity');

height.addEventListener('mouseup', function () {
  userHeight.textContent = height.nodeValue;
});

//하루 권장 칼로리 : 표준체중(kg) * 활동지수
//표준체중 : (자신의 키 -100) * 0.9