import React, { useState, useEffect, useRef } from 'react';
import '../style/menu.css';

const items = [
{ name: "Boiled Egg 🥚", time: 600, temp: 100 },
{name:"PopCorn 🍿", time: 300, temp: 180 },
{ name: "Baked Cookies 🍪", time: 900, temp: 180 },
{ name: "Baked Lasagna 🍝", time: 493, temp: 170 },
{ name: "Roast Chicken 🍗", time: 781, temp: 160 },
{ name: "Chocolate Cake 🎂", time: 476, temp: 220 },
{ name: "Garlic Bread 🥖", time: 384, temp: 220 },
{ name: "Grilled Veggies 🥦", time: 622, temp: 170},
{ name: "Baked Potato 🥔", time: 1637, temp: 160 },
{ name: "Mac and Cheese 🧀", time: 713, temp: 160 },
{ name: "Apple Pie 🥧", time: 1054, temp: 160 },
{ name: "Roasted Carrots 🥕", time: 327, temp: 200 },
{ name: "Meatloaf 🍖", time: 1137, temp: 150 },
{ name: "Stuffed Peppers 🌶️", time: 1712, temp: 170 },
{ name: "Banana Bread 🍌", time: 906, temp: 210 },
{ name: "Baked Salmon 🐟", time: 1489, temp: 210 },
{ name: "Chicken Wings 🍗", time: 454, temp: 160 },
{ name: "Tandoori Chicken 🔥", time: 1786, temp: 160 },
{ name: "Roast Beef 🥩", time: 1422, temp: 150 },
{ name: "Baked Beans 🫘", time: 676, temp: 170 },
{ name: "Zucchini Boats 🛶", time: 1489, temp: 160 },
{ name: "Baked Eggplant 🍆", time: 1665, temp: 190 },
{ name: "Turkey Breast 🍗", time: 1500, temp: 200 },
{ name: "Oven Fried Chicken 🍗", time: 852, temp: 200 },
{ name: "Veggie Casserole 🥘", time: 843, temp: 160 },
{ name: "Baked Tofu 🍢", time: 1056, temp: 210 },
{ name: "Cornbread 🍞", time: 1055, temp: 190 },
{ name: "Baked Shrimp 🍤", time: 616, temp: 160 },
{ name: "Cheesy Broccoli 🧀🥦", time: 1399, temp: 210 },
{ name: "Roasted Sweet Potatoes 🍠", time: 1340, temp: 180 },
{ name: "Chicken Pot Pie 🥧", time: 1525, temp: 200 },
{ name: "Baked Pasta 🍝", time: 868, temp: 220 },
{ name: "Pineapple Ham 🍍", time: 1410, temp: 160 },
{ name: "Baked Mushrooms 🍄", time: 1489, temp: 180 },
{ name: "French Fries 🍟", time: 785, temp: 160 },
{ name: "Roasted Garlic 🧄", time: 1048, temp: 160 },
{ name: "Shepherd’s Pie 🥧", time: 1040, temp: 220 },
{ name: "Baked Ziti 🍝", time: 1438, temp: 210 },
{ name: "Cinnamon Rolls 🍥", time: 593, temp: 150 },
{ name: "Enchiladas 🌯", time: 789, temp: 150 },
{ name: "Roasted Cauliflower 🥦", time: 1599, temp: 190 },
{ name: "Scones 🍪", time: 1576, temp: 190 },
{ name: "Cheese Pizza 🍕", time: 1744, temp: 190 },
{ name: "Sausage Rolls 🌭", time: 423, temp: 170 },
{ name: "Fish Sticks 🐠", time: 1593, temp: 210 },
{ name: "Tater Tots 🥔", time: 396, temp: 170 },
{ name: "Muffins 🧁", time: 783, temp: 190 },
{ name: "Stuffed Shells 🍝", time: 398, temp: 170 },
{ name: "Baked Chicken Parmesan 🍗🧀", time: 1272, temp: 200 },
{ name: "Baked Falafel 🧆", time: 1692, temp: 210 },
{ name: "Oven Roasted Tomatoes 🍅", time: 374, temp: 190 },
{ name: "Baked Ribs 🍖", time: 488, temp: 160 },
{ name: "Quesadilla 🧀🌮", time: 1493, temp: 210 },
{ name: "Calzone 🍕", time: 498, temp: 160 },
{ name: "Nachos 🧀", time: 661, temp: 200 },
{ name: "Garlic Knots 🧄", time: 1417, temp: 210 },
{ name: "Baked Oatmeal 🥣", time: 1273, temp: 180 },
{ name: "Spinach Casserole 🌿", time: 769, temp: 160 },
{ name: "Roasted Brussels Sprouts 🥬", time: 401, temp: 150 },
{ name: "Baked Tilapia 🐟", time: 368, temp: 170 },
{ name: "Roasted Duck 🦆", time: 1012, temp: 150 },
{ name: "Baked Meatballs 🍖", time: 416, temp: 170 },
{ name: "Eggplant Parmesan 🍆🧀", time: 1046, temp: 180 },
{ name: "Pizza Rolls 🍕", time: 989, temp: 160 },
{ name: "Oven Roasted Asparagus 🌱", time: 1482, temp: 150 },
{ name: "Baked Onions 🧅", time: 1772, temp: 200 },
{ name: "Baked Apples 🍎", time: 1779, temp: 150 },
{ name: "Pumpkin Pie 🎃", time: 1296, temp: 200 },
{ name: "Lemon Bars 🍋", time: 1528, temp: 180 },
{ name: "Baked Cheesecake 🍰", time: 1415, temp: 190 },
{ name: "Coconut Macaroons 🥥", time: 766, temp: 160 },
{ name: "Oven Pancakes 🥞", time: 1546, temp: 200 },
{ name: "Oven Roasted Chickpeas 🫘", time: 1151, temp: 150 },
{ name: "Mini Quiches 🧁🍳", time: 1408, temp: 170 },
{ name: "Hash Brown Casserole 🥔", time: 1421, temp: 210 },
{ name: "Peach Cobbler 🍑", time: 1303, temp: 150 },
{ name: "Oven Baked Tacos 🌮", time: 1735, temp: 150 },
{ name: "Roasted Bell Peppers 🌶️", time: 1438, temp: 220 },
{ name: "Baked Gnocchi 🍝", time: 1222, temp: 150 },
{ name: "Roasted Beetroot ❤️", time: 1140, temp: 160 },
{ name: "Baked Squash 🎃", time: 1776, temp: 200 },
{ name: "Corn Casserole 🌽", time: 1583, temp: 200 },
{ name: "Hot Pockets 🥟", time: 1333, temp: 180 },
{ name: "Pizza Bagels 🍕🥯", time: 1138, temp: 180 },
{ name: "Baked Chicken Drumsticks 🍗", time: 505, temp: 150 },
{ name: "Baked Turkey Legs 🦃", time: 1109, temp: 160 },
{ name: "Roasted Lamb 🍖", time: 1631, temp: 150 },
{ name: "Baked Broccoli Cheddar Cups 🧀🥦", time: 1309, temp: 190 },
{ name: "Baked Chicken Tenders 🍗", time: 1502, temp: 220 },
{ name: "Roasted Plantains 🍌", time: 568, temp: 180 },
{ name: "Pita Chips 🫓", time: 774, temp: 170 },
{ name: "Baked Ravioli 🍝", time: 798, temp: 180 },
{ name: "Roasted Eggplant Slices 🍆", time: 805, temp: 200 },
{ name: "Oven Grilled Cheese 🧀", time: 1427, temp: 200 },
{ name: "Breakfast Casserole 🍳", time: 1745, temp: 170 },
{ name: "Roasted Pumpkin Seeds 🎃", time: 581, temp: 190 },
{ name: "Baked Tortilla Chips 🌮", time: 621, temp: 160 },
{ name: "Baked Bacon 🥓", time: 1201, temp: 170 },
{ name: "Oven Roasted Corn 🌽", time: 1477, temp: 170 },
{ name: "Roasted Potatoes 🥔", time: 993, temp: 210 },
{ name: "Baked Brie 🧀", time: 766, temp: 210 },
{ name: "Baked Sausage and Peppers 🌶️", time: 1443, temp: 160 },
{ name: "Oven Baked Doughnuts 🍩", time: 1350, temp: 200 },
{ name: "Stuffed Mushrooms 🍄", time: 1297, temp: 220 },
];

