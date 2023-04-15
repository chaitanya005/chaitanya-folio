import { contact } from '../../portfolio'
import './Contact.css'

const Contact = () => {
  if (!contact.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Contact</h2>
      <div style={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
        <a href={`mailto:${contact.email}`}>
          <span type='button' className='btn btn--outline'>
            Email me
          </span>
        </a>
        <a href={`tel:${contact.call}`}>
          <div style={{ display: 'flex', gap: '0.5em', alignItems: 'center' }}>
            <span type='button' className='btn btn--outline'>
              +91 9505961934
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default Contact
