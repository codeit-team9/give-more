import styles from '@/components/@common/GNBMenuButton/GNBMenuButton.module.css';

interface Props {
  size: number;
  text: string;
}

function GNBMenuButton({ size, text }: Props) {
  const wrapperStyles = {
    fontSize: `${size}rem`,
  };

  return (
    <div style={wrapperStyles} className={styles.wrapper}>
      {text}
    </div>
  );
}

export default GNBMenuButton;
