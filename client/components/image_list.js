// Create our image list component
//import React
import React from 'react';
import ImageDetail from './image_detail';

//create our component
const ImageList = (props) => {
	const RenderedImages = props.images.map(image => 
         <ImageDetail key={image.title} image={image} />
);

   return (
   	<ul className="media-list list-group">
   	   {RenderedImages}
   	</ul>
   	);
};


//export our component

export default ImageList;