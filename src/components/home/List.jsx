import React, { useState } from "react";
import EditCustomerModal from "./EditCustomerModal";
import DeleteCustomerModal from "./DeleteCustomerModal";

const List = ({ items }) => {
  const [editCustomerModalOpen, setEditCustomerModalOpen] = useState(false);
  const [deleteCustomerModalOpen, setDeleteCustomerModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  return (
    <>
      <table className="items-table">
        <thead className="items-table-header">
          <tr>
            <th></th>
            <th>Customer ID</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="items-table-body">
          {items?.map((item) => {
            const { id, first_name, last_name, email, avatar } = item;
            return (
              <tr className="items-table-item box-shadow" key={id}>
                <td>
                  <img src={avatar} alt={`Avatar of ${first_name}`} />
                </td>
                <td>{id}</td>
                <td>
                  {first_name} {last_name}
                </td>
                <td>{email}</td>
                <td className="action-buttons">
                  <button
                    onClick={() => {
                      setSelectedCustomer(item);
                      setEditCustomerModalOpen(true);
                    }}
                    className="button edit-btn"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCustomer(item);
                      setDeleteCustomerModalOpen(true);
                    }}
                    className="button delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <EditCustomerModal
        isOpen={editCustomerModalOpen}
        onClose={() => setEditCustomerModalOpen(false)}
        customer={selectedCustomer}
      />
      <DeleteCustomerModal
        onClose={() => setDeleteCustomerModalOpen(false)}
        isOpen={deleteCustomerModalOpen}
        customer={selectedCustomer}
      />
    </>
  );
};

export default List;
