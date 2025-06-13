import { useState } from "react";
import { Search } from "lucide-react";
import MenuItem from "../menu-Item/menu";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";

function SideNav() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className={`flex shadow gap-0.5 p-1 ${
        collapsed ? "w-[90px]" : "w-[260px]"
      } flex-col h-screen text-white transition-all duration-700`}
    >
      <div
        className={`w-full h-[49px] rounded-lg bg-[#002b3c] flex items-center p-3 ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        <img
          className={`transition-all duration-700 object-contain ${
            collapsed ? "w-10 h-10" : "w-[160px] h-10"
          }`}
          src="src\assets\logo\logo-hr.png"
          alt="Logo"
        />

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white ml-2"
        >
          {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
      </div>

      <div
        className={`w-full flex justify-center items-center bg-white rounded-t-lg mt-2 transition-all duration-500 ${
          collapsed
            ? "opacity-0 h-0 p-0 overflow-hidden"
            : "opacity-100 h-13 p-5"
        }`}
      >
        <div className="relative w-full">
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full h-8 rounded-lg border border-gray-200 pl-4 pr-2 text-gray-600"
          />
        </div>
      </div>

      {/* Menu Items */}
      <div className="w-full h-full overflow-y-scroll overflow-x-hidden bg-white rounded-b-lg">
        <MenuItem collapsed={collapsed} />
      </div>
    </div>
  );
}

export default SideNav;
