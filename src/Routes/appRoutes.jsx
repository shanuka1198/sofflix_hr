import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefaultLayout from "../layout/defaultLayout";
import SearchEmployee from "../page/leaves/searchEmployee";
import EmployeeDetails from "../page/employee/employeeDetails";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="admin/leave/search-employee" element={<SearchEmployee />} />
          <Route path="admin/employee/profiles" element={<EmployeeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
