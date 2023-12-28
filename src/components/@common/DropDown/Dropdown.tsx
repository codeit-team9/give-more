import { useEffect, useRef, useState } from 'react';
import useDropdown from '@/hooks/useDropdown';
import DropdownUI from './DropdownUI';

interface Props {
  type?: 'default' | 'sort';
  title?: string;
  item: string[];
}

function Dropdown({ type = 'default', title, item }: Props) {
  const { isOpenDropdown, toggleDropdown, closeDropdown } = useDropdown();
  const [selectedLocation, setSelectedLocation] = useState('');
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
    />
  );
}

export default Dropdown;
