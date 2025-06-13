import { useState } from "react";
import { Avatar, Stack } from "@mui/material";
import { FaExclamationTriangle, FaUserTimes } from "react-icons/fa";
import JobDetailsForm from "../job-details-form/jobDetailsForm";

function UserForm() {
  const [activeTab, setActiveTab] = useState("Basic Details");

  const tabs = [
    "Basic Details",
    "Personal Details",
    "Contact Details",
    "Job Details",
    "Workflows",
  ];

  return (
    <div className="w-full h-[720px] rounded-xl bg-white">
      {/* Header */}
      <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0 h-auto sm:h-[80px] px-4 py-3">
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            alt="User Avatar"
            src="src/assets/avatar/avatar.jpg"
            sx={{ width: 30, height: 30 }}
          />
          <Stack spacing={0} sx={{ lineHeight: 1 }}>
            <span className="text-sm font-medium text-black">Adam Smith</span>
            <span className="text-xs text-gray-500">
              Vice President of Human Resource
            </span>
            <div className="text-xs font-semibold cursor-pointer hover:underline">
              Edit Profile Image
            </div>
          </Stack>
        </Stack>

        <div className="flex flex-wrap gap-2">
          <button className="flex items-center gap-1 text-blue-950 px-3 py-1 text-xs sm:text-sm border rounded-lg hover:underline">
            <FaExclamationTriangle />
            <span className="font-semibold">Deactivate</span>
          </button>
          <button className="flex items-center gap-1 text-blue-950 px-3 py-1 text-xs sm:text-sm border rounded-lg hover:underline">
            <FaUserTimes />
            <span className="font-semibold">Resignation</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="w-full overflow-x-auto">
        <ul
          className="flex border-b-2 border-gray-300 flex-row gap-4 sm:gap-8 min-w-max
                     px-3
                     sm:px-6
                     lg:px-1
                     mx-4 sm:mx-8 lg:mx-7"
        >
          {tabs.map((tab) => (
            <li
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-sm cursor-pointer pb-1 whitespace-nowrap ${
                activeTab === tab
                  ? "text-black border-b-2 border-black font-semibold"
                  : "text-gray-600 hover:text-black"
              }`}
            >
              {tab}
            </li>
          ))}
        </ul>
      </div>

      {/* Tab Content */}
      <div className="px-4 text-sm sm:text-base">
        {activeTab === "Basic Details" && <p>Basic user details go here shanuka imantha.</p>}
        {activeTab === "Personal Details" && <p>Personal information shown here.</p>}
        {activeTab === "Contact Details" && <p>Contact details will appear here.</p>}
        {activeTab === "Job Details" && <JobDetailsForm />}
        {activeTab === "Workflows" && <p>Workflow actions and history here.</p>}
      </div>
    </div>
  );
}

export default UserForm;
