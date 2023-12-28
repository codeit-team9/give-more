import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import classNames from 'classnames';
import styles from './DropdownList.module.css';

interface Props {
  type: 'default' | 'sort';
  item: string[];
  onClick: Dispatch<SetStateAction<string>>;
  onClose: () => void;
}

function DropdownList({ type, item, onClick, onClose }: Props) {
  const isSortType = type === 'sort';

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const value = event.currentTarget.textContent || '';
    onClick(value);
    onClose();
  };

  return (
    <ul className={classNames(styles.wrapper, isSortType && styles.sortWrapper)}>
      {item.map((value) => {
        return (
          <li className={styles.buttonContainer} key={value}>
            <button
              className={classNames(styles.button, isSortType && styles.sortButton)}
              type="button"
              onClick={handleClick}
            >
              {value}
            </button>
          </li>
        );
      })}
    </ul>
  );
}

export default DropdownList;
