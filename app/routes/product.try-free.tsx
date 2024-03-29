import { TryFreePage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default TryFreePage

export const meta: MetaFunction = () => {
  const title = 'Try Akila Analytics for Free'
  const description =
    'Experience the power of Akila Analytics. Sign up now for a free trial and see the difference for yourself.'
  return [
    { title: title },
    { property: 'og:title', content: title },
    {
      name: 'description',
      content: description
    },
    {
      name: 'og:description',
      content: description
    }
  ]
}
