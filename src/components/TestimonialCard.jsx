import StarIcon from "../components/StarIcon";
function TestimonialCard({ name, verified = true, rating = 5, text }) {
  return (
    <div>
      <div className="border border-gray-200 rounded-lg p-5 transition-shadow">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-1">
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <StarIcon key={i} filled={i < rating} />
              ))}
          </div>
          <div className="flex ">
            {name}
            {verified && (
              <span
                className="ml-1 text-green-600"
                title="Verified buyer"
              ></span>
            )}
          </div>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
