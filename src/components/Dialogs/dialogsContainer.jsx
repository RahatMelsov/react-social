import React from 'react';
import {updateDialogsMessageActionCreate, addDialogsMessageActionCreate} from './../redux/dialogs_reducer'
import Dialogs from './dialogs';
import StoreContext from './../../storeContext'

const DialogsContainer = (props) => {

	return (
	<StoreContext.Consumer> 
		{
			(Store) => {

				const State = Store.getState();

				console.log(Store)

				let addMeassage = () => {
					Store.dispatch(addDialogsMessageActionCreate());
				}
			
				let updateMessage = (text)=> {
					Store.dispatch(updateDialogsMessageActionCreate(text))
				}

				return ( <Dialogs addMessage={addMeassage} updateMessage={updateMessage} 
					userData={State.MessagePage.usersData} 
					dialogsData={State.MessagePage.dialogsData}
					newMessageData={State.MessagePage.newMessageData}/>
				)
			}
		}
	</StoreContext.Consumer>
	)
}

export default DialogsContainer;