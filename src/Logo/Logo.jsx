import { FaHome } from "react-icons/fa";
import { MdPerson } from "react-icons/md";

const Logo = () => {
  return (
    <div className="flex  items-center gap-1">
      <div className="relative">
        {/* Home Icon */}
        <FaHome className="text-4xl" />
        {/* Person Icon inside the Home */}
        <MdPerson className="absolute top-1 left-2 text-2xl" />
      </div>
      {/* Text Section */}
      <div className="text-center">
        <h1 className="text-sm font-bold text-white">ROOMMATE</h1>
        <p className="text-sm tracking-wider text-white font-medium">FINDER</p>
      </div>
    </div>
  );
};

export default Logo;
