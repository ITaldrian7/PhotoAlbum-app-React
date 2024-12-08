import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // Ensure this CSS file is created or updated

function HomePage() {
  return (
    <div className="homepage">
      <div className="cover">
        <h1 className="album-title">My Photo Album</h1>
        <p>Select a page to view the images:</p>
        <ul className="page-links">
          {[1, 2, 3, 4, 5].map((pageNum) => (
            <li key={pageNum} className="page-item">
              <Link to={`/page/${pageNum}`} className="page-link">Page {pageNum}</Link>
            </li>
          ))}
        </ul>
      </div>

      {}
      <div className="spinning-logo">
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" />
      </div>

      {/* Footer Section */}
      <footer className="footer">
        © Baritos 2024
      </footer>
    </div>
  );
}

export default HomePage;
