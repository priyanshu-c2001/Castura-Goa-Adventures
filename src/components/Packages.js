import Pamplet01 from "url:../assets/Pamplet01.jpeg";
import Pamplet02 from "url:../assets/Pamplet02.jpeg";
import Pamplet03 from "url:../assets/Pamplet03.jpeg";
import Pamplet04 from "url:../assets/Pamplet04.jpeg";
import Pamplet05 from "url:../assets/Pamplet05.jpeg";
import Pamplet06 from "url:../assets/Pamplet06.jpeg";
import Pamplet07 from "url:../assets/Pamplet07.jpeg";
import Pamplet08 from "url:../assets/Pamplet08.jpeg";

const Packages = () => {
  return (
    <div className="pkg-container">
      <div className="pkg-grid">
        <img src={Pamplet01} alt="Package 1" className="pkg-img" />
        <img src={Pamplet02} alt="Package 2" className="pkg-img" />
        <img src={Pamplet03} alt="Package 3" className="pkg-img" />
        <img src={Pamplet04} alt="Package 4" className="pkg-img" />
        <img src={Pamplet05} alt="Package 5" className="pkg-img" />
        <img src={Pamplet06} alt="Package 6" className="pkg-img" />
        <img src={Pamplet07} alt="Package 7" className="pkg-img" />
        <img src={Pamplet08} alt="Package 8" className="pkg-img" />
      </div>
    </div>
  );
};

export default Packages;
