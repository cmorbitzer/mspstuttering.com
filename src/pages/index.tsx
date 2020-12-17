import React from 'react';
import Helmet from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import FacebookIcon from '../icons/facebook.svg';
import InstagramIcon from '../icons/instagram.svg';

export default () => {
  const images = useStaticQuery(graphql`
    query {
      coleAndBriann: file(relativePath: { eq: "cole-and-briann.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2400) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      logo: file(relativePath: { eq: "msp_stuttering_group-logo.png" }) {
        childImageSharp {
          fixed(width: 64) {
            ...GatsbyImageSharpFixed
          }
        }
      }

      logoLg: file(relativePath: { eq: "msp_stuttering_group-logo.png" }) {
        childImageSharp {
          fixed(width: 96) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const description =
    'MSP Stuttering Group is a social group for individuals who stutter.';

  return (
    <div className="relative w-screen min-h-screen">
      <Helmet
        htmlAttributes={{ lang: 'en' }}
        title="Minneapolis Saint Paul Stuttering Group"
        meta={[
          {
            name: 'description',
            content: description,
          },
          {
            property: 'og:title',
            content: 'Minneapolis Saint Paul Stuttering Group',
          },
          {
            property: 'og:description',
            content: description,
          },
          {
            property: 'og:type',
            content: 'website',
          },
          {
            name: 'twitter:card',
            content: 'summary',
          },
          {
            name: 'twitter:title',
            content: 'Minneapolis Saint Paul Stuttering Group',
          },
          {
            name: 'twitter:description',
            content: description,
          },
        ]}
      />

      <div className="fixed inset-0">
        <Img
          fluid={images.coleAndBriann.childImageSharp.fluid}
          className="w-full h-full"
          imgStyle={{ objectPosition: 'top' }}
          alt="Cole and Briann"
        />
      </div>

      <div className="relative z-10 bg-white bg-opacity-90 max-w-7xl mx-auto px-4 sm:px-6 min-h-screen">
        <header className="pt-6">
          <nav className="flex items-center justify-between">
            <div className="flex items-center flex-1">
              <div className="flex items-center justify-center w-full">
                <Img
                  fixed={[
                    images.logo.childImageSharp.fixed,
                    {
                      ...images.logoLg.childImageSharp.fixed,
                      media: `(min-width: 1024px)`,
                    },
                  ]}
                  className="h-16 w-auto lg:h-24"
                  alt="MSP Stuttering Group logo"
                />

                <div className="md:ml-2 md:space-x-10">
                  <h1 className="text-4xl font-extrabold text-gray-900 lg:text-6xl">
                    MSP Stuttering Group
                  </h1>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <main className="mt-16 sm:mt-24">
          <section className="text-center">
            <h2 className="mt-3 max-w-md mx-auto text-base text-gray-900 font-semibold sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              MSP Stuttering Group is a social group for individuals who
              stutter.
            </h2>

            <p className="mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We are not a therapy or support group. We enjoy encouraging each
              other and sharing our perspectives. Come join and speak freely in
              a casual and welcoming environment.
            </p>

            <p className="mt-3 max-w-md mx-auto text-base text-gray-700 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              We meet virtually on the second and fourth Tuesdays of each month.
            </p>
          </section>

          <section className="text-center mt-8 flex justify-center space-x-6">
            <a
              href="https://www.facebook.com/mspstuttering/"
              className="text-gray-600 hover:text-gray-700"
            >
              <span className="sr-only">Facebook</span>
              <FacebookIcon className="h-12 w-12" aria-hidden="true" />
            </a>

            <a
              href="https://www.instagram.com/mspstuttering/"
              className="text-gray-600 hover:text-gray-700"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon className="h-12 w-12" aria-hidden="true" />
            </a>
          </section>

          <section className="py-6 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-8">
            <div className="relative max-w-xl mx-auto">
              <p className="mt-4 text-lg leading-6 text-gray-700 font-semibold text-center">
                If you are interested in joining us or would like to know more,
                please fill out this form and a group facilitator will reach
                out.
              </p>

              <div className="mt-12">
                <form
                  method="POST"
                  className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                  data-netlify="true"
                  name="contact"
                >
                  <input type="hidden" name="form-name" value="contact" />

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        autoComplete="name"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="phone_number"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Phone Number
                    </label>
                    <div className="mt-1 relative rounded-md shadow-sm">
                      <input
                        type="tel"
                        name="phone_number"
                        id="phone_number"
                        autoComplete="tel"
                        className="py-3 px-4 block w-full focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        className="py-3 px-4 block w-full shadow-sm focus:ring-green-500 focus:border-green-500 border-gray-300 rounded-md"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                    >
                      Let's talk
                    </button>
                  </div>
                </form>

                <p className="mt-3 text-sm text-gray-500">
                  We care about the protection of your data.
                  <br />
                  All communication with MSP Stuttering Group is confidential.
                  <br />
                  Read our{' '}
                  <a href="#" className="font-medium text-gray-900 underline">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
        </main>

        <footer>
          <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
            <nav
              className="-mx-5 -my-2 flex flex-wrap justify-center"
              aria-label="Footer"
            >
              <div className="px-5 py-2">
                Sponsored by{' '}
                <a
                  href="https://www.superiorspeech.mn/"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Superior Speech Therapy
                </a>
              </div>
            </nav>

            <p className="mt-8 text-center text-base text-gray-400">
              MSP Stuttering Group is a social group for individuals who stutter
              that meets in the Twin Cities of Saint Paul and Minneapolis and in
              greater Minnesota. MSP Stuttering Group is faciliated by Cole
              Oehlers, a person who stutters, and Briann Morbitzer, an ASHA
              certified speech-language pathologist.
            </p>

            <p className="mt-8 text-center text-base text-gray-400">
              <span className="inline-block">
                &copy; {new Date().getFullYear()} MSP Stuttering Group.
              </span>{' '}
              <span className="inline-block">All rights reserved.</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
