import React, { useRef, useState } from "react";
import Modal from "../common/Modal";
import { useDispatch } from "react-redux";
import { editItem } from "../../store/slices/itemsSlice";

const EditCustomerModal = (props) => {
  const dispatch = useDispatch();
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const fileInputRef = useRef(null);
  const { customer } = props;
  const [imageSrc, setImageSrc] = useState(null);
  const handleFileSelect = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const imageDataUrl = event.target.result;
        setImageSrc(imageDataUrl);
      };

      reader.readAsDataURL(selectedFile);
    }
  };

  const addCustomer = (e) => {
    e.preventDefault();
    const [first_name, last_name] = nameRef.current.value.split(" ");
    dispatch(
      editItem({
        id: customer.id,
        first_name,
        last_name,
        email: emailRef.current.value,
        avatar: imageSrc ? imageSrc : customer.avatar,
      })
    );
    props.onClose();
    setImageSrc(null);
  };
  return (
    <Modal closeButtonColor="white" {...props}>
      <div className="customer-modal">
        <div className="customer-modal-top gradient">
          <h2>Edit Customer</h2>
        </div>
        <form onSubmit={addCustomer} className="customer-modal-bottom">
          <input
            ref={nameRef}
            placeholder="Customer Name"
            type="text"
            className="customer-name"
            required
            defaultValue={`${customer?.first_name} ${customer?.last_name}`}
          />
          <input
            ref={emailRef}
            placeholder="Email"
            type="email"
            className="customer-email"
            required
            defaultValue={customer?.email}
          />
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
          <label onClick={handleFileSelect} className="upload-label">
            Upload New
          </label>
              <img
                className="img"
                src={imageSrc ? imageSrc : customer?.avatar}
                alt=""
              />
          <button className="submitButton button gradient">UPDATE</button>
        </form>
      </div>
    </Modal>
  );
};

export default EditCustomerModal;
