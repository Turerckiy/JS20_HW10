 const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

 const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};

export {load , save}



// const localStorageMethods = {
//   show() {
//     console.log(localStorage);
//   },
//   methods() {
//     console.dir(localStorage.__proto__);
//   },
//   set(key, value) {
//     localStorage.setItem(key, JSON.stringify(value));
//   },
//   get(key) {
//     //!не работает
//     const savedSettings = localStorage.getItem(key);
//     const parsedSettings = JSON.parse(savedSettings);
//     console.log(parsedSettings);
//     return parsedSettings;

//     // const keys = localStorage.getItem(key);
//     // console.log(typeof keys);

//     // const parsedKey = JSON.parse(keys);
//     // console.log(parsedKey);
//     // return parsedKey;
//   },
//   remove(key) {
//     removeItem(key);
//   },
//   clear() {},
// };




