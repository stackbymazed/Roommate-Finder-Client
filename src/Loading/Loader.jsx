import React from 'react';
import { AiFillStar, AiFillHeart, AiFillLike } from 'react-icons/ai';

const icons = [AiFillStar, AiFillHeart, AiFillLike];
const colors = ['#3B82F6', '#EF4444', '#F59E0B', '#10B981', '#8B5CF6']; // blue, red, amber, green, purple

const FallingIconsLoader = () => {
  const fallingIcons = Array(20).fill(null).map((_, i) => {
    const IconComponent = icons[i % icons.length];
    const color = colors[i % colors.length];
    const leftPercent = Math.random() * 90 + 5;
    const delay = Math.random() * 2;
    const size = 15 + Math.random() * 20;

    return (
      <IconComponent
        key={i}
        size={size}
        className="absolute"
        style={{
          left: `${leftPercent}%`,
          color: color,
          animationDelay: `${delay}s`,
          animationDuration: `2.5s`,
          animationName: 'fall',
          animationTimingFunction: 'linear',
          animationIterationCount: 'infinite',
        }}
      />
    );
  });

  return (
    <div className="relative w-full h-40 flex justify-center items-center bg-gray-50 overflow-hidden">
      {fallingIcons}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <svg
          className="animate-spin text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          width={60}
          height={60}
          aria-label="Loading spinner"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          />
        </svg>
      </div>
      <style>{`
        @keyframes fall {
          0% {
            top: -40px;
            opacity: 0;
            transform: translateY(0) rotate(0deg);
          }
          10% {
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FallingIconsLoader;
