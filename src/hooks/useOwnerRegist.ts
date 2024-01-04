import { useState } from 'react';

type STORETYPE = '' | '한식' | '중식' | '일식' | '양식' | '분식';

type ADDRESS =
  | ''
  | '서울시 종로구'
  | '서울시 중구'
  | '서울시 용산구'
  | '서울시 성동구'
  | '서울시 광진구'
  | '서울시 동대문구'
  | '서울시 중랑구'
  | '서울시 성북구'
  | '서울시 강북구'
  | '서울시 도봉구'
  | '서울시 노원구'
  | '서울시 은평구'
  | '서울시 서대문구'
  | '서울시 마포구'
  | '서울시 양천구'
  | '서울시 강서구'
  | '서울시 구로구'
  | '서울시 금천구'
  | '서울시 영등포구'
  | '서울시 동작구'
  | '서울시 관악구'
  | '서울시 서초구'
  | '서울시 강남구'
  | '서울시 송파구'
  | '서울시 강동구';

interface OwnerRegistState {
  name: string;
  setName: (name: string) => void;
  type: STORETYPE;
  setType: (type: STORETYPE) => void;
  address: ADDRESS;
  setAddress: (address: ADDRESS) => void;
  specAddress: string;
  setSpecAddress: (specAddress: string) => void;
  url: string;
  setURL: (url: string) => void;
  bio: string;
  setBio: (bio: string) => void;
  pay: number;
  setPay: (pay: number) => void;
}

const useOwnerRegist = (): OwnerRegistState => {
  const [name, setName] = useState('');
  const [type, setType] = useState<STORETYPE>('');
  const [address, setAddress] = useState<ADDRESS>('');
  const [specAddress, setSpecAddress] = useState('');
  const [url, setURL] = useState('');
  const [bio, setBio] = useState('');
  const [pay, setPay] = useState(0);

  return {
    name,
    setName,
    type,
    setType,
    address,
    setAddress,
    specAddress,
    setSpecAddress,
    url,
    setURL,
    bio,
    setBio,
    pay,
    setPay,
  };
};

export default useOwnerRegist;
