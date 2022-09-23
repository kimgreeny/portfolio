  // window의 높이값을 변수 ht 에 저장
  //  let ht =$(window).height();
  //   console.log(ht);
  // // any ection의 높이값으 window높이값으로 지정
  //   $('section').height(ht);
  // // 브라우저가 resize가 되면 
  // $(window).resize(function(){
  //   let ht = $(window).height();
  //   $('section').height(ht);
  //   // 마우스의 움직임에 따라 이미지의 위치 변경 
  //   $().mouosemove(function(){
  //     // posx에 마우스 커서 x축 좌표 
  //     let posX = e.pageX;
  //     // y축 좌표 
  //     let posY= e.pageY;
  //     console.log(posX,posY)
  //   })
  // });


//   // 마우스커서에 모양 따라다니게 하기! 
// const mouse = document.querySelector('#mouse');


// let mouseX = 0, mouseY = 0, currentX = 0, currentY= 0;
// document.body.addEventListener('mousemove',function(event){
//   mouseX = event.clientX;
//   mouseX = event.clientY;
//   console.log(mouseX,mouseY);
// })

// tick();
// function tick() {
//   requestAnimationFrame(tick);
//   currentX += (mouseX-currentX)*0.05;
//   currentY += (mouseY-currentY)*0.05;

//   mouse.style.transform = `translate(${current}px, ${currentY}px)`;
// }

