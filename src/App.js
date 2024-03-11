
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";

function App() {
  return (
    <>
      <div
        className="logged-out env-production page-responsive header-overlay"
        style={{ wordWrap: "break-word" }}
      >
        <Header />
        <div id="start-of-content" className="show-on-focus" />
        <div id="js-flash-container" data-turbo-replace="">
          <template className="js-flash-template" />
        </div>

        <MainContent />
        <Footer />

        <cookie-consent
          id="cookie-consent-banner"
          className="position-fixed bottom-0 left-0"
          style={{ zIndex: 999999 }}
          data-initial-cookie-consent-allowed="true"
          data-cookie-consent-required="false"
        />

        <template id="site-details-dialog" />
        <div
          className="Popover js-hovercard-content position-absolute"
          style={{ display: "none", outline: "none" }}
          tabIndex={0}
        >
          <div
            className="Popover-message Popover-message--bottom-left Popover-message--large Box color-shadow-large"
            style={{ width: 360 }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default App;
