import React from 'react';
import classNames from 'classnames';
import ArrowLeftIcon from '@/assets/images/arrow_left_icon.svg';
import ArrowLeftGrayIcon from '@/assets/images/arrow_left_gray_icon.svg';
import ArrowRightIcon from '@/assets/images/arrow_right_icon.svg';
import ArrowRightGaryIcon from '@/assets/images/arrow_right_gray_icon.svg';
import styles from './Pagination.module.css';

interface Props {
  totalPages: number;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

function Pagination({ totalPages, currentPage, onPageChange }: Props) {
  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const renderPageNumbers = () => {
    let startPage = 1;
    if (totalPages > 7 && currentPage > 4) {
      startPage = currentPage - 3;
    }
    const endPage = Math.min(startPage + 6, totalPages);

    return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index).map((pageNumber) => (
      <button
        className={classNames(styles.pageNumberButton, pageNumber === currentPage && styles.active)}
        type="button"
        key={pageNumber}
        onClick={() => onPageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    ));
  };

  return (
    <div className={styles.wrapper}>
      <button type="button" onClick={handlePrevPage} disabled={currentPage === 1}>
        {currentPage === 1 ? <ArrowLeftGrayIcon /> : <ArrowLeftIcon />}
      </button>
      <div className={styles.container}>{renderPageNumbers()}</div>
      <button type="button" onClick={handleNextPage} disabled={currentPage === totalPages}>
        {currentPage === totalPages ? <ArrowRightGaryIcon /> : <ArrowRightIcon />}
      </button>
    </div>
  );
}

export default Pagination;
