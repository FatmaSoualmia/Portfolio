import {
  TfiUser,
  TfiStatsUp,
  TfiAnnouncement,
  TfiLightBulb,
  TfiPackage,
  TfiPulse,
  TfiSupport,
} from "react-icons/tfi";

import SectionHeader from "../components/SectionHeader";
import ServiceItem from "../components/ServiceItem";

function Service() {
  return (
    <div>
      <SectionHeader
        icon={TfiUser}
        title="SERVICES"
        description="LET INTRODUCE MY SERVICES"
      />
      <div className="container service-section">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-6 col-12">
            <ServiceItem
              icon={TfiStatsUp}
              service="USER INTERFACE"
              description="Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis."
            />
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <ServiceItem
              icon={TfiAnnouncement}
              service="BRANDING"
              description="Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis."
            />
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <ServiceItem
              icon={TfiLightBulb}
              service="CREATIVITY"
              description="Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis."
            />
          </div>

          <div className="col-lg-4 col-sm-6 col-12">
            <ServiceItem
              icon={TfiPackage}
              service="DEVELOPMENT"
              description="Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis."
            />
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <ServiceItem
              icon={TfiPulse}
              service="MARKETING"
              description="Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis."
            />
          </div>
          <div className="col-lg-4 col-sm-6 col-12">
            <ServiceItem
              icon={TfiSupport}
              service="SUPPORT"
              description="Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis."
            />
          </div>
        </div>
      </div>

      <div className="work-process">
        <div className="container content">
          <div className="text-center">
            <h2 className="work-process-title">WORK PROCESS</h2>
          </div>
          <div className="d-flex flex-wrap gap-4 justify-content-center">
            <div className="">
              <div className="step-shape">01</div>
              <div className="step text-center">CONCEPT</div>
            </div>
            <div className="">
              <div className="step-shape">02</div>
              <div className="step text-center">PLANING</div>
            </div>
            <div className="">
              <div className="step-shape">03</div>
              <div className="step text-center">DESIGN</div>
            </div>
            <div className="">
              <div className="step-shape">04</div>
              <div className="step text-center">DEVELOP</div>
            </div>
            <div className="">
              <div className="step-shape">05</div>
              <div className="step text-center">MARKETING</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
