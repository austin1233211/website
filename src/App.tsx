import { useState, useEffect } from 'react'
import './App.css'
import { Search, Menu, X, Play, ChevronLeft, ChevronRight } from 'lucide-react'

const gamesData = [
  { id: 1, title: "Lightning Roulette", category: "live-casino", badge: "NEW", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=267&fit=crop" },
  { id: 2, title: "Crazy Time", category: "game-shows", badge: "HOT", image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=400&h=267&fit=crop" },
  { id: 3, title: "Blackjack VIP", category: "live-casino", badge: "", image: "https://images.unsplash.com/photo-1541278107931-e006523892df?w=400&h=267&fit=crop" },
  { id: 4, title: "Mega Ball", category: "game-shows", badge: "NEW", image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=400&h=267&fit=crop" },
  { id: 5, title: "Speed Baccarat", category: "live-casino", badge: "", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=267&fit=crop" },
  { id: 6, title: "Dream Catcher", category: "game-shows", badge: "HOT", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=267&fit=crop" },
  { id: 7, title: "Immersive Roulette", category: "live-casino", badge: "", image: "https://images.unsplash.com/photo-1596731498067-a5c0e5c5e8c5?w=400&h=267&fit=crop" },
  { id: 8, title: "Monopoly Live", category: "game-shows", badge: "NEW", image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&h=267&fit=crop" },
  { id: 9, title: "Casino Hold'em", category: "live-casino", badge: "", image: "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=400&h=267&fit=crop" },
  { id: 10, title: "Deal or No Deal", category: "game-shows", badge: "HOT", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=267&fit=crop" },
  { id: 11, title: "Dragon Tiger", category: "live-casino", badge: "", image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=267&fit=crop" },
  { id: 12, title: "Football Studio", category: "game-shows", badge: "NEW", image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=267&fit=crop" },
  { id: 13, title: "Sic Bo", category: "live-casino", badge: "", image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=400&h=267&fit=crop" },
  { id: 14, title: "Cash or Crash", category: "game-shows", badge: "HOT", image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=400&h=267&fit=crop" },
  { id: 15, title: "Auto Roulette", category: "live-casino", badge: "", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=267&fit=crop" },
  { id: 16, title: "Hot Hot Fruit", category: "slots", badge: "HOT", image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=400&h=267&fit=crop" },
  { id: 17, title: "Fa Cai Shen Deluxe", category: "slots", badge: "NEW", image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=400&h=267&fit=crop" },
  { id: 18, title: "Koi Gate", category: "slots", badge: "", image: "https://images.unsplash.com/photo-1541278107931-e006523892df?w=400&h=267&fit=crop" },
  { id: 19, title: "5 Lucky Lions", category: "slots", badge: "HOT", image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=400&h=267&fit=crop" },
  { id: 20, title: "Wealth Inn", category: "slots", badge: "", image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&h=267&fit=crop" },
  { id: 21, title: "Egyptian Dreams Deluxe", category: "slots", badge: "NEW", image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&h=267&fit=crop" },
  { id: 22, title: "Mystic Fortune Deluxe", category: "slots", badge: "", image: "https://images.unsplash.com/photo-1596731498067-a5c0e5c5e8c5?w=400&h=267&fit=crop" },
  { id: 23, title: "Nuwa", category: "slots", badge: "HOT", image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=400&h=267&fit=crop" },
  { id: 24, title: "Bird of Thunder", category: "slots", badge: "", image: "https://images.unsplash.com/photo-1609743522653-52354461eb27?w=400&h=267&fit=crop" },
  { id: 25, title: "Jungle Jam", category: "slots", badge: "NEW", image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=267&fit=crop" },
]

const heroSlides = [
  {
    title: "Live Dealers & AI-Powered Gaming",
    subtitle: "Experience the perfect blend of human expertise and cutting-edge AI technology",
    image: "https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=1920&h=800&fit=crop"
  },
  {
    title: "Professional Live Dealers 24/7",
    subtitle: "Real dealers, real tables, real excitement - streaming live from our world-class studios",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1920&h=800&fit=crop"
  },
  {
    title: "Next-Gen AI Dealer Technology",
    subtitle: "Revolutionary AI dealers delivering seamless, intelligent gameplay around the clock",
    image: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?w=1920&h=800&fit=crop"
  }
]

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const filteredGames = gamesData.filter(game => {
    const matchesFilter = activeFilter === 'all' || game.category === activeFilter
    const matchesSearch = game.title.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesFilter && matchesSearch
  })

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black shadow-lg' : 'bg-black'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <a href="/" className="text-white text-2xl font-bold tracking-tight">LIMITLESS</a>
            </div>
            <nav className="hidden lg:flex items-center gap-8">
              <a href="#games" className="text-white text-base font-medium hover:text-blue-400 transition-colors duration-150">Games</a>
              <a href="#about" className="text-white text-base font-medium hover:text-blue-400 transition-colors duration-150">About</a>
              <a href="#news" className="text-white text-base font-medium hover:text-blue-400 transition-colors duration-150">News</a>
              <a href="#careers" className="text-white text-base font-medium hover:text-blue-400 transition-colors duration-150">Careers</a>
              <a href="#contact" className="text-white text-base font-medium hover:text-blue-400 transition-colors duration-150">Contact</a>
            </nav>
            <div className="hidden lg:flex items-center gap-4">
              <button className="bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded font-medium text-base transition-all duration-150 transform hover:-translate-y-0.5">Client Login</button>
              <button className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded font-medium text-base transition-all duration-150 transform hover:-translate-y-0.5">Contact Us</button>
            </div>
            <button className="lg:hidden text-white p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-4 py-4 space-y-4">
              <a href="#games" className="block text-white text-base font-medium hover:text-blue-400">Games</a>
              <a href="#about" className="block text-white text-base font-medium hover:text-blue-400">About</a>
              <a href="#news" className="block text-white text-base font-medium hover:text-blue-400">News</a>
              <a href="#careers" className="block text-white text-base font-medium hover:text-blue-400">Careers</a>
              <a href="#contact" className="block text-white text-base font-medium hover:text-blue-400">Contact</a>
              <div className="pt-4 space-y-3">
                <button className="w-full bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded font-medium">Client Login</button>
                <button className="w-full bg-white hover:bg-gray-100 text-black px-6 py-3 rounded font-medium">Contact Us</button>
              </div>
            </div>
          </div>
        )}
      </header>

      <section className="relative h-screen min-h-[600px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30 z-10" />
            <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" onError={(e) => { const target = e.target as HTMLImageElement; target.src = 'https://placehold.co/1920x800/1a1a1a/ffffff/png?text=Limitless+Gaming' }} />
            <div className="absolute inset-0 z-20 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">{slide.title}</h1>
                  <p className="text-lg sm:text-xl text-gray-200 mb-8">{slide.subtitle}</p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 rounded font-medium text-lg transition-all duration-150 transform hover:-translate-y-0.5">Explore Games</button>
                    <button className="bg-transparent border-2 border-white hover:bg-white hover:text-black text-white px-8 py-4 rounded font-medium text-lg transition-all duration-150">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"><ChevronLeft size={24} /></button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all duration-300"><ChevronRight size={24} /></button>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
          {heroSlides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-primary w-8' : 'bg-white/50 hover:bg-white/80'}`} />
          ))}
        </div>
      </section>

      {/* Live & AI Dealers Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Live Dealers & AI Technology</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">The future of casino gaming combines the authenticity of professional live dealers with the innovation of AI-powered gameplay</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Live Dealers Card */}
            <div className="bg-gradient-to-br from-primary to-blue-800 rounded-2xl p-8 lg:p-10 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">👤</div>
                <h3 className="text-2xl lg:text-3xl font-bold">Professional Live Dealers</h3>
              </div>
              <p className="text-lg text-blue-100 mb-6 leading-relaxed">Our world-class live dealers bring the authentic casino atmosphere directly to your screen. Trained professionals from our state-of-the-art studios deliver engaging, real-time gameplay with personality and expertise.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span> 24/7 live streaming from global studios</li>
                <li className="flex items-center gap-3"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span> Multi-language support</li>
                <li className="flex items-center gap-3"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span> Interactive chat with dealers</li>
                <li className="flex items-center gap-3"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span> HD multi-camera angles</li>
              </ul>
              <button className="bg-white text-primary hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-150">Meet Our Dealers</button>
            </div>
            {/* AI Dealers Card */}
            <div className="bg-gradient-to-br from-purple-600 to-purple-900 rounded-2xl p-8 lg:p-10 shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">🤖</div>
                <h3 className="text-2xl lg:text-3xl font-bold">AI-Powered Dealers</h3>
              </div>
              <p className="text-lg text-purple-100 mb-6 leading-relaxed">Experience the next generation of gaming with our revolutionary AI dealers. Powered by advanced machine learning, they deliver consistent, fair, and lightning-fast gameplay while maintaining engaging interactions.</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span> Instant game pace - no waiting</li>
                <li className="flex items-center gap-3"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span> Perfectly consistent dealing</li>
                <li className="flex items-center gap-3"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span> Natural language interaction</li>
                <li className="flex items-center gap-3"><span className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center text-sm">✓</span> Adaptive difficulty levels</li>
              </ul>
              <button className="bg-white text-purple-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors duration-150">Explore AI Gaming</button>
            </div>
          </div>
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-8 bg-white/10 rounded-full px-8 py-4">
              <div className="text-center"><div className="text-3xl font-bold">1000+</div><div className="text-sm text-gray-400">Live Dealers</div></div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center"><div className="text-3xl font-bold">50+</div><div className="text-sm text-gray-400">AI Models</div></div>
              <div className="w-px h-12 bg-white/20"></div>
              <div className="text-center"><div className="text-3xl font-bold">99.9%</div><div className="text-sm text-gray-400">Uptime</div></div>
            </div>
          </div>
        </div>
      </section>

      <section id="games" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Games</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover our award-winning portfolio of live casino games, game shows, and slots</p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mb-10">
            <div className="flex gap-2 border-b-2 border-gray-200 pb-0">
              {[{ id: 'all', label: 'All Games' }, { id: 'live-casino', label: 'Live Casino' }, { id: 'game-shows', label: 'Game Shows' }, { id: 'slots', label: 'Slots' }].map((filter) => (
                <button key={filter.id} onClick={() => setActiveFilter(filter.id)} className={`px-6 py-3 text-base font-medium transition-all duration-300 border-b-3 -mb-0.5 ${activeFilter === filter.id ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:bg-gray-100'}`}>{filter.label}</button>
              ))}
            </div>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input type="text" placeholder="Search games..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-72 pl-12 pr-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredGames.map((game) => (
              <div key={game.id} className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 cursor-pointer">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <img src={game.image} alt={game.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" onError={(e) => { const target = e.target as HTMLImageElement; target.src = 'https://placehold.co/400x267/1a1a1a/ffffff/png?text=' + encodeURIComponent(game.title) }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                    <button className="bg-primary hover:bg-primary-hover text-white px-5 py-2.5 rounded text-sm font-medium self-start flex items-center gap-2 transition-colors duration-150"><Play size={16} fill="white" />Play Now</button>
                  </div>
                  {game.badge && <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold uppercase ${game.badge === 'NEW' ? 'bg-yellow-400 text-black' : 'bg-red-500 text-white'}`}>{game.badge}</span>}
                </div>
                <div className="p-4"><h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors duration-150">{game.title}</h3></div>
              </div>
            ))}
          </div>
          {filteredGames.length === 0 && <div className="text-center py-16"><p className="text-gray-500 text-lg">No games found matching your criteria.</p></div>}
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">The World Leader in Live Casino</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">Limitless is the world's leading provider of video-streamed Live Casino solutions, supplying live games to the majority of Europe's top online casino operators as well as a growing number of operators in regulated markets across the globe.</p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">Our award-winning Live Casino product portfolio includes classic table games such as Roulette, Blackjack and Baccarat, as well as innovative Game Shows like Crazy Time, Monopoly Live and Deal or No Deal.</p>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center"><div className="text-4xl font-bold text-primary mb-2">700+</div><div className="text-gray-600">Live Tables</div></div>
                <div className="text-center"><div className="text-4xl font-bold text-primary mb-2">15+</div><div className="text-gray-600">Studios</div></div>
                <div className="text-center"><div className="text-4xl font-bold text-primary mb-2">500+</div><div className="text-gray-600">Operators</div></div>
              </div>
            </div>
            <div className="relative">
              <img src="https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&h=600&fit=crop" alt="Live Casino Studio" className="rounded-2xl shadow-2xl" onError={(e) => { const target = e.target as HTMLImageElement; target.src = 'https://placehold.co/800x600/1a1a1a/ffffff/png?text=Live+Casino+Studio' }} />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl"><div className="text-3xl font-bold">15+</div><div className="text-sm">Years of Excellence</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why Choose Limitless</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">Industry-leading technology and innovation that sets us apart</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{ title: "HD Streaming", description: "Crystal clear video quality with multiple camera angles for an immersive experience", icon: "🎥" }, { title: "24/7 Live Games", description: "Round-the-clock gaming with professional dealers from our global studios", icon: "🌍" }, { title: "Mobile First", description: "Optimized for all devices with seamless gameplay on mobile and tablet", icon: "📱" }, { title: "Secure & Fair", description: "Licensed and regulated with certified random number generators", icon: "🔒" }].map((feature, index) => (
              <div key={index} className="bg-gray-800 p-8 rounded-xl hover:bg-gray-750 transition-colors duration-300">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div><h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">Latest News</h2><p className="text-lg text-gray-600">Stay updated with our latest announcements</p></div>
            <a href="#" className="hidden sm:block text-primary hover:text-primary-hover font-medium">View All News →</a>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{ title: "Limitless Launches Revolutionary New Game Show", date: "January 5, 2026", excerpt: "Our latest game show combines cutting-edge technology with unprecedented entertainment value...", image: "https://images.unsplash.com/photo-1511882150382-421056c89033?w=600&h=400&fit=crop" }, { title: "Record-Breaking Q4 Results Announced", date: "January 3, 2026", excerpt: "Limitless reports exceptional growth across all markets with strong operator demand...", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop" }, { title: "New Studio Opening in North America", date: "December 28, 2025", excerpt: "Expanding our presence with a state-of-the-art facility to serve the growing US market...", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop" }].map((news, index) => (
              <article key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-[3/2] overflow-hidden"><img src={news.image} alt={news.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onError={(e) => { const target = e.target as HTMLImageElement; target.src = 'https://placehold.co/600x400/1a1a1a/ffffff/png?text=News' }} /></div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary transition-colors duration-150">{news.title}</h3>
                  <p className="text-gray-600 mb-4">{news.excerpt}</p>
                  <a href="#" className="text-primary hover:text-primary-hover font-medium">Read More →</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Partner with Limitless?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Join the world's leading operators and offer your players the best live casino experience</p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded font-medium text-lg transition-all duration-150 transform hover:-translate-y-0.5">Become a Partner</button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white px-8 py-4 rounded font-medium text-lg transition-all duration-150">Contact Sales</button>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">LIMITLESS</h3>
              <p className="text-gray-400 mb-6">The world's leading provider of video-streamed Live Casino solutions.</p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-150"><span className="sr-only">LinkedIn</span>in</a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-150"><span className="sr-only">Twitter</span>X</a>
                <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-150"><span className="sr-only">YouTube</span>▶</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Products</h4>
                            <ul className="space-y-3">
                              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">Live Casino</a></li>
                              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">Game Shows</a></li>
                              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">Slots</a></li>
                              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">First Person</a></li>
                              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">RNG</a></li>
                            </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">Investors</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact</h4>
              <ul className="space-y-3">
                <li className="text-gray-400">info@limitless.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
                <li className="text-gray-400">Stockholm, Sweden</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">&copy; 2026 Limitless Gaming. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-150">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-150">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-150">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
