import actionTypes from '../actions/actionTypes';

export const rootReducer = (state = {}, action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM: {
            return Object.assign({}, state, {
                items: state.items.concat(action.payload)
            }); 
        }

        default: 
            return state;
    }
}