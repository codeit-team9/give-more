import SearchIcon from '@/assets/images/search_icon.svg';
import styles from '@/components/@common/SearchBar/SearchBar.module.css';

function SearchBar() {
  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.searchIcon} />
      <input type="text" placeholder="가게 이름으로 찾아보세요" />
    </div>
  );
}

export default SearchBar;
