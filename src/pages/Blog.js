import {
  TfiNotepad,
  TfiMedallAlt,
  TfiThought,
  TfiPencilAlt,
  TfiJoomla,
  TfiBolt,
} from "react-icons/tfi";
import joomla from "../assets/joomla.png";
import compass from "../assets/compass.png";
import bootstrap4 from "../assets/bootstrap4.png";
import wordPress from "../assets/wordPress.png";
import jquery from "../assets/jquery.png";
import tapsion from "../assets/tapsion.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/mousewheel";

import SectionHeader from "../components/SectionHeader";
import OneArticle from "../components/OneArticle";

import blog1 from "../assets/blog1.jpg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";

function Blog() {
  return (
    <div>
      <SectionHeader
        icon={TfiNotepad}
        title="LATEST JOURNAL"
        description="WELCOME TO MY JOURNAL"
      />

      <div className=" d-flex flex-wrap justify-content-center  my-5 mx-3">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-sm-4">
            <OneArticle
              picture={blog1}
              title="BE UPDATE WITH GOOGLE FOR YOUR SEO RANKING"
              detail="by John Doe March 18 Comments 24"
              description="The New trand of web design atque autem fuga itaque iusto laboriosam magni nostrum qui quo reprehenderit similique!"
            />
          </div>
          <div className="col-lg-4 col-sm-4">
            <OneArticle
              picture={blog2}
              title="BE UPDATE WITH GOOGLE FOR YOUR SEO RANKING"
              detail="by John Doe March 18 Comments 24"
              description="The New trand of web design atque autem fuga itaque iusto laboriosam magni nostrum qui quo reprehenderit similique!"
            />
          </div>
          <div className="col-lg-4 col-sm-4">
            <OneArticle
              picture={blog3}
              title="BE UPDATE WITH GOOGLE FOR YOUR SEO RANKING"
              detail="by John Doe March 18 Comments 24"
              description="The New trand of web design atque autem fuga itaque iusto laboriosam magni nostrum qui quo reprehenderit similique!"
            />
          </div>
        </div>
      </div>
      <div className="award-section">
        <div className="row">
          <SectionHeader
            icon={TfiMedallAlt}
            title="AWARDS"
            description="LET INTRODUCE MY AWARDS"
          />
        </div>
        <div className="all-awards d-flex flex-wrap  justify-content-center text-center">
          <div className="trend-award  flex-grow-1 flex-md-grow-0 ">
            <span>
              <TfiBolt className="my-2" size={40} color="white" />
            </span>
            <h5>TREND SELLER</h5>
            <p>World's Best Trend Seller 2018</p>
          </div>
          <div className="web-award flex-grow-1 flex-md-grow-0 ">
            <span>
              <TfiJoomla className="my-2" size={40} color="white" />
            </span>
            <h5>WEB POWER</h5>
            <p>Young Developer Award 2018</p>
          </div>
          <div className="writer-award flex-grow-1 flex-md-grow-0 ">
            <span>
              <TfiPencilAlt className="my-2" size={40} color="white" />
            </span>
            <h5>TECHNICAL WRITERS</h5>
            <p>Technical Writers Award 2018</p>
          </div>
          <div className=" concept-award flex-grow-1 flex-md-grow-0 ">
            <span>
              <TfiThought className="my-2" size={40} color="white" />
            </span>
            <h5>CONCEPT AWARD</h5>
            <p>Stand First in Creative Concept</p>
          </div>
        </div>
      </div>
      <div className="row text-center m-5">
        <Swiper
          className="all-brands"
          mousewheel={{
            forceToAxis: true,
            sensitivity: 1,
            releaseOnEdges: true,
          }}
          spaceBetween={20}
          breakpoints={{
            680: {
              width: 680,
              slidesPerView: 3,
            },
            1000: {
              width: 1000,
              slidesPerView: 5,
            },
          }}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          loop={true}
        >
          <SwiperSlide className="one-brand">
            <img src={jquery} alt="jquery" />
          </SwiperSlide>
          <SwiperSlide className="one-brand">
            <img src={tapsion} alt="tapsion" />
          </SwiperSlide>
          <SwiperSlide className="one-brand">
            <img src={compass} alt="compass" />
          </SwiperSlide>
          <SwiperSlide className="one-brand">
            <img src={joomla} alt="joomla" />
          </SwiperSlide>
          <SwiperSlide className="one-brand">
            <img src={wordPress} alt="wordPress" />
          </SwiperSlide>
          <SwiperSlide className="one-brand">
            <img src={bootstrap4} alt="bootstrap4" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Blog;
