import { Swiper, SwiperSlide } from "swiper/react";
import cl1 from "../assets/cl1.jpg";
import cl2 from "../assets/cl2.jpg";
import cl3 from "../assets/cl3.jpg";
import "swiper/css";
import "swiper/css/mousewheel";

import Testimonials1 from "../assets/Testimonials1.png";
import OneTestimony from "../components/OneTestimony";

function Testimonials() {
  return (
    <div className="testimonials-section">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              loop={true}
              allowSlideNext={true}
              allowSlidePrev={true}
            >
              <SwiperSlide>
                <OneTestimony
                  title="FOR DESIGN & CODE QUALITY"
                  parag="
        A ab aspernatur assumenda, dolores dolorum exercitationem fuga fugiat
        incidunt magni numquam pariatur provident recusandae reiciendis! Aperiam
        eaque quo recusandae ut velit. Aliquam ex fugiat, impedit labore
        laboriosam nihil quos repellat sequi ullam veritatis! Deleniti, dolorum."
                  picture={cl1}
                  name="DOKRISH HELEN"
                  occupation="CTO, GRANE TECHNOLIQIES."
                />
              </SwiperSlide>
              <SwiperSlide>
                <OneTestimony
                  title="FOR DESIGN & CODE QUALITY"
                  parag="
        A ab aspernatur assumenda, dolores dolorum exercitationem fuga fugiat
        incidunt magni numquam pariatur provident recusandae reiciendis! Aperiam
        eaque quo recusandae ut velit. Aliquam ex fugiat, impedit labore
        laboriosam nihil quos repellat sequi ullam veritatis! Deleniti, dolorum."
                  picture={cl2}
                  name="DOKRISH HELEN"
                  occupation="CTO, GRANE TECHNOLIQIES."
                />
              </SwiperSlide>
              <SwiperSlide>
                <OneTestimony
                  title="FOR DESIGN & CODE QUALITY"
                  parag="
        A ab aspernatur assumenda, dolores dolorum exercitationem fuga fugiat
        incidunt magni numquam pariatur provident recusandae reiciendis! Aperiam
        eaque quo recusandae ut velit. Aliquam ex fugiat, impedit labore
        laboriosam nihil quos repellat sequi ullam veritatis! Deleniti, dolorum."
                  picture={cl3}
                  name="DOKRISH HELEN"
                  occupation="CTO, GRANE TECHNOLIQIES."
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="col-6 testi-image">
            <img className="w-75 my-0" src={Testimonials1} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
