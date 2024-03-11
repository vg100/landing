import React from "react";

const Header = () => {
  return (
    <div className="position-relative js-header-wrapper ">
      <a
        href="#start-of-content"
        className="px-2 py-4 color-bg-accent-emphasis color-fg-on-emphasis show-on-focus js-skip-to-content"
      >
        Skip to content
      </a>
      <span
        data-view-component="true"
        className="progress-pjax-loader Progress position-fixed width-full"
      >
        <span
          style={{ width: "0%" }}
          data-view-component="true"
          className="Progress-item progress-pjax-loader-bar left-0 top-0 color-bg-accent-emphasis"
        />
      </span>
      <react-partial partial-name="keyboard-shortcuts-dialog" data-ssr="false">
        <div data-target="react-partial.reactRoot" />
      </react-partial>
      <header
        className="Header-old header-logged-out js-details-container Details position-relative f4 py-3"
        role="banner"
        data-color-mode="light"
        data-light-theme="light"
        data-dark-theme="dark"
      >
        <button
          type="button"
          className="Header-backdrop d-lg-none border-0 position-fixed top-0 left-0 width-full height-full js-details-target"
          aria-label="Toggle navigation"
        >
          <span className="d-none">Toggle navigation</span>
        </button>
        <div className=" d-flex flex-column flex-lg-row flex-items-center p-responsive height-full position-relative z-1">
          <div className="d-flex flex-justify-between flex-items-center width-full width-lg-auto">
            <a
              className="mr-lg-3 color-fg-inherit flex-order-2"
            //   href="https://github.com/"
              aria-label="Homepage"
              data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark"
            >
              <svg
                height={32}
                aria-hidden="true"
                viewBox="0 0 16 16"
                version="1.1"
                width={32}
                data-view-component="true"
                className="octicon octicon-mark-github"
              >
                <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>
              </svg>
            </a>
            <div className="flex-1">
              <a
                //   href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fenterprise%2Fstartups"
                className="d-inline-block d-lg-none flex-order-1 f5 no-underline border color-border-default rounded-2 px-2 py-1 color-fg-inherit"
              >
                Sign in
              </a>
            </div>
            <div className="flex-1 flex-order-2 text-right">
              <button
                aria-label="Toggle navigation"
                aria-expanded="false"
                type="button"
                data-view-component="true"
                className="js-details-target Button--link Button--medium Button d-lg-none color-fg-inherit p-1"
              >
                {" "}
                <span className="Button-content">
                  <span className="Button-label">
                    <div className="HeaderMenu-toggle-bar rounded my-1" />
                    <div className="HeaderMenu-toggle-bar rounded my-1" />
                    <div className="HeaderMenu-toggle-bar rounded my-1" />
                  </span>
                </span>
              </button>
            </div>
          </div>

          {/* nav list  */}

          <div className="HeaderMenu--logged-out p-responsive height-fit position-lg-relative d-lg-flex flex-column flex-auto pt-7 pb-4 top-0">
            <div className="header-menu-wrapper d-flex flex-column flex-self-end flex-lg-row flex-justify-between flex-auto p-3 p-lg-0 rounded rounded-lg-0 mt-3 mt-lg-0">
              <nav
                className="mt-0 px-3 px-lg-0 mb-3 mb-lg-0"
                aria-label="Global"
              >
                <ul className="d-lg-flex list-style-none">
                  <li className="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                    <button
                      type="button"
                      className="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                      aria-expanded="false"
                    >
                      Product
                      <svg
                        opacity="0.5"
                        aria-hidden="true"
                        height={16}
                        viewBox="0 0 16 16"
                        version="1.1"
                        width={16}
                        data-view-component="true"
                        className="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                      >
                        <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                      </svg>
                    </button>
                    <div className="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 d-lg-flex dropdown-menu-wide">
                      <div className="px-lg-4 border-lg-right mb-4 mb-lg-0 pr-lg-7">
                        <ul className="list-style-none f5">
                          <li>
                            <a
                              className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary d-flex flex-items-center pb-lg-3"
                              data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Actions","label":"ref_cta:Actions;"}'
                              href="https://github.com/features/actions"
                            >
                              <svg
                                aria-hidden="true"
                                height={24}
                                viewBox="0 0 24 24"
                                version="1.1"
                                width={24}
                                data-view-component="true"
                                className="octicon octicon-workflow color-fg-subtle mr-3"
                              >
                                <path d="M1 3a2 2 0 0 1 2-2h6.5a2 2 0 0 1 2 2v6.5a2 2 0 0 1-2 2H7v4.063C7 16.355 7.644 17 8.438 17H12.5v-2.5a2 2 0 0 1 2-2H21a2 2 0 0 1 2 2V21a2 2 0 0 1-2 2h-6.5a2 2 0 0 1-2-2v-2.5H8.437A2.939 2.939 0 0 1 5.5 15.562V11.5H3a2 2 0 0 1-2-2Zm2-.5a.5.5 0 0 0-.5.5v6.5a.5.5 0 0 0 .5.5h6.5a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5ZM14.5 14a.5.5 0 0 0-.5.5V21a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 .5-.5v-6.5a.5.5 0 0 0-.5-.5Z"></path>
                              </svg>
                              <div>
                                <div className="color-fg-default h4">
                                  Actions
                                </div>
                                Automate any workflow
                              </div>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="px-lg-4">
                        <span
                          className="d-block h4 color-fg-default my-1"
                          id="product-explore-heading"
                        >
                          Explore
                        </span>
                        <ul
                          className="list-style-none f5"
                          aria-labelledby="product-explore-heading"
                        >
                          <li>
                            <a
                              className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                              data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to All features","label":"ref_cta:All features;"}'
                              href="https://github.com/features"
                            >
                              All features
                            </a>
                          </li>
                          <li>
                            <a
                              className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                              target="_blank"
                              data-analytics-event='{"category":"Header dropdown (logged out), Product","action":"click to go to Blog","label":"ref_cta:Blog;"}'
                              href="https://github.blog/"
                            >
                              Blog
                              <svg
                                aria-hidden="true"
                                height={16}
                                viewBox="0 0 16 16"
                                version="1.1"
                                width={16}
                                data-view-component="true"
                                className="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                              >
                                <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                    <button
                      type="button"
                      className="HeaderMenu-link border-0 width-full width-lg-auto px-0 px-lg-2 py-3 py-lg-2 no-wrap d-flex flex-items-center flex-justify-between js-details-target"
                      aria-expanded="false"
                    >
                      Solutions
                      <svg
                        opacity="0.5"
                        aria-hidden="true"
                        height={16}
                        viewBox="0 0 16 16"
                        version="1.1"
                        width={16}
                        data-view-component="true"
                        className="octicon octicon-chevron-down HeaderMenu-icon ml-1"
                      >
                        <path d="M12.78 5.22a.749.749 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.06 0L3.22 6.28a.749.749 0 1 1 1.06-1.06L8 8.939l3.72-3.719a.749.749 0 0 1 1.06 0Z"></path>
                      </svg>
                    </button>
                    <div className="HeaderMenu-dropdown dropdown-menu rounded m-0 p-0 py-2 py-lg-4 position-relative position-lg-absolute left-0 left-lg-n3 px-lg-4">
                      <div className="border-bottom pb-3 mb-3">
                        <span
                          className="d-block h4 color-fg-default my-1"
                          id="solutions-for-heading"
                        >
                          For
                        </span>
                        <ul
                          className="list-style-none f5"
                          aria-labelledby="solutions-for-heading"
                        >
                          <li>
                            <a
                              className="HeaderMenu-dropdown-link lh-condensed d-block no-underline position-relative py-2 Link--secondary"
                              target="_blank"
                              data-analytics-event='{"category":"Header dropdown (logged out), Solutions","action":"click to go to Education","label":"ref_cta:Education;"}'
                              href="https://education.github.com/"
                            >
                              Education
                              <svg
                                aria-hidden="true"
                                height={16}
                                viewBox="0 0 16 16"
                                version="1.1"
                                width={16}
                                data-view-component="true"
                                className="octicon octicon-link-external HeaderMenu-external-icon color-fg-subtle"
                              >
                                <path d="M3.75 2h3.5a.75.75 0 0 1 0 1.5h-3.5a.25.25 0 0 0-.25.25v8.5c0 .138.112.25.25.25h8.5a.25.25 0 0 0 .25-.25v-3.5a.75.75 0 0 1 1.5 0v3.5A1.75 1.75 0 0 1 12.25 14h-8.5A1.75 1.75 0 0 1 2 12.25v-8.5C2 2.784 2.784 2 3.75 2Zm6.854-1h4.146a.25.25 0 0 1 .25.25v4.146a.25.25 0 0 1-.427.177L13.03 4.03 9.28 7.78a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042l3.75-3.75-1.543-1.543A.25.25 0 0 1 10.604 1Z"></path>
                              </svg>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="HeaderMenu-item position-relative flex-wrap flex-justify-between flex-items-center d-block d-lg-flex flex-lg-nowrap flex-lg-items-center js-details-container js-header-menu-item">
                    <a
                      className="HeaderMenu-link no-underline px-0 px-lg-2 py-3 py-lg-2 d-block d-lg-inline-block"
                      data-analytics-event='{"category":"Header menu top item (logged out)","action":"click to go to Pricing","label":"ref_cta:Pricing;"}'
                      href="https://github.com/pricing"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          {/* search  */}
        </div>
      </header>
    </div>
  );
};

export default Header;
