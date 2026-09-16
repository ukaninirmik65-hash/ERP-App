const Delete = ({ customer, handleDelete, setConformDelete }) => {
  function handelCancelBtn() {
    setConformDelete(false);
  }
  return (
    <div className="confirm-overlay">
      <div className="confirm-box">
        <h3>Delete Customer?</h3>

        <p>Are you sure you want to delete this customer?</p>

        <div className="confirm-actions">
          <button className="cancel-btn" onClick={handelCancelBtn}>
            Cancel
          </button>
          <button
            className="delete-btn"
            onClick={() => {
              handleDelete(customer.id);
              handelCancelBtn();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;
