import { Card } from "./Card";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import CardInfo from './CardInfo';

export const Cards = () => {

  return (
    <div className="border-top p-5" style={{ background: "#F7FBFF" }}>
      <div className="d-flex justify-content-between mb-4 align-items-end">
        <div>
          <h2 style={{ color: "#344050" }} className="mb-4">
            Countries you can travel right now
          </h2>
          <h5 style={{ color: "#6D7C8F" }}>
            Popular destinations open to visitors from your country
          </h5>
        </div>
        <div>
          <button className="btn btn-outline-primary me-5">See all</button>
        </div>
      </div>

      <div className="d-flex" >
        {
          CardInfo.map(({topBadge,title,description,announcement,image})=>{
            return <Card
            topBadge={topBadge}
            title={title}
            description={description}
            announcement={announcement}
            image={image}
          />
          })
        }
      </div>
  
      <div className="d-flex flex-row-reverse mb-4 align-items-end">
            <button
            className="btn btn-light border border-1 m-2 px-0 me-6 rounded"
            style={{ height: "35px", width: "35px" }}
            >
                <IoIosArrowForward/>
            </button>
            <button
            className="btn btn-light border border-1 m-2 px-0  rounded"
            style={{ height: "35px", width: "35px" }}
            >
                <IoIosArrowBack/>
            </button>
         </div>

    </div>
  );
};