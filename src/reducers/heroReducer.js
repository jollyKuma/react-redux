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
			state.map((hero) =>
			{
				if(hero.id === action.data.id) {
							//Object.assign({}, action.data);
							hero.id = action.data.id
							hero.name = action.data.name;
							hero.description = action.data.description;
				}
				return hero;
			});

		default:
			return state;
	}
};
