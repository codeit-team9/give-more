import GNBNav from '@/components/@common/GNBNav/GNBNav';
import styles from './profile.module.css';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import Footer from '@/components/@common/Footer/Footer';

function Profile() {
  return (
    <>
      <GNBNav userType="employee" isActive={false} />
      <div className={styles.wrapper}>
        <div className={styles.middleWrapper}>
          <p>내 프로필</p>
          <div className={styles.innerWrapper}>
            <p>내 프로필을 등록하고 원하는 가게에 지원해 보세요.</p>
            <div className={styles.button}>
              <PrimaryButton text="내 프로필 등록하기" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
