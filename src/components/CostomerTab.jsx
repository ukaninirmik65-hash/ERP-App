const CustomerTab = ({ setActiveTab, activeTab }) => {
  return (
    <>
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
    </>
  );
};

export default CustomerTab;
