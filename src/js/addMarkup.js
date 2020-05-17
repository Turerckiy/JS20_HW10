import data from './menu';
import dataTemplate from './templates/dataTemplate.hbs';

const addMarkup = () => {
  const markup = dataTemplate(data);
  document.querySelector('.js-menu').insertAdjacentHTML('beforeend', markup);
};

export default addMarkup;
