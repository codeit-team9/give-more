import EllipseAlertIcon from '@/assets/images/ellipse_alert_icon.svg';
import EllipseCheckIcon from '@/assets/images/ellipse_check_icon.svg';

interface Props {
  type: 'alert' | 'check';
}

function TypeEllipseIcon({ type }: Props) {
  return type === 'alert' ? <EllipseAlertIcon /> : <EllipseCheckIcon />;
}

export default TypeEllipseIcon;
