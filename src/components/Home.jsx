import { useState, useEffect} from 'react'
import axios from 'axios'
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom'

const Dropdown = ({setLocked, locked,hovered,buttonSets,setHovered, setCategory, setActive}) => {
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
                    setActive(locked)
                    setLocked('')
                    setHovered('')
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

const Navbar = ({buttonSets, setHovered, locked, setLocked, setActive, setCategory, auth, handleLogout}) => {
    const navigate = useNavigate();

    const handleAuthClick = () => {
      if (auth === 'Login') {
        navigate('/login');
      } else if (auth === 'Profile') {
        navigate('/customer');
      } {/*else if (auth === 'Dashboard') {
        navigate('/dashboard'); // optional if needed
      }*/}
    };
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
              if (key === auth) {
                handleAuthClick();
                return;
              }
              if (locked === key) {
                setLocked('');
                setHovered('');
              } else {
                setLocked(key);
                setHovered(key);
                if (!Array.isArray(buttonSets[key]) || buttonSets[key].length === 0) {
                  setActive(key)
                  setCategory('')
                }
              }
            }}
            className={`navbar-button ${locked === key ? 'active' : ''}`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
        {auth!=='Login' && (
          <button
            onClick={handleLogout}
            className="navbar-button"
          >
            Logout
          </button>
        )}
      </div>
    )
}

const HeroSection = () => {


  return (
    <section className='heroStyle'>
      <div className='overlayStyle'></div>
      <div>
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
    const [shops, setShops] = useState(null)
    useEffect(()=>{
        const fetchShops = async () => {
            try {
                const response = await axios.get(`/api/shops/names?category=${category}`)
                console.log('Shops response:', response.data);
                setShops(response.data)
            } catch {
                alert('Internal server error')
            }
        }
        fetchShops()
    }, [category])
    if (shops === null) {
    return (
        <div>
          <h2>{category} Shops</h2>
          <p>Loading shops...</p>
        </div>
    );
  }
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

const Discount = ()=>{
    const [discount, setDiscounts] = useState(null)
    useEffect(()=>{
        const fetchDiscounts = async () => {
            try {
                const response = await axios.get(`/api/discounts`)
                console.log('Discounts response:', response.data);
                setDiscounts(response.data)
            } catch {
                alert('Internal server error')
            }
        }
        fetchDiscounts()
    },[])
    if (discount === null) {
    return (
        <div>
          <h2>Discounts</h2>
          <p>Loading discounts...</p>
        </div>
    );
  }
    if (discount.length === 0) return <p>No Discount Available</p>
    return(
        <div>
        <h2>Discounts</h2>
        {discount.map((dis, index) => (
            <div key={index}>
            <h3>{dis.title}</h3>
            <p>{dis.description}</p>
            <p><strong>{dis.percentage}% OFF</strong></p>
            <p><strong>Valid From: {dis.validFrom}</strong></p>
            <p><strong>Valid Till: {dis.validTill}</strong></p>
            </div>
        ))}
        </div>
    )
}

const Service = ({category})=>{
    const [services, setServices] = useState(null)
    useEffect(()=>{
        const fetchService = async () => {
            try {
                const response = await axios.get(`/api/services/one?name=${category}`)
                console.log('Service response:', response.data);
                setServices(response.data)
            } catch {
                alert('Internal server error')
            }
        }
        fetchService()
    }, [category])
    if (services === null) {
    return (
        <div>
          <h2>{category}</h2>
          <p>Loading service...</p>
        </div>
    );
  }
    return(
        <div>
        <h2>{category}</h2>
          <p>{services.description}</p>
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
    const [active,setActive] = useState('')
    const [auth,setAuth] = useState('Login')

    useEffect(() => {
      const saved = JSON.parse(localStorage.getItem('loggedUser'));
      if (saved?.token) {
        try {
          const decoded = JSON.parse(atob(saved.token.split('.')[1])); // OR use jwtDecode(saved.token)
          if (decoded.type === 'customer') {
            setAuth('Profile');
          } else {
            setAuth('Dashboard');
          }
        } catch {
          console.warn("Invalid token");
        }
      }
    }, []);

    const buttonSets = useMemo(() => ({
      home: '',
      shops: shopCategories,
      services: serviceNames,
      discounts: '',
      [auth]: '',
    }),[shopCategories, serviceNames, auth])

    useEffect(()=>{
        const fetchValues = async() => {
            try{
                const shop = await axios.get('/api/shops/categories')
                const service = await axios.get('/api/services')
                setShopCategories(shop.data)
                setServiceNames(service.data.map(s => s.name))
            } catch {
                alert('Internal Server Error')
            }
        }
        fetchValues()
    },[])

    const handleLogout = () => {
      localStorage.removeItem('loggedUser');
      setAuth('Login');
      setCategory('');
      setActive('');
      setLocked('');
      setHovered('');
      window.location.reload();
    };
    return(
        <div style={{ fontFamily: 'sans-serif', position: 'relative' }}>
        <Searchbar search={search} setSearch={setSearch} />
        <Navbar buttonSets={buttonSets} setHovered={setHovered} locked={locked} setLocked={setLocked} setActive={setActive} setCategory={setCategory} auth={auth} handleLogout={handleLogout}/>
        <Dropdown setLocked={setLocked} locked={locked} hovered={hovered} buttonSets={buttonSets} setHovered={setHovered} setCategory={setCategory} setActive={setActive}/>
        <div className="main-content">
          {category ? 
          (active ==='shops'? <Shop category={category} /> :
            (active === 'services' ? <Service category={category} /> : null)) :
              (active === 'discounts' ? <Discount /> :
                <HeroSection />)
          }
        </div>
        </div>
    )
}

export default Home
