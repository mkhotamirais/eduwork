const Pagination = ({ nomorPages, setPageSekarang, pageSekarang, totalPage }) => {
  function gantiAngkaPage(nomor) {
    setPageSekarang(nomor);
  }
  function pageSebelum() {
    if (pageSekarang !== 1) {
      setPageSekarang(pageSekarang - 1);
    }
  }
  function pageLanjut() {
    if (pageSekarang !== totalPage) {
      setPageSekarang(pageSekarang + 1);
    }
  }
  return (
    <div className="pagination my-3">
      <button onClick={pageSebelum} className={pageSekarang === 1 ? "disabled" : ""}>
        prev
      </button>
      {nomorPages.map((nomor, i) => (
        <button
          key={i}
          onClick={() => gantiAngkaPage(nomor)}
          className={`${pageSekarang === nomor ? "active" : ""} btn-number`}
        >
          {nomor}
        </button>
      ))}
      <button onClick={pageLanjut} className={pageSekarang === totalPage ? "disabled" : ""}>
        next
      </button>
    </div>
  );
};
Pagination.propTypes;

export default Pagination;
