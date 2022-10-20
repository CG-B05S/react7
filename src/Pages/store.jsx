import {configureStore} from 'redux';
import Reducer from './reducer';

const store =configureStore(Reducer);

export default store;