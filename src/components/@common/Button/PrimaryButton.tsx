import classnames from 'classnames';
import styles from './PrimaryButton.module.css';

interface Props {
  text: string;
  onClick?: () => void;
}

function PrimaryButton({ text, onClick }: Props) {
  return (
    <button type="button" className={classnames(styles.button)} onClick={onClick}>
      {text}
    </button>
  );
}

export default PrimaryButton;
