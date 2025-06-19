function Button({ text, className = "", onClick, children , ...props}) {
  return (
    <button
      onClick={onClick}
      className={`bg-black text-white px-8 py-3 rounded-full ${className}`}
      {...props}
    >
      {text}
      {children}
    </button>
  );
}

export default Button;
