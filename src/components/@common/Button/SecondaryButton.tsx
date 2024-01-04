import classnames from 'classnames';
import styles from './SecondaryButton.module.css';

interface Props {
  text: string;
  onClick?: () => void;
}

function SecondaryButton({ text, onClick }: Props) {
  return (
    <button type="button" className={classnames(styles.button)} onClick={onClick}>
      {text}
    </button>
  );
}

export default SecondaryButton;
