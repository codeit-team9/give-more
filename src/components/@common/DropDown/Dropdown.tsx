import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import DropdownUI from './DropdownUI';
import Category from '@/@types/category.types';

interface Props {
  type?: 'default' | 'sort';
  title?: string;
  item: string[];
  toggleDropdown: () => void;
  isOpenDropdown: boolean;
  closeDropdown: () => void;
  setCategory: Dispatch<SetStateAction<Category>>;
  selectedLocation: string;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
}

function Dropdown({
  type = 'default',
  title,
  item,
  isOpenDropdown,
  toggleDropdown,
  closeDropdown,
  setCategory,
  selectedLocation,
  setSelectedLocation,
}: Props) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutSide = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('mousedown', handleClickOutSide);

    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, []);

  const handleInputClick = () => {
    toggleDropdown();
  };

  return (
    <DropdownUI
      type={type}
      dropdownRef={dropdownRef}
      title={title}
      item={item}
      selectedLocation={selectedLocation}
      handleInputClick={handleInputClick}
      toggleDropdown={toggleDropdown}
      isOpenDropdown={isOpenDropdown}
      setSelectedLocation={setSelectedLocation}
      closeDropdown={closeDropdown}
      setCategory={setCategory}
    />
  );
}

export default Dropdown;
