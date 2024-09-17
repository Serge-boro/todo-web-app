import React from 'react'
import { PaginationInterface } from '../interfaces/interfaces'
const PaginationControls: React.FC<PaginationInterface> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '20px',
      }}
    >
      <button
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
        style={{ marginRight: '10px', padding: '5px' }}
      >
        Previous
      </button>
      <span style={{ margin: '0 10px' }}>
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
        style={{ marginLeft: '10px', padding: '5px' }}
      >
        Next
      </button>
    </div>
  )
}

export default PaginationControls
