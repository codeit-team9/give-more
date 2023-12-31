import Link from 'next/link';
import styles from '@/components/@common/GNBMenuButton/GNBMenuButton.module.css';

interface Props {
  type: 'employer' | 'employee' | 'signOut' | 'signIn' | 'signUp';
  onClick?: () => void;
}

function GNBMenuButton({ type, onClick }: Props) {
  let link = '/';
  let content = '';

  switch (type) {
    case 'employer':
      link = '/owner';
      content = '내 가게';
      break;
    case 'employee':
      link = '/profile';
      content = '내 프로필';
      break;
    case 'signOut':
      link = '/';
      content = '로그아웃';
      break;
    case 'signIn':
      link = '/signin';
      content = '로그인';
      break;
    case 'signUp':
      link = '/signup';
      content = '회원가입';
      break;
    default:
      break;
  }

  return (
    <div className={styles.wrapper}>
      <Link href={link} onClick={onClick}>
        {content}
      </Link>
    </div>
  );
}

export default GNBMenuButton;
