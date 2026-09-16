const Inventory = ({ data }) => {
  const grouped = data.categoryStock?.reduce((acc, item) => {
    const key = item.category;
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
  return (
    <div className="inventory-page">
      <div className="dashboard-card inventory-table-card">
        <div className="section-header" style={{ padding: "6px 17px" }}>
          <div>
            <h2>Stock Overview</h2>
            <p>Current product stock information</p>
          </div>

          <button className="btn btn-primary">+ Add Stock</button>
        </div>

        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>SKU</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Min Stock</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {data.stockOverview?.map(
                ({ id, product, sku, category, stock, minStock, status }) => {
                  return (
                    <tr key={id}>
                      <td>{product}</td>
                      <td>{sku}</td>
                      <td>{category}</td>
                      <td>{stock}</td>
                      <td>{minStock}</td>
                      <td>
                        <span className="status-badge status-success">
                          {status}
                        </span>
                      </td>
                      <td>
                        <button className="table-action-btn">View</button>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==================== LOW STOCK PRODUCTS ==================== */}
      <div className="dashboard-card">
        <div className="section-header" style={{ padding: "6px 17px" }}>
          <div>
            <h2>Low Stock Products</h2>
            <p>Products that need restocking</p>
          </div>
        </div>

        <div className="low-stock-list">
          {data.lowStockProducts?.map(({ id, product, sku, stock }) => {
            return (
              <div className="low-stock-item" key={id}>
                <div>
                  <h4>{product}</h4>
                  <span>{sku}</span>
                </div>

                <strong>{stock} Left</strong>
              </div>
            );
          })}
        </div>
      </div>

      {/* ==================== STOCK MOVEMENT ==================== */}
      <div className="dashboard-card">
        <div className="section-header" style={{ padding: "6px 17px" }}>
          <div>
            <h2>Recent Stock Movement</h2>
            <p>Latest inventory transactions</p>
          </div>
        </div>

        <div className="table-wrapper">
          <table className="data-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Type</th>
                <th>Quantity</th>
                <th>Date</th>
                <th>Reference</th>
              </tr>
            </thead>

            <tbody>
              {data.stockMovement?.map(
                ({ id, product, type, quantity, date, reference }) => {
                  return (
                    <tr key={id}>
                      <td>{product}</td>
                      <td>
                        <span
                          className={`status-badge ${type === "Stock In" ? "status-success" : "status-danger"}`}
                        >
                          {type}
                        </span>
                      </td>
                      <td>
                        {quantity > 0 && "+"}
                        {quantity}
                      </td>
                      <td>{date}</td>
                      <td>{reference}</td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ==================== CATEGORY STOCK ==================== */}
      <div className="dashboard-card">
        <div className="section-header" style={{ padding: "6px 17px" }}>
          <div>
            <h2>Category Stock</h2>
            <p>Stock distribution by category</p>
          </div>
        </div>

        <div className="category-stock-grid">
          {Object.values(grouped || {}).map((items) =>
            items.map(({ id, category, stock, discription }) => (
              <div key={id} className="category-stock-card">
                <span>{category}</span>
                <strong>{stock}</strong>
                <small>{discription}</small>
              </div>
            )),
          )}
        </div>
      </div>
    </div>
  );
};

export default Inventory;
