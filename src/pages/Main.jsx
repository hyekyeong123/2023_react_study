import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate} from "react-router-dom";
import classnames from "classnames";
import "./main.scss"
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
function Main() {
  const navigate = useNavigate();
  const location = useLocation();
  const [urlTitle, setUrlTitle ] = useState("");
  const [activeSlide, setActiveSlide] = useState(-1); // 현재 선택된 슬라이드의 인덱스

  const traineeUrls = ["/aaa","/bbb","/ccc","/ddd"]

  console.log(`urlTitle : ${urlTitle} / activeSlide  : ${activeSlide}`)

  useEffect(() => {
    setUrlTitle(location.pathname.split("/")[2])
    setActiveSlide(traineeUrls.indexOf("/" +urlTitle))
  }, [ location, urlTitle, activeSlide])
  // ******************************************
  return (
    <article>
      <div id="middle_box" className="mobile">
        <ul>
          <Swiper
            slidesPerView={'auto'} // 슬라이드 너비에 맞게 보여줌
            centeredSlides={true}
            allowTouchMove
            initialSlide={0}

            slideToClickedSlide={true} // 클릭할 경우 슬라이드 이동
            observer={true}


            // +화면 중앙에 올 경우 경로 이동
            onActiveIndexChange={(swiper) => {
              setActiveSlide(swiper.activeIndex);
              navigate(traineeUrls[swiper.activeIndex]);
            }}
          >
            <SwiperSlide
              className={classnames("item", { active: activeSlide === 0 && urlTitle !== ""})}
              onClick={()=>setActiveSlide(0)}
            >
              <Link to="/aaa">
                <div className="text">aaa</div>
                <div className="bar"></div>
              </Link>
            </SwiperSlide>

            <SwiperSlide
              className={classnames("item", { active: activeSlide === 1})}
              onClick={()=>setActiveSlide(1)}
            >
              <div className="text">bbb</div>
              <div className="bar"></div>
            </SwiperSlide>

            <SwiperSlide
              className={classnames("item", { active: activeSlide === 2})}
              onClick={()=>setActiveSlide(2)}
            >
              <div className="text">ccc</div>
              <div className="bar"></div>
            </SwiperSlide>

            <SwiperSlide
              className={classnames("item", { active: activeSlide === 3})}
              onClick={()=>setActiveSlide(3)}
            >
              <div className="text">ddd</div>
              <div className="bar"></div>
            </SwiperSlide>
          </Swiper>
        </ul>
      </div>
      <h1>메인</h1>
    </article>
  )
}
export default Main;