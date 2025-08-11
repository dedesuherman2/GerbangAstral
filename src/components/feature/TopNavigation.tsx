
interface TopNavigationProps {
  title?: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
}

export default function TopNavigation({ title, showBack = false, rightAction }: TopNavigationProps) {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 px-4 py-3 z-50">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          {showBack && (
            <button
              onClick={() => navigate(-1)}
              className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
            >
              <i className="ri-arrow-left-line text-lg text-gray-700"></i>
            </button>
          )}
          {title && (
            <h1 className="text-lg font-semibold text-gray-900">{title}</h1>
          )}
        </div>
        {rightAction && <div>{rightAction}</div>}
      </div>
    </div>
  );
}
