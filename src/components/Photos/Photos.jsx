import React from "react";
import s from "./Photos.module.css";

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
       <PhotoBig  src="https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"/>
       <PhotoSmall src="https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg" />
       <PhotoSmall src="https://media.istockphoto.com/photos/business-man-pushing-large-stone-up-to-hill-business-heavy-tasks-and-picture-id825383494?k=20&m=825383494&s=612x612&w=0&h=tEqZ5HFZcM3lmDm_cmI7hOeceiqy9gYrkyLTTkrXdY4=" />
       <PhotoSmall src=" https://images.unsplash.com/photo-1610878180933-123728745d22?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FuYWRhJTIwbmF0dXJlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" />
       <PhotoSmall src=" https://html5css.ru/css/img_forest.jpg" />
       <PhotoSmall src=" https://content.api.news/v3/images/bin/b06bef9a5f8153a24f4abb07cbc2c11e?width=650" />
       <PhotoSmall src=" https://static.addtoany.com/images/dracaena-cinnabari.jpg" />
       <PhotoBig  src="https://www.w3schools.com/howto/img_snow.jpg"/>
       <PhotoSmall src="https://cdn.pixabay.com/photo/2018/09/12/19/21/deer-3673017__480.jpg " />
       <PhotoSmall src=" https://ix-www.imgix.net/hp/snowshoe.jpg?q=70&w=1800&auto=compress%2Cenhance&fm=jpeg" />
       <PhotoSmall src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX7RMtWCzFitQvVxbvE3FL4e_pi6NIfyZYVUDn3Q73hjQ1w100C_kRObzEWmRu1u2UIb4&usqp=CAU" />
       <PhotoSmall src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg/341px-Convex_lens_%28magnifying_glass%29_and_upside-down_image.jpg " />
       <PhotoSmall src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWwB29eRCxE1_92bxreaZ5tsnqgQFgHScAFEA4nn4vpiMfLX-h1j-RhnZfCo9_IcFNx4E&usqp=CAU " />
       <PhotoSmall src=" https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH0Ck4_AdIYWlNb2Y943_qqWr5afaOPzbhN9D8Qu4pjDTJ4p1EHxCH6HG2Mmpkep8TgUg&usqp=CAU" />
        

      </div>
    </div>
  );
};

export default Photos;
