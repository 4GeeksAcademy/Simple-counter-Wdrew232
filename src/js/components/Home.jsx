import React, { useState, useEffect } from "react";


const Home = () => {
  const [count, setCount] = useState(0);
  const [lightningActive, setLightningActive] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const createRaindrops = () => {
      for (let i = 0; i < 30; i++) {
        const drop = document.createElement("div");
        drop.classList.add("rain-drop");
        drop.style.left = `${Math.random() * 100}vw`; 
        drop.style.animationDuration = `${Math.random() * 2 + 2}s`;
        document.body.appendChild(drop);

        setTimeout(() => {
          document.body.removeChild(drop);
        }, 3000);
      }
    };

    const rainInterval = setInterval(createRaindrops, 500);
    return () => clearInterval(rainInterval);
  }, []);

  useEffect(() => {
    const lightningInterval = setInterval(() => {
      setLightningActive(true);
      setTimeout(() => setLightningActive(false), 300);
    }, Math.random() * 10000 + 5000); // Random lightning every 2-7 seconds

    return () => clearInterval(lightningInterval);
  }, []);

  return (
    <div className="text-center">
      {lightningActive && <div className="lightning active"></div>} {/* Correctly triggers flash */}
      
      <div className="title">
        <strong>Dreams</strong>, <strong>Fairytales</strong>, <strong>Fantasies</strong>
      </div>
      
      <div className="image-container">
        <img src="https://th.bing.com/th/id/OIP.oUxB-BLdXkS_2kPyZnjHowHaHa?w=184&h=184&c=7&r=0&o=7&cb=iwp2&dpr=1.3&pid=1.7&rm=3" alt="Fantasy image" />
      </div>

      <div className="counter">
        <img src="https://img.icons8.com/?size=160&id=SsUyXplSFORf&format=png" alt="Clock icon" />
        {count.toString().padStart(6, '0').split("").map((digit, index) => (
          <div key={index} className="counter-digit">{digit}</div>
        ))}
      </div>

      <div className="sky">
        <div className="sheep">🐑</div> {/* Animated jumping sheep */}
      </div>
    </div>
  );
};

export default Home;
