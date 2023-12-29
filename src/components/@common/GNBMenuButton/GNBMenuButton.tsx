import Link from 'next/link';
import styles from '@/components/@common/GNBMenuButton/GNBMenuButton.module.css';

interface Props {
  type: 'employer' | 'employee' | 'signOut' | 'signIn' | 'signUp';
}

function GNBMenuButton({ type }: Props) {
  let link = '/';
  let content = '';

  switch (type) {
    case 'employer':
      link = '/';
      content = '내 가게';
      break;
    case 'employee':
      link = '/';
      content = '내 프로필';
      break;
    case 'signOut':
      link = '/';
      content = '로그아웃';
      break;
    case 'signIn':
      link = '/';
      content = '로그인';
      break;
    case 'signUp':
      link = '/';
      content = '회원가입';
      break;
    default:
      break;
  }

  return (
    <div className={styles.wrapper}>
      <Link href={link}>{content}</Link>
    </div>
  );
}

export default GNBMenuButton;
