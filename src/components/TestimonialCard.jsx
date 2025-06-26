import StarIcon from "../components/StarIcon";
import {FaCheckCircle} from 'react-icons/fa';
function TestimonialCard({ name, verified = true, text }) {
  return (
    <div>
      <div className="border border-gray-200 rounded-lg p-5  mb-10 transition-shadow">
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-1">
            <StarIcon rating={5.0}/>
          </div>
          <div className="flex ">
            {name}
            {verified && (
              <FaCheckCircle
                className=" ml-1 mt-1 text-green-600"
                title="Verified buyer"
              />
            )}
          </div>
          <span>{text}</span>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
