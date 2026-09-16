import { useState } from "react";
import Delete from "./Delete";
import CustomerTab from "./CostomerTab";
import { FaSortAlphaDown } from "react-icons/fa";
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
  const [sortOrder, setSortOrder] = useState("z-a");
  const customers =
    activeTab === "All"
      ? filteredCustomers
      : filteredCustomers.filter((customer) => customer.status === activeTab);

  const sortedCustomers = customers.sort((a, b) => {
    return sortOrder === "a-z"
      ? a.customerName.localeCompare(b.customerName)
      : b.customerName.localeCompare(a.customerName);
  });
  return (
    <div className="customer-table-wrapper">
      <div className="customer-table-header">
        <h2>Customer List</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "10px",
          }}
        >
          <CustomerTab setActiveTab={setActiveTab} activeTab={activeTab} />
          <button
            className="sort-btn"
            onClick={() => {
              setSortOrder(sortOrder === "a-z" ? "z-a" : "a-z");
            }}
          >
            <span className="sort-btn-icon">
              <FaSortAlphaDown />
            </span>
            Sort
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
            {sortedCustomers.length > 0 ? (
              sortedCustomers.map((customer, index) => (
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
