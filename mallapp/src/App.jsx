import { useState } from 'react';
import Navbar from './components/Navbar'
import Dropdown from './components/Dropdown';
import Searchbar from './components/Searchbar';

const App = () => {
  const [hovered, setHovered] = useState('');
  const [locked, setLocked] = useState('');
  const [search, setSearch] = useState('');
  const buttonSets = {
    shops: ['Dine', 'Beauty', 'Dress', 'Entertainment'],
    services: ['Cleaning', 'Parking', 'Wi-Fi'],
    events: ['Music Show', 'Art Fest', 'Tech Talk'],
    discounts: ['Coupons', 'Flash Sale', 'Festive Offers'],
    about: ['Our Story', 'Vision', 'Careers'],
    signin: ['Login', 'Register', 'Forgot Password'],
  };

  const activeKey = locked || hovered;

  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      <Searchbar search={search} setSearch={setSearch} />
      <Navbar buttonSets={buttonSets} setHovered={setHovered} locked={locked} setLocked={setLocked}/>
      <Dropdown locked={locked} hovered={hovered} buttonSets={buttonSets} setHovered={setHovered} />
    </div>
  );
};

export default App;
