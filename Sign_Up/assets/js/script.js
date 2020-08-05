let tg_btn = document.querySelector('.toggle-btn'); // Кнопка менюшки(бутерброд)
let sidebar = document.querySelector('#sidebar'); // Сама менюшка
tg_btn.addEventListener('click', (event)=>{
   console.log(sidebar);
   sidebar.classList.toggle('active');
   if(sidebar.classList.contains('active')){
       tg_btn.style.backgroundColor = '#E0E5EA';
       for(let i = 0; i < tg_btn.children.length; i++){
           tg_btn.children[i].style.backgroundColor = '#666';
       }
   }else {
       tg_btn.style.backgroundColor = '#0f7bff';
       for(let i = 0; i < tg_btn.children.length; i++){
           tg_btn.children[i].style.backgroundColor = '#fff';
       }
   }
   console.log(tg_btn.children)
});

// let btnYearOrMount = document.querySelector('.btn-year-mount');
// for(let item of btnYearOrMount.children){
//     console.log(item)
//     item.addEventListener('click', ()=> {
//         for(let i of btnYearOrMount.children){
//             i.classList.remove('checked-btn');
//         }
//        item.classList.add('checked-btn');
//     });
// }
// console.log(btnYearOrMount.children)
//
//
//
// let selSlider = document.querySelectorAll('.sel-slider div');
// console.log(selSlider)
//
// for(let item of selSlider){
//     item.addEventListener('click', ()=>{
//         for(i of selSlider){
//             i.classList.remove('sel-slider-active');
//         }
//         item.classList.add('sel-slider-active');
//     });
// }
