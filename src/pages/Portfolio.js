import OnePortfolioItem from "../components/OnePortfolioItem";
import SectionHeader from "../components/SectionHeader";
import { TfiBriefcase } from "react-icons/tfi";
import pt9 from "../assets/pt9.png";
import pt10 from "../assets/pt10.png";
import pt8 from "../assets/pt8.png";
import pt7 from "../assets/pt7.png";
import pt6 from "../assets/pt6.png";
import pt5 from "../assets/pt5.jpg";
import pt4 from "../assets/pt4.jpg";
import pt3 from "../assets/pt3.png";
import PricingItem from "../components/PricingItem";

function Portfolio() {
  return (
    <div>
      <SectionHeader
        icon={TfiBriefcase}
        title="PORTFOLIO"
        description="LET INTRODUCE MY PORTFOLIO"
      />
      {/*
      <div className="d-flex flex-wrap gap-2 all-potfolio-items">
          <div className="">
            <OnePortfolioItem picture={pt9} />
          </div>
          <div className="">
            <OnePortfolioItem picture={pt10} />
          </div>
          <div className="">
            <OnePortfolioItem picture={pt8} />
          </div>
        
          <div className="">
            <OnePortfolioItem picture={pt7} />
          </div>
          <div className="">
            <OnePortfolioItem picture={pt6} />
          </div>
          <div className="">
            <OnePortfolioItem picture={pt5} />
          </div>
          <div className="">
            <OnePortfolioItem picture={pt3} />
          </div>
          <div className="">
            <OnePortfolioItem picture={pt4} />
          </div>
      </div>
  */}
      <div className="offer-section  ">
        <div>
          <h4 className="free-trial">LOOKING FOR A TALENTED WEB DEVELOPER?</h4>
          <button className="free-trial-btn">GET A FREE QUOTE</button>
        </div>
      </div>
      <div className="d-flex flex-wrap justify-content-center gap-4 pricing-section">
        <PricingItem
          backgroundColor="#4cbecf"
          title="BASIC"
          amount="$30"
          item1="Psd To HTML"
          item2="PSD to WordPress"
          item3="Email Template"
          item4="Admin Dashboard"
          item5="24/7 hours service"
        />
        <PricingItem
          backgroundColor="#f77f81"
          title="STANDARD"
          amount="$70"
          item1="Psd To HTML"
          item2="PSD to WordPress"
          item3="Email Template"
          item4="Admin Dashboard"
          item5="24/7 hours service"
        />
        <PricingItem
          backgroundColor="#9ab758"
          title="PREMIUM"
          amount="$120"
          item1="Psd To HTML"
          item2="PSD to WordPress"
          item3="Email Template"
          item4="Admin Dashboard"
          item5="24/7 hours service"
        />
      </div>
    </div>
  );
}

export default Portfolio;
