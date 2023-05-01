import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright by {new Date().getFullYear()} All rights reserved. Design by{' '}
          <a href="https://code.berryteam.vn/">Berry Code Team</a>.
        </span>
      </div>
    </footer>
  </div>
)
