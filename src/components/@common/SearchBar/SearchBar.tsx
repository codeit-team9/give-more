import SearchIcon from '@/assets/images/search_icon.svg';
import styles from '@/components/@common/SearchBar/SearchBar.module.css';

interface Props {
  size: keyof Size;
}

interface DeviceSize {
  width: number;
  gap: number;
  fontSize: number;
  iconSize: number;
}

interface Size {
  desktop: DeviceSize;
  tablet: DeviceSize;
  mobile: DeviceSize;
}

const Device: Size = {
  desktop: {
    width: 28.125,
    gap: 0.625,
    fontSize: 0.875,
    iconSize: 1.25,
  },
  tablet: {
    width: 21.5,
    gap: 0.625,
    fontSize: 0.875,
    iconSize: 1.25,
  },
  mobile: {
    width: 20.9375,
    gap: 0.5,
    fontSize: 0.75,
    iconSize: 1,
  },
};

function SearchBar({ size }: Props) {
  const wrapperStyles = {
    width: `${Device[size].width}rem`,
    gap: `${Device[size].gap}rem`,
    padding: `${Device[size].gap}rem`,
    fontSize: `${Device[size].fontSize}rem`,
  };

  return (
    <div style={wrapperStyles} className={styles.wrapper}>
      <SearchIcon style={{ width: `${Device[size].iconSize}rem` }} />
      <p style={{ fontSize: `${Device[size].fontSize}rem` }}>가게 이름으로 찾아보세요</p>
    </div>
  );
}

export default SearchBar;
