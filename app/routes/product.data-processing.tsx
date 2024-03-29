import type { MetaFunction } from '@remix-run/react'

import { DataProcessingPage } from '~/view/pages'

export default DataProcessingPage

export const meta: MetaFunction = () => {
  const title = 'Data Processing'
  const description =
    'Process vast amounts of data with ease. Akila Analytics provides powerful tools for data cleansing, transformation, and more.'
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
