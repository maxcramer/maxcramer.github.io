function loopExtremmums(min, max, currentNumber){
  if(currentNumber>max){
    return min;
  }
  if(currentNumber<min){
    return max;
  }
  return currentNumber;
}
function slider(el){
  const prev  = el.querySelector('.carousel__button--prev');
  const next = el.querySelector('.carousel__button--next');
  const wrap = el.querySelector('.carousel__wrapper');
  const items = el.querySelectorAll('.carousel__item');
  const itLength = items.length;
  let current = 0;

  prev.addEventListener('click',function(){
    current--;
    current = loopExtremmums(0,itLength-1, current);
    console.log(current, itLength,(current/itLength*-100)+'%');
    wrap.style.transform = 'translateX('+(current/itLength*-100)+'%)';
  });
  next.addEventListener('click',function(){
    current++;
    current = loopExtremmums(0,itLength-1, current);
    wrap.style.transform = 'translateX('+(current/itLength*-100)+'%)';
  });
  // setInterval(function(){
  //   return;
  //   current++;
  //   current = loopExtremmums(0,itLength-1, current);
  //     console.log(current, itLength,(current/itLength*100)+'%');
  //   wrap.style.transform = 'translateX('+(current/itLength*-100)+'%)';
  // },3000);
}
slider(document.querySelector('.carousel'));
