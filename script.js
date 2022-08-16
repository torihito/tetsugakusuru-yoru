const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
const darkModeOn = darkModeMediaQuery.matches;
 
darkModeMediaQuery.addListener((e) => {
    const darkModeOn = e.matches;
    if (darkModeOn) { // Dark
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    } else { // Light
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    }
});

// チェックボックスの取得
const btn = document.querySelector("#btn-mode");
 
// チェックした時の挙動
btn.addEventListener("change", () => {
  if (btn.checked == true) {
    // ダークモード
    document.body.classList.remove("light-theme");
    document.body.classList.add("dark-theme");
  } else {
    // ライトモード
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
  }
});

const options = {
  bottom: '64px', // default: '32px'
  right: 'unset', // default: '32px'
  left: '32px', // default: 'unset'
  time: '0.5s', // default: '0.3s'
  mixColor: '#fff', // default: '#fff'
  backgroundColor: '#fff',  // default: '#fff'
  buttonColorDark: '#100f2c',  // default: '#100f2c'
  buttonColorLight: '#fff', // default: '#fff'
  saveInCookies: false, // default: true,
  label: '暗', // default: ''
  autoMatchOsTheme: true // default: true
}
 
const darkmode = new Darkmode(options);
darkmode.showWidget();
