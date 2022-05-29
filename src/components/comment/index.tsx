import { CommentStyle } from "./style";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css/bundle";
import { commentData } from "./data";
const Comment = () => {
  return (
    <CommentStyle>
      <div className="container">
        <div className="commentWrapper">
          <Swiper
            navigation={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            className="mySwiper"
            spaceBetween={50}
            slidesPerView={1}
          >
            {commentData
              ? commentData.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <div className="smallContainer">
                        <div className="commentItem">
                          <div className="commmentLogo">
                            <img src={item.logo} alt="logo" />
                          </div>
                          <q className="text">{item.comment}</q>
                          <div>
                            <b className="text">{item.author}, </b>
                            <span className="text">{item.position}</span>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })
              : null}
          </Swiper>
        </div>
      </div>
    </CommentStyle>
  );
};
export default Comment;
