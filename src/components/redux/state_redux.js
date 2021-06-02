import {combineReducers, createStore} from 'redux';
import dialogsReduser from './dialogs_reducer';
import profileReduser from './profile_reducer';
import sidebarReduser from './sidebar_reducer';
import usersReducer from './users_reducer';


let redusers = combineReducers({
    MessagePage: dialogsReduser,
    postPage: profileReduser,
    sidebar: sidebarReduser,
    usersPage: usersReducer,
})

let Store = createStore(redusers);

export default Store;