function addDarkmodeWidget() {
  new Darkmode().showWidget();
}
window.addEventListener('load', addDarkmodeWidget);

const options = {
  time: '2s', // default: '0.3s'
  label: '🌙', // default: ''
  
}

const darkmode = new Darkmode(options);
darkmode.showWidget();
