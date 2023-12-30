import styles from './FilterAddress.module.css';

interface Props {
  onAddressClick: (address: string) => void;
}

const ADDRESS = [
  '서울시 종로구',
  '서울시 중구',
  '서울시 용산구',
  '서울시 성동구',
  '서울시 광진구',
  '서울시 동대문구',
  '서울시 중랑구',
  '서울시 성북구',
  '서울시 강북구',
  '서울시 도봉구',
  '서울시 노원구',
  '서울시 은평구',
  '서울시 서대문구',
  '서울시 마포구',
  '서울시 양천구',
  '서울시 강서구',
  '서울시 구로구',
  '서울시 금천구',
  '서울시 영등포구',
  '서울시 동작구',
  '서울시 관악구',
  '서울시 서초구',
  '서울시 강남구',
  '서울시 송파구',
  '서울시 강동구',
];

function FilterAddress({ onAddressClick }: Props) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.name}>위치</h2>
      <ul className={styles.addressContainer}>
        {ADDRESS.map((value) => {
          return (
            <li className={styles.address} key={value}>
              <button
                type="button"
                onClick={(event) => {
                  const buttonText = event.currentTarget.textContent;
                  if (buttonText) {
                    console.log(buttonText);
                    onAddressClick(buttonText);
                  }
                }}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FilterAddress;
