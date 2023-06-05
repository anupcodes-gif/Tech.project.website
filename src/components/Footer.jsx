import '../style/footer.css'

const Footer = () => {
  return (
    <footer>
      <div className='footer-title'>
        <h1>Ap-tech.</h1>
        <p>@All right reserved c2023 </p>
      </div>
      <div className='footer-content'>
        <h5>Follow us on</h5>
        <div className='footer-links'>
          <a href='https://www.youtube.com' target='blank'>
            Youtube
          </a>
          <a href='https://www.facebook.com' target='blank'>
            Facebook
          </a>
          <a href='https://www.instagram.com'>Instagram</a>
          <a href='https://www.Github.com/' target='blank'>
            Github
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
