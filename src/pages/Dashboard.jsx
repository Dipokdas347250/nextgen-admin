import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import ContactTable from "../components/ContactTable";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-6">
            Contact Messages
          </h1>

          <ContactTable />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;