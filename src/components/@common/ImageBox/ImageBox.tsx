import React, { ChangeEvent, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './ImageBox.module.css';
import CameraIcon from '@/assets/images/camera_icon.svg';
import postImage from '@/api/postImage';

function ImageBox() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setSelectedFile(file);
    }
  };

  const handleButtonClick = async () => {
    fileInputRef.current?.click();
    if (selectedFile) {
      const response = await postImage({ authorization: { token: 'token' }, imageFile: selectedFile });
      console.log(response);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} ref={fileInputRef} style={{ display: 'none' }} />
      <button type="button" onClick={handleButtonClick} className={styles.buttonStyle}>
        {selectedImage ? (
          <Image src={selectedImage} alt="Selected" className={styles.image} />
        ) : (
          <div className={styles.wrapper}>
            <CameraIcon />
            <div className={styles.innerWrapper}>이미지 추가하기</div>
          </div>
        )}
      </button>
    </div>
  );
}

export default ImageBox;
