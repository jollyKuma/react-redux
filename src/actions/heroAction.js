import * as actionTypes from './actionTypes';

export const createHero = (hero) => {
  return {
    type: actionTypes.CREATE_NEW_HEROES,
    data : hero
  }
};

export const removeHero = (hero) => {
  return {
    type: actionTypes.REMOVE_HEROES,
    id: hero.id
  }
}

export const editHero = (hero) => {
  return {
    type: actionTypes.EDIT_HERO,
    data: hero
  }
}

export const getAllHero = (hero) => {
  return {
    type: actionTypes.GET_ALL_HEROES,
    data: hero
  }
}
