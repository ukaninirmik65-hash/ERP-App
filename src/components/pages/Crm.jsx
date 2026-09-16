import { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SidebarContext } from "../context/SidebarContext";
import CostomerData from "../CostomerData.jsx";

const Crm = () => {
  const { setNotificationCount, search } = useContext(SidebarContext);

  const initialCustomer = {
    customerCode: "",
    customerName: "",
    company: "",
    contactPerson: "",
    phone: "",
    email: "",
    gstNumber: "",
    address: "",
    city: "",
    state: "",
    country: "India",
    creditLimit: "",
    paymentTerms: "",
    priceList: "",
    status: "Active",
  };

  const [customer, setCustomer] = useState(initialCustomer);
  const [customers, setCustomers] = useState([]);
  const [confomDelete, setConformDelete] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [edit, setEdit] = useState(null);

  const handleDelete = (id) => {
    setCustomers((prev) => prev.filter((customer) => customer.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    for (const field in customer) {
      if (customer[field].toString().trim() === "") {
        toast.error(`${field} is required!`);
        return;
      }
    }

    if (edit) {
      setCustomers((prev) =>
        prev.map((item) =>
          item.customerCode === edit.customerCode ? { ...customer } : item,
        ),
      );

      toast.success("Customer updated successfully!");
      setEdit(null);
    } else {
      setCustomers((prev) => [
        ...prev,
        {
          ...customer,
          id: Date.now(),
        },
      ]);

      toast.success("Customer saved successfully!");
      setNotificationCount((prev) => prev + 1);
    }

    setCustomer(initialCustomer);
  };
  function Hnadelcancel() {
    setCustomer(initialCustomer);
  }

  const filteredCustomers = customers.filter((customer) =>
    customer.customerName.toLowerCase().includes(search.toLowerCase()),
  );

  function ConformDeleteBtn(customer) {
    setSelectedCustomer(customer);
    setConformDelete(true);
  }

  function handelEditBtn(id) {
    const selectCutomer = customers.find((val) => {
      return val.customerCode === id;
    });
    if (!selectCutomer) return;
    setCustomer(selectCutomer);
    setEdit(selectCutomer);
  }

  return (
    <div className="customer-form">
      {/* Header */}
      <div className="form-header">
        <div>
          <h2>Customer Master</h2>
          <p>Create and manage customer information</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Basic Information */}
        <section className="form-section">
          <h3>Basic Information</h3>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="customerCode">Customer Code</label>
              <input
                id="customerCode"
                name="customerCode"
                type="text"
                value={customer.customerCode}
                onChange={handleChange}
                placeholder="Enter customer code"
              />
            </div>

            <div className="form-group">
              <label htmlFor="customerName">Customer Name</label>
              <input
                id="customerName"
                name="customerName"
                type="text"
                value={customer.customerName}
                onChange={handleChange}
                placeholder="Enter customer name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                value={customer.company}
                onChange={handleChange}
                placeholder="Enter company name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="contactPerson">Contact Person</label>
              <input
                id="contactPerson"
                name="contactPerson"
                type="text"
                value={customer.contactPerson}
                onChange={handleChange}
                placeholder="Enter contact person"
              />
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="form-section">
          <h3>Contact Information</h3>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={customer.phone}
                onChange={handleChange}
                placeholder="Enter phone number"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={customer.email}
                onChange={handleChange}
                placeholder="Enter email address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="gstNumber">GST Number</label>
              <input
                id="gstNumber"
                name="gstNumber"
                type="text"
                value={customer.gstNumber}
                onChange={handleChange}
                placeholder="Enter GST number"
              />
            </div>
          </div>
        </section>

        {/* Address Information */}
        <section className="form-section">
          <h3>Address Information</h3>

          <div className="form-grid">
            <div className="form-group full-width">
              <label htmlFor="address">Address</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                value={customer.address}
                onChange={handleChange}
                placeholder="Enter complete address"
              />
            </div>

            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="city"
                type="text"
                value={customer.city}
                onChange={handleChange}
                placeholder="Enter city"
              />
            </div>

            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                id="state"
                name="state"
                type="text"
                value={customer.state}
                onChange={handleChange}
                placeholder="Enter state"
              />
            </div>

            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                id="country"
                name="country"
                type="text"
                value={customer.country}
                onChange={handleChange}
                placeholder="Enter country"
              />
            </div>
          </div>
        </section>

        {/* Commercial Information */}
        <section className="form-section">
          <h3>Commercial Information</h3>

          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="creditLimit">Credit Limit</label>
              <input
                id="creditLimit"
                name="creditLimit"
                type="number"
                value={customer.creditLimit}
                onChange={handleChange}
                placeholder="Enter credit limit"
                min="0"
              />
            </div>

            <div className="form-group">
              <label htmlFor="paymentTerms">Payment Terms</label>

              <select
                id="paymentTerms"
                name="paymentTerms"
                value={customer.paymentTerms}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select payment terms
                </option>
                <option value="Immediate">Immediate</option>
                <option value="7 Days">7 Days</option>
                <option value="15 Days">15 Days</option>
                <option value="30 Days">30 Days</option>
                <option value="45 Days">45 Days</option>
                <option value="60 Days">60 Days</option>
                <option value="90 Days">90 Days</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="priceList">Price List</label>

              <select
                id="priceList"
                name="priceList"
                value={customer.priceList}
                onChange={handleChange}
              >
                <option value="" disabled>
                  Select price list
                </option>
                <option value="Retail">Retail</option>
                <option value="Wholesale">Wholesale</option>
                <option value="Distributor">Distributor</option>
                <option value="Special">Special</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="status">Status</label>

              <select
                id="status"
                name="status"
                value={customer.status}
                onChange={handleChange}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>
        </section>

        {/* Form Actions */}
        <div className="form-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={Hnadelcancel}
          >
            Cancel
          </button>

          <button type="submit" className="btn btn-primary">
            Save Customer
          </button>
        </div>
      </form>
      <CostomerData
        filteredCustomers={filteredCustomers}
        confomDelete={confomDelete}
        handleDelete={handleDelete}
        ConformDeleteBtn={ConformDeleteBtn}
        selectedCustomer={selectedCustomer}
        setConformDelete={setConformDelete}
        handelEditBtn={handelEditBtn}
      />
    </div>
  );
};

export default Crm;
