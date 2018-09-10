// Import
import axios from 'axios';

// Local import
import { loadHomeData } from 'src/store/reducer';
import { loadHeaderData } from 'src/store/reducer';

// Code
export default store => next => (action) => {
  switch (action.type) {
    case 'LOAD_HOME': {
      axios
        .get('http://localhost/losangeles-react-php-sass/back/home.php')
        .then(({ data }) => {
          store.dispatch(loadHomeData(data));
        })
        .catch(() => {
          console.error('Ajax failed');
        });
      break;
    }
    case 'LOAD_HEADER': {
      axios
        .get('http://localhost/losangeles-react-php-sass/back/menus.php')
        .then(({ data }) => {
          store.dispatch(loadHeaderData(data));
        })
        .catch(() => {
          console.error('Ajax failed');
        });
      break;
    }
    default:
  }
  next(action);
};
