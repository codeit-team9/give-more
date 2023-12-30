import { useEffect, useState } from 'react';
import useModal from '@/hooks/useModal';
import styles from './index.module.css';
import FilterModal from '@/components/@common/Modal/FilterModal/FilterModal';
import useAsync from '@/hooks/useAsync';
import getNoticeList from '@/api/getNoticeList';

function Home() {
  const initialValue = {
    offset: 0,
    limit: 0,
    address: [],
    keyword: '',
    count: 0,
    hasNext: false,
    items: [],
    links: [],
  };
  const initialFilter = {
    offset: 0,
    limit: 0,
    address: '',
    startsAtGte: '',
    hourlyPayGte: 0,
    sort: 'time' as const,
  };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [item, setItem] = useState(initialValue);
  const [filter, setFilter] = useState(initialFilter);
  const { isOpenModal: isOpenFilter, toggleModal: toggleFilter, closeModal: closeFilter } = useModal();
  const { execute } = useAsync(getNoticeList);

  const Props = {
    params: filter,
  };

  const fetch = async () => {
    const response = await execute(Props);
    setItem(response);
  };

  const handleAddressClick = (address: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, address }));
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className={styles.detailContainer}>
      <button className={styles.button2} type="button" onClick={toggleFilter}>
        상세 필터
      </button>
      {isOpenFilter && (
        <FilterModal type="filter" onAddressClick={handleAddressClick} onClick={fetch} onClose={closeFilter} />
      )}
    </div>
  );
}

export default Home;
