import Button from '@/components/@common/Modal/Button';
import Description from '@/components/@common/Modal/Description';
import TypeEllipseIcon from '@/components/@common/Modal/TypeEllipseIcon';
import Wrapper from '@/components/@common/Modal/Wrapper';
import styles from './Modal.module.css';

interface Props {
  IconType?: 'alert' | 'check';
  ButtonType?: 'base' | 'filter' | 'signin' | 'apply';
  text: string;
  onClick: () => void;
  onClose: () => void;
}

function Modal({ IconType = 'alert', ButtonType = 'base', text, onClick, onClose }: Props) {
  return (
    <Wrapper onClose={onClose}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <TypeEllipseIcon type={IconType} />
          <Description>{text}</Description>
        </div>
        <Button type={ButtonType} onClick={onClick} onClose={onClose} />
      </div>
    </Wrapper>
  );
}

export default Modal;
