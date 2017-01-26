//any js is automatically ran for us

//Import the react library
import React from 'react';
import ReactDOM from 'react-dom';

//create a component
const App = () => {
	return (
		<div>
           React App #2
		</div>
	);
};

//render this component to the screen
Meteor.startup(() => {
   ReactDOM.render(<App />, document.querySelector('.container'));
});


