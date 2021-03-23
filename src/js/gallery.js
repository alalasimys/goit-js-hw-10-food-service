import cardTpl from '../template/item.hbs';
import menu from '../menu.json';

const menuListRef = document.querySelector('.js-menu');
const menuMarkup = createMenuMarkup(menu);

menuListRef.insertAdjacentHTML('beforeend', menuMarkup);

function createMenuMarkup(data) {
  return data.map(cardTpl).join('');
}
