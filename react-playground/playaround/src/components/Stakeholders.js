import Navbar from "./Navbar";
import StakeOne from "../images/stake1.jpg";
import "../styles/stakeholders.css"

const Stakeholders = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <h1>The AMAIA Team</h1>
      </div>
      <div className="gallery">
        <div className="gallery-item gallery-item-1">
        <figure>
          <img src={StakeOne} />
          <figcaption>Fejiro</figcaption>
        </figure>
        </div>
        <div className="gallery-item gallery-item-2">
          <img src={StakeOne} />
        </div>
        <div className="gallery-item gallery-item-3">
          <img src={StakeOne} />
        </div>
        <div className="gallery-item gallery-item-4">
          <img src={StakeOne} />
        </div>
        <div className="gallery-item gallery-item-5">
          <img src={StakeOne} />
        </div>
      </div>
    </>
  );
};

export default Stakeholders;
