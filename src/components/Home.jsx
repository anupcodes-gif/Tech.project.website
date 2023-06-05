import '../style/home.css'
import graphics from '../assets/graphic.webp'
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from 'react-icons/ai'
export const Home = () => {
  return (
    <>
      <div className='home' id='home'>
        <div className='content'>
          <h1>Ap-tech.</h1>
          <p>Solutions to all your problems</p>
        </div>
      </div>
      <div className='home2'>
        <img src={graphics} alt='graphics' />
        <div className='text'>
          <p>
            we are your one and only solution to the tech problems you face
            every day. we are leading tech company whose aim is to increase the
            problem solving ability in children.
          </p>
        </div>
      </div>
      <div className='home3' id='about'>
        <div className='home3-content'>
          <h1>Who we are</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
            perferendis facere tempore consectetur sunt aliquam inventore iure
            eius, consequatur molestiae maiores voluptates, beatae atque!
            Architecto vel veritatis qui. Similique, commodi? Lorem ipsum, dolor
            sit amet consectetur adipisicing elit. Inventore necessitatibus nisi
            illum facere architecto excepturi eveniet, quasi, corrupti quod
            itaque nemo minus nihil odio voluptates id facilis exercitationem
            odit mollitia.
          </p>
        </div>
      </div>
      <div className='home4' id='brands'>
        <div className='home4-content'>
          <h1>Brands</h1>
          <article>
            <div className='icons'>
              <div className='icon google-icons'>
                <AiFillGoogleCircle />
                <p>Google</p>
              </div>
              <div className='icon amazon-icons'>
                <AiFillAmazonCircle />
                <p>Amazon</p>
              </div>
              <div className='icon yt-icons'>
                <AiFillYoutube />
                <p>Youtube</p>
              </div>
              <div className='icon insta-icons'>
                <AiFillInstagram />
                <p>Instagram</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}
