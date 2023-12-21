import styles from '@/components/@common/GNBMenuButton/GNBMenuButton.module.css';

interface Props {
  text: string;
}

function GNBMenuButton({ text }: Props) {
  return <div className={styles.wrapper}>{text}</div>;
}

export default GNBMenuButton;
