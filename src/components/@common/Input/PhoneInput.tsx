import Input from './Input';

function PhoneInput() {
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.value = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/(^02.{0}|^01.{1}|[0-9]{3,4})([0-9]{3,4})([0-9]{4})/g, '$1-$2-$3');
  };

  return (
    <Input
      placeholder="-를 제외한 전화번호를 입력해 주세요."
      name="연락처*"
      maxLength={13}
      onChangeInput={onChangeInput}
    />
  );
}

export default PhoneInput;
