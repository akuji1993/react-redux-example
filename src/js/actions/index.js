import actionTypes from './actionTypes';

export const addItem = (item) => ({
    type: actionTypes.ADD_ITEM,
    item
});