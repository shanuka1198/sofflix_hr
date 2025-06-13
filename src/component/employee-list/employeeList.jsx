import React, { useState } from "react";
import {
  Avatar,
  Stack,
  IconButton,
  Collapse,
  TextField,
  InputAdornment,
} from "@mui/material";
import { ExpandMore, ChevronRight, Search } from "@mui/icons-material";

// 👇 image import කරන්න
import avatarImage from "../../assets/avatar/avatar.jpg"; // ඔබේ image path එකට අනුව වෙනස් කරන්න

const EmployeeList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [expandedId, setExpandedId] = useState(null);

  const itemsPerPage = 10;

  const employees = [
    { id: 1, name: "Nimal Perera", designation: "Manager", ican: avatarImage },
    { id: 2, name: "Kamal Silva", designation: "Developer", ican: avatarImage },
    { id: 3, name: "Sunil Fonseka", designation: "QA Engineer", ican: avatarImage },
    { id: 4, name: "Amara Senanayake", designation: "HR Officer", ican: avatarImage },
    { id: 5, name: "Chathura Wijesinghe", designation: "Designer", ican: avatarImage },
    { id: 6, name: "Dilshan Abeywickrama", designation: "Backend Engineer", ican: avatarImage },
    { id: 7, name: "Iresha Liyanage", designation: "UI/UX Designer", ican: avatarImage },
    { id: 8, name: "Ruwan Gunarathna", designation: "CTO", ican: avatarImage },
    { id: 9, name: "Lasantha Nandasiri", designation: "Support Engineer", ican: avatarImage },
    { id: 10, name: "Sajith Kumara", designation: "Product Owner", ican: avatarImage },
    { id: 11, name: "Thisara Peris", designation: "Scrum Master", ican: avatarImage },
    { id: 12, name: "Anura Dissanayake", designation: "QA Lead", ican: avatarImage },
    { id: 13, name: "Shanuka Imantha", designation: "Software Engineer", ican: avatarImage },
    { id: 14, name: "Malsha Fernando", designation: "Business Analyst", ican: avatarImage },
    { id: 15, name: "Nadun Lakmal", designation: "DevOps Engineer", ican: avatarImage },
    { id: 16, name: "Sithum Wijesiri", designation: "Intern", ican: avatarImage },
    { id: 17, name: "Hasini Rathnayake", designation: "HR Manager", ican: avatarImage },
    { id: 18, name: "Akila Madushanka", designation: "Frontend Engineer", ican: avatarImage },
    { id: 19, name: "Sachini Ekanayake", designation: "QA Engineer", ican: avatarImage },
    { id: 20, name: "Thilina Perera", designation: "UI Engineer", ican: avatarImage },
    { id: 21, name: "Isuru Rajapaksha", designation: "Lead Engineer", ican: avatarImage },
    { id: 22, name: "Janith Kumara", designation: "Fullstack Developer", ican: avatarImage },
    { id: 23, name: "Kalani Dilshani", designation: "Product Manager", ican: avatarImage },
    { id: 24, name: "Madushani Herath", designation: "Finance Executive", ican: avatarImage },
    { id: 25, name: "Nuwan Siriwardana", designation: "Network Admin", ican: avatarImage },
    { id: 26, name: "Dinuka Lakshan", designation: "Mobile Developer", ican: avatarImage },
  ];

  const filteredEmployees = employees.filter((emp) =>
    emp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedEmployees = filteredEmployees.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="p-6 bg-white rounded-xl h-[720px] shadow-lg max-w-[460px] w-full font-sans ">
      <div className="flex justify-between items-center">
        <h2 className="text-xs font-semibold text-gray-800">
          Employee({filteredEmployees.length})
        </h2>
        <TextField
          size="small"
          sx={{
            width: 130,
            "& .MuiInputBase-root": {
              height: 25,
              fontSize: "12px",
            },
            "& .MuiInputBase-input::placeholder": {
              fontSize: "9px",
            },
          }}
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment
                position="start"
                sx={{ "& svg": { fontSize: 16 } }}
              >
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </div>

      <div className="mt-4 min-h-[480px] overflow-y-auto">
        {selectedEmployees.length > 0 ? (
          selectedEmployees.map((emp) => (
            <div
              key={emp.id}
              onClick={() => toggleExpand(emp.id)}
              className={`border border-gray-50 rounded-md cursor-pointer transition-all
                ${
                  expandedId === emp.id
                    ? "bg-blue-100 border-blue-500 shadow-md"
                    : "bg-white hover:bg-gray-100"
                }
              `}
            >
              <Stack
                direction="row"
                spacing={0.8}
                alignItems="center"
                className="p-2"
              >
                <Avatar
                  sx={{ width: 28, height: 28, fontSize: 12 }}
                  src={emp.ican}
                >
                  {!emp.ican && emp.name.charAt(0)}
                </Avatar>
                <Stack spacing={0} sx={{ lineHeight: 1 }} className="flex-1">
                  <span className="text-xs font-medium text-gray-800">
                    {emp.name}
                  </span>
                  <span className="text-[10px] text-gray-500">
                    {emp.designation}
                  </span>
                </Stack>
                <IconButton
                  size="small"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleExpand(emp.id);
                  }}
                  sx={{ color: "black" }}
                >
                  {expandedId === emp.id ? (
                    <ExpandMore fontSize="small" />
                  ) : (
                    <ChevronRight fontSize="small" />
                  )}
                </IconButton>
              </Stack>

              <Collapse in={expandedId === emp.id}>
                <div className="p-3 border-t text-[10px] text-gray-600 bg-gray-50">
                  <p>
                    Email: {emp.name.toLowerCase().replace(" ", ".")}
                    @company.com
                  </p>
                  <p>Phone: 071-1234567</p>
                  <p>
                    Department:{" "}
                    {emp.designation?.includes("QA")
                      ? "Quality Assurance"
                      : "Engineering"}
                  </p>
                </div>
              </Collapse>
            </div>
          ))
        ) : (
          <div className="text-center text-[10px] text-gray-500 py-4">
            No employees found.
          </div>
        )}
      </div>

      <div className="mt-4 flex justify-between items-center text-xs">
        <span className="text-gray-600">
          Showing {startIndex + 1} to{" "}
          {Math.min(startIndex + itemsPerPage, filteredEmployees.length)} of{" "}
          {filteredEmployees.length}
        </span>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrev}
            className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-40"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className="px-3 py-1 border border-gray-300 rounded-md">
            {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            className="px-3 py-1 border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-40"
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeList;
