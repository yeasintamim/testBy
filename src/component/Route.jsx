import { RiArrowLeftRightFill } from "react-icons/ri";
import { BiSearch } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";
import { useState } from "react";

export const Form = () => {
  const [dateFrom, setDateFrom] = useState("Fri 17/09");
  const [dateFrom2, setDateFrom2] = useState("Sat 18/09");

  return (
    <div className="p-4">
      <div className="topForm d-flex">
        <select className="form-select top-form">
          <option selected>Return</option>
          <option>Go</option>
          <option>Come Back</option>
        </select>

        <select className="form-select top-form">
          <option selected>1 Adult</option>
          <option>2 Adult</option>
          <option>3 Adult</option>
          
        </select>
        <select className="form-select top-form">
          <option selected>Economy</option>
          <option>Business</option>
          <option>First-class</option>
        </select>
      </div>

      <div className="bottom-form d-flex">
        <div
          className="form-control px-3 m-2 d-flex justify-content-between align-items-center form-style-bg"
        >
          <p className=" px-0  m-0 form-p-bg">
            <input className="form-control rounded input-area" placeholder="San Francisco"/>
          </p>
          <p className="m-0 px-2 p-ai">
            <AiOutlinePlus />
          </p>
        </div>

        <button className="btn btn-light border border-1 m-2 px-1 rounded btn-ri">
            <RiArrowLeftRightFill/>
          
        </button>

        <input
          className="form-control p-3 m-2 input-to"
          placeholder="To?"
        />

        <div className="p-3 m-2 border rounded d-flex align-items-center calendar-style">
          <IoCalendarClearOutline />
          <input
            type="text"
            className="form-control shadow-none calendar-bg"
            value={dateFrom}
            onChange={(e) => setDateFrom(e.target.value)}
          />
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>

        <div
          className="p-3 m-2 border rounded d-flex align-items-center calendar-clear"

        >
          <IoCalendarClearOutline />
          <input
            type="text"
            className="form-control shadow-none input-calendar-clear"
            value={dateFrom2}
            onChange={(e) => setDateFrom2(e.target.value)}
          />
          <IoIosArrowBack />
          <IoIosArrowForward />
        </div>

        <button className="btn btn-primary m-2 px-3 btn-bisearch" >
          <BiSearch />
        </button>
      </div>
    </div>
  );
};
