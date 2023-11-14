import React, { useRef, useState } from "react";
import Modal from "../common/Modal";
import { useDispatch, useSelector } from "react-redux";
import { addNewItem } from "../../store/slices/itemsSlice";

const AddCustomerModal = (props) => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.items);
  const lastItemId = items && items[items.length - 1]?.id;
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const fileInputRef = useRef(null);
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
      addNewItem({
        id: lastItemId + 1,
        first_name,
        last_name,
        email: emailRef.current.value,
        avatar: imageSrc,
      })
    );
    props.onClose();
    setImageSrc(null);
    setTimeout(() => {
      const container = document.querySelector(".home .container");
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }, 0);
  };
  return (
    <Modal closeButtonColor="white" {...props}>
      <div className="customer-modal">
        <div className="customer-modal-top gradient">
          <h2>Add New Customer</h2>
        </div>
        <form onSubmit={addCustomer} className="customer-modal-bottom">
          <input
            ref={nameRef}
            placeholder="Customer Name"
            type="text"
            className="customer-name"
            required
          />
          <input
            ref={emailRef}
            placeholder="Email"
            type="email"
            className="customer-email"
            required
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
          {imageSrc && <img className="img" src={imageSrc} alt="" />}
          <button className="submitButton button gradient">ADD CUSTOMER</button>
        </form>
      </div>
    </Modal>
  );
};

export default AddCustomerModal;
