// Create our image list component
//import React
import React from 'react';
import ImageDetail from './image_detail';

const IMAGES = [
  {title: 'Pen', link: 'https://dummyimage.com/600x400'},
  {title: 'Pine Tree', link: 'https://dummyimage.com/600x400'},
  {title: 'Mug', link: 'https://dummyimage.com/600x400'}
];

//create our component
const ImageList = () => {
   return (
   	<ul>
   	   <ImageDetail />
   	</ul>
   	);
};


//export our component

export default ImageList;