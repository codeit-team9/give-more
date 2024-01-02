import { useState } from 'react';
import Category from '@/@types/category.types';

interface Props {
  initialValue?: boolean;
  type?: 'default' | 'sort';
}

function useDropdown({ initialValue = false, type = 'default' }: Props) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(initialValue);
  const [category, setCategory] = useState<Category>('time');
  const isSort = type === 'sort';
  const [selectedLocation, setSelectedLocation] = useState(isSort ? '마감임박순' : '');

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const openDropdown = () => {
    setIsOpenDropdown(true);
  };

  const closeDropdown = () => {
    setIsOpenDropdown(false);
  };

  return {
    isOpenDropdown,
    toggleDropdown,
    openDropdown,
    closeDropdown,
    category,
    setCategory,
    selectedLocation,
    setSelectedLocation,
  };
}

export default useDropdown;
