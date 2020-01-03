import React from 'react'
import {
<<<<<<< HEAD
	Fab,
=======
	// Fab,
>>>>>>> 905cb95... fixes errors and warnings
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from '@material-ui/core'

import ImportExportIcon from '@material-ui/icons/ImportExportRounded'
import HelpIcon from '@material-ui/icons/HelpRounded'
import InfoIcon from '@material-ui/icons/InfoRounded'
<<<<<<< HEAD

=======
import DoneIcon from '@material-ui/icons/DoneAllRounded'
<<<<<<< HEAD
>>>>>>> 579a9c1... Todos button in side menu opens Todos view
=======
import ListIcon from '@material-ui/icons/ListRounded'
<<<<<<< HEAD
>>>>>>> 5d7e841... Adds icon and action to Side Menu item list
// CheckCircle
// Done
// List
// Timeline
=======
import MoneyIcon from '@material-ui/icons/AttachMoneyRounded'
import StatsIcon from '@material-ui/icons/TimelineRounded'
import TimelineIcon from '@material-ui/icons/ViewDayRounded'
import HabitsIcon from '@material-ui/icons/UpdateRounded'
import ClearIcon from '@material-ui/icons/ClearRounded'
>>>>>>> 22a2c59... updates functions to use new Datum class, adds clear all feature, minor cosmetic updates, fills out side menu icons, adds fab to Todos page, misc updates

export default function SideMenu(props) {
	return (
		<Drawer
			anchor='right'
			open={props.open}
			onClose={props.on_close}
		>
			<List>
<<<<<<< HEAD
<<<<<<< HEAD
				{['Help', 'About', 'Sign Out'].map((text, i) => (
					<ListItem
						onClick={props.sign_out}
						button
						key={text}
					>
=======
				{['Help', 'About'].map((text, i) => (
					<ListItem button key={text}>
>>>>>>> 905cb95... fixes errors and warnings
						<ListItemIcon>
							{text === 'Help' ? (
								<HelpIcon />
							) : (
								<InfoIcon />
							)}
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
=======
			<ListItem
					button
					disabled
					onClick={props.onClickList}
				>
					<ListItemIcon>
						<HelpIcon />
					</ListItemIcon>
					<ListItemText primary='Help' />
				</ListItem>
				<ListItem
					button
					onClick={props.onClickList}
				>
					<ListItemIcon>
						<InfoIcon />
					</ListItemIcon>
					<ListItemText primary='About' />
				</ListItem>
>>>>>>> 22a2c59... updates functions to use new Datum class, adds clear all feature, minor cosmetic updates, fills out side menu icons, adds fab to Todos page, misc updates
			</List>
			<Divider />
			<List>
				<ListItem
					button
					disabled
					onClick={props.onClickList}
				>
					<ListItemIcon>
						<HabitsIcon />
					</ListItemIcon>
					<ListItemText primary='Habits' />
				</ListItem>
				<ListItem
					button
					disabled
					onClick={props.onClickList}
				>
					<ListItemIcon>
						<TimelineIcon />
					</ListItemIcon>
					<ListItemText primary='Timeline' />
				</ListItem>
				<ListItem
					button
					disabled
					onClick={props.onClickList}
				>
					<ListItemIcon>
						<StatsIcon />
					</ListItemIcon>
					<ListItemText primary='Stats' />
				</ListItem>
				<ListItem
					button
					disabled
					onClick={props.onClickList}
				>
					<ListItemIcon>
						<MoneyIcon />
					</ListItemIcon>
					<ListItemText primary='Money' />
				</ListItem>
				<ListItem
					button
					onClick={props.onClickList}
				>
					<ListItemIcon>
						<ListIcon />
					</ListItemIcon>
					<ListItemText primary='List' />
				</ListItem>
				<ListItem
					button
					onClick={props.onClickTodos}
					key='todos'
				>
					<ListItemIcon>
						<DoneIcon />
					</ListItemIcon>
					<ListItemText primary='Todos' />
				</ListItem>
			</List>
			<Divider />
			<List>
				{['Import/Export'].map((text, i) => (
					<ListItem
						button
						onClick={props.on_click_import_export}
						key={text}
					>
						<ListItemIcon>
							<ImportExportIcon />
						</ListItemIcon>
						<ListItemText primary={text} />
					</ListItem>
				))}
				<ListItem
					button
					onClick={props.onClickClearData}
				>
					<ListItemIcon>
						<ClearIcon />
					</ListItemIcon>
					<ListItemText primary='Clear Data' />
				</ListItem>

			</List>
		</Drawer>
	)
}
