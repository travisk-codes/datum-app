import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
	Divider,
	Fab,
	List,
	ListItem,
	ListItemIcon,
	ListItemSecondaryAction,
	ListItemText,
	Menu,
	MenuItem,
	Checkbox,
	IconButton,
	TextField,
	Toolbar,
	Typography,
} from '@material-ui/core'
import MoreIcon from '@material-ui/icons/MoreVert'
import MenuIcon from '@material-ui/icons/MenuRounded'
import AddIcon from '@material-ui/icons/AddRounded'
import Datum from '../DatumClass'

const useStyles = makeStyles(theme  => ({
	container: {
		marginTop: 56, // top bar
	},
	checkbox: {
		paddingLeft: 10,
	},
	todoBar: {
		display: 'flex',
		position: 'fixed',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		left: 0,
		right: 0,
		bottom: 0,
		height: 56,
		boxShadow: '0px 2px 20px rgba(0, 0, 0, 0.2)',
		paddingLeft: 6,
		paddingRight: 54,
	},
	fab: {
		position: 'fixed',
		right: 8,
		bottom: 8,
	},
	todoTextField: {
		display: 'flex',
		alignItems: 'stretch',
	}
}))

function TodoItemMenu(props) {

	const [anchor_el, setAnchorEl] = React.useState(null)

	function onClick(e) {
		e.stopPropagation()
		setAnchorEl(e.currentTarget)
	}
	function onClose() {
		setAnchorEl(null)
	}

	function onDelete() {
		props.onSelectDelete()
		onClose()
	}
	function onEdit() {
		props.onSelectEdit()
		onClose()
	}

	return (
		<>
			<IconButton
				aria-owns={anchor_el ? 'todo-item-menu' : undefined}
				edge='end'
				aria-haspopup="true"
				onClick={onClick}
			>
				<MoreIcon />
			</IconButton>
			<Menu
					id="todo-item-menu"
					anchorEl={anchor_el}
					open={Boolean(anchor_el)}
					onClose={onClose}
				>
					<MenuItem onClick={onEdit}>Edit</MenuItem>
					<MenuItem onClick={onDelete}>Delete</MenuItem>
				</Menu>

		</>
	)

}

function TodoItem(props) {
	const classes = useStyles()

	function onClick(todo_item) {
		if (todo_item.hasTag('done')) {
			todo_item.removeTag('done')
		} else {
			todo_item.addTag('done')
		}
		props.onToggle(todo_item)
}

	const TodoCheckbox = () => (
		<ListItemIcon className={classes.checkbox}>
			<Checkbox
				edge="start"
				checked={props.todo.hasTag('done')}
				tabIndex={-1}
				disableRipple
				inputProps={{ 'aria-labelledby': props.todo.getId()}}
			/>
		</ListItemIcon>
	)

	const TodoName = () => (
		<ListItemText
			id={props.todo.getId()}
			style={ props.done ? {
				color: 'grey',
				textDecorationLine: 'line-through'
			} : null}
			primary={
				<Typography
					variant='body1'
				>
					{props.todo.getValue('todo')}
				</Typography>
			}
		/>
	)

	const TodoMenu = () => (
		<ListItemSecondaryAction>
			<TodoItemMenu
				onSelectDelete={() => props.onSelectDelete(props.id)}
				onSelectEdit={() => props.onSelectEdit(props.id)}
			/>
		</ListItemSecondaryAction>
	)

	return (
		<div>
			<ListItem
				role={undefined}
				dense
				button
				onClick={() => onClick(props.todo)}
			>
				<TodoCheckbox />
				<TodoName />
				<TodoMenu />
			</ListItem>
			<Divider variant='inset' component='li' />
		</div>
	)

}

function Todos(props) {
	const classes = useStyles()
	let [ text, setText ] = React.useState('')

	let incomplete_todos = [], complete_todos = []

	function on_click_btn(e) {
		e.preventDefault()
		if (!text.length) {
			props.onButtonLongPress(e)
		} else {
			props.onAddTodo([{
				name: 'todo',
				value: text,
			}])
			setText('')
		}
	}

	function onChangeTodoTextField(e) {
		setText(e.target.value)
	}

	function onSubmitTodo(e) {
		e.preventDefault()
		props.onAddTodo([{
			name: 'todo',
			value: text,
		}])
		setText('')
	}

	props.todoItems.forEach(ti => {
		if (ti.hasTag('done')) {
			complete_todos.push((
				<TodoItem
					key={ti.getId()}
					todo={ti}
					done
					onSelectDelete={() => props.onSelectDelete(ti.id)}
					onSelectEdit={() => props.onSelectEdit(ti.id)}
					onToggle={() => props.onToggleTodo(ti)}
				/>
			))
		} else {
			incomplete_todos.push((
				<TodoItem
					key={ti.getId()}
					todo={ti}
					onSelectDelete={() => props.onSelectDelete(ti.id)}
					onSelectEdit={() => props.onSelectEdit(ti.id)}
					onToggle={() => props.onToggleTodo(ti)}
				/>
			))
		}
	})

	const btn_icon = !text.length ? <MenuIcon /> : <AddIcon />

  return (
		<div className={classes.container}>
			<List>
				{incomplete_todos}
				{complete_todos}
			</List>
			<Toolbar className={classes.todoBar}>
				<form onSubmit={e => onSubmitTodo(e)}>
					<TextField 
						className={classes.todoTextField} 
						onChange={e => onChangeTodoTextField(e)}
						value={text}
						label='Todo' 
						placeholder='New Todo' 
						variant='outlined' 
						size='small' 
						color='secondary'
					/>
				</form>
			</Toolbar>
			<Fab
				onClick={on_click_btn}
				onContextMenu={props.onButtonLongPress} // capture long press & right click
				onDoubleClick={props.onButtonLongPress}
				className={classes.fab}
				color='primary'
				size='small'
			>
				{btn_icon}
			</Fab>
		</div>
  );
}

export default Todos