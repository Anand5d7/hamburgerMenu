// Write your code here

import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="container">
    <div className="home-container">
      <Header />
      <div className="home-image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
          alt="home"
          className="mobile-image"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
          alt="home"
          className="desktop-image"
        />
      </div>
    </div>
  </div>
)

export default Home
