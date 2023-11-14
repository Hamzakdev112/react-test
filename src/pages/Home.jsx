import React, { useEffect, useState } from "react";
import Topbar from "../components/home/Topbar";
import { fetchData } from "../apiCalls/list";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllItemsFailure,
  getAllItemsStart,
  getAllItemsSuccess,
} from "../store/slices/itemsSlice";
import List from "../components/home/List";
import Modal from "../components/home/AddCustomerModal";
import AddCustomerModal from "../components/home/AddCustomerModal";

const Home = () => {
  const { isFetching, error, items } = useSelector((state) => state.items);
  const [openAddCustomerModal, setOpenAddCustomerModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        dispatch(getAllItemsStart());
        const { data } = await fetchData();
        console.log(data);
        dispatch(getAllItemsSuccess(data));
      } catch ({ message }) {
        console.log(message);
        dispatch(getAllItemsFailure(message));
      }
    })();
  }, []);
  return (
    <>
      <div className="home">
        <Topbar />
        <div className="container">
          <button
            onClick={() => setOpenAddCustomerModal(true)}
            className="new-customer-button button gradient"
          >
            + Add New Customer
          </button>
          <List items={items} />
        </div>
      </div>
      <AddCustomerModal
        onClose={() => setOpenAddCustomerModal(false)}
        isOpen={openAddCustomerModal}
      />
    </>
  );
};

export default Home;
