//any js is automatically ran for us

//Import the react library
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';


//create a component
const App = () => {

	return (
		<div>
		  <ImageList />
		</div>
	);
};

//render this component to the screen
Meteor.startup(() => {
   ReactDOM.render(<App />, document.querySelector('.container'));
   axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
   .then(response => console.log(response));
});


