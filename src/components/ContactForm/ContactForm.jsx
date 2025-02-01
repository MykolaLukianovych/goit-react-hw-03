import { Field, Form, Formik } from 'formik'

const ContactForm = () => {
  return (
      <div>
          <Formik>
              <Form>
                  <p>Name</p>
                  <Field name='name'/>
                  <p>Number</p>
                  <Field name='number' />
                  <button type='submit'>Add contact</button>
              </Form>
          </Formik>
    </div>
  )
}

export default ContactForm