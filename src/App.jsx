import React, { useState } from 'react';
import { Home, User, Calendar, CreditCard, Star, Menu, Search, MapPin, Clock, DollarSign, MessageSquare, Bell, LogOut, Settings, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

// --- MAIN CONTAINER ---
const BSS_Wireframes = () => {
  const [currentScreen, setCurrentScreen] = useState('home');

  const screens = {
    home: { name: 'Trang chủ', component: <HomeScreen /> },
    login: { name: 'Đăng nhập', component: <LoginScreen /> },
    location: { name: 'Chọn Vị trí (Travel Mode)', component: <LocationPickerScreen /> }, // Mới thêm theo Source 741
    serviceDetail: { name: 'Chi tiết dịch vụ', component: <ServiceDetailScreen /> },
    booking: { name: 'Chọn lịch đặt', component: <BookingScreen /> },
    checkout: { name: 'Thanh toán', component: <CheckoutScreen /> },
    waiting: { name: 'Phòng chờ (Queue)', component: <WaitingRoomScreen /> }, // Mới thêm theo Source 734
    profile: { name: 'Hồ sơ cá nhân', component: <ProfileScreen /> }, // Mới thêm theo Source 672
    providerDashboard: { name: 'Dashboard Provider', component: <ProviderDashboardScreen /> },
    adminDashboard: { name: 'Admin Dashboard', component: <AdminDashboardScreen /> }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 font-sans text-gray-800">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-2 text-blue-900">
          BSS Wireframes - Hệ Thống Đặt Lịch
        </h1>
        <p className="text-center text-gray-500 mb-6 italic">
          Mô phỏng dựa trên tài liệu đặc tả (Source: Báo cáo BSS)
        </p>
        
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 sticky top-0 z-50">
          <div className="flex flex-wrap gap-2 justify-center">
            {Object.keys(screens).map(key => (
              <button
                key={key}
                onClick={() => setCurrentScreen(key)}
                className={`px-3 py-2 rounded text-sm font-medium transition-colors ${
                  currentScreen === key 
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {screens[key].name}
              </button>
            ))}
          </div>
        </div>

        {/* Screen Display Area */}
        <div className="bg-white rounded-xl shadow-xl p-8 min-h-[600px] flex justify-center bg-dot-pattern">
          {screens[currentScreen].component}
        </div>
      </div>
    </div>
  );
};

// --- COMPONENT MÀN HÌNH ---

const HomeScreen = () => (
  <div className="border border-gray-200 rounded-3xl p-4 w-[375px] h-[812px] bg-white shadow-2xl overflow-y-auto relative">
    {/* Header */}
    <div className="flex items-center justify-between mb-4 pb-3 sticky top-0 bg-white z-10 pt-2">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">B</div>
        <span className="font-bold text-lg text-blue-900">BSS</span>
      </div>
      <div className="flex items-center gap-3">
        <Bell className="w-6 h-6 text-gray-600" />
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>

    {/* Location & Search */}
    <div className="mb-4">
        <div className="flex items-center gap-1 text-sm text-gray-500 mb-2 cursor-pointer hover:text-blue-600">
            <MapPin className="w-4 h-4" />
            <span>TP. Hồ Chí Minh</span>
            <span className="text-xs text-blue-500">(Thay đổi)</span>
        </div>
      <div className="flex items-center gap-2 border rounded-xl p-3 bg-gray-50 shadow-sm">
        <Search className="w-5 h-5 text-gray-400" />
        <input 
          type="text" 
          placeholder="Tìm dịch vụ, spa, bác sĩ..." 
          className="bg-transparent flex-1 outline-none text-sm"
          readOnly
        />
      </div>
    </div>

    {/* Banner */}
    <div className="mb-6 h-36 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-between px-6 text-white shadow-lg relative overflow-hidden">
        <div className="z-10">
            <p className="text-xs font-medium opacity-80 mb-1">CHÀO HÈ RỰC RỠ</p>
            <p className="font-bold text-2xl mb-2">Giảm 50%</p>
            <button className="bg-white text-blue-600 px-3 py-1 rounded-full text-xs font-bold shadow">Đặt ngay</button>
        </div>
        <div className="absolute right-[-20px] bottom-[-20px] w-24 h-24 bg-white opacity-20 rounded-full"></div>
    </div>

    {/* Categories (Source 790) */}
    <div className="mb-6">
      <h3 className="font-bold text-gray-800 mb-3">Danh mục</h3>
      <div className="grid grid-cols-4 gap-4">
        {['Spa', 'Y tế', 'Sửa chữa', 'Khác'].map((cat, i) => (
          <div key={cat} className="flex flex-col items-center gap-2 cursor-pointer group">
            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                i === 0 ? 'bg-pink-100 text-pink-600' : 
                i === 1 ? 'bg-blue-100 text-blue-600' :
                i === 2 ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'
            }`}>
              <Star className="w-6 h-6" />
            </div>
            <p className="text-xs font-medium text-gray-600">{cat}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Services Near You (Source 77) */}
    <div className="mb-20">
      <h3 className="font-bold text-gray-800 mb-3 flex items-center justify-between">
        <span>Gần bạn</span>
        <span className="text-xs text-blue-600 font-normal cursor-pointer">Xem tất cả</span>
      </h3>
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="bg-white border border-gray-100 rounded-xl p-3 flex gap-3 shadow-sm hover:shadow-md transition-shadow cursor-pointer">
            <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0 flex items-center justify-center text-gray-400">
              IMG
            </div>
            <div className="flex-1 py-1">
              <div className="flex justify-between items-start">
                  <h4 className="font-bold text-gray-800">Spa Lotus Luxury</h4>
                  <span className="bg-green-100 text-green-700 text-[10px] px-2 py-0.5 rounded-full font-bold">MỞ CỬA</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-500 my-1">
                <MapPin className="w-3 h-3" />
                <span>2.5 km • Quận 1</span>
              </div>
              <div className="flex items-center gap-1 text-xs mb-2">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="font-bold text-gray-800">4.8</span>
                <span className="text-gray-400">(120+ đánh giá)</span>
              </div>
              <div className="flex gap-2 mt-2">
                  <span className="text-xs border border-gray-200 px-2 py-1 rounded text-gray-600">Massage</span>
                  <span className="text-xs border border-gray-200 px-2 py-1 rounded text-gray-600">Gội đầu</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Bottom Nav */}
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t py-3 px-6 flex justify-between items-center rounded-b-3xl">
      <div className="flex flex-col items-center gap-1 text-blue-600">
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-bold">Trang chủ</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600 cursor-pointer">
          <Calendar className="w-6 h-6" />
          <span className="text-[10px]">Lịch đặt</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600 cursor-pointer">
          <MessageSquare className="w-6 h-6" />
          <span className="text-[10px]">Tin nhắn</span>
      </div>
      <div className="flex flex-col items-center gap-1 text-gray-400 hover:text-blue-600 cursor-pointer">
          <User className="w-6 h-6" />
          <span className="text-[10px]">Cá nhân</span>
      </div>
    </div>
  </div>
);

// Mới thêm: Màn hình Login (F01 - Source 505)
const LoginScreen = () => (
  <div className="border border-gray-200 rounded-3xl p-8 w-[375px] h-[812px] bg-white shadow-2xl flex flex-col justify-center">
    <div className="text-center mb-8">
      <div className="w-16 h-16 bg-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center">
          <span className="text-white text-2xl font-bold">B</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900">Chào mừng trở lại!</h2>
      <p className="text-gray-500 text-sm mt-2">Đăng nhập để đặt lịch dịch vụ ngay</p>
    </div>

    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email / Số điện thoại</label>
        <input 
          type="text" 
          className="w-full border border-gray-300 rounded-xl p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" 
          placeholder="example@email.com"
          readOnly
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Mật khẩu</label>
        <input 
          type="password" 
          className="w-full border border-gray-300 rounded-xl p-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 outline-none" 
          placeholder="••••••••"
          readOnly
        />
      </div>

      <div className="flex justify-end">
        <a href="#" className="text-sm text-blue-600 font-medium">Quên mật khẩu?</a>
      </div>

      <button className="w-full bg-blue-600 text-white rounded-xl p-3 font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 transition">
        Đăng nhập
      </button>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-400">Hoặc tiếp tục với</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button className="border border-gray-200 rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-gray-50">
          <span className="text-lg">G</span>
          <span className="text-sm font-medium">Google</span>
        </button>
        <button className="border border-gray-200 rounded-xl p-3 flex items-center justify-center gap-2 hover:bg-gray-50">
          <span className="text-lg">f</span>
          <span className="text-sm font-medium">Facebook</span>
        </button>
      </div>

      <p className="text-center text-sm text-gray-600 mt-6">
        Chưa có tài khoản? <a href="#" className="text-blue-600 font-bold">Đăng ký ngay</a>
      </p>
    </div>
  </div>
);

// Mới thêm: Màn hình Chọn vị trí (Source 741)
const LocationPickerScreen = () => (
    <div className="border border-gray-200 rounded-3xl w-[375px] h-[812px] bg-white shadow-2xl relative overflow-hidden flex flex-col">
        {/* Map Placeholder */}
        <div className="absolute inset-0 bg-blue-50 flex items-center justify-center opacity-50">
            <div className="text-center text-gray-300">
                <MapPin className="w-24 h-24 mx-auto mb-2 opacity-20" />
                <p>Google Maps View</p>
            </div>
        </div>

        {/* Top Search */}
        <div className="absolute top-4 left-4 right-4 z-10">
            <div className="bg-white rounded-xl shadow-lg p-2 flex items-center gap-2">
                <button className="p-2"><Menu className="w-5 h-5" /></button>
                <input type="text" placeholder="Nhập địa điểm muốn đặt..." className="flex-1 outline-none text-sm"/>
                <button className="p-2 bg-blue-600 rounded-lg text-white"><Search className="w-4 h-4" /></button>
            </div>
        </div>

        {/* Center Pin */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none mb-8">
            <MapPin className="w-10 h-10 text-red-500 fill-red-100 drop-shadow-xl animate-bounce" />
        </div>

        {/* Bottom Sheet */}
        <div className="mt-auto bg-white rounded-t-3xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] p-6 z-20">
            <div className="w-12 h-1 bg-gray-200 rounded-full mx-auto mb-4"></div>
            <h3 className="font-bold text-lg mb-1">Vị trí đã chọn</h3>
            <p className="text-gray-500 text-sm mb-4">88 Lê Lợi, Phường Bến Nghé, Quận 1, TP.HCM</p>
            
            <div className="flex gap-3 mb-4">
                <button className="flex-1 border rounded-lg py-2 text-sm font-medium text-gray-600">Vị trí hiện tại</button>
                <button className="flex-1 border border-blue-200 bg-blue-50 text-blue-700 rounded-lg py-2 text-sm font-medium">Chọn từ bản đồ</button>
            </div>

            <button className="w-full bg-blue-600 text-white rounded-xl py-3 font-bold shadow-lg">
                Xác nhận vị trí này
            </button>
        </div>
    </div>
);

const ServiceDetailScreen = () => (
  <div className="border border-gray-200 rounded-3xl w-[375px] h-[812px] bg-white shadow-2xl overflow-y-auto relative">
    <div className="absolute top-4 left-4 z-10">
        <div className="w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center shadow-sm cursor-pointer">
            <span className="text-xl">←</span>
        </div>
    </div>

    {/* Image Slider */}
    <div className="h-64 bg-gray-200 relative">
      <div className="absolute inset-0 flex items-center justify-center text-gray-400">Hình ảnh dịch vụ</div>
    </div>

    <div className="p-6 -mt-6 bg-white rounded-t-3xl relative z-10 min-h-[500px]">
      <div className="flex justify-between items-start mb-2">
          <h2 className="text-2xl font-bold text-gray-900 w-3/4">Massage Trị Liệu Cổ Vai Gáy</h2>
          <div className="flex flex-col items-end">
              <span className="text-2xl font-bold text-blue-600">300k</span>
              <span className="text-xs text-gray-400 line-through">450k</span>
          </div>
      </div>

      <div className="flex items-center gap-4 text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-lg border border-yellow-100">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="font-bold text-yellow-700">4.9</span>
        </div>
        <div className="flex items-center gap-1">
          <Clock className="w-4 h-4 text-gray-400" />
          <span>60 phút</span>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="w-4 h-4 text-gray-400" />
          <span>2.5 km</span>
        </div>
      </div>
      
      {/* Description */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-2">Mô tả dịch vụ</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Liệu trình chuyên sâu giúp giải tỏa căng thẳng vùng cổ vai gáy, sử dụng tinh dầu thảo dược độc quyền. Phù hợp cho dân văn phòng... <span className="text-blue-600 font-medium">Xem thêm</span>
        </p>
      </div>

      {/* Provider Info */}
      <div className="mb-6">
          <h3 className="font-bold text-gray-800 mb-2">Nhà cung cấp</h3>
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full"></div>
              <div>
                  <p className="font-bold text-sm">Spa Health & Care</p>
                  <p className="text-xs text-green-600 flex items-center gap-1">
                      <CheckCircle className="w-3 h-3"/> Đã xác thực (KYC)
                  </p>
              </div>
          </div>
      </div>

      {/* Reviews Preview */}
      <div className="mb-24">
        <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-gray-800">Đánh giá (128)</h3>
            <span className="text-xs text-blue-600">Xem tất cả</span>
        </div>
        <div className="space-y-3">
          {[1, 2].map(i => (
            <div key={i} className="border border-gray-100 rounded-xl p-3 bg-gray-50/50">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                <div>
                    <p className="font-bold text-xs">Nguyễn Văn A</p>
                    <div className="flex"><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /><Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /></div>
                </div>
              </div>
              <p className="text-xs text-gray-600">Nhân viên tay nghề tốt, không gian yên tĩnh. Sẽ quay lại!</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Sticky Footer CTA */}
    <div className="absolute bottom-0 left-0 right-0 bg-white border-t p-4 pb-8 shadow-[0_-5px_15px_rgba(0,0,0,0.05)] rounded-b-3xl">
        <button className="w-full bg-blue-600 text-white rounded-xl py-3.5 font-bold text-lg shadow-lg hover:bg-blue-700 transition">
          Đặt lịch ngay
        </button>
    </div>
  </div>
);

const BookingScreen = () => (
  <div className="border border-gray-200 rounded-3xl w-[375px] h-[812px] bg-white shadow-2xl overflow-y-auto flex flex-col">
    <div className="p-4 border-b flex items-center gap-3 sticky top-0 bg-white z-10">
        <span className="text-xl font-bold">←</span>
        <h2 className="text-lg font-bold">Chọn thời gian</h2>
    </div>

    <div className="p-4 flex-1">
        {/* Date Selector */}
        <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-700 mb-3">Tháng 12, 2025</h3>
        <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {['T2\n12', 'T3\n13', 'T4\n14', 'T5\n15', 'T6\n16', 'T7\n17'].map((date, i) => (
            <div 
                key={i} 
                className={`flex-shrink-0 w-16 h-20 rounded-2xl flex flex-col items-center justify-center cursor-pointer border transition-all ${
                i === 2 
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-105' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-blue-300'
                }`}
            >
                <span className="text-xs opacity-80 mb-1">{date.split('\n')[0]}</span>
                <span className="text-xl font-bold">{date.split('\n')[1]}</span>
            </div>
            ))}
        </div>
        </div>

        {/* Time Slots (Source 237) */}
        <div className="mb-6">
        <h3 className="text-sm font-bold text-gray-700 mb-3">Giờ còn trống</h3>
        <div className="grid grid-cols-3 gap-3">
            {[
            { time: '09:00', status: 'full' },
            { time: '10:00', status: 'available' },
            { time: '11:00', status: 'available' },
            { time: '13:00', status: 'selected' },
            { time: '14:00', status: 'available' },
            { time: '15:00', status: 'full' },
            ].map((slot, i) => (
            <button
                key={i}
                disabled={slot.status === 'full'}
                className={`py-3 rounded-xl text-sm font-medium border relative ${
                slot.status === 'selected'
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-200'
                    : slot.status === 'full'
                    ? 'bg-gray-100 text-gray-400 border-transparent cursor-not-allowed decoration-slice'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-blue-400'
                }`}
            >
                {slot.time}
                {slot.status === 'full' && <span className="absolute inset-0 flex items-center justify-center opacity-20"><XCircle/></span>}
            </button>
            ))}
        </div>
        </div>

        {/* Summary */}
        <div className="bg-blue-50 rounded-xl p-4 mb-4 border border-blue-100">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Thời gian:</span>
                <span className="font-bold text-gray-900">13:00 - 14:00</span>
            </div>
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Ngày:</span>
                <span className="font-bold text-gray-900">Thứ 4, 14/12/2025</span>
            </div>
            <div className="h-px bg-blue-200 my-2"></div>
            <p className="text-xs text-blue-700 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                Hệ thống đang giữ chỗ cho bạn trong <span className="font-bold">04:59</span> (Lock Slot)
            </p>
        </div>
    </div>

    {/* Buttons */}
    <div className="p-4 border-t bg-white pb-8">
      <button className="w-full bg-blue-600 text-white rounded-xl py-3.5 font-bold shadow-lg">
        Tiếp tục thanh toán
      </button>
    </div>
  </div>
);

const CheckoutScreen = () => (
  <div className="border border-gray-200 rounded-3xl w-[375px] h-[812px] bg-white shadow-2xl overflow-y-auto">
    <div className="p-4 border-b flex items-center gap-3">
        <span className="text-xl font-bold">←</span>
        <h2 className="text-lg font-bold">Thanh toán</h2>
    </div>

    <div className="p-4">
        {/* Booking Card */}
        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6 shadow-sm">
            <div className="flex gap-3 mb-3">
                <div className="w-16 h-16 bg-gray-200 rounded-lg"></div>
                <div>
                    <h3 className="font-bold text-sm">Massage Trị Liệu</h3>
                    <p className="text-xs text-gray-500">Spa Health & Care</p>
                </div>
            </div>
            <div className="bg-gray-50 rounded p-2 text-xs space-y-1">
                 <p>📅 14/12/2025</p>
                 <p>⏰ 13:00 - 14:00 (60 phút)</p>
            </div>
        </div>

        {/* Voucher (Source 306) */}
        <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Mã ưu đãi</h3>
            <div className="flex gap-2">
                <div className="flex-1 border border-gray-300 rounded-xl px-3 py-2 flex items-center gap-2">
                    <span className="text-blue-600">🏷️</span>
                    <input type="text" placeholder="Nhập mã giảm giá" className="flex-1 outline-none text-sm"/>
                </div>
                <button className="bg-gray-800 text-white px-4 rounded-xl text-sm font-bold">Áp dụng</button>
            </div>
        </div>

        {/* Payment Methods (Source 292) */}
        <div className="mb-6">
            <h3 className="text-sm font-bold mb-2">Phương thức thanh toán</h3>
            <div className="space-y-3">
                <label className="flex items-center gap-3 border border-blue-500 bg-blue-50 rounded-xl p-3 cursor-pointer ring-1 ring-blue-500">
                    <input type="radio" name="payment" checked readOnly className="w-4 h-4 text-blue-600"/>
                    <div className="w-8 h-8 bg-blue-900 rounded flex items-center justify-center text-white text-xs">VNPAY</div>
                    <span className="text-sm font-medium flex-1">Ví VNPAY / Ngân hàng</span>
                    <span className="text-xs text-blue-600 font-medium">Miễn phí</span>
                </label>
                <label className="flex items-center gap-3 border border-gray-200 rounded-xl p-3 cursor-pointer">
                    <input type="radio" name="payment" className="w-4 h-4 text-blue-600"/>
                    <div className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center text-white text-xs">MoMo</div>
                    <span className="text-sm font-medium flex-1">Ví MoMo</span>
                </label>
                <label className="flex items-center gap-3 border border-gray-200 rounded-xl p-3 cursor-pointer">
                    <input type="radio" name="payment" className="w-4 h-4 text-blue-600"/>
                    <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center text-white text-xs">$$</div>
                    <span className="text-sm font-medium flex-1">Tiền mặt tại quầy</span>
                </label>
            </div>
        </div>
    </div>

    {/* Footer Bill */}
    <div className="mt-auto border-t bg-gray-50 p-4 pb-8 rounded-b-3xl">
        <div className="space-y-2 text-sm mb-4">
            <div className="flex justify-between text-gray-600">
                <span>Tạm tính</span>
                <span>300.000đ</span>
            </div>
            <div className="flex justify-between text-green-600">
                <span>Khuyến mãi</span>
                <span>-30.000đ</span>
            </div>
            <div className="flex justify-between font-bold text-lg text-gray-900 pt-2 border-t">
                <span>Tổng thanh toán</span>
                <span>270.000đ</span>
            </div>
        </div>
        <button className="w-full bg-blue-600 text-white rounded-xl py-3.5 font-bold shadow-lg">
            Xác nhận & Thanh toán
        </button>
    </div>
  </div>
);

// Mới thêm: Màn hình Phòng chờ ảo (Source 734)
const WaitingRoomScreen = () => (
    <div className="border border-gray-200 rounded-3xl w-[375px] h-[812px] bg-white shadow-2xl flex flex-col items-center justify-center p-6 text-center">
        <div className="w-24 h-24 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mb-6 animate-pulse">
            <Clock className="w-12 h-12" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Hệ thống đang bận</h2>
        <p className="text-gray-500 mb-6">Chúng tôi đang xử lý lượng lớn yêu cầu. Vui lòng giữ nguyên màn hình này.</p>
        
        <div className="w-full bg-gray-100 rounded-full h-2 mb-2 overflow-hidden">
            <div className="bg-blue-600 h-full rounded-full w-2/3 animate-[progress_2s_infinite]"></div>
        </div>
        
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 w-full mb-4">
            <p className="text-sm text-gray-500">Vị trí của bạn trong hàng đợi</p>
            <p className="text-3xl font-bold text-blue-600">#15</p>
        </div>

        <p className="text-xs text-gray-400">Tự động cập nhật sau 15s...</p>
    </div>
);

// Mới thêm: Màn hình Hồ sơ (Source 672)
const ProfileScreen = () => (
    <div className="border border-gray-200 rounded-3xl w-[375px] h-[812px] bg-white shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="bg-blue-600 p-6 pt-12 text-white rounded-b-3xl mb-4">
            <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-full border-2 border-white/50 p-1">
                    <div className="w-full h-full bg-gray-200 rounded-full bg-[url('https://i.pravatar.cc/150')] bg-cover"></div>
                </div>
                <div>
                    <h2 className="text-xl font-bold">Nguyễn Văn A</h2>
                    <p className="text-blue-100 text-sm">Thành viên Bạc</p>
                </div>
            </div>
            <div className="flex justify-between bg-white/10 rounded-xl p-3 backdrop-blur-sm">
                <div className="text-center">
                    <p className="text-lg font-bold">12</p>
                    <p className="text-xs text-blue-100">Đơn hàng</p>
                </div>
                <div className="text-center border-l border-white/20 pl-4">
                    <p className="text-lg font-bold">4.8</p>
                    <p className="text-xs text-blue-100">Uy tín</p>
                </div>
                <div className="text-center border-l border-white/20 pl-4">
                    <p className="text-lg font-bold">0</p>
                    <p className="text-xs text-blue-100">Vi phạm</p>
                </div>
            </div>
        </div>

        {/* Menu Items */}
        <div className="px-4 space-y-2">
            <div className="bg-white border rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center"><User className="w-4 h-4"/></div>
                    <span className="font-medium">Thông tin cá nhân</span>
                </div>
                <span className="text-gray-400">›</span>
            </div>
            <div className="bg-white border rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-lg flex items-center justify-center"><CreditCard className="w-4 h-4"/></div>
                    <span className="font-medium">Phương thức thanh toán</span>
                </div>
                <span className="text-gray-400">›</span>
            </div>
            <div className="bg-white border rounded-xl p-3 flex items-center justify-between cursor-pointer hover:bg-gray-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 text-orange-600 rounded-lg flex items-center justify-center"><Settings className="w-4 h-4"/></div>
                    <span className="font-medium">Cài đặt</span>
                </div>
                <span className="text-gray-400">›</span>
            </div>
            
            <div className="h-4"></div>

            <div className="bg-red-50 border border-red-100 rounded-xl p-3 flex items-center justify-between cursor-pointer text-red-600">
                <div className="flex items-center gap-3">
                    <LogOut className="w-5 h-5"/>
                    <span className="font-medium">Đăng xuất</span>
                </div>
            </div>
        </div>
    </div>
);

const ProviderDashboardScreen = () => (
  <div className="border border-gray-200 rounded-3xl p-6 bg-gray-50 w-full max-w-4xl h-[600px] overflow-y-auto">
    <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Dashboard Provider</h2>
        <div className="flex gap-2">
            <button className="bg-white border px-3 py-1 rounded-lg text-sm">Tháng này ▼</button>
            <button className="bg-blue-600 text-white px-3 py-1 rounded-lg text-sm">Xuất báo cáo</button>
        </div>
    </div>

    {/* Stats Cards (Source 687) */}
    <div className="grid grid-cols-4 gap-4 mb-6">
      {[
        { label: 'Doanh thu', value: '5,400,000đ', color: 'bg-blue-100 text-blue-700', icon: <DollarSign className="w-5 h-5"/> },
        { label: 'Đơn mới', value: '12', color: 'bg-green-100 text-green-700', icon: <Calendar className="w-5 h-5"/> },
        { label: 'Đơn hủy', value: '2', color: 'bg-red-100 text-red-700', icon: <XCircle className="w-5 h-5"/> },
        { label: 'Đánh giá', value: '4.8 ⭐', color: 'bg-yellow-100 text-yellow-700', icon: <Star className="w-5 h-5"/> },
      ].map((stat, i) => (
        <div key={i} className="bg-white border rounded-xl p-4 shadow-sm flex flex-col justify-between h-28">
            <div className={`w-8 h-8 rounded-lg flex items-center justify-center mb-2 ${stat.color}`}>
                {stat.icon}
            </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
            <p className="text-xl font-bold text-gray-800">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>

    <div className="grid grid-cols-3 gap-6">
        {/* Recent Bookings List (Source 699) */}
        <div className="col-span-2 bg-white border rounded-xl p-4 shadow-sm">
            <h3 className="font-bold text-gray-800 mb-4">Đơn hàng cần xử lý</h3>
            <table className="w-full text-sm">
                <thead>
                <tr className="text-gray-400 border-b">
                    <th className="text-left py-2 font-medium">Khách hàng</th>
                    <th className="text-left py-2 font-medium">Dịch vụ</th>
                    <th className="text-left py-2 font-medium">Thời gian</th>
                    <th className="text-left py-2 font-medium">Hành động</th>
                </tr>
                </thead>
                <tbody>
                {[
                    { customer: 'Nguyễn A', service: 'Massage body', time: '14:00 Hôm nay', status: 'pending' },
                    { customer: 'Trần B', service: 'Cắt tóc', time: '15:30 Hôm nay', status: 'pending' },
                ].map((booking, i) => (
                    <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="py-3 font-medium">{booking.customer}</td>
                    <td className="py-3 text-gray-600">{booking.service}</td>
                    <td className="py-3 text-gray-600">{booking.time}</td>
                    <td className="py-3 flex gap-2">
                        <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-xs hover:bg-blue-700">Nhận</button>
                        <button className="px-3 py-1 border border-red-200 text-red-600 rounded-lg text-xs hover:bg-red-50">Hủy</button>
                    </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        
        {/* Simple Chart Visualization */}
        <div className="bg-white border rounded-xl p-4 shadow-sm">
             <h3 className="font-bold text-gray-800 mb-4">Biểu đồ tuần</h3>
             <div className="flex items-end justify-between h-40 pt-4 px-2">
                {[40, 70, 30, 85, 50, 90, 60].map((h, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                        <div className="w-6 bg-blue-500 rounded-t-sm hover:bg-blue-600 transition-all" style={{height: `${h}%`}}></div>
                        <span className="text-[10px] text-gray-400">T{i+2}</span>
                    </div>
                ))}
             </div>
        </div>
    </div>
  </div>
);

const AdminDashboardScreen = () => (
  <div className="border border-gray-200 rounded-3xl p-6 bg-gray-50 w-full max-w-4xl h-[600px] overflow-y-auto">
    <div className="flex justify-between items-center mb-6 border-b pb-4">
        <div>
            <h2 className="text-2xl font-bold text-gray-800">Admin Portal</h2>
            <p className="text-sm text-gray-500">Quản trị hệ thống toàn diện</p>
        </div>
        <div className="flex items-center gap-2">
            <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm font-medium text-green-700">Hệ thống ổn định (99.9%)</span>
        </div>
    </div>

    {/* System Stats (Source 719) */}
    <div className="grid grid-cols-4 gap-4 mb-6">
      {[
        { label: 'Tổng GMV', value: '145M đ', icon: '💰', bg: 'bg-indigo-500' },
        { label: 'Providers', value: '234', icon: '🏪', bg: 'bg-purple-500' },
        { label: 'Customers', value: '5,678', icon: '👥', bg: 'bg-pink-500' },
        { label: 'Booking/Ngày', value: '89', icon: '📅', bg: 'bg-orange-500' },
      ].map((stat, i) => (
        <div key={i} className="bg-white border rounded-xl p-4 shadow-sm relative overflow-hidden group">
          <div className={`absolute -right-4 -top-4 w-20 h-20 rounded-full opacity-10 ${stat.bg}`}></div>
          <div className="flex justify-between items-start mb-2">
            <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            <span className="text-xl">{stat.icon}</span>
          </div>
          <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
        </div>
      ))}
    </div>

    {/* Two Columns Layout */}
    <div className="grid grid-cols-2 gap-6">
      {/* Pending KYC (Source 720) */}
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800 flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-orange-500" />
            Duyệt Provider (KYC)
            </h3>
            <span className="bg-orange-100 text-orange-700 px-2 py-0.5 rounded text-xs font-bold">3 Chờ</span>
        </div>
        
        <div className="space-y-3">
          {[1, 2, 3].map(i => (
            <div key={i} className="flex items-center justify-between border border-gray-100 rounded-lg p-3 hover:bg-gray-50 transition">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="text-sm font-bold text-gray-800">Spa ABC {i}</p>
                  <p className="text-xs text-gray-500">Giấy phép KD • CCCD</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200"><CheckCircle className="w-4 h-4"/></button>
                <button className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200"><XCircle className="w-4 h-4"/></button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Requests (Source 726) */}
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-green-600" />
          Yêu cầu rút tiền
        </h3>
        <div className="space-y-2">
          {[
              { name: 'Dr. John Clinic', amount: '5,000,000đ', bank: 'VCB' },
              { name: 'Salon Tóc Đẹp', amount: '2,400,000đ', bank: 'ACB' }
          ].map((req, i) => (
            <div key={i} className="flex items-center justify-between border-b border-gray-100 pb-2 last:border-0">
              <div>
                <p className="text-sm font-medium text-gray-800">{req.name}</p>
                <p className="text-xs text-gray-500">{req.amount} • {req.bank}</p>
              </div>
              <button className="px-3 py-1 bg-blue-600 text-white rounded text-xs font-medium hover:bg-blue-700">
                Chuyển khoản
              </button>
            </div>
          ))}
        </div>
        <button className="w-full mt-3 text-center text-sm text-blue-600 font-medium hover:underline">Xem tất cả</button>
      </div>
    </div>
    
    {/* Recent Activity Log */}
    <div className="mt-6 bg-white border rounded-xl p-4 shadow-sm">
        <h3 className="font-bold text-gray-800 mb-3 text-sm uppercase text-gray-500">Nhật ký hệ thống</h3>
        <div className="space-y-3">
            {[
                { text: 'User #9928 vừa đăng ký tài khoản mới', time: '2 phút trước', color: 'bg-blue-500' },
                { text: 'Provider Spa Luxury vừa cập nhật dịch vụ', time: '15 phút trước', color: 'bg-yellow-500' },
                { text: 'Phát hiện hành vi Spam Booking từ IP 192.168.1.1', time: '1 giờ trước', color: 'bg-red-500' }
            ].map((log, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                    <div className={`w-2 h-2 rounded-full mt-1.5 ${log.color}`}></div>
                    <div className="flex-1">
                        <p className="text-gray-800">{log.text}</p>
                        <p className="text-xs text-gray-400">{log.time}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  </div>
);

export default BSS_Wireframes;