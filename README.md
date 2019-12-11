This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started

`git clone git@github.com:jmcdannel/mem-notes.git`

`npm install`

`npm start`

---

## Included Note Types
The system includes 3 note types.
1) Reminder `[fields: text]`
2) Due Date `[fields: text, dueDate]`
3) List `[fields: text, dueDate]`

[see [/src/Notes/config.js](blob/master/src/Notes/config.js) for more]

### Note Object

The note object passed as a prop will have:


| Name 				| Type 				| Description |
| ----------- | ----------- | ----------- |
| id | Number | unique identifier created for each new note
| type | String | one of `reminder`, `dueDate`, `list` or others added to [/src/Notes/config.js](blob/master/src/Notes/config.js)
Additinal note properties will be supplied by a `Form Component`

---

## How to add new Note Types

Follow these 3 steps to create new note types.

1) Create Display Component

2) Create Form Component

3) Add new entry to [/src/Notes/config.js](blob/master/src/Notes/config.js) 

___

## Display Components

> Purpose: display formatted note content not provided by `<GenericNote>`

> Recommended Path: `./src/Notes/Note/[NoteComponent]/[NoteComponent]`

A `<GenericNote>` component is provided. It will output content of the `text` value will be displayed in a `<p></p>`. Additionally, any fields defined in the `fields` property definted in  [/src/Notes/config.js](blob/master/src/Notes/config.js) will be output as a `<Chip>`.

### Props

| Name 				| Type 				| Description |
| ----------- | ----------- | ----------- |
| note | Object | a `note` object
| noteType | Object | the entry corresponding to `note.type` from the `notesConfig.types` defined in [/src/Notes/config.js](blob/master/src/Notes/config.js)

### Recommended implementation: return a `<CardContent>` element containing the note content

```js
// example
<CardContent>
	<Divider />  
	{note.text && (<p>{note.text}</p>)}
	<Divider />  
	<div className={classes.section}>
		{noteType.fields && noteType.fields.length > 0 && noteType.fields.map(field => (
			<Chip 
					key={field.id}
					className={classes.chip} 
					icon={(<strong>{field.label}:</strong>)} 
					label={note[field.id])} 
				/>
		))}
	</div>
</CardContent>
```
___

## Form Components

> Purpose: collect valid input from user

> Recommended Path: `./src/Notes/Forms/[FormComponent]/[FormComponent]`

### Props

| Name 				| Type 				| Description |
| ----------- | ----------- | ----------- |
| note | Object | a `note` object containing `id` and `type` properties
| setNote | Function | setter for note
| setIsValid | Function | control `valid` state of the note form. This enables/disabples the "Save" button.

### Recommended implementation
#### 1) Return a form
- return element(s) containing MaterialUI inputs 
- use `className="note-form"` to apply 100% width
- bind `value` to note property
- bind `onChange` handlers (see below)
```js
// example
return (
	<TextField
		id="text"
		label="Note Text"
		multiline
		className="note-form"
		value={note.text}
		onChange={handleChange}
	/>
);
```

#### 2) Implement `onChange` handlers
- update the note whenever user input changes
- update validation status after change
```js
//example
const handleChange = event => {
	const delta = { text: event.target.value };
	setNote({ ...note, ...delta });
	validate();
};
```

#### 3) Validate the field values
- execute whenever input changes
- use `setIsValid` prop to update valid state
```js
//example
const validate = () => {
	const valid = ( note.text && note.text.length > 3);
	setIsValid(valid);
  }
```
___

## Note Config

> see [/src/Notes/config.js](blob/master/src/Notes/config.js)

| Name 				| Type 				| Description |
| ----------- | ----------- | ----------- |
| id | string | unique identifier
| label | String | text used for option when selecting note type to add
| header | String | text displayed in note header, also used to create `<Avatar>`  in header
| form | component | The React component that handles user input when creating notes
| renderer | component | Teh React component that displays the note content. see `<GenericNote>`
___

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

