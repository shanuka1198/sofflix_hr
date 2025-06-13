import { FaUsers } from "react-icons/fa";
import { FaFilter } from "react-icons/fa";
import EmployeeList from "../../component/employee-list/employeeList";
import UserForm from "../../component/userForm/userForm";

function EmployeeDetails() {
  return (
    <>
  
      <div className="w-full  px-1 pt-2">
 
        <div className="w-full flex justify-between items-center h-[49px] rounded-lg bg-white shadow-sm p-3">
   
          <div className="flex items-center">
            <FaUsers style={{ fontSize: 24, cursor: "pointer" }} />
            <div className="flex px-3 flex-col">
              <p className="text-sm font-semibold">Employee Details</p>
              <p className="text-xs text-gray-600">
                Search and filter employee information
              </p>
            </div>
          </div>

          <button className="flex items-center gap-1 text-sm px-4 py-1 rounded-lg hover:bg-gray-200 border border-black">
            <FaFilter className="text-black text-xs" />
            <span className="text-black text-xs">Filter</span>
          </button>
        </div>

      
        <div className="w-full h-[620px] gap-2 mt-2 flex flex-row">
          <EmployeeList />
          <UserForm/>
        </div>
      </div>
    </>
  );
}

export default EmployeeDetails;
