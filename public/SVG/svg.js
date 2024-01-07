export const Hamburger = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    id="hamburger"
  >
    <g fill="#FFFFFF">
      <path d="M8.2 13h47.5v6.3H8.2zM8.2 28.8h47.5v6.4H8.2zM8.2 44.7h47.5V51H8.2z" />
    </g>
  </svg>
);

export const Cross = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 64 64"
    id="cross"
  >
    <line
      x1="9.37"
      x2="54.63"
      y1="9.37"
      y2="54.63"
      fill="none"
      stroke="#FFFFFF"
      strokeMiterlimit="10"
      strokeWidth="8"
    ></line>
    <line
      x1="9.37"
      x2="54.63"
      y1="54.63"
      y2="9.37"
      fill="none"
      stroke="#FFFFFF"
      strokeMiterlimit="10"
      strokeWidth="8"
    ></line>
  </svg>
);
