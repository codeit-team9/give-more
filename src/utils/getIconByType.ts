import ClockIcon from '@/assets/images/clock_icon.svg';
import ClockIconGray from '@/assets/images/clock_icon-gray.svg';
import PathIcon from '@/assets/images/path_icon.svg';
import PathIconGray from '@/assets/images/path_icon-gray.svg';

interface Props {
  isClosed: boolean;
  type: 'period' | 'path';
}

export function getIconByType({ isClosed, type }: Props) {
  if (!isClosed && type === 'period') {
    return ClockIcon;
  }

  if (isClosed && type === 'period') {
    return ClockIconGray;
  }

  if (!isClosed && type === 'path') {
    return PathIcon;
  }

  if (isClosed && type === 'path') {
    return PathIconGray;
  }

  return undefined;
}
