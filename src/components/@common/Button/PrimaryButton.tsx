import classnames from 'classnames';
import styles from './PrimaryButton.module.css';

interface Props {
  text: string;
}

function PrimaryButton({ text }: Props) {
  return <div className={classnames(styles.button)}>{text}</div>;
}

export default PrimaryButton;
