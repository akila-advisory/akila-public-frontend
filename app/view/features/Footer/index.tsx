import { Link } from '@remix-run/react'

import { akilaAnalyticsLogo } from '~/view/assets'

import styles from './styles.css'

const platformLinks = [
  {
    text: 'Overview',
    path: '/platform/overview',
    key: 'platform'
  },
  {
    text: 'Visualize Data',
    path: '/platform/visualize-data',
    key: 'platform'
  },
  {
    text: 'Integrate Data',
    path: '/platform/integrate-data',
    key: 'platform'
  },
  {
    text: 'Leverage The Cloud',
    path: '/platform/leverage-the-cloud',
    key: 'platform'
  },
  {
    text: 'End-to-end Solutions',
    path: '/platform/end-to-end-solutions',
    key: 'platform'
  },

  {
    text: 'Governance',
    path: '/platform/governance',
    key: 'platform'
  },
  {
    text: 'Security',
    path: '/platform/security',
    key: 'platform'
  }
]

const productLinks = [
  {
    text: 'Data Exploration',
    path: '/product/data-exploration',
    key: 'product'
  },
  {
    text: 'Data Processing',
    path: '/product/data-processing',
    key: 'product'
  },
  {
    text: 'Machine Learning',
    path: '/product/machine-learning',
    key: 'product'
  },
  {
    text: 'Recurring Jobs',
    path: '/product/recurring-jobs',
    key: 'product'
  },
  {
    text: 'Pricing',
    path: '/pricing',
    key: 'product'
  },
  {
    text: 'Watch Demo',
    path: '/product/watch-demo',
    key: 'product'
  },
  {
    text: 'Try Free',
    path: 'product/try-free',
    key: 'product'
  },
  {
    text: 'Talk to Sales',
    path: 'product/talk-to-sales',
    key: 'product'
  }
]

const enterpriseLinks = [
  {
    text: 'Use Cases',
    path: 'enterprise/use-cases',
    key: 'advantages'
  },
  {
    text: 'By Role',
    path: 'enterprise/by-role',
    key: 'about-us'
  },
  {
    text: 'Data Science',
    path: 'enterprise/data-science',
    key: 'contact-us'
  }
]

const resourceLinks = [
  {
    text: 'Documentation',
    path: 'resources/documentation',
    key: 'resources'
  },

  {
    text: 'Insights',
    path: 'resources/insights',
    key: 'resource'
  }
]

const companyLinks = [
  {
    text: 'Overview',
    path: 'company/overview',
    key: 'company'
  }
]

const socialMediaLinks = [
  {
    text: 'Instagram',
    path: 'instagram',
    key: 'instagram'
  },
  {
    text: 'LinkedIn',
    path: 'linkedin',
    key: 'linkedin'
  },
  {
    text: 'LinkedIn',
    path: 'linkedin',
    key: 'linkedin'
  },
  {
    text: 'LinkedIn',
    path: 'linkedin',
    key: 'linkedin'
  }
]

function displayLinks(category: string, links: Array<any>) {
  return (
    <ul>
      <li
        className="my-[24px]  text-lg font-semibold text-white"
        key={category}>
        {category}
      </li>
      <ul className="flex flex-wrap justify-start gap-3  md:flex-col">
        {links.map((link, index) => {
          return (
            <li
              className="mt-3 text-sm font-medium text-greyText "
              key={link.key + index}>
              <Link to={link.path}>{link.text}</Link>
              <span className="ml-2 md:hidden">|</span>
            </li>
          )
        })}
      </ul>
    </ul>
  )
}

export default function Footer() {
  return (
    <footer className=" mx-auto  mt-[50px] overflow-hidden bg-secondaryBackground ">
      <div className="wave ">
        <svg
          className=""
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none">
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"></path>
        </svg>
      </div>
      {/*  */}

      <div className="p-3">
        <div className="container_class">
          <div className="w-full max-w-lg md:mb-16">
            <img
              src={akilaAnalyticsLogo}
              className="block"
              alt="Akila Analytics"
            />
          </div>
          {/* <div className="md hidden md:grid md:grid-cols-4 md:gap-6 lg:grid-cols-6"> */}
          <div className="mb-3 mt-8 flex flex-col justify-between md:flex-row ">
            <div>{displayLinks('Platform', platformLinks)}</div>
            <div>{displayLinks('Product', productLinks)}</div>
            <div>{displayLinks('Enterprise', enterpriseLinks)}</div>
            <div>{displayLinks('Resources', resourceLinks)}</div>
            <div>{displayLinks('Company', companyLinks)}</div>
            {/* <div className="hidden md:inline">
            {displayLinks('Social Media', socialMediaLinks)}
          </div> */}
          </div>
        </div>
        {/*  */}
        <hr className="md:border-t-3 hidden md:block md:border-greyText" />

        <div className="mt-8 text-sm text-white md:flex md:flex-col md:justify-between">
          <div className="flex flex-col justify-between sm:flex-row">
            <ul className="flex flex-col  sm:flex-row">
              <li className="mb-3 sm:mb-0">
                <div className="mr-4 cursor-pointer pb-1 hover:underline sm:pb-0 md:mr-6">
                  <Link to="/legal/terms-and-conditions">
                    Terms and Conditions
                  </Link>{' '}
                </div>
              </li>
              <li className="mb-3 sm:mb-0">
                <div className="mr-4 cursor-pointer pb-1 hover:underline sm:pb-0 md:mr-6">
                  <Link to="/legal/privacy-policy">Privacy Policy</Link>{' '}
                </div>
              </li>
              <li className="mb-3 sm:mb-0">
                <div className="mr-4 pb-1 hover:underline sm:pb-0 md:mr-6">
                  Cookies
                </div>
              </li>
            </ul>
            <div className="mb-3 text-sm font-medium text-white sm:mb-0">
              All Rights Reserved
            </div>
          </div>
        </div>

        <br />
      </div>
    </footer>
  )
}

export function links() {
  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}