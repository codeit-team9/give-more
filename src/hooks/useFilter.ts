import { useState } from 'react';
import { Address } from '@/@types/address.types';
import convertDate from '@/utils/convertDate';
import { SortType } from '@/api/type';

function useFilter(
  initialFilter = {
    offset: 0,
    limit: 0,
    address: [] as Address[],
    startsAtGte: convertDate(new Date()),
    hourlyPayGte: 0,
    sort: 'time' as SortType,
  },
) {
  const [filter, setFilter] = useState(initialFilter);

  const setOffset = (offset: number) => {
    setFilter((prevFilter) => ({ ...prevFilter, offset }));
  };

  const setLimit = (limit: number) => {
    setFilter((prevFilter) => ({ ...prevFilter, limit }));
  };

  const setSort = (sort: SortType) => {
    setFilter((prevFilter) => ({ ...prevFilter, sort }));
  };

  const addAddress = (address: Address) => {
    setFilter((prevFilter) => {
      const isDuplicate = prevFilter.address.includes(address);

      if (!isDuplicate) {
        return {
          ...prevFilter,
          address: [...prevFilter.address, address],
        };
      }

      return prevFilter;
    });
  };

  const deleteAddress = (address: Address) => {
    setFilter((prevFilter) => {
      const updatedAddress = prevFilter.address.filter((item) => item !== address);

      return {
        ...prevFilter,
        address: updatedAddress,
      };
    });
  };

  const setHourlyPay = (hourlyPay: number) => {
    setFilter((prevFilter) => ({ ...prevFilter, hourlyPayGte: hourlyPay }));
  };

  const setStartsAt = (startsAt: string) => {
    setFilter((prevFilter) => ({ ...prevFilter, startsAtGte: startsAt }));
  };

  const resetFilter = () => {
    setFilter(initialFilter);
  };

  return {
    filter,
    setOffset,
    setLimit,
    setSort,
    addAddress,
    deleteAddress,
    setHourlyPay,
    setStartsAt,
    resetFilter,
  };
}

export default useFilter;
