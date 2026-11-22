import { useState } from "react";
import {
  Search,
  Bell,
  Plus,
  Users,
  GraduationCap,
  UserCheck,
  UserX,
  Eye,
  Pencil,
  Trash2,
  ChevronLeft,
  ChevronRight,
  Filter,
  Download,
  LayoutDashboard,
  School,
  BookOpen,
  FileText,
  Award,
  Trophy,
  Megaphone,
  Settings,
  Menu,
  MoreHorizontal,
  X,
  UserRound,
  ChevronDown,
} from "lucide-react";
import AdminNavbar from "./AdminNavbar";
import { Link } from "react-router-dom";

const studentsData = [
  {
    id: "STU001",
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    phone: "+91 9876543210",
    gender: "Male",
    course: "B.Tech",
    college: "IIT Delhi",
    joined: "12 Oct 2026",
    status: "Active",
  },
  {
    id: "STU002",
    name: "Priya Singh",
    email: "priya@gmail.com",
    phone: "+91 9876543211",
    gender: "Female",
    course: "MBA",
    college: "Delhi University",
    joined: "15 Oct 2026",
    status: "Active",
  },
  {
    id: "STU003",
    name: "Amit Kumar",
    email: "amit@gmail.com",
    phone: "+91 9876543212",
    gender: "Male",
    course: "MCA",
    college: "AKTU University",
    joined: "18 Oct 2026",
    status: "Inactive",
  },
  {
    id: "STU004",
    name: "Neha Verma",
    email: "neha@gmail.com",
    phone: "+91 9876543213",
    gender: "Female",
    course: "B.Sc",
    college: "Amity University",
    joined: "20 Oct 2026",
    status: "Active",
  },
  {
    id: "STU005",
    name: "Vikas Yadav",
    email: "vikas@gmail.com",
    phone: "+91 9876543214",
    gender: "Male",
    course: "12th",
    college: "UP Board",
    joined: "22 Oct 2026",
    status: "Pending",
  },
];

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Colleges", icon: School },
  { name: "Courses", icon: BookOpen },
  { name: "Exams", icon: FileText },
  { name: "Careers", icon: GraduationCap },
  { name: "Scholarships", icon: Award },
  { name: "Rankings", icon: Trophy },
  { name: "Students", icon: Users },
  { name: "Advertisements", icon: Megaphone },
  { name: "Reports", icon: FileText },
  { name: "Settings", icon: Settings },
];

