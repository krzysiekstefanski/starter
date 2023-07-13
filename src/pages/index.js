import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FormattedMessage } from "gatsby-plugin-intl"

const samplePageLinks = [
  { text: "Strona produktów", url: "using-ssr" },
]

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <div className={styles.textCenter}>
        <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        />
        <h1>
          <FormattedMessage id="title" />
          <b>Gatsby!</b>
        </h1>
        <p className={styles.intro}>
          {samplePageLinks.map((link, i) => (
            <React.Fragment key={link.url}>
              <Link to={link.url}>{link.text}</Link>
              {i !== samplePageLinks.length - 1 && <> · </>}
            </React.Fragment>
          ))}
          <br />
        </p>
        <Swiper
          slidesPerView='1'
          style={{height: 450}}
        >
          <SwiperSlide>
            <StaticImage
              src="../images/slide-1.jpg"
              loading="eager"
              quality={75}
              breakpoints={[370, 500, 700, 1200]}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/slide-2.jpg"
              loading="eager"
              quality={75}
              breakpoints={[370, 500, 700, 1200]}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/slide-3.jpeg"
              loading="eager"
              quality={75}
              breakpoints={[370, 500, 700, 1200]}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/slide-4.jpeg"
              loading="eager"
              quality={75}
              breakpoints={[370, 500, 700, 1200]}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <StaticImage
              src="../images/slide-5.jpeg"
              loading="eager"
              quality={75}
              breakpoints={[370, 500, 700, 1200]}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </Layout>
  )
}


/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
