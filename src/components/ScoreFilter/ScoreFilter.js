import React, { useState, useEffect } from "react";
import Select from "react-select";
import { BsArrowDownUp } from "react-icons/bs";

import "./score-filter.scss";

const options = [
  { value: "accending", label: "Puan(Artan)" },
  { value: "decending", label: "Puan(Azalan)" },
];

const customStyles = {
  menu: (provided) => ({
    ...provided,
    padding: 15,
  }),
  control: (provided) => ({
    ...provided,
    border: 0,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    padding: 10,
    borderRadius: 5,
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    fontWeigth: 30,
  }),
};

export function ScoreFilter({ hotelList, setSortedList }) {
  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (selectedOption) {
      const list = [...hotelList];
      if (selectedOption?.value === "accending") {
        const sortedList = list.sort(
          (a, b) => a.score - b.score || b.createdAt - a.createdAt
        );

        setSortedList(sortedList);
      } else {
        const sortedList = list.sort(
          (a, b) => b.score - a.score || b.createdAt - a.createdAt
        );

        setSortedList(sortedList);
      }
    } else {
      setSortedList([...hotelList]);
    }
  }, [selectedOption, setSortedList, hotelList]);

  return (
    <div className="hotel-filter-container">
      <Select
        styles={customStyles}
        placeholder={
          <div style={{ display: "flex" }}>
            <BsArrowDownUp style={{ fontSize: "20px", marginRight: "5px" }} />
            <p style={{ margin: 0 }}>Sıralama</p>
          </div>
        }
        defaultValue={"siralama"}
        value={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isSearchable={false}
        components={{
          IndicatorSeparator: () => null,
        }}
      ></Select>
    </div>
  );
}

export default ScoreFilter;
