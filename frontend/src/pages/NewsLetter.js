import NewsletterSignup from '../components/events/NewsLetterSignup'
import PageContent from '../components/events/PageContent'

function NewsletterPage() {
  return (
    <PageContent title='Join our awesome newsletter!'>
      <NewsletterSignup />
    </PageContent>
  )
}

export default NewsletterPage

export async function action({ request }) {
  const data = await request.formData()
  const email = data.get('email')

  // send to backend newsletter server ...
  console.log(email)
  return { message: 'Signup successful!' }
}
