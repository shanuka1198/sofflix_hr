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
      } flex-col h-screen text-white transition-all duration-900`}
    >
    
      <div
        className={`w-full h-[49px] rounded-lg bg-[#002b3c] flex items-center p-3 ${
          collapsed ? "justify-center" : "justify-between"
        }`}
      >
        {!collapsed && (
          <img
            className="w-[160px] h-10 transition-all duration-900"
            src="src/assets/logo/logo-hr.png"
          />
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white"
        >
          {collapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
        </button>
      </div>

   
      {!collapsed && (
        <div className="w-full h-13 flex justify-center items-center p-5 bg-white rounded-t-lg mt-2">
          <div className="relative w-full">
            <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full h-8 rounded-lg border border-gray-200 pl-4 pr-2 text-gray-600"
            />
          </div>
        </div>
      )}

     
      <div className="w-full h-full overflow-y-scroll overflow-x-hidden bg-white rounded-b-lg">
        <MenuItem collapsed={collapsed} />
      </div>
    </div>
  );
}

export default SideNav;
