import React from "react";
import namepnglg from "../assets/name.png";
import myPhoto from "../assets/homePhoto.png";

function Home() {
  return (
    <div>
      <div className="container home-container ">
        <div className="row h-100">
          <div className="col-md-6 my-auto text-center">
            {/* Name image */}
            <img src={namepnglg} className="home-name" alt="Lindsey Gaughan" />

            {/* text box */}
            <div className="my-auto box rounded d-flex about-box justify-content-evenly">
              <p className="about-me quote-wrapper text-center">
              Hey there! I’m a marketing and communications pro who loves turning ideas into action. I thrive on managing projects, creating engaging digital content, and finding smarter ways to get things done. Whether I’m building websites, optimizing workflows, or leading teams, I’m always looking for creative solutions that make an impact. Fast-paced environments? I live for them! If it involves strategy, storytelling, or streamlining processes, I’m all in.
                <br />
                <br />A few years ago, I took a deep dive into the world of coding and completed a Full Stack Development bootcamp. I wanted to bridge the gap between marketing and tech—because let’s be real, digital strategy is so much more powerful when you understand how the backend works too. Now, whether I’m troubleshooting technical issues or collaborating with developers, I bring both creative and technical skills to the table. And while I love applying this knowledge to marketing, I’d also be open to a Junior Developer role where I can keep growing and building awesome things!
              </p>
            </div>
          </div>
          <div className="col-md-6 me-auto">
            {/* my image */}
            <img src={myPhoto} className="home-photo" alt="Lindsey Gaughan" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
