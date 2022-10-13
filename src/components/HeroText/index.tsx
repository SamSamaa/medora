import ScrollDown from '../ScrollDown';

import './index.scss';

const HeroText = () => (
  <div className='Hero-text'>
    <div className='up-section'>
      <div className='title'>
        <h1>
          Mid Century
          <br />
          <span>Modern Furniture</span>
        </h1>
        <p>
          Modern high quality and comfortable
          <br />
          available on our stores
        </p>
      </div>
      <button type='button'>Discover Now</button>
    </div>
    <ScrollDown />
  </div>
)

export default HeroText;