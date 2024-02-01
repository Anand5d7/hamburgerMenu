// Write your code here
import Popup from 'reactjs-popup'

import {withRouter, Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div className="nav-header">
      <Link to="/" className="link-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="logo-img"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            type="button"
            className="trigger-button"
            data-testid="hamburgerIconButton"
          >
            <GiHamburgerMenu aria-label="50" />
          </button>
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              type="button"
              className="close-button"
              data-testid="closeButton"
              onClick={() => close()}
            >
              <IoMdClose aria-label="60" color="#616e7c" />
            </button>
            <ul className="list-container">
              <li className="list-item">
                <Link to="/" className="nav-link" onClick={() => close()}>
                  <AiFillHome size="25" />
                  <p className="home-heading">Home</p>
                </Link>
              </li>
              <li className="list-item">
                <Link to="/about" className="nav-link" onClick={() => close()}>
                  <BsInfoCircleFill size="25" />
                  <p className="home-heading">About</p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
)

export default withRouter(Header)
