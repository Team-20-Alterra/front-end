import ReactPaginate from "react-paginate";

export const Pagination = ({ pageCount, onPageChange, currentPage }) => {
  return (
    <div>
      <ReactPaginate
        previousLabel={"<- Prev"}
        previousClassName="prev-pagination"
        nextLabel={"Next ->"}
        nextLinkClassName="prev-button-pagination"
        previousLinkClassName="prev-button-pagination"
        nextClassName="next-pagination"
        pageClassName="list-pagination"
        breakLabel={"..."}
        breakClassName={"list-pagination"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={1}
        onPageChange={onPageChange}
        containerClassName={"pagination float-end"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active-pagination"}
        forcePage={currentPage ?? 0}
      />
    </div>
  );
};
