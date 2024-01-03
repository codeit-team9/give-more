import { useEffect, useState } from 'react';
import { Address } from '@/@types/address.types';
import getNoticeList from '@/api/getNoticeList';
import NoticeEntire from '@/components/notice/NoticeEntire/NoticeEntire';
import useAsync from '@/hooks/useAsync';
import convertDate from '@/utils/convertDate';
import { NoticeData } from '@/@types/notice.types';
import usePagination from '@/hooks/usePagination';
import Pagination from '@/components/@common/pagination/Pagination';
import GNBNav from '@/components/@common/GNBNav/GNBNav';
import Dropdown from '@/components/@common/DropDown/Dropdown';
import { SORT } from '@/constants/constants';
import useDropdown from '@/hooks/useDropdown';
import FilterModal from '@/components/@common/Modal/FilterModal/FilterModal';
import useModal from '@/hooks/useModal';
import useFilter from '@/hooks/useFilter';
import DetailFilterButton from '@/components/notice/DetailFilterButton/DetailFilterButton';
import NoticeCustomized from '@/components/notice/NoticeCustomized/NoticeCustomized';
import Footer from '@/components/@common/Footer/Footer';
import styles from './NoticePage.module.css';

function NoticePage() {
  const currentDate = new Date();
  const [notice, setNotice] = useState<NoticeData>();
  const { execute } = useAsync(getNoticeList);
  const { currentPage, totalItems, updateCurrentPage, updateTotalItems } = usePagination({});
  const { isOpenModal, toggleModal, closeModal } = useModal();
  const {
    filterData,
    setOffset,
    setLimit,
    setSort,
    addAddress,
    deleteAddress,
    setHourlyPay,
    setStartsAt,
    resetFilter,
  } = useFilter();
  const {
    toggleDropdown,
    isOpenDropdown,
    closeDropdown,
    selectedLocation,
    setSelectedLocation,
    category,
    setCategory,
  } = useDropdown({ type: 'sort' });

  const Props = {
    params: {
      offset: (currentPage - 1) * 6,
      limit: filterData.filter.limit ? filterData.filter.limit : 6,
      address: filterData.filter.address ? filterData.filter.address : ([] as Address[]),
      startsAtGte: filterData.filter.startsAtGte ? filterData.filter.startsAtGte : convertDate(currentDate),
      hourlyPayGte: filterData.filter.hourlyPayGte ? filterData.filter.hourlyPayGte : 0,
      sort: category,
    },
  };

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute(Props);
    updateTotalItems(response?.data?.count);
    setNotice(response.data);
  };

  useEffect(() => {
    fetch();
    setSort(category);
    setOffset((currentPage - 1) * 6);
    setLimit(6);
  }, [currentPage, category]);

  const handlePageChange = (pageNumber: number) => {
    updateCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(totalItems / 6);

  return (
    <div className={styles.wrapper}>
      <GNBNav />
      <NoticeCustomized address={['서울시 종로구']} limit={10} />
      <div className={styles.noticeEntireContainer}>
        <NoticeEntire items={notice?.items}>
          <div className={styles.filterContainer}>
            <Dropdown
              type="sort"
              item={SORT}
              toggleDropdown={toggleDropdown}
              isOpenDropdown={isOpenDropdown}
              closeDropdown={closeDropdown}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              setCategory={setCategory}
            />
            <div className={styles.filterModalContainer}>
              <DetailFilterButton count={filterData.count} onClick={toggleModal} />
              {isOpenModal && (
                <FilterModal
                  type="filter"
                  addressList={filterData.filter.address}
                  onAddressClick={addAddress}
                  onBadgeClick={deleteAddress}
                  hourlyPay={filterData.filter.hourlyPayGte}
                  setHourlyPay={setHourlyPay}
                  startsAt={filterData.filter.startsAtGte}
                  setStartsAt={setStartsAt}
                  resetFilter={resetFilter}
                  onClick={fetch}
                  onClose={closeModal}
                />
              )}
            </div>
          </div>
        </NoticeEntire>
        {totalPages > 0 && notice && notice.items.length > 0 ? (
          <Pagination totalPages={totalPages} currentPage={currentPage} onPageChange={handlePageChange} />
        ) : (
          <h1 className={styles.notFoundNotice}>공고 목록이 존재하지 않아요.</h1>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default NoticePage;
