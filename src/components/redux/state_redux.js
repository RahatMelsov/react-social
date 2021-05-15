import {combineReducers, createStore} from 'redux';
import dialogsReduser from './dialogs_reducer';
import profileReduser from './profile_reducer';
import sidebarReduser from './sidebar_reducer';


let redusers = combineReducers({
    MessagePage: dialogsReduser,
    postPage: profileReduser,
    sidebar: sidebarReduser
})

let Store = createStore(redusers);

export default Store;