import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h4 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/encore_home_staging/">@encorehomestaging</a>
    </h4>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  </div>
)
