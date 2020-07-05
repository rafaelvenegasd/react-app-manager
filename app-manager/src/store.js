import { createStore } from 'redux';

const initialState = {
    players: [], 
    titulars: [],
    substitutes: []
}

const reducer = (state = initialState , action) => {
    return state;
}

export default createStore(reducer);