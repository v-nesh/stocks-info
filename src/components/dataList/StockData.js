import React, { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import useFetchStocks from "../customHook/useFetchStocks";
import EmptyData from "./EmptyData";

const StockData = () => {
  const { data } = useFetchStocks();
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 3;
  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = items.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(items.length / recordPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1);

  useEffect(() => {
    const newData = data.slice(0, 6);
    setItems(newData);
  }, [data]);

  const prevPage = () => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const currPage = (num) => {
    setCurrentPage(num);
  };
  const nextPage = () => {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="container  h-100 my-5">
      <div className="d-flex justify-content-center align-items-center ">
        <h3 style={{ color: "white" }}>Total Data : {items.length}</h3>
      </div>
      <div className="d-flex justify-content-center align-items-center ">
        <div className="table-responsive-sm">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr className="table-primary">
                <td>Name</td>
                <td>Market</td>
                <td>Curreny</td>
                <td>Change %</td>
                <td>Market Open</td>
                <td>Day High</td>
                <td>Day Low</td>
                <td>Price ($)</td>
              </tr>
            </thead>
            <tbody>
              {items.length === 0 ? (
                <EmptyData listsToRender={3} />
              ) : (
                records.map((item, i) => {
                  const {
                    longName,
                    market,
                    currency,
                    regularMarketChangePercent,
                    regularMarketOpen,
                    regularMarketDayHigh,
                    regularMarketDayLow,
                    regularMarketPrice,
                  } = item;
                  return (
                    <tr key={i}>
                      <td>{longName.substring(0, 18).concat("...")}</td>
                      <td>{market.toUpperCase().replace("_", " ")}</td>
                      <td>{currency}</td>
                      <td>{regularMarketChangePercent.toFixed(2) + " %"}</td>
                      <td>{regularMarketOpen.toFixed(2) + " $"}</td>
                      <td>{regularMarketDayHigh.toFixed(2) + " $"}</td>
                      <td>{regularMarketDayLow.toFixed(2) + " $"}</td>
                      <td>{regularMarketPrice.toFixed(2) + " $"}</td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </Table>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div>
          <ul className="pagination">
            <li className="page-item">
              <a href="#/" className="page-link" onClick={prevPage}>
                Prev
              </a>
            </li>
            {numbers.map((num, i) => (
              <li
                key={i}
                className={`page-item ${currentPage === num ? "active" : ""}`}
              >
                <a
                  href="#/"
                  className="page-link"
                  onClick={() => currPage(num)}
                >
                  {num}
                </a>
              </li>
            ))}
            <li className="page-item">
              <a href="#/" className="page-link" onClick={nextPage}>
                Next
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StockData;
