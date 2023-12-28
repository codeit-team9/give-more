import { Dispatch, MouseEventHandler, SetStateAction } from 'react';
import classNames from 'classnames';
import styles from './DropdownList.module.css';
import { isSortType } from '@/constants/constants';

type Category = 'time' | 'pay' | 'hour' | 'shop';

interface Props {
  type: 'default' | 'sort';
  item: string[];
  onClick: Dispatch<SetStateAction<string>>;
  onClose: () => void;
  setCategory: Dispatch<SetStateAction<Category>>;
}

function DropdownList({ type, item, onClick, onClose, setCategory }: Props) {
  const isSort = isSortType(type);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    const value = event.currentTarget.textContent || '';
    onClick(value);
    onClose();

    if (isSort) {
      switch (value) {
        case '마감임박순':
          setCategory('time');
          break;

        case '시급많은순':
          setCategory('pay');
          break;

        case '시간적은순':
          setCategory('hour');
          break;

        case '가나다순':
          setCategory('shop');
          break;

        default:
          setCategory('time');
      }
    }
  };

  return (
    <ul className={classNames(styles.wrapper, isSort && styles.sortWrapper)}>
      {item.map((value) => {
        return (
          <li className={styles.buttonContainer} key={value}>
            <button
              className={classNames(styles.button, isSort && styles.sortButton)}
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
