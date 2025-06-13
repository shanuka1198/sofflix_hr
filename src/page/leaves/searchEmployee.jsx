import { BiCalendar } from "react-icons/bi";
import { FaClipboardList } from "react-icons/fa";
import EmployeeList from "../../component/employee-list/employeeList";
import Leaves from "../../component/leaves/leaves";

function SearchEmployee() {
  const card = [
    {
      title: "Employees on leaves today",
      count: "8",
      ican: <FaClipboardList />,
    },
    {
      title: "Total leaves within next 7 days",
      count: "12",
      ican: <FaClipboardList />,
    },
    {
      title: "Total leaves within this year",
      count: "124",
      ican: <FaClipboardList />,
    },
    {
      title: "Leaves on pending approval",
      count: "9",
      ican: <FaClipboardList />,
    },
  ];

  return (
    <>
      <div className="w-full px-1 pt-2 flex flex-col items-center ">
        <div className="w-full flex items-center px-5 h-[49px] rounded-lg bg-white shadow-sm">
          <BiCalendar style={{ fontSize: 24, cursor: "pointer" }} />
          <div className="flex px-3 flex-col">
            <p className="text-sm font-semibold">Employee Leaves</p>
            <p className="text-xs text-gray-600">
              View leave history and entitlements of the employees
            </p>
          </div>
        </div>

        <div className="w-full pt-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {card.map((card, index) => (
            <div
              key={index}
              className="h-23 flex flex-col justify-between rounded-lg bg-white shadow-sm p-3"
            >
              <div className="flex justify-between pt-2 items-center w-full">
                <div className="text-[#438288] text-4xl">{card.ican}</div>
                <div className="text-3xl text-black ">{card.count}</div>
              </div>

              <p className="text-xs text-gray-600 text-right">{card.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-1 pt-2 gap-2 flex flex-row">
        <EmployeeList />
        <Leaves />
      </div>
      
    </>
  );
}

export default SearchEmployee;
