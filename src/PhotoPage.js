import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import Loading from './Loading';
import './PhotoGrid.css';

function PhotoPage({ photos }) {
  const { pageNum } = useParams();
  const pageIndex = parseInt(pageNum) - 1; // Convert pageNum to index (0-based)
  const start = pageIndex * 20;
  const end = start + 20;
  const pagePhotos = photos.slice(start, end);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, []);

  // Fixed getPageHeading function
  const getPageHeading = () => {
    switch (parseInt(pageNum)) {
      case 1:
        return "Nature Photos";
      case 2:
        return "Urban Photos";
      case 3:
        return "Wildlife Photos";
      case 4:
        return "People Photos";
      case 5:
        return "Travel Photos";
      default:
        return "Photos";
    }
  };

  // Show loading screen if loading is true
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {/* Use getPageHeading to display appropriate heading */}
      <h2>{getPageHeading()}</h2>
      <div className="photo-grid">
        {pagePhotos.map((photo) => (
          <div key={photo.id} className="photo">
            <img src={photo.url} alt={photo.title} />
            <h3>{photo.title}</h3>
            <p>{photo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PhotoPage;
