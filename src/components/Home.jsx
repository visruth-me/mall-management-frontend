import { useState, useEffect} from 'react'
import axios from 'axios'

const Dropdown = ({locked,hovered,buttonSets,setHovered, setCategory}) => {
    const activeKey = locked || hovered;
    if (activeKey && Array.isArray(buttonSets[activeKey]) && buttonSets[activeKey].length > 0){
        return(
            <div 
            className="dropdown-container"
            onMouseLeave={() => {
                if (!locked) setHovered('');
            }}
            >
            {buttonSets[activeKey].map((btnText) => (
                <button
                key={btnText}
                className="dropdown-button"
                onClick = {() => {
                    setCategory(`${btnText}`)
                }}
                >
                {btnText}
                </button>
            ))}
            </div>
        )
    }

    return null;
}

const Navbar = ({buttonSets, setHovered, locked, setLocked}) => {
    return(
        <div className="navbar-container"
        onMouseLeave={() => {
          if (!locked) setHovered('');
        }}
      >
        {Object.keys(buttonSets).map((key) => (
          <button
            key={key}
            onMouseEnter={() => {
              if (!locked) setHovered(key);
            }}
            onClick={() => {
              if (locked === key) {
                setLocked('');
                setHovered('');
              } else {
                setLocked(key);
                setHovered(key);
              }
            }}
            className={`navbar-button ${locked === key ? 'active' : ''}`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
    )
}

const HeroSection = () => {


  return (
    <section className='heroStyle'>
      <div className='overlayStyle'></div>
      <div className='contentStyle'>
        <h1>Explore the Universe</h1>
        <p>Discover shops, services, events, and much more under one roof.</p>
        <button style={{
          padding: '0.75rem 1.5rem',
          fontSize: '1rem',
          backgroundColor: '#ff6600',
          border: 'none',
          borderRadius: '8px',
          color: 'white',
          cursor: 'pointer',
        }}>
          Get Started
        </button>
      </div>
    </section>
  );
};

const Searchbar = ({search, setSearch}) => {
    return(
        <div className="searchbar-container">
        <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="searchbar"
        />
        </div>
    )
}

const Shop = ({category})=>{
    const [shops, setShops] = useState([])
    useEffect(()=>{
        const fetchShops = async () => {
            try {
                const response = await axios.get(`/api/shops/names?category=${category}`)
                setShops(response.data)
            } catch (error) {
                alert('Internal server error')
            }
        }
        fetchShops()
    }, [category])
    if (shops.length === 0) return <p>No shops found in "{category}"</p>
    return(
        <div>
        <h2>{category} Shops</h2>
        {shops.map((shop, index) => (
            <div key={index}>
            <h3>{shop.name}</h3>
            <p>{shop.description}</p>
            <p><strong>{shop.location}</strong></p>
            <p><strong>{shop.email}</strong></p>
            <p><strong>{shop.phone}</strong></p>
            </div>
        ))}
        </div>
    )
}

const Home = ()=>{
    const [hovered, setHovered] = useState('');
    const [locked, setLocked] = useState('');
    const [search, setSearch] = useState('');
    const [shopCategories, setShopCategories] = useState([])
    const [serviceNames, setServiceNames] = useState([])
    const [category,setCategory] = useState('')

    useEffect(()=>{
        const fetchValues = async() => {
            try{
                const shop = await axios.get('/api/shops/categories')
                const service = await axios.get('/api/services')
                setShopCategories(shop.data)
                setServiceNames(service.data.map(s => s.name))
            } catch (error) {
                alert('Internal Server Error')
            }
        }
        fetchValues()
    },[])
    const buttonSets = {
      shops: shopCategories,
      services: serviceNames,
      discounts: '',
      signin: ['Login', 'Sign Up'],
    };

    return(
        <div style={{ fontFamily: 'sans-serif', position: 'relative' }}>
        <Searchbar search={search} setSearch={setSearch} />
        <Navbar buttonSets={buttonSets} setHovered={setHovered} locked={locked} setLocked={setLocked}/>
        <Dropdown locked={locked} hovered={hovered} buttonSets={buttonSets} setHovered={setHovered} setCategory={setCategory} />
        {category ? (
            <Shop category={category} />
        ) : (
            <HeroSection />
        )}
        </div>
    )
}

export default Home
