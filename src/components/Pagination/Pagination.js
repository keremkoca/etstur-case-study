import React, { useEffect } from "react";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

import "./pagination.scss";

export function Pagination({ pageCount, currentPage, setCurrentPage }) {
  const paginationNums = [];

  const getPaginationNums = () => {
    let maxPageNum = 2;
    for (let i = currentPage - 2; i <= currentPage + maxPageNum; i++) {
      if (i > 0 && i <= pageCount) {
        paginationNums.push(i);
      } else if (i < 0) {
        maxPageNum++;
      }
    }
  };

  useEffect(() => {
    getPaginationNums();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, getPaginationNums()]);

  return (
    <div className="pagination-container">
      <button
        className="pagination-nav-btn"
        onClick={() => currentPage !== 0 && setCurrentPage(currentPage - 1)}
      >
        <MdOutlineNavigateBefore className="nav-icon" />
      </button>
      <div className="pagination-number-container">
        {paginationNums.map((a, i) => {
          return (
            <div
              className="pagination-number"
              style={
                currentPage === a - 1
                  ? { fontWeight: 900, cursor: "pointer" }
                  : { cursor: "pointer" }
              }
              onClick={() => setCurrentPage(a - 1)}
              key={i}
            >
              {a}
            </div>
          );
        })}
      </div>
      <button
        className="pagination-nav-btn"
        onClick={() =>
          currentPage !== pageCount && setCurrentPage(currentPage + 1)
        }
      >
        <MdOutlineNavigateNext className="nav-icon" />
      </button>
    </div>
  );
}

export default Pagination;
