import "./LegacyBackground.css";

const LegacyBackground = () => {
  return (
    <div className="legacy-bg">
      <svg
        className="legacy-svg"
        viewBox="0 0 1440 1200"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff8a00" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        {[...Array(18)].map((_, i) => (
          <path
            key={i}
            d={`
              M -100 ${80 + i * 60}
              C 250 ${40 + i * 60},
                500 ${120 + i * 60},
                800 ${60 + i * 60}
              S 1300 ${120 + i * 60},
                1600 ${80 + i * 60}
            `}
            className="contour-line"
          />
        ))}
      </svg>
    </div>
  );
};

export default LegacyBackground;