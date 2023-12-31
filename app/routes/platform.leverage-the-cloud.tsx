import { LeverageTheCloudPage } from '~/view/pages'
import { MetaFunction } from '@remix-run/node'

export default function LeverageTheCloud() {
  return <LeverageTheCloudPage />
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Leverage the Cloud' },
    { property: 'og:title', content: 'Leverage the Cloud' },
    {
      name: 'description',
      content: 'Harness the power of the cloud with Akila Analytics.'
    }
  ]
}
