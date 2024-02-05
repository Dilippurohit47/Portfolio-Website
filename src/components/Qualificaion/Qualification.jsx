import React, { useState } from "react";
import "./qualification.css";
import { Project, Ui } from "../../data";
import { RxCross1 } from "react-icons/rx";
const Qualification = () => {
  const [toggleState, settoggleState] = useState(1);
  const [view, setview] = useState(-1);
  console.log(view);

  const toggleTab = (index) => {
    settoggleState(index);
  };

  return (
    <section className="qualification section" id="portfolio">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">My Personel Journey</span>

      <div className="content">
        <div className="titles">
          <h1
            className={` fulltitle  ${toggleState === 1 ? "active" : ""} `}
            onClick={() => settoggleState(1)}
          >
            Fullstack
          </h1>
          <h1
            className={` fulltitle  ${toggleState === 2 ? "active" : ""} `}
            onClick={() => settoggleState(2)}
          >
            Ui
          </h1>
        </div>

        <div className="box">
          {/* start */}

          {toggleState === 1 ? (
            <>
              {Project?.map((item, index) => (

                <div className="first-project" key={index}>
                  <div className="img">
                    <img src={item?.img} alt="" />
                  </div>

                  <div className="project-title">
                    <div className="sub-title">
                      <h1 className="projectT">{item?.name}</h1>
                      <p className="projectT">{item.subTitle}</p>
                    </div>

                    <div className="right-project1-div">
                      <p className="visit">visit</p>
                      <p className="view" onClick={(e) => setview(index)}>
                        View More
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <>
                <div className="ui">

              {Ui?.map((item, index) => (

  
                <div className="ui-project">
                  <div className="img">
                    <img src={item?.img} alt="" />
                  </div>

                  <div className="project-title">
                    <div className="sub-title">
                      <h1 className="projectT">{item?.name}</h1>
                      <p className="projectT">{item.subTitle}</p>
                    </div>
                    <p className="view">Visit</p>
                  </div>
                </div>
              ))}
                      </div>
            </>
    

          )}

          {view !== -1
            ? Project?.map((item) => (
                <div className="info-div">
                  <div className="overlay"></div>
                  <div className="cross" onClick={() => setview(-1)}>
                    <RxCross1 />
                  </div>
                  <div className="info-content">
                    {Project[view]?.info
                      .split(".")
                      .map(
                        (line, i) =>
                          line.trim() && <li key={i}>{line.trim()}</li>
                      )}
                  </div>
                </div>
              ))
            : ""}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
