const selected = document.querySelector('.selected');

selected.addEventListener('click', (event) => {
  const rect = selected.getBoundingClientRect();
  console.log(rect);
  console.log(`client: ${event.clientX}, ${event.clientY}`);
  console.log(`page: ${event.pageX}, ${event.pageY}`);
});

const scrollBy = document.querySelector('.scroll-by');
const scrollTo = document.querySelector('.scroll-to');
const scrollInto = document.querySelector('.scroll-into');
const scrollTop = document.querySelector('.scroll-top');

scrollBy.addEventListener('click', () => {
    window.scrollBy({top:100, left:0, behavior:'smooth'});
});

scrollTo.addEventListener('click', () => {
    window.scrollTo({top:500, left:0, behavior:'smooth'});
});

scrollInto.addEventListener('click', () => {
    selected.scrollIntoView({behavior:'smooth', block:'center'});
});

scrollTop.addEventListener('click', () => {
    window.scrollTo({top:0, left:0, behavior:'smooth'});
});