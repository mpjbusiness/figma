//* eslint-disable @typescript-eslint/no-use-before-define */

//IMPORTANT NOTE: TO UNDERSTAND HOW THINGS LIKE TEXT IMPORTS WORK, READ THE README

import "./App.css"
export default function MacBookPro141(props: MacBookPro141Interface) {
  return (
    <div className="mac-book-pro141-container">
      <div className="macBookPro142">
        <div className="rectangle3"></div>
        <div className="rectangle4"></div>
        <p className="gETStarted1">GET STARTED</p>
        <p className="getStartedWithFat1">Get started with Fathym for free.</p>
        <p className="fromFigmaFileToA1">
          From Figma file to a hosted landing page in minutes.
        </p>
        <div className="thisSimpleLanding2">
          <p className="thisSimpleLanding3">
            This simple landing page was quickly mocked up in Figma. Then we
            used the FireJet plugin to&nbsp;
            <br />
            transform the design into readable React code.&nbsp;
            <br />
            <br />
            From here we could host that React code as an application on Fathym.
            <br />
            <br />
            Fathym is a platform for hosting, managing and deploying websites
            and web applications with
            <br />
            the utmost flexibility and speed.
            <br />
            <br />
          </p>
          <p className="learnMoreOnHowWe1">
            Learn more on how we did it in this blog.
          </p>
        </div>
        <div className="fathymLogoAqua112"></div>
      </div>
    </div>
  )
}

MacBookPro141.defaultProps = {
  variant: 'DEFAULT',
}

interface MacBookPro141Interface {
  variant: 'DEFAULT';
}

