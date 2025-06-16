import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaTh, FaUserAlt, FaUsers, FaSearch, FaGavel, FaCogs,
  FaCalculator, FaSuitcase, FaBolt, FaSortAmountDown,
  FaRegClock, FaBars, FaBook, FaFlagCheckered, FaTabletAlt,
  FaRegFolderOpen, FaLaptop, FaUserCircle
} from "react-icons/fa";
import { BiCalendar } from "react-icons/bi";
import { IoBagRemoveSharp } from "react-icons/io5";
import { FaBoxArchive } from "react-icons/fa6";
import {
  List, ListItemButton, ListItemIcon, ListItemText,
  Collapse, Box
} from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const menu = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: <FaTh />,
  },
  {
    name: "Admin",
    path: "/admin",
    icon: <FaUserAlt />,
    children: [
      {
        name: "Dashboard",
        path: "/admin/dashboard",
        icon: <FaTh />,
      },
      {
        name: "Employees",
        path: "/admin/employee",
        icon: <FaUsers />,
        children: [
          {
            name: "Profiles",
            path: "/admin/employee/profiles",
            icon: <FaUserCircle />,
          },
          {
            name: "Designation",
            path: "/admin/employee/designation",
            icon: <IoBagRemoveSharp />,
          },
          {
            name: "Assets",
            path: "/admin/employee/assets",
            icon: <FaBoxArchive />,
          },
          {
            name: "Configuration",
            path: "/admin/employee/configuration",
            icon: <FaCogs />,
          }
        ]
      },
      {
        name: "Leaves",
        path: "/admin/leave",
        icon: <BiCalendar />,
        children: [
          {
            name: "Search Employee",
            path: "/admin/leave/search-employee",
            icon: <FaSearch />,
          },
          {
            name: "Leave Policies",
            path: "/admin/leave/leave-policies",
            icon: <FaGavel />,
          },
          {
            name: "Configuration",
            path: "/admin/leave/configuration",
            icon: <FaCogs />,
          },
        ],
      },
      {
        name: "Expenses",
        path: "/admin/expenses",
        icon: <FaCalculator />,
      },
      {
        name: "Recruitment",
        path: "/admin/recruitment",
        icon: <FaSuitcase />,
      },
      {
        name: "Performance",
        path: "/admin/performance",
        icon: <FaBolt />,
      },
      {
        name: "Workflows",
        path: "/admin/workflows",
        icon: <FaSortAmountDown />,
      },
      {
        name: "Time & Attendance",
        path: "/admin/time-attendance",
        icon: <FaRegClock />,
      },
      {
        name: "Manage Rosters",
        path: "/admin/manage-roster",
        icon: <FaBars />,
      },
      {
        name: "Payroll",
        path: "/admin/payroll",
        icon: <FaBook />,
      },
      {
        name: "Career Development",
        path: "/admin/career-development",
        icon: <FaFlagCheckered />,
      },
      {
        name: "Internal Apps",
        path: "/admin/internal-apps",
        icon: <FaTabletAlt />,
      },
      {
        name: "Document",
        path: "/admin/documents",
        icon: <FaRegFolderOpen />,
      },
      {
        name: "E-Documents",
        path: "/admin/e-documents",
        icon: <FaLaptop />,
      },
    ],
  },
];

export default function SidebarMenu({ collapsed }) {
  const [openItems, setOpenItems] = useState({});
  const navigate = useNavigate();

  const handleToggle = (name) => {
    setOpenItems((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

 
  const renderChildrenCollapsed = (children, level = 0) => (
    <List component="div" disablePadding sx={{ pl: 3 }}>
      {children.map((child) => {
        const hasGrandChildren = child.children && child.children.length > 0;
        const isOpen = openItems[child.name];
        return (
          <React.Fragment key={child.name}>
            <ListItemButton
              onClick={() => {
                if (hasGrandChildren) {
                  handleToggle(child.name);
                } else if (child.path) {
                  navigate(child.path);
                }
              }}
              sx={{
                justifyContent: "center",
                height: 36,
                minHeight: 36,
                px: 0,
              }}
            >
              <ListItemIcon sx={{ minWidth: "auto", color: "black" }}>
                {React.cloneElement(child.icon, { style: { fontSize: 14 } })}
              </ListItemIcon>
            </ListItemButton>

            {/* Grandchildren in collapsed mode */}
            {hasGrandChildren && isOpen && renderChildrenCollapsed(child.children, level + 1)}
          </React.Fragment>
        );
      })}
    </List>
  );

  const renderMenu = (items, level = 0) =>
    items.map((item) => {
      const hasChildren = item.children && item.children.length > 0;
      const isOpen = openItems[item.name];

      return (
        <React.Fragment key={item.name}>
          <ListItemButton
            onClick={() => {
              if (hasChildren) {
                handleToggle(item.name);
              } else if (item.path) {
                navigate(item.path);
              }
            }}
            sx={{
              pl: 2 + level * 2,
              height: 36,
              fontSize: "12px",
              transition: "all 0.3s ease",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: collapsed ? "center" : "flex-start",
                gap: collapsed ? 0 : 1,
                flexGrow: 1,
                transition: "all 0.3s ease",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: "auto",
                  color: "black",
                  transition: "all 0.3s ease",
                }}
              >
                {React.cloneElement(item.icon, { style: { fontSize: 14 } })}
              </ListItemIcon>

              {!collapsed && (
                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{ fontSize: "11px" }}
                  sx={{ m: 0, opacity: 1, transition: "opacity 0.3s ease" }}
                />
              )}
            </Box>

            {!collapsed && hasChildren && (
              isOpen ? <ExpandLess fontSize="small" /> : <ExpandMore fontSize="small" />
            )}
          </ListItemButton>

  
          {hasChildren && !collapsed && (
            <Collapse
              in={isOpen}
              timeout="auto"
              unmountOnExit
            >
              <List component="div" disablePadding>
                {renderMenu(item.children, level + 1)}
              </List>
            </Collapse>
          )}

          {hasChildren && collapsed && isOpen && renderChildrenCollapsed(item.children, level + 1)}
        </React.Fragment>
      );
    });

  return (
    <List sx={{ color: "#554c4c", width: "100%", fontSize: "12px" }}>
      {renderMenu(menu)}
    </List>
  );
}
