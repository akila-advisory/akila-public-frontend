import { Helmet } from 'react-helmet'
import { json, useLoaderData } from 'react-router'

export const loader = () => {
  return json({ test: 'value' })
}

export default function PrivacyPolicy() {
  const data = useLoaderData()
  console.log(data, '<<< data from private-policy')
  return (
    <div>
      <Helmet>
        <script src="https://app.termly.io/embed-policy.min.js" />
      </Helmet>
      <div className="m-10 pt-10">
        <div
          name="termly-embed"
          data-id="d393b018-1047-4036-bc07-5678eb8dad47"
          data-type="iframe"></div>
      </div>
    </div>
  )
}
