import {
  FaHome,
  FaEnvelope,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 bg-slate-900 text-white min-h-screen p-5">
      <h1 className="text-2xl font-bold mb-10">
        NextGen Academy
      </h1>

      <ul className="space-y-5">
        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaHome />
          Dashboard
        </li>

        <li className="flex items-center gap-3 cursor-pointer hover:text-blue-400">
          <FaEnvelope />
          Contacts
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;