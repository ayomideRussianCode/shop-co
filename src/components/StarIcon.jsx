function StarIcon({ rating }) {
  const roundedVal = Math.ceil(rating);

  return (
    <div className="flex gap-1 items-center">
      {Array.from({ length: roundedVal }).map((item, index) => (
        <img
          key={index}
          src={index < Math.floor(rating) ? "/star-filled.svg" : "/star-unfilled.svg"}
          alt="star"
          className="w-4 h-4"
        />
      ))}
    </div>
  );
}

export default StarIcon;
