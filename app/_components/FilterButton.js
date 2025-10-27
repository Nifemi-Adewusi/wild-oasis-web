"use client";
function Button({ children, handleFilterClick, active }) {
  console.log("Active:", active);
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 border-r-2 ${
        active ? "bg-primary-950 text-white" : ""
      }`}
      onClick={handleFilterClick}
    >
      {children}
    </button>
  );
}
export default Button;
