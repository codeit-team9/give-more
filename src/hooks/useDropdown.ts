import { useState } from 'react';

function useDropdown(initialValue = false) {
  const [isOpenDropdown, setIsOpenDropdown] = useState(initialValue);

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };

  const openDropdown = () => {
    setIsOpenDropdown(true);
  };

  const closeDropdown = () => {
    setIsOpenDropdown(false);
  };

  return { isOpenDropdown, toggleDropdown, openDropdown, closeDropdown };
}

export default useDropdown;