function Menu() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [timer, setTimer] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    let interval = null;
    if (isStarted && timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0 && isStarted) {
      setIsStarted(false);
      setSelected(null);
      setShowModal(false);
      // Play sound
      if (audioRef.current) {
        audioRef.current.play();
      }
    }
    return () => clearInterval(interval);
  }, [isStarted, timer]);

  const handleClick = (item) => {
    setSelected(item);
    setTimer(item.time);
    setShowModal(true);
    setIsStarted(false);
  };

  const handleStart = () => {
    setIsStarted(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setSelected(null);
    setIsStarted(false);
    setTimer(0);
  };

  // Filter items by search
  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="menu-outer">

      <input
        type="text"
        placeholder="Search dish..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-bar"
      />
      <div className="menu-container">
        {filteredItems.map((item, index) => (
          <div key={index} className="card" onClick={() => handleClick(item)}>
            {item.name}
          </div>
        ))}
      </div>
      {showModal && selected && (
        <div className="modal">
          <div className="modal-content">
            <p className='pop-title'>{selected.name}</p>
            <div className="timer">
              {Math.floor(timer / 60)}:{String(timer % 60).padStart(2, '0')}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              {!isStarted ? (
                <>
                  <button className="timer-btn" onClick={handleStart}>Start</button>
                  <button className="timer-btn" onClick={handleClose}>Close</button>
                </>
              ) : (
                <button className="timer-btn" onClick={handleClose}>Cancel</button>
              )}
            </div>
          </div>
        </div>
      )}
      <audio ref={audioRef} src="https://actions.google.com/sounds/v1/alarms/whistle.ogg" preload="auto" />
    </div>
  );
}

export default Menu;