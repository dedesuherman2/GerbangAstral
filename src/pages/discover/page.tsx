
import TopNavigation from '../../components/feature/TopNavigation';
import BottomNavigation from '../../components/feature/BottomNavigation';

export default function Discover() {
  const [activeFilter, setActiveFilter] = useState('semua');
  const [showFilterModal, setShowFilterModal] = useState(false);

  const filters = [
    { id: 'semua', label: 'Semua', icon: 'ri-global-line' },
    { id: 'dekat', label: 'Terdekat', icon: 'ri-map-pin-2-line' },
    { id: 'online', label: 'Online', icon: 'ri-wifi-line' },
    { id: 'baru', label: 'Terbaru', icon: 'ri-time-line' }
  ];

  const profiles = [
    {
      id: 1,
      name: 'Amanda',
      age: 25,
      location: 'Jakarta',
      distance: '2 km',
      isOnline: true,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20young%20Indonesian%20woman%2C%20modern%20lifestyle%2C%20confident%20smile%2C%20urban%20background%2C%20professional%20portrait%2C%20natural%20lighting%2C%20casual%20elegant%20style%2C%20friendly%20expression&width=200&height=280&seq=amanda1&orientation=portrait',
      interests: ['Dance', 'Travel']
    },
    {
      id: 2,
      name: 'Lisa',
      age: 23,
      location: 'Bandung',
      distance: '5 km',
      isOnline: false,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20young%20Indonesian%20woman%2C%20artistic%20lifestyle%2C%20creative%20expression%2C%20cozy%20indoor%20setting%2C%20warm%20lighting%2C%20casual%20style%2C%20peaceful%20demeanor%2C%20modern%20portrait%20photography&width=200&height=280&seq=lisa1&orientation=portrait',
      interests: ['Art', 'Music']
    },
    {
      id: 3,
      name: 'Dara',
      age: 24,
      location: 'Surabaya',
      distance: '1 km',
      isOnline: true,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20young%20Indonesian%20woman%2C%20fitness%20lifestyle%2C%20healthy%20living%2C%20outdoor%20activity%2C%20natural%20beauty%2C%20athletic%20wear%2C%20confident%20pose%2C%20energetic%20expression&width=200&height=280&seq=dara1&orientation=portrait',
      interests: ['Fitness', 'Yoga']
    },
    {
      id: 4,
      name: 'Sari',
      age: 26,
      location: 'Yogyakarta',
      distance: '3 km',
      isOnline: false,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20young%20Indonesian%20woman%2C%20intellectual%20lifestyle%2C%20bookstore%20setting%2C%20thoughtful%20expression%2C%20warm%20cozy%20lighting%2C%20casual%20professional%20style%2C%20modern%20portrait&width=200&height=280&seq=sari1&orientation=portrait',
      interests: ['Books', 'Coffee']
    },
    {
      id: 5,
      name: 'Nina',
      age: 22,
      location: 'Medan',
      distance: '4 km',
      isOnline: true,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20young%20Indonesian%20woman%2C%20culinary%20enthusiast%2C%20kitchen%20setting%2C%20joyful%20expression%2C%20warm%20natural%20lighting%2C%20casual%20home%20style%2C%20friendly%20smile&width=200&height=280&seq=nina1&orientation=portrait',
      interests: ['Cooking', 'Food']
    },
    {
      id: 6,
      name: 'Putri',
      age: 27,
      location: 'Bali',
      distance: '6 km',
      isOnline: true,
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20young%20Indonesian%20woman%2C%20beach%20lifestyle%2C%20tropical%20setting%2C%20relaxed%20expression%2C%20golden%20hour%20lighting%2C%20summer%20casual%20style%2C%20peaceful%20vibe&width=200&height=280&seq=putri1&orientation=portrait',
      interests: ['Beach', 'Nature']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <TopNavigation
        title="Jelajah"
        rightAction={
          <button 
            onClick={() => setShowFilterModal(true)}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
          >
            <i className="ri-sound-module-line text-lg text-gray-700"></i>
          </button>
        }
      />

      {/* Filter Tabs */}
      <div className="pt-16 px-4">
        <div className="flex space-x-2 py-4 overflow-x-auto scrollbar-hide">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <i className={filter.icon}></i>
              <span>{filter.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Profiles Grid */}
      <div className="px-4 pb-20">
        <div className="grid grid-cols-2 gap-4">
          {profiles.map((profile) => (
            <div key={profile.id} className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <div className="relative">
                <img 
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-48 object-cover object-top"
                />
                {profile.isOnline && (
                  <div className="absolute top-3 right-3 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
                )}
                <div className="absolute bottom-3 left-3 right-3">
                  <div className="bg-black/50 backdrop-blur-sm rounded-lg px-3 py-2">
                    <h3 className="text-white font-semibold text-sm">{profile.name}, {profile.age}</h3>
                    <div className="flex items-center text-white/80 text-xs mt-1">
                      <i className="ri-map-pin-2-line mr-1"></i>
                      <span>{profile.distance} • {profile.location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-3">
                <div className="flex flex-wrap gap-1 mb-3">
                  {profile.interests.map((interest, index) => (
                    <span 
                      key={index}
                      className="bg-accent text-primary px-2 py-1 rounded-full text-xs font-medium"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button className="flex-1 bg-gray-100 text-gray-600 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    <i className="ri-close-line mr-1"></i>
                    Pass
                  </button>
                  <button className="flex-1 bg-primary text-white py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
                    <i className="ri-heart-line mr-1"></i>
                    Like
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filter Modal */}
      {showFilterModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-800">Filter Pencarian</h2>
              <button 
                onClick={() => setShowFilterModal(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
              >
                <i className="ri-close-line text-lg text-gray-700"></i>
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Rentang Usia</h3>
                <div className="flex items-center space-x-4">
                  <input type="range" min="18" max="50" value="25" className="flex-1" />
                  <span className="text-sm text-gray-600 min-w-[60px]">18 - 35</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Jarak Maksimal</h3>
                <div className="flex items-center space-x-4">
                  <input type="range" min="1" max="100" value="10" className="flex-1" />
                  <span className="text-sm text-gray-600 min-w-[60px]">10 km</span>
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-3">Minat</h3>
                <div className="flex flex-wrap gap-2">
                  {['Travel', 'Music', 'Art', 'Food', 'Sports', 'Books', 'Movies', 'Fitness'].map((interest) => (
                    <button 
                      key={interest}
                      className="px-3 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-primary hover:text-white transition-colors"
                    >
                      {interest}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setShowFilterModal(false)}
              className="w-full bg-primary text-white py-3 rounded-xl font-semibold mt-6 !rounded-button"
            >
              Terapkan Filter
            </button>
          </div>
        </div>
      )}

      <BottomNavigation />
    </div>
  );
}
