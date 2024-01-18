import React from "react";
import "./MainSection.scss";
import ecom from "../Images/ecom.jpg";
import portfolio from "../Images/portfolio.jpg";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import { Link } from "react-router-dom";
import resume from "../files/RahulPrasadShilam_Resume.pdf";

export default function MainSection() {
  return (
    <>
      <div className="main-area">
        <div className="main-block-one">
          <p>
            I am <strong>Rahul Prasad Shilam</strong>, a Frontend Developer who
            loves to explore new designs. What I visualize is what I showcase
            through the work. It's been said that, if you haven't failed, then
            you haven't even tried yet. This is more of a portfolio page where
            you will get to see my coding journey.
          </p>
        </div>
        <h2>
          <div className="resume-down">
            <Link
              style={{
                textDecoration: "none",
                display: "inherit",
                color: "black",
              }}
              to={resume}
              target="_black"
              download
            >
              <div>Download My Resume</div>{" "}
              <div style={{ marginTop: "5px" }}>
                {" "}
                <FileDownloadIcon />
              </div>
            </Link>
          </div>
        </h2>
        <div className="main-block-two">
          <h2>Current Projects</h2>
          <div className="projects">
            {/* <div className="spacer"></div> */}
            <div className="img-block">
              <img src={ecom} alt="ecom"></img>
              <p>Ecommerce</p>
            </div>

            <div className="img-block">
              <img src={portfolio} alt="portfolio"></img>
              <p>Portfolio website</p>
            </div>
            {/* <div className="spacer"></div> */}
          </div>
        </div>

        <div className="main-block-three">
          <h2>Tech Stack</h2>
          <div className="projects">
            <p>React JS</p>
            <p>Redux</p>
            <p>Javsscript</p>
            <p>HTML5</p>
            <p>CSS</p>
            <p>Bootstrap</p>
            <p>Material UI</p>
            <p>Node JS</p>
            <p>Express JS</p>
            <p>MongoDB</p>
          </div>
        </div>
      </div>
    </>
  );
}
