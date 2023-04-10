import React from "react";
import ourBlog1 from "../../assets/ourBlog/ourBlog1.png";
import ourBlog2 from "../../assets/ourBlog/ourBlog2.png";
import ourBlog3 from "../../assets/ourBlog/ourBlog3.png";
import { BsArrowRight } from "react-icons/bs";

const OurBlog = () => {
  return (
    <div className="ourBlog bbb-container">
      <div className="ourBlog__heading">
        <h1>Our Blog</h1>
      </div>
      <div className="ourBlog__cardSection">
        <div className="ourBlog__cardSection--card">
          <div className="cardImgArea">
            <img className="cardImg" src={ourBlog1} alt="" />
          </div>
          <div className="cardBody">
            <p className="date">19 Jan 2022</p>
            <h3 className="title">
              3 things to implement if you are the Health, wellness and safety
              leader.
            </h3>
            <p className="paragraph">
              This is a dummy text for now, we will be able to see this through
              later as we keep writing the blogs
            </p>
            <h4 className="readMore">
              Read More <BsArrowRight />
            </h4>
          </div>
        </div>
        <div className="ourBlog__cardSection--card">
          <div className="cardImgArea">
            <img className="cardImg" src={ourBlog2} alt="" />
          </div>
          <div className="cardBody">
            <p className="date">19 Jan 2022</p>
            <h3 className="title">
              What do we need to do to change the negative image of health and
              safety?
            </h3>
            <p className="paragraph">
              This is a dummy text for now, we will be able to see this through
              later as we keep writing the blogs
            </p>
            <h4 className="readMore">
              Read More <BsArrowRight />
            </h4>
          </div>
        </div>
        <div className="ourBlog__cardSection--card">
          <div className="cardImgArea">
            <img className="cardImg" src={ourBlog3} alt="" />
          </div>
          <div className="cardBody">
            <p className="date">19 Jan 2022</p>
            <h3 className="title">
              What 3 things do you need to do to build ownership of health and
              safety?
            </h3>
            <p className="paragraph">
              This is a dummy text for now, we will be able to see this through
              later as we keep writing the blogs
            </p>
            <h4 className="readMore">
              Read More <BsArrowRight />
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlog;
