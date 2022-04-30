import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <h5 className="taCenter">
      Follow us{' '}
      <a href="https://instagram.com/encore_home_staging/">@encorehomestaging</a>
    </h5>
    <br />
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
