import type { LinksFunction } from '@remix-run/node'

import { GetObjectCommand } from '@aws-sdk/client-s3'
import { useLoaderData } from '@remix-run/react'
import fm from 'front-matter'
import ReactMarkdown from 'react-markdown'

import styles from '~/styles/blog.css'
import { s3Client } from '~/utils/server/index.server'
import { GettingStartedSection } from '~/view/components'
import { Body, Summary, Title } from '~/view/features/Blog'

export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }]

interface IProps {
  params: {
    title: string
  }
}
export const loader = async ({ params }: IProps) => {
  console.log('loader fired from blog.$title')
  const bucketParams = {
    Bucket: process.env.STATIC_BUCKET,
    Key: `blog/${params.title}.md`
  }

  const command = new GetObjectCommand(bucketParams)
  const response = await s3Client.send(command)
  const str = await response.Body.transformToString()
  const { attributes, body } = fm(str)
  return { attributes, body }
}

interface IAttributes {
  title: string
  subTitle: string
  category: 'Private Equity' | 'Technology'
  date: string
  points: string[]
}

interface IData {
  attributes: IAttributes
  body: string
}

export default function BlogTemplate() {
  const { attributes, body } = useLoaderData<IData>()
  return (
    <div>
      <Title
        category={attributes.category}
        date={attributes.date}
        title={attributes.title}
        subTitle={attributes.subTitle}
      />
      <Body>
        <Summary points={attributes.points} />
        <ReactMarkdown linkTarget="_blank" className="markdown">
          {body}
        </ReactMarkdown>
      </Body>
      <br />
      <br />
      <br />
      <GettingStartedSection />
    </div>
  )
}
