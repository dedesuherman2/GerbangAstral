
import TopNavigation from '../../components/feature/TopNavigation';
import BottomNavigation from '../../components/feature/BottomNavigation';
import Button from '../../components/base/Button';

export default function Home() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const datingProfiles = [
    {
      id: 1,
      name: 'Sarah',
      age: 24,
      location: 'Jakarta',
      bio: 'Suka traveling dan fotografi. Mari jelajahi dunia bersama!',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20young%20Indonesian%20woman%2C%20professional%20portrait%20photography%2C%20warm%20natural%20lighting%2C%20friendly%20smile%2C%20elegant%20casual%20style%2C%20soft%20background%2C%20high%20quality%20photography%2C%20modern%20aesthetic%2C%20confident%20expression&width=280&height=400&seq=sarah1&orientation=portrait',
      interests: ['Traveling', 'Fotografi', 'Kuliner']
    },
    {
      id: 2,
      name: 'Maya',
      age: 26,
      location: 'Bandung',
      bio: 'Pecinta kopi dan buku. Cari teman ngobrol yang asik!',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20young%20Indonesian%20woman%2C%20casual%20portrait%2C%20cozy%20coffee%20shop%20atmosphere%2C%20reading%20book%2C%20warm%20lighting%2C%20friendly%20demeanor%2C%20natural%20beauty%2C%20modern%20lifestyle%20photography&width=280&height=400&seq=maya1&orientation=portrait',
      interests: ['Membaca', 'Kopi', 'Musik']
    },
    {
      id: 3,
      name: 'Rina',
      age: 23,
      location: 'Surabaya',
      bio: 'Yoga instructor yang suka hiking. Mari hidup sehat bersama!',
      image: 'https://readdy.ai/api/search-image?query=Beautiful%20young%20Indonesian%20woman%2C%20active%20lifestyle%2C%20yoga%20instructor%2C%20healthy%20lifestyle%2C%20natural%20outdoor%20setting%2C%20confident%20pose%2C%20athletic%20wear%2C%20peaceful%20expression%2C%20wellness%20photography&width=280&height=400&seq=rina1&orientation=portrait',
      interests: ['Yoga', 'Hiking', 'Olahraga']
    }
  ];

  const currentProfile = datingProfiles[currentCardIndex];

  const handleLike = () => {
    // Animasi like
    if (currentCardIndex < datingProfiles.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  const handlePass = () => {
    // Animasi pass
    if (currentCardIndex < datingProfiles.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    } else {
      setCurrentCardIndex(0);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <TopNavigation
        title={
          <div className="flex items-center space-x-2">
            <span style={{ fontFamily: '"Pacifico", serif' }} className="text-xl text-primary">LoveMatch</span>
          </div>
        }
        rightAction={
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors">
            <i className="ri-notification-3-line text-lg text-gray-700"></i>
          </button>
        }
      />

      {/* Main Content */}
      <div className="pt-20 pb-20 px-4">
        {/* Welcome Section */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Temukan Cinta Sejatimu</h2>
          <p className="text-gray-600">Swipe untuk menemukan pasangan yang tepat</p>
        </div>

        {/* Dating Card */}
        <div className="max-w-sm mx-auto mb-8">
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
            <div className="relative">
              <img 
                src={currentProfile.image}
                alt={currentProfile.name}
                className="w-full h-96 object-cover object-top"
              />
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-sm font-medium text-gray-700">{currentCardIndex + 1}/{datingProfiles.length}</span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{currentProfile.name}</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <i className="ri-map-pin-2-line text-primary mr-1"></i>
                    <span className="text-sm">{currentProfile.location} • {currentProfile.age} tahun</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">{currentProfile.bio}</p>
              
              <div className="flex flex-wrap gap-2">
                {currentProfile.interests.map((interest, index) => (
                  <span 
                    key={index}
                    className="bg-accent text-primary px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-center space-x-6">
          <button
            onClick={handlePass}
            className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 hover:border-gray-300 transition-all duration-200"
          >
            <i className="ri-close-line text-2xl text-gray-500"></i>
          </button>
          
          <button
            onClick={handleLike}
            className="w-16 h-16 bg-primary rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all duration-200"
          >
            <i className="ri-heart-fill text-2xl text-white"></i>
          </button>
          
          <button className="w-14 h-14 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-200 hover:border-gray-300 transition-all duration-200">
            <i className="ri-star-line text-2xl text-yellow-500"></i>
          </button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mt-8 max-w-sm mx-auto">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-heart-fill text-primary"></i>
            </div>
            <div className="text-lg font-bold text-gray-800">147</div>
            <div className="text-xs text-gray-600">Likes</div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-user-heart-fill text-purple-500"></i>
            </div>
            <div className="text-lg font-bold text-gray-800">23</div>
            <div className="text-xs text-gray-600">Matches</div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i className="ri-message-3-fill text-green-500"></i>
            </div>
            <div className="text-lg font-bold text-gray-800">12</div>
            <div className="text-xs text-gray-600">Chats</div>
          </div>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}
