import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import LogoButton from '@/components/@common/LogoButton/LogoButton';
import styles from './signup.module.css';
import SetEmailInput from '@/components/@common/Input/SetEmailInput';
import PrimaryButton from '@/components/@common/Button/PrimaryButton';
import SetPasswordInput from '@/components/@common/Input/SetPasswordInput';
import UserTypeButton from '@/components/@common/UserTypeButton/UserTypeButton';
import useSignup from '@/hooks/useSignup';
import useToast from '@/hooks/useToast';
import useAsync from '@/hooks/useAsync';
import postNewUser from '@/api/postNewUser';
import Toast from '@/components/@common/Toast/Toast';
import useLoginInfo from '@/hooks/useLoginInfo';

function SignUp() {
  const { execute } = useAsync(postNewUser);
  const { isLogin } = useLoginInfo();
  const { email, password, isUser, isInput, isPassword } = useSignup();
  const { isActive, setIsActive } = useToast();
  const [message, setMessage] = useState<
    'email' | 'password' | 'accepted' | 'modified' | 'applied' | 'canceled' | 'error' | 'signed'
  >('email');
  const router = useRouter();

  const Props = {
    email,
    password,
    type: isUser,
  };

  const fetch = async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const result: any = await execute(Props);
    let response;
    if (result.response === undefined) {
      response = result;
    } else {
      response = result.response;
    }
    if (response.status === 201) {
      setMessage('signed');
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
        router.push('/signin');
      }, 3000);
    } else if (response.status === 409) {
      setMessage('email');
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    } else {
      setMessage('error');
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  };

  const handleSignin = () => {
    if (isInput && isPassword) {
      fetch();
    } else {
      setMessage('modified');
      setIsActive(true);
      setTimeout(() => {
        setIsActive(false);
      }, 3000);
    }
  };

  if (isLogin) {
    router.push('/'); // 공고 리스트 페이지로 리다이렉트
  }

  return (
    <div className={styles.wrapper}>
      {isActive && (
        <div className={styles.toast}>
          <Toast type={message} />
        </div>
      )}
      <LogoButton isSign />
      <div className={styles.input}>
        <SetEmailInput />
        <SetPasswordInput />
        <UserTypeButton />
        <PrimaryButton text="가입하기" onClick={handleSignin} />
      </div>
      <div>
        이미 가입하셨나요? &nbsp; &nbsp;
        <Link href="/signin" className={styles.link}>
          로그인하기
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
