import React from "react";
import s from "./Photos.module.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
import Photo01 from "../../assets/img/photo/01.jpg";
import Photo02 from "../../assets/img/photo/02.jpg";
import Photo03 from "../../assets/img/photo/03.jpg";
import Photo04 from "../../assets/img/photo/04.jpg";
import Photo05 from "../../assets/img/photo/05.jpg";
import Photo06 from "../../assets/img/photo/06.jpg";
import Photo07 from "../../assets/img/photo/07.jpg";
import Photo08 from "../../assets/img/photo/08.jpg";
import Photo09 from "../../assets/img/photo/09.jpg";
import Photo10 from "../../assets/img/photo/10.jpg";
import Photo11 from "../../assets/img/photo/11.jpg";
import Photo12 from "../../assets/img/photo/12.jpg";
import Photo13 from "../../assets/img/photo/13.jpg";
import Photo14 from "../../assets/img/photo/14.jpeg";


const PhotoSmall = (props) => {
    return (
            <div className={s.gallery__item}>
                <img src={props.src} alt=""/>
            </div>
    )
}
const PhotoBig = (props) => {
    return (
            <div className={s.gallery__item + " " + s.gallery__item_big}>
                <img src={props.src} alt=""/>
            </div>
    )
}

const Photos = (props) => {
  return (
    <div className={s.content__galery + " " + s.galery}>
      <div className={s.gallery__items}>
       <PhotoBig  src={Photo01}/>
       <PhotoSmall src={Photo02} />
       <PhotoSmall src={Photo03} />
       <PhotoSmall src={Photo04} />
       <PhotoSmall src={Photo05} />
       <PhotoSmall src={Photo06} />
       <PhotoSmall src={Photo07} />
       <PhotoBig  src={Photo08}/>
       <PhotoSmall src={Photo09} />
       <PhotoSmall src={Photo10} />
       <PhotoSmall src={Photo11} />
       <PhotoSmall src={Photo12} />
       <PhotoSmall src={Photo13} />
       <PhotoSmall src={Photo14} />
        

      </div>
    </div>
  );
};

export default Photos;

// export default function Photos() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
//   return (
//     <div  className={s.gallery}>
//     <Slider {...settings}>
//    <img src="https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"/>
//        <img src="https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg" />
//         <img src="https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=" />

//     </Slider>
//     </div>
//   );
// }
