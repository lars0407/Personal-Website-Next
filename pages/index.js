import React from 'react'
import Head from 'next/head'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title>exported project</title>
        </Head>
        <div className="main-wrapper">
          <div className="section">
            <img
              alt="image"
              src="/playground_assets/Image244473-mv6i-200h.png"
              className="image"
            />
            <h1 className="text">Hey, I`m Saskia.</h1>
            <span className="text1">
              I`m a student and NoCode-Enthusiast based in Krefeld. I create
              digital products, brands, and experiences. This is my personal
              piece of the Internet, where I write about my journey of becoming
              a founder, builder and creator.
            </span>
          </div>
          <div className="section-social-icons">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noreferrer noopener"
              className="link"
            >
              <img
                alt="image"
                src="/playground_assets/twitter-200h.png"
                className="image1"
              />
            </a>
            <img
              alt="image"
              src="/playground_assets/linkedin%20%5B2%5D-200h.png"
              className="image2"
            />
            <a
              href="mailto:lars@foundstar.net?subject=Hi, nice to meet you!"
              className="link1"
            >
              <img
                alt="image"
                src="/playground_assets/email%20%5B2%5D-200h.png"
                className="image3"
              />
            </a>
          </div>
          <div className="section-projects">
            <h1 className="text2">/ My projects</h1>
            <div className="link-wrapper">
              <span className="drop-email">Larskuesters.de</span>
              <img
                alt="image"
                src="/playground_assets/right-arrow1244479-u5tn-200h.png"
                className="image4"
              />
            </div>
            <span className="text3">
              My personal website, where I write about my projects and
              tutorials. You will also find a library of my favourite tools, as
              well as articles on various topics such as Nocode, Buildinpublic
              or Sideprojects.
            </span>
            <div className="link-wrapper1">
              <span className="drop-email1">Re-Bicycle.de</span>
              <img
                alt="image"
                src="/playground_assets/right-arrow1244479-u5tn-200h.png"
                className="image5"
              />
            </div>
            <span className="text4">
              Re-Bicycle is a new bicycle workshop from Frankfurt. Apart from
              the classic workshop, Re-Bicycle offers a mobile repair service,
              e-bikes, a cafe and much more.
            </span>
            <div className="link-wrapper2">
              <span className="drop-email2">Coming Soon</span>
              <img
                alt="image"
                src="/playground_assets/right-arrow1244479-u5tn-200h.png"
                className="image6"
              />
            </div>
            <span className="text5">
              I am working on different projects. Follow my on Twitter to get
              updates about my projects.
            </span>
          </div>
          <div className="section-contact">
            <h1 className="text6">/ Get in touch</h1>
            <div className="link-wrapper3">
              <span className="drop-email3">Drop Email</span>
              <img
                alt="image"
                src="/playground_assets/right-arrow1244479-u5tn-200h.png"
                className="image7"
              />
            </div>
            <span className="text7">
              Let`s talk. I`d love to speak about startups, digital startups,
              digital products design, how to build them, and a bunch of other
              related topics.
            </span>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            overflow: auto;
            min-height: 100vh;
            align-items: center;
            flex-direction: column;
            background-color: #181818;
          }
          .main-wrapper {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            max-width: 500px;
            margin-top: auto;
            align-items: flex-start;
            margin-left: auto;
            padding-top: 40px;
            margin-right: auto;
            margin-bottom: auto;
            flex-direction: column;
            padding-bottom: 40px;
          }
          .section {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .image {
            width: 100px;
            object-fit: cover;
          }
          .text {
            color: #ffffff;
            margin-top: 20px;
          }
          .text1 {
            color: #ffffff;
            margin-top: 5px;
          }
          .section-social-icons {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 20px;
            align-items: flex-start;
          }
          .link {
            display: contents;
          }
          .image1 {
            width: 30px;
            object-fit: cover;
            text-decoration: none;
          }
          .image2 {
            width: 30px;
            object-fit: cover;
            margin-left: 10px;
            margin-right: 10px;
          }
          .link1 {
            display: contents;
          }
          .image3 {
            width: 30px;
            object-fit: cover;
            text-decoration: none;
          }
          .section-projects {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text2 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .link-wrapper {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 20px;
            align-items: center;
          }
          .drop-email {
            color: #ffffff;
            font-style: normal;
            font-weight: 700;
            margin-right: 10px;
          }
          .image4 {
            width: 20px;
            object-fit: cover;
          }
          .text3 {
            color: #ffffff;
            font-size: 14px;
            margin-top: 5px;
            line-height: 140%;
          }
          .link-wrapper1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 20px;
            align-items: center;
          }
          .drop-email1 {
            color: #ffffff;
            font-style: normal;
            font-weight: 700;
            margin-right: 10px;
          }
          .image5 {
            width: 20px;
            object-fit: cover;
          }
          .text4 {
            color: #ffffff;
            font-size: 14px;
            margin-top: 5px;
            line-height: 140%;
          }
          .link-wrapper2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 20px;
            align-items: center;
          }
          .drop-email2 {
            color: #ffffff;
            font-style: normal;
            font-weight: 700;
            margin-right: 10px;
          }
          .image6 {
            width: 20px;
            object-fit: cover;
          }
          .text5 {
            color: #ffffff;
            font-size: 14px;
            margin-top: 5px;
            line-height: 140%;
          }
          .section-contact {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 40px;
            align-items: flex-start;
            flex-direction: column;
          }
          .text6 {
            color: #ffffff;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
          }
          .link-wrapper3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: 20px;
            align-items: center;
          }
          .drop-email3 {
            color: #ffffff;
            font-style: normal;
            font-weight: 700;
            margin-right: 10px;
          }
          .image7 {
            width: 20px;
            object-fit: cover;
          }
          .text7 {
            color: #ffffff;
            font-size: 14px;
            margin-top: 5px;
            line-height: 140%;
          }
          @media (max-width: 991px) {
            .main-wrapper {
              padding-left: 10px;
              padding-right: 10px;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
