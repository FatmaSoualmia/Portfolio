import OneResumeItem from "../components/OneResumeItem";
import SectionHeader from "../components/SectionHeader";
import {
  TfiBarChart,
  TfiBriefcase,
  TfiPencil,
  TfiDashboard,
  TfiGithub,
  TfiUser,
  TfiMedall,
} from "react-icons/tfi";

function Resume() {
  return (
    <div>
      <SectionHeader
        icon={TfiBarChart}
        title="RESUME"
        description="MY EDUCATION AND EXPERIENCE"
      />

      <div className="row my-4">
        <div className="col-md-6 col-sm-12">
          <div className="col text-center">
            <h2 className="resume-field">
              <span className="resume-icon">
                <TfiPencil />
              </span>
              EDUCATION
            </h2>
          </div>
          <OneResumeItem
            date="Sep 2019 - Juin 2020"
            title="Baccalauriat Scientifique"
            place="Lycée Ksibet El Mediouni"
            details="j'ai obtenu mon baccalauréat scientifique avec mention bien, obtenant une moyenne de 14,09. Lorem ipsum dolor sit amet, consectetur."
          />
          <OneResumeItem
            date="Sep 2020 - Juin 2022"
            title="Cycle Préparatoire PC"
            place="IPEIM"
            details="Classant au 312ème rang sur 1400 , Cette expérience a consolidé mes compétences et ma résilience, me préparant pour poursuivre mon cheminement vers l'ingénierie."
          />
          <OneResumeItem
            date="Sep 2022 - Present"
            title="Génie des télécommunications"
            place="Enetcom Sfax"
            details="Lorem consectetur adipisicing elit. Inventore adipi sci excepturi dolorum. Lorem ipsum dolor sit amet, consectetur."
          />
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="col text-center">
            <h2 className="resume-field">
              <span className="resume-icon">
                <TfiBriefcase />
              </span>
              EXPERIENCE
            </h2>
          </div>
          <OneResumeItem
            date="Sep 2008 - Sep 2015"
            title="UI/UX DESIGNER"
            place="Ekrey Hourse, Sidny"
            details="laudantium maxime minima nemo numquam obcaecati quaerat quas quidem quisquam sapiente similique sit sunt tempora totam!"
          />
          <OneResumeItem
            date="Jan 2015 - Sep 2017"
            title="FRONT END DEVELOPER"
            place="Ekrey Hourse, Sidny"
            details="laudantium maxime minima nemo numquam obcaecati quaerat quas quidem quisquam sapiente similique sit sunt tempora totam!"
          />
          <OneResumeItem
            date="Jan 2008 - Present"
            title="FULL STOCK DEVELOPER"
            place="Ekrey Hourse, Sidny"
            details="laudantium maxime minima nemo numquam obcaecati quaerat quas quidem quisquam sapiente similique sit sunt tempora totam!"
          />
        </div>
      </div>
      <div className="row  text-center statics-section justify-content-center px-3 my-5">
        <div className="one-static col">
          <span className="static-icon">
            <TfiMedall />
          </span>
          <h4 className="static-number">424</h4>
          <p className="static-info">AWARD WINNING</p>
        </div>
        <div className="one-static col">
          <span className="static-icon">
            <TfiDashboard />
          </span>
          <h4 className="static-number">5203</h4>
          <p className="static-info">PROJECT DONE</p>
        </div>
        <div className="one-static col">
          <span className="static-icon">
            <TfiGithub />
          </span>
          <h4 className="static-number">25202</h4>
          <p className="static-info">LINE OF CODE</p>
        </div>
        <div className="one-static col">
          <span className="static-icon">
            <TfiUser />
          </span>
          <h4 className="static-number">2204</h4>
          <p className="static-info">HAPPY CUSTOMERS</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
