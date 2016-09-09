import { SET_COLOR } from '../constants/ActionTypes';

const initialState = {
    color: '36F'
};

export default function reducer(state=initialState, action) {
    switch(action.type) {
        case SET_COLOR: return {...state, color: action.color};
        default: return state;
    }
}