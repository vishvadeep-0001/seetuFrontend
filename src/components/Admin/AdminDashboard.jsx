import {
  GraduationCap,
  BookOpen,
  FileText,
  Award,
  Users,
  CreditCard,
  Search,
  Bell,
  ChevronDown,
  CalendarDays,
  UserRound,
  Wallet,
  Menu,
} from "lucide-react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import AdminNavbar from "./AdminNavbar";

const stats = [
  {
    title: "Total Colleges",
    value: "5,248",
    growth: "+12%",
    icon: GraduationCap,
    color: "blue",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    title: "Students",
    value: "32,650",
    growth: "+18%",
    icon: Users,
    color: "purple",
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
  {
    title: "Exams",
    value: "215",
    growth: "+5%",
    icon: FileText,
    bg: "bg-pink-50",
    text: "text-pink-600",
  },
  {
    title: "Courses",
    value: "1,120",
    growth: "+10%",
    icon: BookOpen,
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    title: "Scholarships",
    value: "420",
    growth: "+8%",
    icon: Award,
    bg: "bg-orange-50",
    text: "text-orange-600",
  },
  {
    title: "Applications",
    value: "2,450",
    growth: "+22%",
    icon: FileText,
    bg: "bg-cyan-50",
    text: "text-cyan-600",
  },
  {
    title: "Premium Users",
    value: "1,890",
    growth: "+20%",
    icon: Wallet,
    bg: "bg-yellow-50",
    text: "text-yellow-600",
  },
  {
    title: "Ad Revenue",
    value: "₹4,25,000",
    growth: "+16%",
    icon: CreditCard,
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
];

const chartData = [
  { month: "Jan", students: 250 },
  { month: "Feb", students: 400 },
  { month: "Mar", students: 350 },
  { month: "Apr", students: 550 },
  { month: "May", students: 800 },
  { month: "Jun", students: 700 },
  { month: "Jul", students: 900 },
  { month: "Aug", students: 850 },
  { month: "Sep", students: 1150 },
  { month: "Oct", students: 1300 },
];

const activities = [
  {
    title: "New college registration",
    description: "Delhi Institute of Technology",
    time: "2 min ago",
    icon: GraduationCap,
    bg: "bg-blue-50",
    color: "text-blue-600",
  },
  {
    title: "New student registered",
    description: "student@gmail.com",
    time: "10 min ago",
    icon: Users,
    bg: "bg-purple-50",
    color: "text-purple-600",
  },
  {
    title: "New scholarship added",
    description: "Central Govt Scholarship 2026",
    time: "30 min ago",
    icon: Award,
    bg: "bg-orange-50",
    color: "text-orange-600",
  },
  {
    title: "Payment received",
    description: "₹999 from Student (Premium)",
    time: "1 hour ago",
    icon: Wallet,
    bg: "bg-emerald-50",
    color: "text-emerald-600",
  },
];

function StatCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition">
      <div className="flex items-center gap-3">
        <div className={`${item.bg} ${item.text} p-2.5 rounded-lg`}>
          <Icon size={21} />
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-bold text-gray-800">{item.value}</h3>
          <p className="text-xs text-gray-500 mt-1">{item.title}</p>
          <p className="text-xs text-emerald-600 font-medium mt-1">
            {item.growth}
          </p>
        </div>
      </div>
    </div>
  );
}

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

function RegistrationChart() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="font-semibold text-gray-800">
            New Student Registrations
          </h2>
          <p className="text-xs text-gray-400 mt-1">Student growth overview</p>
        </div>

        <select className="text-xs border border-gray-200 rounded-md px-2 py-2 outline-none">
          <option>This Year</option>
          <option>Last Year</option>
          <option>This Month</option>
        </select>
      </div>

      <div className="h-60 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="studentGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.02} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" vertical={false} />

            <XAxis
              dataKey="month"
              tick={{ fontSize: 11 }}
              axisLine={false}
              tickLine={false}
            />

            <YAxis tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="students"
              stroke="#3b82f6"
              strokeWidth={2}
              fill="url(#studentGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function RecentActivities() {
  return (
    <div className="bg-white rounded-xl border border-gray-100 p-5">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-semibold text-gray-800">Recent Activities</h2>

        <button className="text-blue-600 text-xs font-semibold">
          View All
        </button>
      </div>

      <div className="space-y-5">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div key={index} className="flex items-start gap-3">
              <div
                className={`${activity.bg} ${activity.color} p-2 rounded-lg`}
              >
                <Icon size={17} />
              </div>

              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-gray-800">
                  {activity.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1 truncate">
                  {activity.description}
                </p>
              </div>

              <span className="text-[10px] text-gray-400 whitespace-nowrap">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#f5f7fb]">
      <AdminNavbar />

      <div className="lg:ml-64">
        <Header />

        <main className="p-4 md:p-7">
          {/* Dashboard Heading */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-sm text-gray-500 mt-1">
                Overview of your Seetu platform
              </p>
            </div>

            <button className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-3 py-2 text-xs text-gray-600">
              <CalendarDays size={15} />
              Oct 1, 2026 - Oct 30, 2026
              <ChevronDown size={14} />
            </button>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
            {stats.map((item) => (
              <StatCard key={item.title} item={item} />
            ))}
          </div>

          {/* Analytics */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">
            <div className="xl:col-span-3">
              <RegistrationChart />
            </div>

            <div className="xl:col-span-2">
              <RecentActivities />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
