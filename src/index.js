import _ from 'lodash';
import './styles.css';

function component() {
  const element = document.createElement('div');
  //lodash, now imported by this script
  element.innerHTML = _.join(['hello000', 'webpack'], ' ');
  element.classList.add('hello');

  return element;
}

document.body.append(component());
