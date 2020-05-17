import { load, save } from './storage.js';
import {refs } from './refs.js';

const changeTheme = () => {
  const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };
  const ifThemeDark = load('Theme');
  if (ifThemeDark === 'DARK') {
    refs.switchBtn.checked = true;
    refs.body.classList.add(Theme.DARK);
  }

  refs.switchBtn.addEventListener('change', switchTheme);

  function switchTheme(e) {
    // (e.currentTarget.checked && refs.body.classList.add(Theme.LIGHT)) && refs.body.classList.remove(Theme.DARK)   ;
    // (!e.currentTarget.checked && refs.body.classList.add(Theme.DARK)) && refs.body.classList.remove(Theme.LIGHT);
    !e.currentTarget.checked && refs.body.classList.add(Theme.LIGHT);
    e.currentTarget.checked && refs.body.classList.remove(Theme.LIGHT);
    e.currentTarget.checked && refs.body.classList.add(Theme.DARK);
    !e.currentTarget.checked && refs.body.classList.remove(Theme.DARK);

    document.querySelector('.light-theme') && save('Theme', 'LIGHT');
    document.querySelector('.dark-theme') && save('Theme', 'DARK');
  }
};

const saveLocalStoregeTheme = () => {};

export default changeTheme;
