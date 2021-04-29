import React from 'react';
import classes from './dialogs.module.css';

const Dialogs = () => {
	return (
		<div>
			<div className={classes.dialogs}>
				<div className={classes.dialogsItem}>
					<div className={classes.dialog + " " + classes.active}>
						Vlad
					</div>
					<div className={classes.dialog}>
						Rahat
					</div>
					<div className={classes.dialog}>
						Alex
					</div>
					<div className={classes.dialog}>
						Rusa
					</div>
					<div className={classes.dialog}>
						Miha
					</div>
					<div className={classes.dialog}>
						Aiosh
					</div>
					<div className={classes.dialog}>
						Tiko
					</div>
				</div>
				<div className={classes.messages}>
					<div className={classes.message}>
						hi
					</div>
					<div className={classes.message}>
						hi
					</div><div className={classes.message}>
						how are you?
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dialogs;