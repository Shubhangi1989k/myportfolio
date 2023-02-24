import React, { useState } from 'react';
 

const Tab1 = () => {

    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
    return (
        <div>
            <div className="tcontainer">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          Skills
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
           Experience
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Education
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>A</h2>
          <hr />
          <p>
          <ul>
                        <li><span> UI/UX </span><br/>Design Web/App  Interface</li>
                        <li><span>Web Developement</span><br/> Web app Developement</li>
                        <li><span>App Developement</span> <br/>Mobile App Developement</li>
                        <li>Back-End Developement</li>
                     </ul>
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
         
          <hr />
          <p>
          <ul>
                        <li><span>2022-Present</span><br/> Front-End Developer at StarLink Tecchnoligy opc.pvt.ltd</li> 
                        <li><span>2021-2022</span><br/> GUI Developer at KTH Royal Institute of Tecchnoligy</li> 
                        <li><span>2021-2022</span> <br/>MindScript Institute</li>
                        </ul>
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
         
          <hr />
          <p>
            <ul>
                        <li><span>MCA</span><br/>Pune  University </li> 
                        <li><span>Diploma in Testing</span><br/>MindScript</li> 
                        <li><span>Program in Javascript</span> <br/>Folkuniversity</li>
                        <li><span>ISTQB</span> </li> 
                    </ul>
          </p>
        </div>
      </div>
    </div>

        </div>
    )
}

export default Tab1


