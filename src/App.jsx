import { useEffect, useState } from 'react';
import {
  LayoutDashboard,
  Wallet,
  ArrowDownCircle,
  ArrowUpCircle,
  FileText,
  Settings,
  Bell,
  Search,
  Plus,
  CreditCard,
  Users,
  TrendingUp,
  Calendar,
  Receipt,
  Shield,
  Moon,
  Sun,
  BarChart3,
  PieChart,
  Download,
  Upload,
  UserPlus,
  BadgeDollarSign,
  Bot,
  Smartphone,
  Globe,
  CheckCircle2,
} from 'lucide-react';

function LoginPage({ onLogin }) {

  if (!isAuthenticated) {
    return (
      <LoginPage
        onLogin={() => {
          localStorage.setItem('ngelola-duit-auth', 'true');
          setIsAuthenticated(true);
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] flex items-center justify-center p-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 bg-white rounded-[32px] shadow-xl overflow-hidden max-w-6xl w-full">
        <div className="hidden lg:flex flex-col justify-between bg-black text-white p-12">
          <div>
            <h1 className="text-5xl font-bold mb-4">Ngelola Duit</h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Platform SaaS manajemen keuangan modern untuk bisnis Indonesia.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="font-semibold mb-2">Realtime Analytics</h3>
              <p className="text-sm text-gray-300">
                Pantau cashflow bisnis secara realtime.
              </p>
            </div>

            <div className="bg-white/10 rounded-2xl p-5">
              <h3 className="font-semibold mb-2">AI Financial Insight</h3>
              <p className="text-sm text-gray-300">
                Analisa otomatis pemasukan dan pengeluaran.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 lg:p-14 flex flex-col justify-center">
          <div className="mb-10">
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
              Welcome Back 👋
            </h2>
            <p className="text-gray-500">
              Login untuk mengakses dashboard keuangan kamu.
            </p>
          </div>

          <div className="space-y-5">
            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Email
              </label>
              <input
                type="email"
                placeholder="admin@ngeloladuit.com"
                className="w-full border rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 mb-2 block">
                Password
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full border rounded-2xl px-5 py-4 outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" />
                Remember me
              </label>

              <button className="text-black font-medium hover:underline">
                Forgot Password?
              </button>
            </div>

            <button
              onClick={onLogin}
              className="w-full bg-black text-white py-4 rounded-2xl font-semibold hover:opacity-90 transition"
            >
              Login Sekarang
            </button>

            <button className="w-full border py-4 rounded-2xl font-medium hover:bg-gray-50 transition">
              Login dengan Google
            </button>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            Belum punya akun?{' '}
            <span className="text-black font-semibold cursor-pointer hover:underline">
              Register
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FinanceSaaSApp() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('ngelola-duit-auth');

    if (session === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('ngelola-duit-auth');
    setIsAuthenticated(false);
  };
  const [activeMenu, setActiveMenu] = useState('Dashboard');
  const [darkMode, setDarkMode] = useState(false);

  const teamMembers = [
    {
      name: 'Arga Admin',
      role: 'Owner',
    },
    {
      name: 'Finance Staff',
      role: 'Finance',
    },
    {
      name: 'Marketing Team',
      role: 'Marketing',
    },
  ];

  const aiInsights = [
    'Pengeluaran iklan naik 18% dibanding minggu lalu.',
    'Cashflow bisnis masih sehat untuk 3 bulan ke depan.',
    'Subscription bulanan mengalami peningkatan revenue.',
  ];

  const stats = [
    {
      title: 'Total Saldo',
      value: 'Rp 128.500.000',
      icon: <Wallet size={22} />,
    },
    {
      title: 'Pemasukan',
      value: 'Rp 45.200.000',
      icon: <ArrowDownCircle size={22} />,
    },
    {
      title: 'Pengeluaran',
      value: 'Rp 19.800.000',
      icon: <ArrowUpCircle size={22} />,
    },
    {
      title: 'Profit Bulan Ini',
      value: '+18.5%',
      icon: <TrendingUp size={22} />,
    },
  ];

  const transactions = [
    {
      name: 'Pembayaran Hosting',
      category: 'Server',
      amount: '-Rp 850.000',
      status: 'Berhasil',
      date: '18 Mei 2026',
      type: 'expense',
    },
    {
      name: 'Pembayaran Client Website',
      category: 'Income',
      amount: '+Rp 12.500.000',
      status: 'Berhasil',
      date: '18 Mei 2026',
      type: 'income',
    },
    {
      name: 'Iklan Facebook Ads',
      category: 'Marketing',
      amount: '-Rp 2.300.000',
      status: 'Pending',
      date: '17 Mei 2026',
      type: 'expense',
    },
    {
      name: 'Subscription SaaS',
      category: 'Recurring',
      amount: '+Rp 5.200.000',
      status: 'Berhasil',
      date: '16 Mei 2026',
      type: 'income',
    },
  ];

  const invoices = [
    {
      id: '#INV-1021',
      client: 'PT Digital Nusantara',
      total: 'Rp 8.500.000',
      status: 'Paid',
    },
    {
      id: '#INV-1022',
      client: 'CV Media Kreatif',
      total: 'Rp 4.200.000',
      status: 'Pending',
    },
  ];

  const menu = [
    {
      name: 'Dashboard',
      icon: <LayoutDashboard size={20} />,
    },
    {
      name: 'Transaksi',
      icon: <CreditCard size={20} />,
    },
    {
      name: 'Invoice',
      icon: <Receipt size={20} />,
    },
    {
      name: 'Analytics',
      icon: <BarChart3 size={20} />,
    },
    {
      name: 'Laporan',
      icon: <FileText size={20} />,
    },
    {
      name: 'Multi User',
      icon: <Users size={20} />,
    },
    {
      name: 'AI Insights',
      icon: <Bot size={20} />,
    },
    {
      name: 'Pengaturan',
      icon: <Settings size={20} />,
    },
  ];

  return (
    <div className={`min-h-screen flex transition-all ${darkMode ? 'bg-[#0f172a] text-white' : 'bg-[#f5f7fb] text-gray-800'}`}>
      {/* Sidebar */}
      <aside className="hidden lg:flex flex-col w-72 bg-white border-r px-6 py-8">
        <div className="mb-10">
          <h1 className="text-3xl font-bold tracking-tight">
            Ngelola Duit
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            SaaS Manajemen Keuangan Modern Indonesia
          </p>
        </div>

        <nav className="space-y-2 flex-1">
          {menu.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveMenu(item.name)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl transition-all ${
                activeMenu === item.name
                  ? 'bg-black text-white shadow-lg'
                  : 'hover:bg-gray-100 text-gray-700'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.name}</span>
            </button>
          ))}
        </nav>

        <div className="bg-black text-white rounded-3xl p-5 mt-8">
          <h3 className="font-semibold text-lg mb-2">
            Upgrade Premium
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Dapatkan fitur export laporan, multi user, dan analytics.
          </p>

          <button className="bg-white text-black w-full py-3 rounded-2xl font-semibold">
            Upgrade Sekarang
          </button>
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 p-5 md:p-8 overflow-y-auto">
        {/* Topbar */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">
          <div>
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <p className="text-gray-500 mt-1">
              Kelola keuangan bisnis kamu lebih mudah dan realtime.
            </p>
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <div className="bg-white border rounded-2xl px-4 py-3 flex items-center gap-3 min-w-[280px]">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Cari transaksi, invoice..."
                className="outline-none bg-transparent w-full text-sm"
              />
            </div>

            <button
              onClick={() => setDarkMode(!darkMode)}
              className="bg-white border rounded-2xl p-3 hover:bg-gray-50"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button className="bg-white border rounded-2xl p-3 hover:bg-gray-50">
              <Bell size={20} />
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-5 py-3 rounded-2xl font-medium hover:opacity-90"
            >
              Logout
            </button>

            <button className="bg-black text-white px-5 py-3 rounded-2xl flex items-center gap-2 font-medium hover:opacity-90">
              <Plus size={18} />
              Tambah Data
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 mb-8">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl border p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="bg-gray-100 p-3 rounded-2xl">
                  {item.icon}
                </div>

                <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
                  +12%
                </span>
              </div>

              <p className="text-gray-500 text-sm mb-1">{item.title}</p>
              <h3 className="text-2xl font-bold">{item.value}</h3>
            </div>
          ))}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
          {/* Chart */}
          <div className="xl:col-span-2 bg-white rounded-3xl border p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold">Analytics Keuangan</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Monitoring cashflow bisnis secara realtime.
                </p>
              </div>

              <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-2xl text-sm">
                <Calendar size={16} />
                30 Hari Terakhir
              </div>
            </div>

            <div className="h-80 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl flex items-center justify-center text-gray-400 text-sm border border-dashed">
              Realtime Revenue Analytics Chart
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-3xl border p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6">Quick Actions</h3>

            <div className="space-y-4">
              <button className="w-full bg-black text-white p-4 rounded-2xl text-left hover:opacity-90 transition">
                <h4 className="font-semibold mb-1">Tambah Transaksi</h4>
                <p className="text-sm text-gray-300">
                  Input pemasukan atau pengeluaran baru.
                </p>
              </button>

              <button className="w-full bg-gray-100 p-4 rounded-2xl text-left hover:bg-gray-200 transition">
                <h4 className="font-semibold mb-1">Buat Invoice</h4>
                <p className="text-sm text-gray-500">
                  Generate invoice otomatis untuk client.
                </p>
              </button>

              <button className="w-full bg-gray-100 p-4 rounded-2xl text-left hover:bg-gray-200 transition">
                <h4 className="font-semibold mb-1">Export Laporan</h4>
                <p className="text-sm text-gray-500">
                  Download PDF atau Excel laporan keuangan.
                </p>
              </button>
            </div>
          </div>
        </div>

        {/* Transactions + Invoice */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Transactions */}
          <div className="xl:col-span-2 bg-white rounded-3xl border p-6 shadow-sm overflow-x-auto">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold">Transaksi Terbaru</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Seluruh aktivitas keuangan terbaru.
                </p>
              </div>

              <button className="text-sm font-medium hover:underline">
                Lihat Semua
              </button>
            </div>

            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b text-left text-gray-500 text-sm">
                  <th className="pb-4 font-medium">Nama</th>
                  <th className="pb-4 font-medium">Kategori</th>
                  <th className="pb-4 font-medium">Tanggal</th>
                  <th className="pb-4 font-medium">Status</th>
                  <th className="pb-4 font-medium text-right">Jumlah</th>
                </tr>
              </thead>

              <tbody>
                {transactions.map((item, index) => (
                  <tr key={index} className="border-b last:border-none">
                    <td className="py-5 font-medium">{item.name}</td>
                    <td className="py-5 text-gray-500">{item.category}</td>
                    <td className="py-5 text-gray-500">{item.date}</td>
                    <td className="py-5">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          item.status === 'Berhasil'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td
                      className={`py-5 text-right font-semibold ${
                        item.type === 'income'
                          ? 'text-green-600'
                          : 'text-red-500'
                      }`}
                    >
                      {item.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Invoice */}
          <div className="bg-white rounded-3xl border p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold">Invoice</h3>
                <p className="text-gray-500 text-sm mt-1">
                  Status invoice client terbaru.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {invoices.map((item, index) => (
                <div
                  key={index}
                  className="border rounded-2xl p-4 hover:bg-gray-50 transition"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="font-semibold">{item.id}</h4>
                      <p className="text-sm text-gray-500 mt-1">
                        {item.client}
                      </p>
                    </div>

                    <span
                      className={`text-xs px-3 py-1 rounded-full font-medium ${
                        item.status === 'Paid'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {item.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-lg">{item.total}</span>

                    <button className="text-sm font-medium hover:underline">
                      Detail
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
          {/* Team Management */}
          <div className="bg-white rounded-3xl border p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold">Multi User Team</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Kelola akses staff dan divisi.
                </p>
              </div>

              <button className="bg-black text-white p-3 rounded-2xl">
                <UserPlus size={18} />
              </button>
            </div>

            <div className="space-y-4">
              {teamMembers.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border rounded-2xl p-4"
                >
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-500">{item.role}</p>
                  </div>

                  <CheckCircle2 className="text-green-500" size={20} />
                </div>
              ))}
            </div>
          </div>

          {/* AI Insight */}
          <div className="bg-white rounded-3xl border p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-black text-white p-3 rounded-2xl">
                <Bot size={20} />
              </div>

              <div>
                <h3 className="text-xl font-bold">AI Financial Insight</h3>
                <p className="text-sm text-gray-500">
                  Analisa otomatis keuangan bisnis.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {aiInsights.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-2xl p-4 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* SaaS Features */}
          <div className="bg-white rounded-3xl border p-6 shadow-sm">
            <h3 className="text-xl font-bold mb-6">
              Enterprise Features
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 border rounded-2xl p-4">
                <Shield size={22} />
                <div>
                  <h4 className="font-semibold">Role Management</h4>
                  <p className="text-sm text-gray-500">
                    Hak akses admin & staff.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border rounded-2xl p-4">
                <Download size={22} />
                <div>
                  <h4 className="font-semibold">Export PDF & Excel</h4>
                  <p className="text-sm text-gray-500">
                    Download laporan otomatis.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border rounded-2xl p-4">
                <BadgeDollarSign size={22} />
                <div>
                  <h4 className="font-semibold">Payment Gateway</h4>
                  <p className="text-sm text-gray-500">
                    Midtrans & Xendit integration.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border rounded-2xl p-4">
                <Smartphone size={22} />
                <div>
                  <h4 className="font-semibold">Responsive Mobile</h4>
                  <p className="text-sm text-gray-500">
                    Optimized semua device.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 border rounded-2xl p-4">
                <Globe size={22} />
                <div>
                  <h4 className="font-semibold">Multi Tenant SaaS</h4>
                  <p className="text-sm text-gray-500">
                    Bisa dipakai banyak perusahaan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 bg-black text-white rounded-3xl p-8 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <h3 className="text-3xl font-bold mb-2">Ngelola Duit</h3>
            <p className="text-gray-300 max-w-xl">
              Platform SaaS manajemen keuangan modern untuk UMKM, startup, dan bisnis digital Indonesia.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button className="bg-white text-black px-5 py-3 rounded-2xl font-semibold">
              Start Free Trial
            </button>

            <button className="border border-white px-5 py-3 rounded-2xl font-semibold">
              Lihat Pricing
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
