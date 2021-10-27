// only document
window.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
});
// after resources (CSS, images)
window.addEventListener('load', () => {
  console.log('load');
});
// before unload
window.addEventListener('beforeunload', () => {
  console.log('beforeunload');
});
// resource is being unloaded
window.addEventListener('unload', () => {
  console.log('unload');
});