import Input from './Input';
import { LOCATIONS } from '@/constants/constants';
import Dropdown from '@/components/@common/DropDown/Dropdown';

function AddressInput() {
  return (
    <>
      <Input name="주소*" />
      <Dropdown title="주소" item={LOCATIONS} />
    </>
  );
}

export default AddressInput;
