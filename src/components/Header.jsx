import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/">
        <div>Url Bookmark</div>
      </Link>
    </nav>
  )
}

export default Header