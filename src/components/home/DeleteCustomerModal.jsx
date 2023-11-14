import Modal from "../common/Modal";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../store/slices/itemsSlice";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const DeleteCustomerModal = (props) => {
  const dispatch = useDispatch();
  const { customer } = props;

  const deleteCustomer = (e) => {
    e.preventDefault();
    console.log(customer);
    dispatch(deleteItem(customer.id));
    props.onClose();
  };
  return (
    <Modal closeButtonColor="white" {...props}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: 20,
          gap: "20px",
          alignItems: "center",
        }}
        className="customer-modal"
      >
        <DeleteForeverIcon htmlColor="red" sx={{ fontSize: 60 }} />
        <h1>Are you sure ?</h1>
        <p>Do you really want to delete this customer?</p>
        <div
          style={{ display: "flex", gap: 10, justifyContent: "center" }}
          className="actions"
        >
          <button
            style={{
              padding: 10,
              background: "gray",
              color: "white",
              cursor: "pointer",
            }}
            onClick={props.onClose}
            className="button"
          >
            Cancel
          </button>
          <button
            onClick={deleteCustomer}
            style={{
              padding: 10,
              background: "red",
              color: "white",
              cursor: "pointer",
            }}
            className="button"
          >
            Delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteCustomerModal;
