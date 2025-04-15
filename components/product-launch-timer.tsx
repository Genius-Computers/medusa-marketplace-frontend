import React, { useState, useEffect } from 'react';

const ProductLaunchTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    // Set launch date to 7 days from now
    const launchDate = new Date();
    launchDate.setDate(launchDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = launchDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const padNumber = (num: number) => String(num).padStart(2, '0');

  return (
    <div className="relative h-screen bg-black">
      <div 
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=1920&q=80')",
          filter: "brightness(0.4)"
        }}
      />
      
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <div className="flex gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-24">
            <div className="text-4xl font-bold">{padNumber(timeLeft.days)}</div>
            <div className="text-sm mt-1">Days</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-24">
            <div className="text-4xl font-bold">{padNumber(timeLeft.hours)}</div>
            <div className="text-sm mt-1">Hours</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-24">
            <div className="text-4xl font-bold">{padNumber(timeLeft.minutes)}</div>
            <div className="text-sm mt-1">Minutes</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 w-24">
            <div className="text-4xl font-bold">{padNumber(timeLeft.seconds)}</div>
            <div className="text-sm mt-1">Seconds</div>
          </div>
        </div>

        <h1 className="text-5xl font-bold mb-4">Hear The Music, Block The World</h1>
        <p className="text-xl text-gray-300 max-w-2xl mb-8">
          Perfect for commuting, working, or relaxing, they provide a sanctuary of sound where you control what you hear.
        </p>

        <div className="flex gap-4">
          <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition">
            Pre-order Now
          </button>
          <button className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-full font-medium hover:bg-white/20 transition">
            Learn More
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce">
            <div className="w-1 h-8 bg-white/50 rounded-full mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLaunchTimer;