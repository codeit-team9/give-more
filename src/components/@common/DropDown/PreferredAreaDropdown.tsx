import { ChangeEvent, useState } from 'react';
import styles from '@/components/@common/DropDown/PreferredAreaDropdown.module.css';
import DropdownIcon from '@/assets/images/dropdown_icon.svg';

const locations = [
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

function PreferredAreaDropdown(): React.FC {
  const [selectedLocation, setSelectedLocation] = useState('');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <select value={selectedLocation} onChange={handleChange}>
      {locations.map((location) => (
        <option key={location} value={location}>
          {location}
        </option>
      ))}
    </select>
  );
}

export default PreferredAreaDropdown;

// function PreferredAreaDropdown() {
//   const [selectedLocation, setSelectedLocation] = useState(locations[0]);
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//     <div className="{styles.wrapper}">
//       <DropdownIcon />
//     </div>
//   );
// }

// export default PreferredAreaDropdown;
