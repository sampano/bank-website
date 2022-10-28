import React from "react";
import styles from "./styles";
import Navbar from "./componets/Navbar";
import Billing from "./componets/Billing";
import Business from "./componets/Business";
import Button from "./componets/Button";
import CardDeal from "./componets/CardDeal";
import Clients from "./componets/Clients";
import CTA from "./componets/CTA";
import FeedbackCard from "./componets/FeedbackCard";
import Footer from "./componets/Footer";
import GetStarted from "./componets/GetStarted";
import Hero from "./componets/Hero";
import Stats from "./componets/Stats";
import Testimonials from "./componets/Testimonials";

const App = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats /> <Business /> <Billing /> <CardDeal /> <Testimonials />{" "}
          <Clients /> <FeedbackCard />
          <CTA /> <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
