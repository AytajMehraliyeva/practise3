import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Home.scss'
import Card from '../../../Companent/Card';
import {Helmet} from 'react-helmet'

const Home = () => {

    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
      };
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div>
    <Slider className='slider' {...settings}>
      <div className='sliderImg'>
      <img className='bg3' src="https://preview.colorlib.com/theme/tasty/images/bg_1.jpg" alt="" />
      <h2>Book table for yourself at a <br /> time convenient for you</h2>
      <p>Book a table</p>
      </div>
      <div>
        <img src="https://preview.colorlib.com/theme/tasty/images/bg_2.jpg" alt="" />
        <h2>Tasty & Delicious Food</h2>
        <p>Book a table</p>
      </div>
      <div>
       <img src="https://preview.colorlib.com/theme/tasty/images/bg_3.jpg" alt="" />
       <h2>Book a table for yourself at a <br /> time convenient for you</h2>
       <p>Book a table</p>
      </div>
    </Slider>
    <div className='selectDiv'>
     
<input type="text"  placeholder='Name'/>
<input type="text" placeholder='Phone' />
<input type="date" />
<input type="text" placeholder='Time' />

<select name="" id="">
        <option value="">Person</option>
        <option value="">1</option>
        <option value="">2</option>
        </select>
      <button>Book a table</button>
    </div>
  </div>

  <section className='sectionSecond'>
    <div className='sectionContainer'>
      <img src="https://preview.colorlib.com/theme/tasty/images/about-2.jpg" alt="" />
      
      <div className='sectionSecondDiv'>
        <span className='span'>About Tasty</span>

        <h3>Our chef cooks the most <br /> delicious food for you</h3>

      <p>Far far away, behind the word mountains, far from <br /> the countries Vokalia and Consonantia, there live the blind <br /> texts. Separated they live in Bookmarksgrove 
        right at <br /> the coast of the Semantics, a large language ocean.</p>

        <p>A small river named Duden flows by their place and <br /> supplies it with the necessary regelialia. It is a <br />paradisematic country, in which roasted parts of <br /> 
          sentences fly into your mouth.</p>
      </div>
    </div>
  </section>

 <section className='crud'>

  <Card/>
 </section>

 <section className='satisfied'> 
 <h3>Our Satisfied Guests Says</h3>
  <div className='guestsCards'>
   
    <div className='guestsCard'>
      <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg" alt="" />
      <p>Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br /> Consonantia, there live the blind texts.</p>
      <p className='name'>Denis Green</p>
      <p className='guest'>Italian guest</p>
    </div>

    <div className='guestsCard'>
      <img src="https://preview.colorlib.com/theme/tasty/images/person_1.jpg" alt="" />
      <p>Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br /> Consonantia, there live the blind texts.</p>
      <p className='name'>Denis Green</p>
      <p className='guest'>Italian guest</p>
    </div>

    <div className='guestsCard'>
      <img src="https://preview.colorlib.com/theme/tasty/images/person_2.jpg" alt="" />
      <p>Far far away, behind the word mountains, <br /> far from the countries Vokalia and <br /> Consonantia, there live the blind texts.</p>
      <p className='name'>Denis Green</p>
      <p className='guest'>Italian guest</p>
    </div>
  </div>
 </section>


 <section className='recent'>
  <h3>Recent Blogs</h3>
  <div className='recentCards'>
    <div className='recentCard'>
      <img src="https://preview.colorlib.com/theme/tasty/images/image_5.jpg" alt="" />
      <div className='recentCardBody'>
        <span>July 7, 2018 Admin</span>
        <h5>Even the all-powerful Pointing <br />has no control about the blind <br /> texts</h5>
        <p>Read more</p>
      </div>
    </div>

    <div className='recentCard'>
      <img src="https://preview.colorlib.com/theme/tasty/images/image_6.jpg" alt="" />
      <div className='recentCardBody'>
        <span>July 7, 2018 Admin</span>
        <h5>Even the all-powerful Pointing <br />has no control about the blind <br /> texts</h5>
        <p>Read more</p>
      </div>
    </div>

    <div className='recentCard'>
      <img src="https://preview.colorlib.com/theme/tasty/images/image_7.jpg" alt="" />
      <div className='recentCardBody'>
        <span>July 7, 2018 Admin</span>
        <h5>Even the all-powerful Pointing <br />has no control about the blind <br /> texts</h5>
        <p>Read more</p>
      </div>
    </div>
  </div>
 </section>


  </>
  )
}

export default Home