export default function Students() {
  const [students, setStudents] = useState(studentsData);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All Status");
  const [course, setCourse] = useState("All Courses");
  const [activeMenu, setActiveMenu] = useState("Students");
  const [page, setPage] = useState(1);

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.email.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus = status === "All Status" || student.status === status;

    const matchesCourse = course === "All Courses" || student.course === course;

    return matchesSearch && matchesStatus && matchesCourse;
  });
  function Header() {
    return (
      <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-7 sticky top-0 z-20">
        <div className="flex items-center gap-4">
          <button className="text-gray-600 lg:hidden">
            <Menu size={22} />
          </button>

          <div className="hidden md:flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 w-64">
            <Search size={17} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search anything..."
              className="bg-transparent outline-none text-sm w-full"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="relative text-gray-500">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
              <UserRound size={20} />
            </div>

            <div className="hidden sm:block">
              <p className="text-sm font-semibold text-gray-800">Admin</p>
              <p className="text-xs text-gray-500">Super Admin</p>
            </div>

            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </header>
    );
  }

  const activeStudents = students.filter((s) => s.status === "Active").length;

  const deleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      setStudents((prev) => prev.filter((s) => s.id !== id));
    }
  };

  const stats = [
    {
      title: "Total Students",
      value: students.length.toLocaleString(),
      change: "+12.5%",
      icon: Users,
      color: "blue",
      bg: "bg-blue-50",
    },
    {
      title: "Active Students",
      value: activeStudents.toLocaleString(),
      change: "+8.2%",
      icon: UserCheck,
      color: "green",
      bg: "bg-green-50",
    },
    {
      title: "Inactive Students",
      value: students.filter((s) => s.status === "Inactive").length,
      change: "Students",
      icon: UserX,
      color: "red",
      bg: "bg-red-50",
    },
    {
      title: "Total Courses",
      value: "24",
      change: "+4.5%",
      icon: GraduationCap,
      color: "purple",
      bg: "bg-purple-50",
    },
  ];

  const statusStyle = {
    Active: "bg-green-100 text-green-700",
    Inactive: "bg-red-100 text-red-700",
    Pending: "bg-yellow-100 text-yellow-700",
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <AdminNavbar />
      <div className="lg:ml-64">
        <Header />
        {/* Main Content */}
        <main className="flex-1 min-w-0">
          {/* Page Content */}
          <div className="p-4 md:p-7">
            {/* Title */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-7">
              <div>
                <h1 className="text-2xl font-bold">Students</h1>
                <p className="text-sm text-gray-500 mt-1">
                  Manage all registered students on your Seetu platform
                </p>
              </div>

              <div className="flex gap-2">
                <button className="flex items-center gap-2 px-4 py-2.5 border bg-white rounded-md text-sm hover:bg-gray-50">
                  <Download size={16} /> Export
                </button>

                <Link to="/newStudent">
                  <button className="flex items-center gap-2 px-4 py-2.5 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700">
                    <Plus size={17} /> Add Student
                  </button>
                </Link>
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-7">
              {stats.map((stat) => {
                const Icon = stat.icon;

                return (
                  <div
                    key={stat.title}
                    className="bg-white p-5 rounded-lg border border-gray-100 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">{stat.title}</p>
                        <h2 className="text-2xl font-bold mt-2">
                          {stat.value}
                        </h2>
                        <p className="text-xs text-green-600 mt-2">
                          {stat.change}
                        </p>
                      </div>

                      <div className={`${stat.bg} p-3 rounded-lg`}>
                        <Icon size={23} className={`text-${stat.color}-600`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Student Table */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm">
              <div className="p-5 border-b">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-semibold text-lg">All Students</h2>
                    <p className="text-xs text-gray-500 mt-1">
                      View and manage registered student information
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    {/* Search */}
                    <div className="relative">
                      <Search
                        size={17}
                        className="absolute left-3 top-2.5 text-gray-400"
                      />
                      <input
                        value={search}
                        onChange={(e) => {
                          setSearch(e.target.value);
                          setPage(1);
                        }}
                        placeholder="Search students..."
                        className="pl-9 pr-3 py-2 border rounded-md text-sm w-full sm:w-52 outline-none focus:border-blue-500"
                      />
                    </div>

                    {/* Course Filter */}
                    <select
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="border rounded-md px-3 py-2 text-sm outline-none"
                    >
                      <option>All Courses</option>
                      <option>B.Tech</option>
                      <option>MBA</option>
                      <option>MCA</option>
                      <option>B.Sc</option>
                      <option>12th</option>
                    </select>

                    {/* Status Filter */}
                    <select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="border rounded-md px-3 py-2 text-sm outline-none"
                    >
                      <option>All Status</option>
                      <option>Active</option>
                      <option>Inactive</option>
                      <option>Pending</option>
                    </select>

                    <button className="flex items-center justify-center gap-2 border rounded-md px-3 py-2 text-sm hover:bg-gray-50">
                      <Filter size={16} /> Filter
                    </button>
                  </div>
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left whitespace-nowrap">
                  <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                    <tr>
                      <th className="px-5 py-4">
                        <input type="checkbox" />
                      </th>
                      <th className="px-4 py-4">Student</th>
                      <th className="px-4 py-4">Student ID</th>
                      <th className="px-4 py-4">Course</th>
                      <th className="px-4 py-4">College / University</th>
                      <th className="px-4 py-4">Gender</th>
                      <th className="px-4 py-4">Joined Date</th>
                      <th className="px-4 py-4">Status</th>
                      <th className="px-4 py-4 text-center">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="divide-y divide-gray-100">
                    {filteredStudents.map((student) => (
                      <tr key={student.id} className="hover:bg-gray-50">
                        <td className="px-5 py-4">
                          <input type="checkbox" />
                        </td>

                        <td className="px-4 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">
                              {student.name.charAt(0)}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                {student.name}
                              </p>
                              <p className="text-xs text-gray-500">
                                {student.email}
                              </p>
                            </div>
                          </div>
                        </td>

                        <td className="px-4 py-4 text-gray-600">
                          {student.id}
                        </td>
                        <td className="px-4 py-4">{student.course}</td>
                        <td className="px-4 py-4 text-gray-600">
                          {student.college}
                        </td>
                        <td className="px-4 py-4">{student.gender}</td>
                        <td className="px-4 py-4 text-gray-600">
                          {student.joined}
                        </td>

                        <td className="px-4 py-4">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyle[student.status]}`}
                          >
                            {student.status}
                          </span>
                        </td>

                        <td className="px-4 py-4">
                          <div className="flex items-center justify-center gap-3">
                            <button
                              title="View"
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <Eye size={17} />
                            </button>
                            <button
                              title="Edit"
                              className="text-gray-500 hover:text-blue-600"
                            >
                              <Pencil size={16} />
                            </button>
                            <button
                              title="Delete"
                              onClick={() => deleteStudent(student.id)}
                              className="text-red-500 hover:text-red-700"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}

                    {filteredStudents.length === 0 && (
                      <tr>
                        <td
                          colSpan="9"
                          className="text-center py-12 text-gray-500"
                        >
                          No students found.
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="p-5 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  Showing {filteredStudents.length} of {students.length}{" "}
                  students
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setPage(Math.max(1, page - 1))}
                    className="p-2 border rounded-md hover:bg-gray-50"
                  >
                    <ChevronLeft size={17} />
                  </button>

                  <button className="w-8 h-8 bg-blue-600 text-white rounded-md text-sm">
                    {page}
                  </button>

                  <button
                    onClick={() => setPage(page + 1)}
                    className="p-2 border rounded-md hover:bg-gray-50"
                  >
                    <ChevronRight size={17} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
