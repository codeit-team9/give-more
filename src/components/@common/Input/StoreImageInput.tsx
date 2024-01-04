import React, { useEffect, useState } from 'react';
import styles from './Input.module.css';
import CameraIcon from '@/assets/images/camare_icon.svg';
import useAsync from '@/hooks/useAsync';
import postImage from '@/api/postImage';
import putImage from '@/api/putImage';
import getImage from '@/api/getImage';
import useLoginInfo from '@/hooks/useLoginInfo';

interface Props {
  name: string;
  imgURL: string;
  onImageChange: (file: string) => void;
  store: string;
}

function StoreImageInput({ name, imgURL, onImageChange, store }: Props) {
  const inputRef = React.createRef<HTMLInputElement>();
  const { execute } = useAsync(postImage);
  const { execute: putExecute } = useAsync(putImage);
  const { execute: getExecute } = useAsync(getImage);
  const { token } = useLoginInfo();
  const [img, setImg] = useState('');
  const [url, setUrl] = useState('');

  const Props = {
    authorization: { token },
    data: {
      name: store,
    },
  };

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute(Props);
    setUrl(response.data.item.url);
  };

  const getFetch = async (newUrl: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await getExecute({ url: newUrl });
    if (response.status === 200) {
      setImg(response.config.url);
      onImageChange(response.config.url);
    }
  };

  const putFetch = async (File: File) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await putExecute({ url, File });
    if (response.status === 200) {
      getFetch(url.split('?')[0]);
    }
  };

  const handleAddImg = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      const selectedFile = files[0];
      putFetch(selectedFile);
    }
  };

  useEffect(() => {
    fetch();
    setImg(imgURL);
  }, []);

  return (
    <div className={styles.wrapper}>
      <p>{name}</p>
      <div className={styles.imgWrapper}>
        {imgURL === '' ? (
          <button type="button" className={styles.imgInner} onClick={handleAddImg}>
            <CameraIcon />
            <p>이미지 추가하기</p>
            <input
              type="file"
              accept="image/*"
              ref={inputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
            />
          </button>
        ) : (
          <img src={img} alt="Uploaded" className={styles.imgCover} />
        )}
      </div>
    </div>
  );
}

export default StoreImageInput;
