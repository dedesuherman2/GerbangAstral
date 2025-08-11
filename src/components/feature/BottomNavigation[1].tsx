
import { useLocation } from 'react-router-dom';

interface NavItem {
  path: string;
  icon: string;
  label: string;
}

const navItems: NavItem[] = [
  { path: '/', icon: 'ri-home-line', label: 'Beranda' },
  { path: '/discover', icon: 'ri-heart-line', label: 'Jelajah' },
  { path: '/matches', icon: 'ri-user-heart-line', label: 'Match' },
  { path: '/chat', icon: 'ri-message-3-line', label: 'Chat' },
  { path: '/profile', icon: 'ri-user-line', label: 'Profil' }
];

export default function BottomNavigation() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 px-0 z-50">
      <div className="grid grid-cols-5 h-16">
        {navItems.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`flex flex-col items-center justify-center space-y-1 transition-colors duration-200 ${
              location.pathname === item.path ? 'text-primary' : 'text-gray-400'
            }`}
          >
            <div className="w-5 h-5 flex items-center justify-center">
              <i className={`${item.icon} ${location.pathname === item.path ? item.icon.replace('-line', '-fill') : item.icon} text-lg`}></i>
            </div>
            <span className="text-xs font-medium">{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
