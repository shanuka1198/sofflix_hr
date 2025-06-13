import React, { useState } from "react";
import Select from "react-select";
import { FaPlus } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";
import { FaTrash } from "react-icons/fa";

const JobForm = () => {
  const [jobCategory, setJobCategory] = useState([]);
  const [designation, setDesignation] = useState([]);
  const [location, setLocation] = useState([]);
  const [unit, setUnit] = useState([]);
  const [manager, setManager] = useState(null);
  const [additionalManager, setAdditionalManager] = useState(null);
  const [reportingRows, setReportingRows] = useState([
    { skill: "", experience: "", certification: "" },
  ]);

  const jobCategoryOptions = [
    { label: "IT", value: "it" },
    { label: "HR", value: "hr" },
  ];
  const designationOptions = [
    { label: "Developer", value: "developer" },
    { label: "Manager", value: "manager" },
  ];
  const locationOptions = [
    { label: "Colombo", value: "colombo" },
    { label: "Kandy", value: "kandy" },
  ];
  const unitOptions = [
    { label: "Unit A", value: "unitA" },
    { label: "Unit B", value: "unitB" },
  ];
  const personOptions = [
    { label: "Shanuka", value: "shanuka" },
    { label: "Imantha", value: "imantha" },
  ];

  const addReportingRow = () => {
    setReportingRows([
      ...reportingRows,
      { skill: "", experience: "", certification: "" },
    ]);
  };

  const deleteReportingRow = (index) => {
    const updatedRows = [...reportingRows];
    updatedRows.splice(index, 1);
    setReportingRows(updatedRows);
  };

  const handleReportingChange = (index, field, value) => {
    const updatedRows = [...reportingRows];
    updatedRows[index][field] = value;
    setReportingRows(updatedRows);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div className="w-full max-h-[730px] p-4">
      <form onSubmit={handleSubmit} className="space-y-6 text-sm">
        <div>
          <p className="text-base font-semibold border-b-2 pb-1 border-gray-200 mb-4">
            Job Title and Department
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Joined Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                required
                className="w-full h-8.5 border border-gray-300 text-gray-600 rounded p-1.5"
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Job Category <span className="text-red-500">*</span>
              </label>
              <Select
                isMulti
                options={jobCategoryOptions}
                value={jobCategory}
                onChange={setJobCategory}
                className="w-[360px]"
                isClearable
                classNamePrefix="custom-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: 10,
                    height: 34,
                    fontSize: 14,
                  }),
                  input: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    fontSize: 13,
                  }),
                  placeholder: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    paddingTop: 2,
                    paddingBottom: 2,
                  }),
                }}
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Designation <span className="text-red-500">*</span>
              </label>
              <Select
                isMulti
                options={designationOptions}
                value={designation}
                onChange={setDesignation}
                className="w-[350px]"
                isClearable
                classNamePrefix="custom-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: 10,
                    height: 34,
                    fontSize: 14,
                  }),
                  input: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    fontSize: 13,
                  }),
                  placeholder: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    paddingTop: 2,
                    paddingBottom: 2,
                  }),
                }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Location <span className="text-red-500">*</span>
              </label>
              <Select
                isMulti
                options={locationOptions}
                value={location}
                onChange={setLocation}
                className="w-[350px]"
                isClearable
                classNamePrefix="custom-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: 10,
                    height: 34,
                    fontSize: 14,
                  }),
                  input: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    fontSize: 13,
                  }),
                  placeholder: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    paddingTop: 2,
                    paddingBottom: 2,
                  }),
                }}
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Unit <span className="text-red-500">*</span>
              </label>
              <Select
                isMulti
                options={unitOptions}
                value={unit}
                onChange={setUnit}
                className="w-[350px]"
                isClearable
                classNamePrefix="custom-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: 10,
                    height: 34,
                    fontSize: 14,
                  }),
                  input: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    fontSize: 13,
                  }),
                  placeholder: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    paddingTop: 2,
                    paddingBottom: 2,
                  }),
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-base font-semibold border-b-2 pb-1 border-gray-200 mb-4">
            Reporting Structure
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Manager <span className="text-red-500">*</span>
              </label>
              <Select
                options={personOptions}
                value={manager}
                onChange={setManager}
                className="w-[360px]"
                isClearable
                classNamePrefix="custom-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: 10,
                    height: 34,
                    fontSize: 14,
                  }),
                  input: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    fontSize: 13,
                  }),
                  placeholder: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    paddingTop: 2,
                    paddingBottom: 2,
                  }),
                }}
              />
            </div>

            <div>
              <label className="block text-gray-600 font-medium mb-1">
                Additional Manager <span className="text-red-500">*</span>
              </label>
              <Select
                options={personOptions}
                value={additionalManager}
                onChange={setAdditionalManager}
                className="w-[360px]"
                isClearable
                classNamePrefix="custom-select"
                styles={{
                  control: (base) => ({
                    ...base,
                    minHeight: 10,
                    height: 34,
                    fontSize: 14,
                  }),
                  input: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    fontSize: 13,
                  }),
                  placeholder: (base) => ({
                    ...base,
                    fontSize: 14,
                  }),
                  valueContainer: (base) => ({
                    ...base,
                    paddingTop: 2,
                    paddingBottom: 2,
                  }),
                }}
              />
            </div>
          </div>

          <p className="text-base font-semibold border-b-2 pb-1 border-gray-200 mb-4">
            Skill and Qualification
          </p>
          <div className="overflow-y-scroll max-h-25 mb-3 rounded border border-gray-300 shadow-sm">
            <table className="w-full text-sm rounded">
              <thead>
                <tr>
                  <th className="p-2 text-left">Skill</th>
                  <th className="p-2 text-left">Experience</th>
                  <th className="p-2 text-left">Certification</th>
                </tr>
              </thead>
              <tbody>
                {reportingRows.map((row, idx) => (
                  <tr key={idx} className="even:bg-gray-50">
                    <td className="p-2">
                      <input
                        type="text"
                        value={row.skill}
                        onChange={(e) =>
                          handleReportingChange(idx, "skill", e.target.value)
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1"
                        placeholder="Enter skill"
                      />
                    </td>
                    <td className="p-2">
                      <input
                        type="number"
                        min="0"
                        value={row.experience}
                        onChange={(e) =>
                          handleReportingChange(
                            idx,
                            "experience",
                            e.target.value
                          )
                        }
                        className="w-full border border-gray-300 rounded px-2 py-1"
                        placeholder="Years"
                      />
                    </td>
                    <td className="p-2">
                      <div className="flex items-center gap-2">
                        <input
                          type="text"
                          value={row.certification}
                          onChange={(e) =>
                            handleReportingChange(
                              idx,
                              "certification",
                              e.target.value
                            )
                          }
                          className="w-full border border-gray-300 rounded px-2 py-1"
                          placeholder="Certification"
                        />
                        <button
                          type="button"
                          onClick={() => deleteReportingRow(idx)}
                          className="text-red-600 hover:text-red-800 text-lg font-bold"
                          title="Delete Row"
                        >
                          <FaTrash className="text-[13px]" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-3">
            <button
              type="button"
              onClick={addReportingRow}
              className="text-[10px] flex items-center gap-1 px-3 h-6 rounded-md bg-[#1b2231] text-white"
            >
              <FaPlus className="text-[12px]" /> Add Row
            </button>
          </div>
        </div>

        <div className="pt-4 w-full items-end justify-end flex">
          <button
            type="submit"
            className="flex items-center gap-1 p-4 h-6 rounded-md bg-[#1b2231] text-white text-[10px]"
          >
            <IoMdSave className="text-[12px]" />
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobForm;
