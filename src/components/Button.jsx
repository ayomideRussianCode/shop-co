function Button({ text, className = "", onClick, ...props }) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-8 py-3 rounded-full ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}

export default Button;
