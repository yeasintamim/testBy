import { IoMenuOutline } from "react-icons/io5";
import {GiCommercialAirplane} from "react-icons/gi";
import {RiHome5Fill} from "react-icons/ri";
import {RiPoliceCarFill} from "react-icons/ri";
import {IoMdListBox} from "react-icons/io";
import {RiSuitcase2Fill} from "react-icons/ri";
import {FaDirections} from "react-icons/fa";
import {GiDirectionSigns} from "react-icons/gi";
import {IoGitBranchOutline} from "react-icons/io5";
import {RiMoneyDollarBoxFill} from "react-icons/ri";
import {FaBook} from "react-icons/fa";

import { SideItem } from "./SidebarInfo";


export const Sidebar = () => {
    return(
        <div className="sidebar" >
          <div className="a mx-2 p-2 pt-0 sidebar-menu">
              <IoMenuOutline/>
          </div>

          <div className="d-flex align-items-center mx-2 p-2 sidebar-flex">
            <div>
                <img
                  src="https://cdn.pixabay.com/photo/2017/03/27/14/37/asia-2179107_960_720.jpg"
                  className="rounded-circle sidebar-img-style"
                  alt="amanda victor"
                  width="40px"
                  height="40px"
                />
            </div>
            <span className="px-2">Amanda Victor</span>
          </div>
     
          <div className="c mx-2 p-2 pt-0 sidebar-flex">
           <SideItem name="Flights" logo={GiCommercialAirplane}/>
           <SideItem name="Stays" logo={RiHome5Fill}/>
           <SideItem name="Car Rental" logo={RiPoliceCarFill}/>
           <SideItem name="Things to do" logo={IoMdListBox}/>
           <SideItem name="Flights + hotel" logo={RiSuitcase2Fill}/>
          </div>
          
      <div className="mx-2 p-2 sidebar-flex">
           <SideItem name="Explore" logo={GiDirectionSigns}/>
           <SideItem name="Deals" logo={RiMoneyDollarBoxFill}/>
           <SideItem name="Routes" logo={FaDirections}/>
           <SideItem name="Direct" logo={IoGitBranchOutline}/>
      </div>
      <div className="mx-2 p-2">
      <SideItem name="Trips" logo={FaBook} />
      </div>
        </div> 
    );
};