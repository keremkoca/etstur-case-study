import React, { useState } from "react";
import {
  HotelCard,
  HotelAdd,
  ScoreFilter,
  Pagination,
  DeleteModal,
} from "../../components";
import { PAGE_SIZE } from "../../utils/constants";

import "./hotel-list.scss";

export function HotelList({ hotelList, setHotelList }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedHotel, setSelectedHotel] = useState({});
  const [sortedList, setSortedList] = useState([]);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openModal = (data) => {
    setSelectedHotel(data);
    setIsDeleteModalOpen(true);
  };

  const closeModal = () => {
    setIsDeleteModalOpen(false);
  };

  const deleteHotel = (id) => {
    const updatedHotelList = hotelList.filter((hotel) => hotel.id !== id);
    setHotelList(updatedHotelList);
    closeModal();
  };

  const pageCount = Math.ceil(hotelList?.length / PAGE_SIZE);

  const hotels = sortedList.slice(
    currentPage * PAGE_SIZE,
    (currentPage + 1) * PAGE_SIZE
  );

  return (
    <div className="hotel-list-page-container">
      <HotelAdd />
      <ScoreFilter hotelList={hotelList} setSortedList={setSortedList} />
      <div className="hotel-list-container">
        {hotels.map((hotel) => {
          return (
            <HotelCard
              hotelList={hotelList}
              setHotelList={setHotelList}
              setSelectedHotel={setSelectedHotel}
              openModal={openModal}
              closeModal={closeModal}
              key={hotel.id}
              hotel={hotel}
            />
          );
        })}
      </div>
      {pageCount > 1 && (
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          pageCount={pageCount}
        />
      )}
      <DeleteModal
        deleteHotel={deleteHotel}
        selectedHotel={selectedHotel}
        isOpen={isDeleteModalOpen}
        closeModal={closeModal}
      />
    </div>
  );
}

export default HotelList;
