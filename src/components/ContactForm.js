import { useFormik } from 'formik';
import * as Yup from 'yup';

export default function Page() {
    const formik = useFormik({
      initialValues: {
        yourName: '',
        email: '',
        phone: '',
        message: ''
      },
      validationSchema: Yup.object({
        yourName: Yup.string().matches(/^[A-Za-z]+$/, 'Enter a valid first name').required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
        phone: Yup.string().matches(/^[0-9]+$/, 'Enter a valid number')
          .matches(/^\d{10}$/, 'Must be exactly 10 digits').required('Required'),
        message: Yup.string().required('Required')
      }),
      onSubmit: values => {
        console.log('Form submitted:', values);
        alert('Thank you for contacting us!');
      }
    });
  
    return (
      <div className="contact">
        <div className="contact-form-container">
          <form onSubmit={formik.handleSubmit} className="contact-form">
            <label>
              Your Name:
              <input
                type="text"
                name="yourName"
                {...formik.getFieldProps('yourName')}
                placeholder="Full Name"
                className={formik.touched.yourName && formik.errors.yourName ? 'input-error' : ''}
              />
              {formik.touched.yourName && formik.errors.yourName ? (
                <div className="error">{formik.errors.yourName}</div>
              ) : null}
            </label>
            <label>
              Your Email:
              <input
                type="email"
                name="email"
                {...formik.getFieldProps('email')}
                placeholder="Email Address"
                className={formik.touched.email && formik.errors.email ? 'input-error' : ''}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="error">{formik.errors.email}</div>
              ) : null}
            </label>
            <label>
              Phone:
              <input
                type="tel"
                name="phone"
                {...formik.getFieldProps('phone')}
                placeholder="Phone Number"
                className={formik.touched.phone && formik.errors.phone ? 'input-error' : ''}
              />
              {formik.touched.phone && formik.errors.phone ? (
                <div className="error">{formik.errors.phone}</div>
              ) : null}
            </label>
            <label>
              Message:
              <textarea
                name="message"
                {...formik.getFieldProps('message')}
                placeholder="Enter your Message"
                className={formik.touched.message && formik.errors.message ? 'input-error' : ''}
              ></textarea>
              {formik.touched.message && formik.errors.message ? (
                <div className="error">{formik.errors.message}</div>
              ) : null}
            </label>
            <button type="submit">SEND MESSAGE</button>
          </form>
        </div>
        <div className="contact-info">
          <p>Contact us</p>
          <h1>Get In Touch</h1>
          <p className='para'> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
          <div className="info-item">
            <img src="call.svg" alt="Phone" />
            <p>Phone: +1234567890</p>
          </div>
          <div className="info-item">
            <img src="email.svg" alt="Email" />
            <p>Email: <a href="mailto:info@example.com">info@example.com</a></p>
          </div>
          <div className="info-item">
            <img src="website.svg" alt="Website" />
            <p>Website: <a href="https://example.com">example.com</a></p>
          </div>
          <div className="info-item">
            <img src="map.svg" alt="Address" />
            <p>Address: 123 Example St, City, Country</p>
          </div>
          <div className="follow">
            <h2>Follow Us On</h2>
            <a href="www.facebook.com"><img src="facebook.svg" alt="facebook" /></a>
            <a href ="www.twitter.com"><img src="twitter.svg" alt="twitter" /></a>
            <a href ="www.instagram.com"><img src="insta.svg" alt="instagram" /></a>
            <a href ="www.youtube.com"><img src="youtube.svg" alt="youtube" /></a>
          </div>
        </div>
      </div>
    );
  }