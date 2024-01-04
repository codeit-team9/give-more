import Link from 'next/link';
import { useRouter } from 'next/router';
import LogoButton from '@/components/@common/LogoButton/LogoButton';
import styles from './signin.module.css';
import EmailInput from '@/components/@common/Input/EmailInput';
import PasswordInput from '@/components/@common/Input/PasswordInput';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import useSignin from '@/hooks/useSignin';
import useToast from '@/hooks/useToast';
import useAsync from '@/hooks/useAsync';
import postUser from '@/api/postUser';
import Toast from '@/components/@common/Toast/Toast';
import useLoginInfo from '@/hooks/useLoginInfo';

function Signin() {
  const { execute } = useAsync(postUser);
  const { email, password } = useSignin();
  const { isActive, setIsActive } = useToast();
  const { setIsLogin, setToken, setUserType } = useLoginInfo();
  const router = useRouter();

  const Props = {
    email,
    password,
  };

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const response: any = await execute(Props);
    if (response.status === 200) {
      setToken(response.data.item.token);
      setIsLogin(true);
      const userType = response.data.item.user.item.type;
      setUserType(userType);
      if (userType === 'employee') {
        router.push('/profile');
      } else {
        router.push('/owner');
      }
    } else {
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  };

  const handleSignin = () => {
    fetch();
  };

  return (
    <div className={styles.wrapper}>
      {isActive && (
        <div className={styles.toast}>
          <Toast type="password" />
        </div>
      )}
      <LogoButton isSign />
      <div className={styles.input}>
        <EmailInput />
        <PasswordInput />
        <div className={styles.link}>
          <PrimaryButton text="로그인하기" onClick={handleSignin} />
        </div>
      </div>
      <div>
        회원이 아니신가요? &nbsp; &nbsp;
        <Link href="/signup" className={styles.link}>
          회원가입하기
        </Link>
      </div>
    </div>
  );
}

export default Signin;
