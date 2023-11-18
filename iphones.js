let imgtopleft = document.querySelector('#topleft');
let imgtopright = document.querySelector('#topright');
let imgbottom = document.querySelector('#bottomcam');
let buttongreen =document.querySelector('#buttongreen');
let buttonblue =document.querySelector('#buttonblue');
let buttonred =document.querySelector('#buttonred');
let buttonpink =document.querySelector('#buttonpink');
let buttonwhite =document.querySelector('#buttonwhite');
let buttonblack =document.querySelector('#buttonblack');

buttongreen.addEventListener('click', ()=>{
  imgtopleft.src='apple/phones/13green.png'
  imgtopright.src='apple/phones/13greentopright.png'
  imgbottom.src='apple/phones/13greencam.png'
})

buttonblue.addEventListener('click', ()=>{
  imgtopleft.src='apple/phones/13blue.png'
  imgtopright.src='apple/phones/13bluetopright.png'
  imgbottom.src='apple/phones/13bluecam.png'
})

buttonred.addEventListener('click', ()=>{
  imgtopleft.src='apple/phones/13red.png'
  imgtopright.src='apple/phones/13redtopright.png'
  imgbottom.src='apple/phones/13redcam.png'
})

buttonpink.addEventListener('click', ()=>{
  imgtopleft.src='apple/phones/13pink.png'
  imgtopright.src='apple/phones/13pinktopright.png'
  imgbottom.src='apple/phones/13pinkcam.png'
})

buttonwhite.addEventListener('click', ()=>{
  imgtopleft.src='apple/phones/13white.png'
  imgtopright.src='apple/phones/13whitetopright.png'
  imgbottom.src='apple/phones/13whitecam.png'
})

buttonblack.addEventListener('click', ()=>{
  imgtopleft.src='apple/phones/13midnight.png'
  imgtopright.src='apple/phones/13midnighttopright.png'
  imgbottom.src='apple/phones/13midnightcam.png'
})


/*13 PRO*/
let imgtopleftpro = document.querySelector('#topleftpro');
let imgtoprightpro = document.querySelector('#toprightpro');
let imgbottompro = document.querySelector('#bottomcampro');
let buttongreenpro =document.querySelector('#buttongreenpro');
let buttonbluepro =document.querySelector('#buttonbluepro');
let buttonwhitepro =document.querySelector('#buttonwhitepro');
let buttongoldpro =document.querySelector('#buttongoldpro');
let buttonblackpro =document.querySelector('#buttonblackpro');

buttongreenpro.addEventListener('click', ()=>{
  imgtopleftpro.src='apple/phones/13progreen.png'
  imgtoprightpro.src='apple/phones/13progreentopright.png'
  imgbottompro.src='apple/phones/13progreencam.png'
})

buttonbluepro.addEventListener('click', ()=>{
  imgtopleftpro.src='apple/phones/13problue.png'
  imgtoprightpro.src='apple/phones/13probluetopright.png'
  imgbottompro.src='apple/phones/13probluecam.png'
})

buttongoldpro.addEventListener('click', ()=>{
  imgtopleftpro.src='apple/phones/13progold.png'
  imgtoprightpro.src='apple/phones/13progoldtopright.png'
  imgbottompro.src='apple/phones/13progoldcam.png'
})

buttonwhitepro.addEventListener('click', ()=>{
  imgtopleftpro.src='apple/phones/13prosilver.png'
  imgtoprightpro.src='apple/phones/13prosilvertopright.png'
  imgbottompro.src='apple/phones/13prowhitecam.png'
})

buttonblackpro.addEventListener('click', ()=>{
  imgtopleftpro.src='apple/phones/13problack.png'
  imgtoprightpro.src='apple/phones/13problacktopright.png'
  imgbottompro.src='apple/phones/13problackcam.png'
})
