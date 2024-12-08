import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import PhotoPage from './PhotoPage';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import image6 from './images/image6.jpg';
import image7 from './images/image7.jpg';
import image8 from './images/image8.jpg';
import image9 from './images/image9.jpg';
import image10 from './images/image10.jpg';
import image11 from './images/image11.jpg';
import image12 from './images/image12.jpg';
import image13 from './images/image13.jpg';
import image14 from './images/image14.jpg';
import image15 from './images/image15.jpg';
import image16 from './images/image16.jpg';
import image17 from './images/image17.jpg';
import image18 from './images/image18.jpg';
import image19 from './images/image19.jpg';
import image20 from './images/image20.jpg';

import image21 from './images/image21.jpg';
import image22 from './images/image22.jpg';
import image23 from './images/image23.jpg';
import image24 from './images/image24.jpg';
import image25 from './images/image25.jpg';
import image26 from './images/image26.jpg';
import image27 from './images/image27.jpg';
import image28 from './images/image28.jpg';
import image29 from './images/image29.jpg';
import image30 from './images/image30.jpg';
import image31 from './images/image31.jpg';
import image32 from './images/image32.jpg';
import image33 from './images/image33.jpg';
import image34 from './images/image34.jpg';
import image35 from './images/image35.jpg';
import image36 from './images/image36.jpg';


import image37 from './images/image37.jpg';
import image38 from './images/image38.jpg';
import image39 from './images/image39.jpg';
import image40 from './images/image40.jpg';

import image41 from './images/image41.jpg';
import image42 from './images/image42.jpg';
import image43 from './images/image43.jpg';
import image44 from './images/image44.jpg';
import image45 from './images/image45.jpg';
import image46 from './images/image46.jpg';
import image47 from './images/image47.jpg';
import image48 from './images/image48.jpg';
import image49 from './images/image49.jpg';
import image50 from './images/image50.jpg';

import image51 from './images/image51.jpg';
import image52 from './images/image52.jpg';
import image53 from './images/image53.jpg';
import image54 from './images/image54.jpg';
import image55 from './images/image55.jpg';
import image56 from './images/image56.jpg';
import image57 from './images/image57.jpg';
import image58 from './images/image58.jpg';
import image59 from './images/image59.jpg';
import image60 from './images/image60.jpg';

import image61 from './images/image61.jpg';
import image62 from './images/image62.jpg';
import image63 from './images/image63.jpg';
import image64 from './images/image64.jpg';
import image65 from './images/image65.jpg';
import image66 from './images/image66.jpg';
import image67 from './images/image67.jpg';
import image68 from './images/image68.jpg';
import image69 from './images/image69.jpg';
import image70 from './images/image70.jpg';

import image71 from './images/image71.jpg';
import image72 from './images/image72.jpg';
import image73 from './images/image73.jpg';
import image74 from './images/image74.jpg';
import image75 from './images/image75.jpg';
import image76 from './images/image76.jpg';
import image77 from './images/image77.jpg';
import image78 from './images/image78.jpg';
import image79 from './images/image79.jpg';
import image80 from './images/image80.jpg';

import image81 from './images/image81.jpg';
import image82 from './images/image82.jpg';
import image83 from './images/image83.jpg';
import image84 from './images/image84.jpg';
import image85 from './images/image85.jpg';
import image86 from './images/image86.jpg';
import image87 from './images/image87.jpg';
import image88 from './images/image88.jpg';
import image89 from './images/image89.jpg';
import image90 from './images/image90.jpg';

import image91 from './images/image91.jpg';
import image92 from './images/image92.jpg';
import image93 from './images/image93.jpg';
import image94 from './images/image94.jpg';
import image95 from './images/image95.jpg';
import image96 from './images/image96.jpg';
import image97 from './images/image97.jpg';
import image98 from './images/image98.jpg';
import image99 from './images/image99.jpg';
import image100 from './images/image100.jpg';




