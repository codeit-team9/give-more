import { Dispatch, RefObject, SetStateAction } from 'react';
import classNames from 'classnames';
import DropdownIcon from '@/assets/images/dropdown_icon.svg';
import DropdownSmallIcon from '@/assets/images/dropdown_small_icon.svg';
import DropdownList from './DropdownList';
import styles from '@/components/@common/DropDown/DropdownUI.module.css';
import { isSortType } from '@/constants/constants';

type Category = 'time' | 'pay' | 'hour' | 'shop';

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
  setCategory: Dispatch<SetStateAction<Category>>;
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
  setCategory,
}: Props) {
  const isSort = isSortType(type);

  return (
    <div className={classNames(styles.wrapper, isSort && styles.sortWrapper)} ref={dropdownRef}>
      {!isSort && <h2 className={styles.title}>{title}</h2>}
      <div className={styles.inputContainer}>
        {isSort ? (
          <button className={styles.sortButton} type="button" value={selectedLocation} onClick={handleInputClick}>
            {selectedLocation}
          </button>
        ) : (
          <input className={styles.input} value={selectedLocation} onClick={handleInputClick} placeholder="선택" />
        )}
        <button
          className={classNames(styles.arrowButton, isSort && styles.sortArrowButton)}
          type="button"
          onClick={toggleDropdown}
        >
          {isSort ? (
            <DropdownSmallIcon className={isOpenDropdown && styles.upArrow} />
          ) : (
            <DropdownIcon className={isOpenDropdown && styles.upArrow} />
          )}
        </button>
      </div>
      {isOpenDropdown && (
        <DropdownList
          type={type}
          onClick={setSelectedLocation}
          item={item}
          onClose={closeDropdown}
          setCategory={setCategory}
        />
      )}
    </div>
  );
}

export default DropdownUI;
