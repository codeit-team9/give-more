import Dropdown from '@/components/@common/DropDown/Dropdown';
import { CATEGORY, LOCATIONS, SORT } from '@/constants/constants';

function test() {
  return (
    <>
      <Dropdown title="선호 지역" item={LOCATIONS} />
      <Dropdown title="주소" item={LOCATIONS} />
      <Dropdown title="분류" item={CATEGORY} />
      <Dropdown type="sort" item={SORT} />
    </>
  );
}

export default test;
