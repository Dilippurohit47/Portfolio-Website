import React from "react";

const Backend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Backend Developer</h3>

      <div className="skills__box">
        <div className="skills__group">
          {/* firstduv */}
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Express js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          {/* 3tduv */}
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Node js</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">WebSockets</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          {/*2tduv */}
     


        </div>

        <div className="skills__group">
          {/* firstduv */}
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Firebase</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>

          {/* 2duv */}
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Mongo DB</h3>
              <span className="skills__level">basic</span>
            </div>
          </div>
          {/* 3 duv */}

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Socket.Io</h3>
              <span className="skills__level">basic</span>
            </div>
          </div>


          {/* end */}
        </div>
      </div>
    </div>
  );
};

export default Backend;
