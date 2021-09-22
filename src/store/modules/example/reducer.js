import * as types from '../types';

const initialState = {
    login: false,
}

export default (state = initialState, action) => {
    switch (action.type){
        case types.SUCCESS: {
            console.log("sucesso")
            const newState = {...state};
            newState.login = !newState.login;
            return newState;
        }
        case types.REQUEST: {
            console.log("Fazendo a requisição")
            return state;
        }
        case types.FAILURE: {
            console.log("Falhou")
            return state;
        }
        default:
            return state;
    }
}