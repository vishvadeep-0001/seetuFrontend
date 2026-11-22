import { useMemo, useState } from "react";
import {
  UserRound,
  Search,
  Bell,
  ChevronDown,
  Plus,
  Filter,
  Eye,
  Pencil,
  Trash2,
  Menu,
  ChevronLeft,
  ChevronRight,
  Star,
} from "lucide-react";
import AdminNavbar from "./AdminNavbar";
import { Link } from "react-router-dom";

const initialColleges = [
  {
    id: 1,
    name: "Indian Institute of Technology",
    city: "New Delhi",
    state: "Delhi",
    type: "Government",
    courses: 12,
    rating: 4.8,
    status: "Verified",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=100",
    featured: true,
  },
  {
    id: 2,
    name: "AIIMS Delhi",
    city: "New Delhi",
    state: "Delhi",
    type: "Government",
    courses: 18,
    rating: 4.7,
    status: "Verified",
    image: "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=100",
    featured: true,
  },
  {
    id: 3,
    name: "Delhi Technological University",
    city: "Delhi",
    state: "Delhi",
    type: "Government",
    courses: 24,
    rating: 4.6,
    status: "Verified",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=100",
    featured: false,
  },
  {
    id: 4,
    name: "Christ University",
    city: "Bangalore",
    state: "Karnataka",
    type: "Private",
    courses: 32,
    rating: 4.5,
    status: "Pending",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=100",
    featured: true,
  },
  {
    id: 5,
    name: "Symbiosis Institute of Design",
    city: "Pune",
    state: "Maharashtra",
    type: "Private",
    courses: 15,
    rating: 4.4,
    status: "Verified",
    image: "https://images.unsplash.com/photo-1568792923760-d70635a89fdc?w=100",
    featured: false,
  },
  {
    id: 6,
    name: "Amity University",
    city: "Noida",
    state: "Uttar Pradesh",
    type: "Private",
    courses: 28,
    rating: 4.3,
    status: "Pending",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=100",
    featured: false,
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-4 md:px-7">
      <div className="flex items-center gap-4">
        <button className="text-gray-600 lg:hidden">
          <Menu size={21} />
        </button>

        <div className="hidden w-64 items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 sm:flex">
          <Search size={16} className="text-gray-400" />
          <input
            type="text"
            placeholder="Search anything..."
            className="w-full bg-transparent text-sm outline-none"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative text-gray-500">
          <Bell size={20} />
          <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-red-500" />
        </button>

        <div className="flex cursor-pointer items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 text-blue-700">
            <UserRound size={19} />
          </div>
          <span className="hidden text-sm font-semibold sm:block">Admin</span>
          <ChevronDown size={15} />
        </div>
      </div>
    </header>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Verified: "bg-emerald-50 text-emerald-700",
    Pending: "bg-orange-50 text-orange-600",
    Rejected: "bg-red-50 text-red-600",
  };

  return (
    <span
      className={`inline-flex rounded-md px-2.5 py-1 text-xs font-medium ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}

function CollegesTable({ colleges }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-212 text-left">
        <thead className="border-y border-gray-100 bg-gray-50/70">
          <tr className="text-xs font-medium text-gray-500">
            <th className="px-4 py-3">#</th>
            <th className="px-4 py-3">College</th>
            <th className="px-4 py-3">Location</th>
            <th className="px-4 py-3">Type</th>
            <th className="px-4 py-3">Courses</th>
            <th className="px-4 py-3">Rating</th>
            <th className="px-4 py-3">Status</th>
            <th className="px-4 py-3">Actions</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-gray-100">
          {colleges.map((college, index) => (
            <tr key={college.id} className="transition hover:bg-blue-50/30">
              <td className="px-4 py-3 text-sm text-gray-500">{index + 1}</td>

              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="h-10 w-10 rounded-lg border border-gray-100 object-cover"
                  />
                  <div>
                    <p className="max-w-47.5 text-sm font-semibold text-gray-800">
                      {college.name}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {college.city}, {college.state}
                    </p>
                  </div>
                </div>
              </td>

              <td className="px-4 py-3 text-sm text-gray-600">
                {college.city}
              </td>

              <td className="px-4 py-3 text-sm text-gray-600">
                {college.type}
              </td>

              <td className="px-4 py-3 text-sm text-gray-600">
                {college.courses}
              </td>

              <td className="px-4 py-3">
                <div className="flex items-center gap-1 text-sm font-medium text-gray-700">
                  <Star size={14} className="fill-yellow-400 text-yellow-400" />
                  {college.rating}
                </div>
              </td>

              <td className="px-4 py-3">
                <StatusBadge status={college.status} />
              </td>

              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <button
                    title="View college"
                    className="rounded p-1.5 text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Eye size={16} />
                  </button>

                  <button
                    title="Edit college"
                    className="rounded p-1.5 text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Pencil size={15} />
                  </button>

                  <button
                    title="Delete college"
                    className="rounded p-1.5 text-gray-500 hover:bg-red-50 hover:text-red-600"
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              </td>
            </tr>
          ))}

          {colleges.length === 0 && (
            <tr>
              <td
                colSpan="8"
                className="py-12 text-center text-sm text-gray-500"
              >
                No colleges found.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default function Colleges() {
  const [colleges] = useState(initialColleges);
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All Colleges");
  const [stateFilter, setStateFilter] = useState("All States");
  const [typeFilter, setTypeFilter] = useState("All Types");
  const [statusFilter, setStatusFilter] = useState("All Status");
  const [page, setPage] = useState(1);

  const tabs = [
    { name: "All Colleges", count: "5,248" },
    { name: "Pending Approval", count: "232" },
    { name: "Featured", count: "20" },
    { name: "Verified", count: "4,990" },
  ];

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      const matchesSearch =
        college.name.toLowerCase().includes(search.toLowerCase()) ||
        college.city.toLowerCase().includes(search.toLowerCase());

      const matchesTab =
        activeTab === "All Colleges" ||
        (activeTab === "Pending Approval" && college.status === "Pending") ||
        (activeTab === "Featured" && college.featured) ||
        (activeTab === "Verified" && college.status === "Verified");

      const matchesState =
        stateFilter === "All States" || college.state === stateFilter;

      const matchesType =
        typeFilter === "All Types" || college.type === typeFilter;

      const matchesStatus =
        statusFilter === "All Status" || college.status === statusFilter;

      return (
        matchesSearch &&
        matchesTab &&
        matchesState &&
        matchesType &&
        matchesStatus
      );
    });
  }, [colleges, search, activeTab, stateFilter, typeFilter, statusFilter]);

  const pageSize = 5;
  const totalPages = Math.max(1, Math.ceil(filteredColleges.length / pageSize));

  const visibleColleges = filteredColleges.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  const resetPage = (callback, value) => {
    callback(value);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <AdminNavbar />

      <div className="lg:ml-64">
        <Header />

        <main className="p-4 md:p-7">
          {/* Heading */}
          <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Colleges</h1>
              <p className="mt-1 text-sm text-gray-500">
                Manage all colleges, approve new listings and update
                information.
              </p>
            </div>
            <Link to="/admin/addCollege">
              <button className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700">
                <Plus size={17} />
                Add College
              </button>
            </Link>
          </div>

          {/* Tabs */}
          <div className="mb-4 flex gap-5 overflow-x-auto border-b border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => resetPage(setActiveTab, tab.name)}
                className={`whitespace-nowrap border-b-2 pb-3 text-sm transition ${
                  activeTab === tab.name
                    ? "border-blue-600 font-semibold text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-800"
                }`}
              >
                {tab.name} ({tab.count})
              </button>
            ))}
          </div>

          {/* Filters */}
          <div className="mb-5 flex flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4 lg:flex-row lg:items-center">
            <div className="flex flex-1 items-center gap-2 rounded-lg border border-gray-200 px-3 py-2.5">
              <Search size={17} className="text-gray-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => resetPage(setSearch, e.target.value)}
                placeholder="Search colleges..."
                className="w-full text-sm outline-none placeholder:text-gray-400"
              />
            </div>

            <select
              value={stateFilter}
              onChange={(e) => resetPage(setStateFilter, e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-600 outline-none"
            >
              <option>All States</option>
              <option>Delhi</option>
              <option>Karnataka</option>
              <option>Maharashtra</option>
              <option>Uttar Pradesh</option>
            </select>

            <select
              value={typeFilter}
              onChange={(e) => resetPage(setTypeFilter, e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-600 outline-none"
            >
              <option>All Types</option>
              <option>Government</option>
              <option>Private</option>
            </select>

            <select
              value={statusFilter}
              onChange={(e) => resetPage(setStatusFilter, e.target.value)}
              className="rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-600 outline-none"
            >
              <option>All Status</option>
              <option>Verified</option>
              <option>Pending</option>
              <option>Rejected</option>
            </select>

            <button
              onClick={() => {
                setSearch("");
                setStateFilter("All States");
                setTypeFilter("All Types");
                setStatusFilter("All Status");
                setActiveTab("All Colleges");
                setPage(1);
              }}
              className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700"
            >
              <Filter size={16} />
              Reset
            </button>
          </div>

          {/* Colleges Table */}
          <div className="overflow-hidden rounded-xl border border-gray-100 bg-white">
            <CollegesTable colleges={visibleColleges} />

            {/* Pagination */}
            <div className="flex flex-col justify-between gap-3 border-t border-gray-100 px-4 py-4 sm:flex-row sm:items-center">
              <p className="text-xs text-gray-500">
                Showing{" "}
                {filteredColleges.length === 0 ? 0 : (page - 1) * pageSize + 1}
                {" - "}
                {Math.min(page * pageSize, filteredColleges.length)}
                {" of "}
                {filteredColleges.length} colleges
              </p>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="rounded-md border border-gray-200 p-2 text-gray-500 hover:bg-gray-50 disabled:opacity-40"
                >
                  <ChevronLeft size={16} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (number) => (
                    <button
                      key={number}
                      onClick={() => setPage(number)}
                      className={`h-8 min-w-8 rounded-md text-xs font-medium ${
                        page === number
                          ? "bg-blue-600 text-white"
                          : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {number}
                    </button>
                  ),
                )}

                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="rounded-md border border-gray-200 p-2 text-gray-500 hover:bg-gray-50 disabled:opacity-40"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
