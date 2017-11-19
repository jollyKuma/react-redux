import { combineReducers } from 'redux';
import heroes from './heroReducer';

export default combineReducers ({
    heroes: heroes
});
