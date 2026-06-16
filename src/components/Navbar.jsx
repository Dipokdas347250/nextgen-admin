const Navbar = () => {
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <h2 className="text-xl font-semibold">
        Admin Dashboard
      </h2>

      <div className="flex items-center gap-4">
        <img
          src="https://i.pravatar.cc/40"
          alt="admin"
          className="rounded-full"
        />

        <p className="font-medium">
          Admin
        </p>
      </div>
    </div>
  );
};

export default Navbar;