import './Pagination.css';

function Pagination({ currentPage, totalPages, onPageChange }) {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    return (
    <div className="pagination">

        <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
        >
            Anterior
        </button>
        
        {pages.map(page => (
            <button
                key={page}
                onClick={() => onPageChange(page)}
                className={page === currentPage ? 'active' : ''}
            >
            
            {page}
            
            </button>
        ))}

        <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
        >
            Próxima
        </button>

    </div>
    );
}

export default Pagination;
