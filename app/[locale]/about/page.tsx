import "./about.css";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="wrap1">
        <div className="side">
          <div className="left header-child">
            <span>a</span>
          </div>
          <div className="left center-child">
            <span>b</span>
          </div>
          <div className="left bottom-child">
            <span>c</span>
          </div>
        </div>
        <Image src={"/me.jpeg"} alt="me" width={200} height={200} className="image"/>
        <div className="side">
          <div className="right header-child">
            <span>c</span>
          </div>
          <div className="right center-child">
            <span>d</span>
          </div>
          <div className="right bottom-child">
            <span>e</span>
          </div>
        </div>
      </div>
      <div className="wrap2">
        <div className="show">card1</div>
        <div className="show">card2</div>
        <div className="show">card3</div>
        <div className="show">card4</div>
      </div>
    </>
  );
}
