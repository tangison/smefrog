const BRAND = {
  colors: {
    primary: '#7AC943',
    forest: '#1E3A2F',
    black: '#0F1412',
    lightGreen: '#E8F5E4',
    offWhite: '#F8F9F4'
  },
  typography: "'Space Grotesk', sans-serif"
};

export const LogoMark = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M20 55C20 40 33.4315 28 50 28C66.5685 28 80 40 80 55" stroke="#7AC943" strokeWidth="12" strokeLinecap="round"/>
    <circle cx="35" cy="35" r="8" fill="#7AC943" />
    <circle cx="65" cy="35" r="8" fill="#7AC943" />
    <path d="M30 65C30 65 40 75 50 75C60 75 70 65 70 65" stroke="#7AC943" strokeWidth="6" strokeLinecap="round" opacity="0.5"/>
  </svg>
);
