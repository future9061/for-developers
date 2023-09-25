import React from "react";
import "../../style/components/ui/NavBar.scss";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowClockwise } from "react-icons/bs";
import { BiSolidHomeAlt2, BiSolidUser } from "react-icons/bi";
import { IoSettingsSharp } from "react-icons/io5";
import { MdExtension } from "react-icons/md";
import { RxBorderDotted } from "react-icons/rx";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <ul className="arrows">
        <li>
          <AiOutlineArrowLeft />
        </li>
        <li>
          <AiOutlineArrowRight />
        </li>
        <li>
          <BsArrowClockwise />
        </li>
      </ul>

      <div className="url">
        <BiSolidHomeAlt2 />
        <div className="text">
          <p className="show">
            127.0.0/안녕하세요. 여러분 for developer에 오신것을 환영해요
          </p>
          <p>127.0.0/안녕하세요. 여러분 for developer에 오신것을 환영해요</p>
          <p>127.0.0/안녕하세요. 여러분 for developer에 오신것을 환영해요</p>
        </div>
      </div>
      <div className="login">
        <li>
          <IoSettingsSharp />
        </li>
        <li>
          <MdExtension />
        </li>
        <Link to="/login">
          <button>
            <div>
              <BiSolidUser />
            </div>
            <p>Login</p>
          </button>
        </Link>
        <li>
          <RxBorderDotted />
        </li>
      </div>
    </nav>
  );
}

export default NavBar;