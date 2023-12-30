import Link from 'next/link';
import LogoButton from '@/components/@common/LogoButton/LogoButton';
import styles from './signin.module.css';
import EmailInput from '@/components/@common/Input/EmailInput';
import PasswordInput from '@/components/@common/Input/PasswordInput';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';

function Signin() {
  return (
    <div className={styles.wrapper}>
      <LogoButton isSign />
      <div className={styles.input}>
        <EmailInput />
        <PasswordInput />
        <PrimaryButton text="로그인하기" />
      </div>
      <div>
        회원이 아니신가요? &nbsp; &nbsp;
        <Link href="/" className={styles.link}>
          회원가입하기
        </Link>
      </div>
    </div>
  );
}

export default Signin;
