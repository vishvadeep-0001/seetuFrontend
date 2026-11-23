import {
  LayoutDashboard,
  GraduationCap,
  BookOpen,
  FileText,
  BriefcaseBusiness,
  Award,
  ShieldCheck,
  Trophy,
  Users,
  Megaphone,
  CreditCard,
  Settings,
  UserRound,
  BookMarked,
} from "lucide-react";
import { useState } from "react";
const menuItems = [
  { name: "Dashboard", link: "/admin", icon: LayoutDashboard },
  { name: "Colleges", link: "/admin/colleges", icon: GraduationCap },
  { name: "Exams", link: "/admin/exams", icon: FileText },
  { name: "Rankings", link: "/admin/rankings", icon: Trophy },
  { name: "Students", link: "/admin/adminStudent", icon: Users },
  { name: "Advertisements", link: "/admin/advertisements", icon: Megaphone },
  { name: "Subscriptions", link: "/admin/subscription", icon: CreditCard },
  { name: "Counselling", link: "/admin/counselling", icon: UserRound },
  { name: "Reports", link: "/admin/reports", icon: FileText },
  { name: "Users & Permissions", link: "/admin/users", icon: ShieldCheck },
  { name: "Settings", link: "/admin/settings", icon: Settings },
];
import { NavLink } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <aside className="bg-[#142a40] text-white w-64 min-h-screen fixed left-0 top-0 hidden lg:flex flex-col z-30">
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              to={item.link}
              key={item.name}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={17} />
              <span>{item.name}</span>
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
};

export default AdminNavbar;
