import { useState } from "react";
import Delete from "../components/Delete";

const CostomerData = ({
  filteredCustomers,
  confomDelete,
  handleDelete,
  ConformDeleteBtn,
  selectedCustomer,
  setConformDelete,
  handelEditBtn,
}) => {
  const [activeTab, setActiveTab] = useState("All");

  const customers =
    activeTab === "All"
      ? filteredCustomers
      : filteredCustomers.filter((customer) => customer.status === activeTab);

  return (
    <div className="customer-table-wrapper">
      <div className="customer-table-header">
        <h2>Customer List</h2>

        <div className="customer-tabs">
          <button
            className={activeTab === "All" ? "active" : ""}
            onClick={() => setActiveTab("All")}
          >
            All
          </button>

          <button
            className={activeTab === "Active" ? "active" : ""}
            onClick={() => setActiveTab("Active")}
          >
            Active
          </button>

          <button
            className={activeTab === "Inactive" ? "active" : ""}
            onClick={() => setActiveTab("Inactive")}
          >
            Inactive
          </button>
        </div>
      </div>

      <div className="customer-table">
        <table>
          <thead>
            <tr>
              <th>Customer Code</th>
              <th>Customer Name</th>
              <th>Company</th>
              <th>Contact Person</th>
              <th>Phone</th>
              <th>Email</th>
              <th>City</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {customers.length > 0 ? (
              customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.customerCode}</td>
                  <td>{customer.customerName}</td>
                  <td>{customer.company}</td>
                  <td>{customer.contactPerson}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>{customer.city}</td>

                  <td>
                    <span
                      className={
                        customer.status === "Active"
                          ? "status-active"
                          : "status-inactive"
                      }
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td>
                    <div className="table-actions">
                      <button
                        onClick={() => handelEditBtn(customer.customerCode)}
                      >
                        Edit
                      </button>

                      <button onClick={() => ConformDeleteBtn(customer)}>
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="empty-table">
                  No customers found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {confomDelete && (
        <Delete
          handleDelete={handleDelete}
          customer={selectedCustomer}
          setConformDelete={setConformDelete}
        />
      )}
    </div>
  );
};

export default CostomerData;
