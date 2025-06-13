import React, { useState } from "react";
import { LuClock5 } from "react-icons/lu";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaFile } from "react-icons/fa";
import {
  FaPencilAlt,
  FaTrash,
  FaRegCalendarCheck,
  FaPlus,
  FaEye,
} from "react-icons/fa";
import { BiCalendar, BiChevronDown, BiChevronUp } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const leaveTypes = [
  "All",
  "Annual Leave",
  "Sick Leave",
  "Casual Leave",
  "Birthday Leave",
];
const statusOptions = ["All", "Approved", "Pending", "Rejected"];

function Leaves() {
  const [expandedRows, setExpandedRows] = useState([]);

  const [leaveType, setLeaveType] = useState("All");
  const [status, setStatus] = useState("All");
  const [date, setDate] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  const sampleLeaves = [
    { type: "Annual Leave", date: "2025-05-21", status: "Approved" },
    { type: "Sick Leave", date: "2025-06-01", status: "Pending" },
    { type: "Casual Leave", date: "2025-06-03", status: "Rejected" },
  ];

  const toggleRow = (index) => {
    setExpandedRows((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const data = [
    {
      type: "COVID Leave",
      entitled: 7,
      utilized: "-",
      available: 7,
      category: "Default",
      subTypes: [
        { type: "PCR Leave", entitled: 2, utilized: 0, available: 2 },
        { type: "Quarantine Leave", entitled: 5, utilized: "-", available: 5 },
      ],
    },
    {
      type: "Sick Leave",
      entitled: "-",
      utilized: 1,
      available: "-",
      category: "Default",
    },
    {
      type: "Casual Leave",
      entitled: 5,
      utilized: 1.5,
      available: 3.5,
      category: "Default",
      subTypes: [
        { type: "Emergency Leave", entitled: 2, utilized: 0.5, available: 1.5 },
      ],
    },
    {
      type: "Annual Leave",
      entitled: 14,
      utilized: 7.5,
      available: 6.5,
      category: "Default",
      subTypes: [
        { type: "Holiday Leave", entitled: 4, utilized: 2, available: 2 },
      ],
    },
    {
      type: "Birthday Leave",
      entitled: 1,
      utilized: "-",
      available: 1,
      category: "Customized",
      subTypes: [
        { type: "Surprise Leave", entitled: 1, utilized: 0, available: 1 },
      ],
    },
  ];

  const handleSearch = () => {
    const filtered = sampleLeaves.filter((leave) => {
      return (
        (leaveType === "All" || leave.type === leaveType) &&
        (status === "All" || leave.status === status) &&
        (!date || leave.date === date)
      );
    });
    setFilteredData(filtered);
  };

  return (
    <div className="w-full rounded-lg p-4 bg-white ">
      {/* Header */}
      <div className="w-full relative">
        <div className="w-full h-10 pb-2 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FaRegCalendarCheck className="text-[18px] cursor-pointer" />
              <div className="flex flex-col leading-tight">
                <p className="text-sm font-semibold">Leave Entitlements</p>
                <p className="text-xs text-gray-600">
                  Leave Policy: Executive Employees Policy
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="text-[10px] flex items-center gap-1 px-2 h-6 rounded-md bg-[#1b2231] text-white">
                <FaFile className="text-[12px]" /> Export Reports
              </button>
              <button className="text-[10px] flex items-center gap-1 px-2 h-6 rounded-md bg-[#1b2231] text-white">
                <FaPlus className="text-[12px]" /> Add Leave Type
              </button>
              <button className="text-[10px] flex items-center gap-1 px-2 rounded-md bg-[#1b2231] text-white h-6">
                <BiCalendar className="text-[12px]" /> Apply Leave
              </button>
            </div>
          </div>
        </div>

        {/* Leave Entitlement Table */}
        <div className="overflow-x-auto h-60 mt-4 ">
          <table
            className="min-w-full text-sm text-left border border-gray-200 rounded-lg border-separate "
            style={{ borderSpacing: 0 }}
          >
            <thead className="text-black">
              <tr>
                <th className="px-4 py-2 text-xs font-semibold min-w-[200px] border-b border-gray-300">
                  Leave Type
                </th>
                <th className="px-4 py-2 text-xs font-semibold border-b border-gray-300">
                  Entitled
                </th>
                <th className="px-4 py-2 text-xs font-semibold border-b border-gray-300">
                  Utilized
                </th>
                <th className="px-4 py-2 text-xs font-semibold border-b border-gray-300">
                  Available
                </th>
                <th className="px-4 py-2 text-xs font-semibold border-b border-gray-300">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <React.Fragment key={index}>
                  <tr className="bg-white">
                    <td
                      className={`px-4 py-2 text-xs font-medium min-w-[200px] border-b border-gray-300 ${
                        row.category === "Customized"
                          ? "bg-[#d4d4bc7a] font-semibold"
                          : "bg-[#d1cece9c]"
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span>{row.type}</span>
                        {row.subTypes && row.type !== "Birthday Leave" && (
                          <button onClick={() => toggleRow(index)}>
                            {expandedRows.includes(index) ? (
                              <BiChevronUp />
                            ) : (
                              <BiChevronDown />
                            )}
                          </button>
                        )}
                      </div>
                    </td>
                    <td className="px-4 py-2 text-xs border-b border-gray-300">
                      {row.entitled}
                    </td>
                    <td className="px-4 py-2 text-xs border-b border-gray-300">
                      {row.utilized}
                    </td>
                    <td className="px-4 py-2 text-xs border-b border-gray-300">
                      {row.available}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-300">
                      <div className="flex gap-2 items-center">
                        {row.type === "Birthday Leave" ? (
                          <>
                            <FaPencilAlt className="cursor-pointer" />
                            <FaTrash className="text-red-500 cursor-pointer" />
                          </>
                        ) : (
                          <FaPencilAlt className="cursor-pointer" />
                        )}
                      </div>
                    </td>
                  </tr>

                  {row.subTypes &&
                    row.type !== "Birthday Leave" &&
                    expandedRows.includes(index) &&
                    row.subTypes.map((sub, subIndex) => (
                      <tr key={subIndex} className="bg-gray-50">
                        <td className="px-8 py-2 text-xs text-gray-600 border-b border-gray-300">
                          └ {sub.type}
                        </td>
                        <td className="px-4 py-2 text-xs border-b border-gray-300">
                          {sub.entitled}
                        </td>
                        <td className="px-4 py-2 text-xs border-b border-gray-300">
                          {sub.utilized}
                        </td>
                        <td className="px-4 py-2 text-xs border-b border-gray-300">
                          {sub.available}
                        </td>
                        <td className="px-4 py-2 text-xs text-gray-400 border-b border-gray-300">
                          -
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>

          {/* Legends */}
          <div className="mt-4 flex justify-end gap-4 items-center text-[10px]">
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-3xl bg-[#d1cece9c]"></span>{" "}
              Default
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-3xl bg-[#d4d4bc7a]"></span>{" "}
              Customized
            </div>
          </div>
        </div>

        {/* Leave History Section */}
        <div className="w-full  p-3 border-gray-200 border-b ">
          <div className="flex items-center">
            <BiCalendar style={{ fontSize: 22, cursor: "pointer" }} />
            <div className="flex px-3 flex-col">
              <p className="text-sm font-semibold">Leave History</p>
              <p className="text-xs text-gray-600">
                Leave history of the employee
              </p>
            </div>
          </div>
        </div>

        <div className=" bg-white rounded-lg p-4 ">
          
          <div className="flex items-end justify-between  gap-5 flex-wrap">
      
            <div className="flex gap-4 flex-wrap">
              <div>
                <label className="text-gray-600 block mb-1 text-xs">
                  Leave Type
                </label>
                <select
                  value={leaveType}
                  onChange={(e) => setLeaveType(e.target.value)}
                  className="px-2 py-1 border border-gray-200 rounded text-xs"
                  style={{ height: "28px", minWidth: "120px" }}
                >
                  {leaveTypes.map((type, idx) => (
                    <option key={idx} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-gray-600 block mb-1 text-xs">
                  Status
                </label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="px-2 py-1 border border-gray-200 rounded text-xs"
                  style={{ height: "28px", minWidth: "120px" }}
                >
                  {statusOptions.map((st, idx) => (
                    <option key={idx} value={st}>
                      {st}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Right group: Date + Search Button */}
            <div className="flex flex-wrap items-end gap-3">
              <div className="flex flex-col">
                <label className="text-gray-600 text-xs mb-1">Leave Date</label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="border border-gray-200 rounded px-2 py-1 text-xs"
                  style={{ height: "28px", minWidth: "160px" }}
                />
              </div>

              <button
                onClick={handleSearch}
                className="flex items-center  bg-[#1b2231] text-white text-xs rounded-sm px-3 gap-1 h-7"
              >
                <FiSearch />
                Search
              </button>
            </div>
          </div>

          <table
            className="min-w-full mt-4 text-sm border border-gray-200  border-separate"
            style={{ borderSpacing: 0 }}
          >
            <thead className=" text-black">
              <tr>
                <th className="px-4 py-2 text-xs font-semibold min-w-[200px] border-b border-gray-300 text-left">
                  Leave
                </th>
                <th className="px-4 py-2 text-xs font-semibold border-b border-gray-300 text-left">
                  Leave Date
                </th>
                <th className="px-4 py-2 text-xs font-semibold border-b border-gray-300 text-left">
                  Status
                </th>
                <th className="px-4 py-2 text-xs font-semibold border-b border-gray-300 text-left">
                  Apprvals
                </th>
              </tr>
            </thead>
            <tbody>
              {(filteredData.length > 0 ? filteredData : sampleLeaves).map(
                (leave, idx) => (
                  <tr key={idx} className="bg-white border-b border-gray-200">
                    <td className="px-4 py-2 text-xs border-b border-gray-300 text-left">
                      {leave.type}
                    </td>
                    <td className="px-4 py-2 text-xs border-b border-gray-300 text-left">
                      {leave.date}
                    </td>
                    <td className="px-4 py-2 text-xs border-b border-gray-300 text-left">
                      {/* Status with icon + background */}
                      <div
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs ${
                          leave.status.toLowerCase() === "pending"
                            ? "bg-orange-50 text-orange-400"
                            : leave.status.toLowerCase() === "approved"
                            ? "bg-green-50 text-green-800"
                            : "bg-gray-100 text-gray-800"
                        }`}
                        style={{ minWidth: "90px" }}
                      >
                        {leave.status.toLowerCase() === "pending" && (
                          <LuClock5 className="text-yellow-600" />
                        )}
                        {leave.status.toLowerCase() === "approved" && (
                          <FaRegCheckCircle className="text-green-600" />
                        )}
                        <span>{leave.status}</span>
                      </div>
                    </td>
                    <td className="px-4 py-2 text-xs border-b border-gray-300 text-left">
                      <FaEye className="cursor-pointer text-black" />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Leaves;
