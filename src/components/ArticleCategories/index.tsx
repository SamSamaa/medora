import OrangeChair from '../../assets/orange-chair.png';
import GreyChair from '../../assets/grey-chair.png';
import Lampe from '../../assets/lampe.png';

import './articleCategories.scss';

const ArticleCategories = () => {
  return (
    <div className='Article-categories'>
      <div className='grey-section'>
        <img src={GreyChair} alt='grey chair with a yellow pillow' />
        <div>
          <span>03.</span>
          <h2>Cosy Modern Chair</h2>
          <p>Lorem ipsum dolor sit amet, consectetur elit<br />sed do eiusmod tempor incididunt</p>
        </div>
      </div>
      <div className='grey-border' />

      <div className='orange-section'>
        <img src={OrangeChair} alt='orange chair' />
        <div>
          <span>01.</span>
          <h2>Stylish Metal Chair</h2>
          <p>Chair with minimal style and modern<br />Woden and plastic material</p>
        </div>
      </div>
      <div className='orange-border' />

      <div className='blue-section'>
        <img src={Lampe} alt='black lampe' />
        <div>
          <span>02.</span>
          <h2>Roof Lamp Lightings</h2>
          <p>Roof light and lamps we have wide range<br />In all colors and lamps also available</p>
        </div>
      </div>
      <div className='blue-border' />
    </div>
  )
}

export default ArticleCategories;