import storage from 'redux-persist/lib/storage';
import {persistReducer} from "redux-persist";
import {APPLICATION_NAME} from "../../config/base";

export default reducers => {
    return persistReducer(
        {
            key: APPLICATION_NAME,
            storage,
            whitelist: ['example'] // modulos que eu desejo salvar. Nesse caso exampleReducer
        }, reducers);
};
