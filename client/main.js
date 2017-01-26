//any js is automatically ran for us

//Import the react library
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import ImageList from './components/image_list';


//create a component
class App extends Component{
componentWillMount() {
	//fantastic place to load data
	axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
        .then(response => console.log(response));
}
	render() {
    return (
		<div>
		  <ImageList />
		</div>
	);
  }
};

//render this component to the screen
Meteor.startup(() => {
   ReactDOM.render(<App />, document.querySelector('.container'));
  
});


