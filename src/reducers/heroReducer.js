import * as actionTypes from '../actions/actionTypes';

export default ( state = [], action) => {
	switch (action.type) {

		case actionTypes.CREATE_NEW_HEROES:
			return [
				...state,
				Object.assign({}, action.data)
			];

		case actionTypes.REMOVE_HEROES:
			return  state.filter((hero) => hero.id !== action.id);

		case actionTypes.EDIT_HERO:
		return state.filter((hero) => hero.id === action.id);

		default:
			return state;
	}
};
