import SearchIcon from '@/assets/images/search_icon.svg';
import styles from '@/components/@common/SearchBar/SearchBar.module.css';

interface Props {
  value: string;
  onChange: (value: string) => void;
}

function SearchBar({ value, onChange }: Props) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value); // 변경된 값을 부모 컴포넌트로 전달
  };

  return (
    <div className={styles.wrapper}>
      <SearchIcon className={styles.searchIcon} />
      <input type="text" placeholder="가게 이름으로 찾아보세요" value={value} onChange={handleInputChange} />
    </div>
  );
}

export default SearchBar;
