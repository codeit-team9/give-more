import { useEffect, useRef, useState } from 'react';
import useDropdown from '@/hooks/useDropdown';
import DropdownUI from './DropdownUI';
import { isSortType } from '@/constants/constants';

interface Props {
  type?: 'default' | 'sort';
  title?: string;
  item: string[];
}

function Dropdown({ type = 'default', title, item }: Props) {
  const isSort = isSortType(type);
  const { isOpenDropdown, toggleDropdown, closeDropdown, setCategory } = useDropdown();
  const [selectedLocation, setSelectedLocation] = useState(isSort ? '마감임박순' : '');
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