function App() {
  
  const photos = [
    { id: 1, title: 'Sunset', description: 'A beautiful sunset', url: image1 },
    { id: 2, title: 'Pink Rose', description: 'Stunning Rose', url: image2 },
    { id: 3, title: 'Orange flower', description: 'Nice flower', url: image3 },
    { id: 4, title: 'Nature', description: 'Nature never goes out of style', url: image4 },
    { id: 5, title: 'Nature', description: 'Nature never goes out of style', url: image5},
    { id: 6, title: 'Nature', description: 'Nature never goes out of style', url: image6 },
    { id: 7, title: 'Nature', description: 'Nature never goes out of style', url: image7 },
    { id: 8, title: 'Nature', description: 'Nature never goes out of style', url: image8 },
    { id: 9, title: 'Nature', description: 'Nature never goes out of style', url: image9 },
    { id: 10, title: 'Nature', description: 'Nature never goes out of style', url: image10 },
    { id: 11, title: 'Nature', description: 'Nature never goes out of style', url: image11 },
    { id: 12, title: 'Nature', description: 'Nature never goes out of style', url: image12 },
    { id: 13, title: 'Nature', description: 'Nature never goes out of style', url: image13 },
    { id: 14, title: 'Nature', description: 'Nature never goes out of style', url: image14 },
    { id: 15, title: 'Nature', description: 'Nature never goes out of style', url: image15 },
    { id: 16, title: 'Nature', description: 'Nature never goes out of style', url: image16 },
    { id: 17, title: 'Nature', description: 'Nature never goes out of style', url: image17},
    { id: 18, title: 'Nature', description: 'Nature never goes out of style', url: image18 },
    { id: 19, title: 'Nature', description: 'Nature never goes out of style', url: image19 },
    { id: 20, title: 'Nature', description: 'Nature never goes out of style', url: image20 },

      { id: 21, title: 'Urban', description: 'Street Photo 1', url: image21 },
      { id: 22, title: 'Urban', description: 'Street Photo 2', url: image22 },
      { id: 23, title: 'Urban', description: 'Street Photo 3', url: image23 },
      { id: 24, title: 'Urban', description: 'Street Photo 4', url: image24 },
      { id: 25, title: 'Urban', description: 'Street Photo 5', url: image25 },
      { id: 26, title: 'Urban', description: 'Street Photo 6', url: image26 },
      { id: 27, title: 'Urban', description: 'Street Photo 7', url: image27 },
      { id: 28, title: 'Urban', description: 'Street Photo 8', url: image28 },
      { id: 29, title: 'Urban', description: 'Street Photo 9', url: image29 },
      { id: 30, title: 'Urban', description: 'Street Photo 10', url: image30 },
      { id: 31, title: 'Urban', description: 'Street Photo 11', url: image31 },
      { id: 32, title: 'Urban', description: 'Street Photo 12', url: image32 },
      { id: 33, title: 'Urban', description: 'Street Photo 13', url: image33 },
      { id: 34, title: 'Urban', description: 'Street Photo 14', url: image34 },
      { id: 35, title: 'Urban', description: 'Street Photo 15', url: image35 },
      { id: 36, title: 'Urban', description: 'Street Photo 16', url: image36 },
      { id: 37, title: 'Urban', description: 'Street Photo 17', url: image37 },
      { id: 38, title: 'Urban', description: 'Street Photo 18', url: image38 },
      { id: 39, title: 'Urban', description: 'Street Photo 19', url: image39 },
      { id: 40, title: 'Urban', description: 'Street Photo 20', url: image40 },
      
      { id: 41, title: 'Wildlife', description: 'Animal 1', url: image41 },
      { id: 42, title: 'Wildlife', description: 'Animal 2', url: image42 },
      { id: 43, title: 'Wildlife', description: 'Animal 3', url: image43 },
      { id: 44, title: 'Wildlife', description: 'Animal 4', url: image44 },
      { id: 45, title: 'Wildlife', description: 'Animal 5', url: image45 },
      { id: 46, title: 'Wildlife', description: 'Animal 6', url: image46 },
      { id: 47, title: 'Wildlife', description: 'Animal 7', url: image47 },
      { id: 48, title: 'Wildlife', description: 'Animal 8', url: image48 },
      { id: 49, title: 'Wildlife', description: 'Animal 9', url: image49 },
      { id: 50, title: 'Wildlife', description: 'Animal 10', url: image50 },
      { id: 51, title: 'Wildlife', description: 'Animal 11', url: image51 },
      { id: 52, title: 'Wildlife', description: 'Animal 12', url: image52 },
      { id: 53, title: 'Wildlife', description: 'Animal 13', url: image53 },
      { id: 54, title: 'Wildlife', description: 'Animal 14', url: image54 },
      { id: 55, title: 'Wildlife', description: 'Animal 15', url: image55 },
      { id: 56, title: 'Wildlife', description: 'Animal 16', url: image56 },
      { id: 57, title: 'Wildlife', description: 'Animal 17', url: image57 },
      { id: 58, title: 'Wildlife', description: 'Animal 18', url: image58 },
      { id: 59, title: 'Wildlife', description: 'Animal 19', url: image59 },
      { id: 60, title: 'Wildlife', description: 'Animal 20', url: image60 },
    
      { id: 61, title: 'People', description: 'Party 1', url: image61 },
      { id: 62, title: 'People', description: 'Party 2', url: image62 },
      { id: 63, title: 'People', description: 'Party 3', url: image63 },
      { id: 64, title: 'People', description: 'Party 4', url: image64 },
      { id: 65, title: 'People', description: 'Party 5', url: image65 },
      { id: 66, title: 'People', description: 'Party 6', url: image66 },
      { id: 67, title: 'People', description: 'Party 7', url: image67 },
      { id: 68, title: 'People', description: 'Party 8', url: image68 },
      { id: 69, title: 'People', description: 'Party 9', url: image69 },
      { id: 70, title: 'People', description: 'Party 10', url: image70 },
      { id: 71, title: 'People', description: 'Party 11', url: image71 },
      { id: 72, title: 'People', description: 'Party 12', url: image72 },
      { id: 73, title: 'People', description: 'Party 13', url: image73 },
      { id: 74, title: 'People', description: 'Party 14', url: image74 },
      { id: 75, title: 'People', description: 'Party 15', url: image75 },
      { id: 76, title: 'People', description: 'Party 16', url: image76 },
      { id: 77, title: 'People', description: 'Party 17', url: image77 },
      { id: 78, title: 'People', description: 'Party 18', url: image78 },
      { id: 79, title: 'People', description: 'Party 19', url: image79 },
      { id: 80, title: 'People', description: 'Party 20', url: image80 },
    
      { id: 81, title: 'Travel', description: 'Trip 1', url: image81 },
      { id: 82, title: 'Travel', description: 'Trip 2', url: image82 },
      { id: 83, title: 'Travel', description: 'Trip 3', url: image83 },
      { id: 84, title: 'Travel', description: 'Trip 4', url: image84 },
      { id: 85, title: 'Travel', description: 'Trip 5', url: image85 },
      { id: 86, title: 'Travel', description: 'Trip 6', url: image86 },
      { id: 87, title: 'Travel', description: 'Trip 7', url: image87 },
      { id: 88, title: 'Travel', description: 'Trip 8', url: image88 },
      { id: 89, title: 'Autumn Path', description: 'Trip 9', url: image89 },
      { id: 90, title: 'Travel', description: 'Trip 10', url: image90 },
        { id: 91, title: 'Travel', description: 'Trip 11', url: image91 },
        { id: 92, title: 'Travel', description: 'Trip 12', url: image92 },
        { id: 93, title: 'Travel', description: 'Trip 13', url: image93 },
        { id: 94, title: 'Travel', description: 'Trip 14', url: image94 },
        { id: 95, title: 'Travel', description: 'Trip 15', url: image95 },
        { id: 96, title: 'Travel', description: 'Trip 16', url: image96 },
        { id: 97, title: 'Travel', description: 'Trip 17', url: image97 },
        { id: 98, title: 'Travel', description: 'Trip 18', url: image98 },
        { id: 99, title: 'Travel', description: 'Trip 19', url: image99 },
        { id: 100, title: 'Travel', description: 'Trip 20', url: image100 },
      
      
    
    
  ];

  return (
    <Router>
      <div className="App">
        
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/page/:pageNum" element={<PhotoPage photos={photos} />} />
        </Routes>
      </div>
    </Router>
  );
  
}

export default App;
