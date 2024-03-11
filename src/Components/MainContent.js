import React from "react";
import CustomCard from "./CustomCard";

const MainContent = () => {
  return (
    <div className="application-main ">
      <main className="font-mktg">
        <div
          className="pt-8 px-3 mb-5 d-flex flex-items-center flex-column flex-justify-center position-relative z-1 overflow-hidden pb-8 pt-5"
          data-color-mode="dark"
          data-light-theme="light"
          data-dark-theme="dark"
          style={{
            minHeight: "100vh",
            background:
              "linear-gradient(0deg, rgb(24 29 36) 0%, rgb(10 13 18) 100%)",
          }}
        >
          <canvas className="js-startups-hero-fg position-absolute width-full height-full z-n1" />
          <canvas className="js-startups-hero-bg position-absolute width-full height-full z-n2" />
          <div
            className="pt-10 pb-4 pb-md-7 d-flex flex-column mt-auto js-startups-hero-fg-detect flex-lg-column flex-items-center text-center"
            data-hpc=""
          >
            <div className="color-fg-muted f3-mktg text-medium pb-1 mb-2">
              The Factory: Your E-commerce Business Partner
            </div>
            <h1 className="col-10-max color-fg-default mx-auto h1-mktg">
              Build your E-commerce site
              <br />
              with The Factory
            </h1>
            <p className="mt-4 f3-mktg color-fg-muted mx-auto col-7-max">
              Join our dynamic seller community for seamless selling. Benefit
              from our user-friendly platform, extensive reach, and supportive
              network. Enjoy secure transactions, flexible options, and
              personalized support for a successful selling journey.
            </p>
            <div className="mt-4 mt-md-6 mb-4 position-relative z-2 by-2 by-lg-0 bx-lg-2 d-flex flex-column flex-lg-row">
              <div className="by-2 by-lg-0 bx-lg-2 d-flex flex-column flex-lg-row">
                <a
                  className="btn-mktg btn-large-mktg"
                  data-analytics-event='{"category":"Hero ctas","action":"click to Apply now","label":"ref_cta:Apply now;ref_loc:Hero ctas;"}'
                  href="#get-started"
                >
                  Become a Seller
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="octicon arrow-symbol-mktg"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      fill="currentColor"
                      d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
                    ></path>
                    <path
                      className="octicon-chevrow-stem"
                      stroke="currentColor"
                      d="M1.75 8H11"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="container-xl mt-auto">
            <div className="d-flex flex-wrap gutter gutter-lg-spacious">
              <CustomCard
                title="Why Sell with Us?"
                description="Wide Reach | User-Friendly Platform | Supportive Community"
              />
              <CustomCard
                title="Benefits of Selling Here"
                description="Flexible Selling Options | Secure Transactions | Marketing Tools"
              />
              <CustomCard
                title="Getting Started"
                description="Simple Registration Process | Guided Setup | Personalized Support"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainContent;
