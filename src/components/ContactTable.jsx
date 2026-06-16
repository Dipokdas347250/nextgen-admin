import axios from "axios";
import { useEffect, useState } from "react";

const ContactTable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await axios.get(
        "https://nextgen-2-e3jk.onrender.com/api/contact"
      );

      setContacts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMessage = async (id) => {
    try {
      await axios.delete(
        `https://nextgen-2-e3jk.onrender.com/api/contact/${id}`
      );

      fetchContacts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-xl overflow-x-auto">
      <table className="w-full">
        <thead className="bg-slate-900 text-white">
          <tr>
            <th className="p-4 text-left">Date</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Email</th>
            <th className="p-4 text-left">Phone</th>
            <th className="p-4 text-left">Subject</th>
            <th className="p-4 text-left">
              Message
            </th>
            <th className="p-4 text-left">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr
              key={contact._id}
              className="border-b"
            >
              <td className="p-4">
                {contact.createdAt.substring(0, 10)}
              </td>
              <td className="p-4">
                {contact.name}
              </td>

              <td className="p-4">
                {contact.email}
              </td>

              <td className="p-4">
                {contact.phone}
              </td>
              <td className="p-4">
                {contact.subject}
              </td>

              <td className="p-4">
                {contact.message}
              </td>

              <td className="p-4">
                <button
                  onClick={() =>
                    deleteMessage(contact._id)
                    
                }
                className="bg-red-500 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-red-600"
                >
                   
                  Delete
                </button>
              </td>
            </tr>
            
          ))}
          
        </tbody>
      </table>
    </div>
  );
};

export default ContactTable;