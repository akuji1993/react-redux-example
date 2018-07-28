import actionTypes from '../actions/actionTypes';

const itemReducer = (state = [], action) => {
    switch(action.type) {
        case actionTypes.ADD_ITEM: {
            return Object.assign({}, state, {
                items: state.items.concat(action.item)
            })
        }
    }
}

export default itemReducer;