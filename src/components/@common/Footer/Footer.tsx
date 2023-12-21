import EnvelopIcon from '@/assets/images/envelop_icon.svg';
import FacebookIcon from '@/assets/images/facebook_icon.svg';
import InstagramIcon from '@/assets/images/instagram_icon.svg';
import styles from '@/components/@common/Footer/Footer.module.css';

function Footer() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.leftWrapper}>©codeit - 2023</p>
      <div className={styles.middleWrapper}>
        <p>Privacy Policy</p>
        <p>FAQ</p>
      </div>
      <div className={styles.rightWrapper}>
        <EnvelopIcon className={styles.icon} />
        <FacebookIcon className={styles.icon} />
        <InstagramIcon className={styles.icon} />
      </div>
    </div>
  );
}

export default Footer;
