import '../style/contact.css'

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-main'>
        <h1>Contact us</h1>

        <form>
          <div className='forms form-name'>
            <label>Name</label>
            <input type='text' required placeholder='enter your name' />
          </div>
          <div className='forms form-email'>
            <label>Email</label>
            <input
              type='email'
              required
              placeholder='enter your Email-address'
            />
          </div>
          <div className='forms form-message'>
            <label>message</label>
            <input
              type='message'
              required
              placeholder='Tell us about your query...'
            />
          </div>
          <button type='submit'>send</button>
        </form>
      </div>
    </div>
  )
}
