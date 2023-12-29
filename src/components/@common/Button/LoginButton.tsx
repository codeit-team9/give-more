import classnames from 'classnames';
import styles from './LoginButton.module.css';

interface Props {
  type: 'solid' | 'notSolid';
}

function LoginButton({ type }: Props) {
  const isSolid = type === 'solid';
  const buttonClassName = isSolid ? styles.solid : styles.notSolid;

  return <div className={classnames(styles.button, buttonClassName)}>로그인하기</div>;
}

export default LoginButton;
