import { useState } from "react";
import arrow from "../../assets/images/arrow.png";

export function Collapse(props) {
  const [ toggle, setToggle ] = useState(false)

  const toggleDown = () => { setToggle(!toggle) }

  return (
    <div className={props.containerclass}>
      <div className="down-btn-item">
        <button className="btn-down">
          {props.down_title}
          <img onClick={toggleDown} className={`arrow ${ toggle ? 'arrow-active' : 'arrow-desactive' }`} src={arrow} alt="flèche vers le bas" />
        </button>
        <div className={`down-content ${ toggle ? 'content-fade-in' : 'content-fade-out' }`}>
          {props.downContent}
        </div>
      </div>
    </div>
  );
}