import React from "react";

function Button({ styles }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient text-[18px] txt-primary outline-none ${styles}`}
    >
      Get Started
    </button>
  );
}

export default Button;
