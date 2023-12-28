import { Dispatch, RefObject, SetStateAction } from 'react';
import classNames from 'classnames';
import DropdownIcon from '@/assets/images/dropdown_icon.svg';
import DropdownSmallIcon from '@/assets/images/dropdown_small_icon.svg';
import DropdownList from './DropdownList';
import styles from '@/components/@common/DropDown/DropdownUI.module.css';

interface Props {
  type: 'default' | 'sort';
  dropdownRef: RefObject<HTMLDivElement>;
  title?: string;
  item: string[];
  selectedLocation: string;
  handleInputClick: () => void;
  toggleDropdown: () => void;
  isOpenDropdown: boolean;
  setSelectedLocation: Dispatch<SetStateAction<string>>;
  closeDropdown: () => void;
}

function DropdownUI({
  type,
  dropdownRef,
  title,
  item,
  selectedLocation,
  handleInputClick,
  toggleDropdown,
  isOpenDropdown,
  setSelectedLocation,
  closeDropdown,
}: Props) {
  const isSortType = type === 'sort';

  return (
    <div className={classNames(styles.wrapper, isSortType && styles.sortWrapper)} ref={dropdownRef}>
      {isSortType && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.inputContainer}>
        {isSortType ? (
          <button className={styles.sortButton} type="button" value={selectedLocation} onClick={handleInputClick}>
            {selectedLocation}
          </button>
        ) : (
          <input className={styles.input} value={selectedLocation} onClick={handleInputClick} placeholder="선택" />
        )}
        <button
          className={classNames(styles.arrowButton, isSortType && styles.sortArrowButton)}
          type="button"
          onClick={toggleDropdown}
        >
          {isSortType ? (
            <DropdownSmallIcon className={isOpenDropdown && styles.upArrow} />
          ) : (
            <DropdownIcon className={isOpenDropdown && styles.upArrow} />
          )}
        </button>
      </div>
      {isOpenDropdown && <DropdownList type={type} onClick={setSelectedLocation} item={item} onClose={closeDropdown} />}
    </div>
  );
}

export default DropdownUI;
