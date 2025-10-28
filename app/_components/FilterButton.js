"use client";
function Button({ children, handleFilterClick, active }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 border-r-2 border-primary-200  ${
        active ? "bg-primary-600 text-primary-300" : ""
      }`}
      onClick={handleFilterClick}
    >
      {children}
    </button>
  );
}
export default Button;
