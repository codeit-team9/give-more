import ClockIcon from '@/assets/images/clock_icon.svg';
import ClockIconGray from '@/assets/images/clock_icon-gray.svg';
import PathIcon from '@/assets/images/path_icon.svg';
import PathIconGray from '@/assets/images/path_icon-gray.svg';

interface Props {
  isClosed: boolean;
  type: 'duration' | 'address';
}

export function getIconByType({ isClosed, type }: Props) {
  if (!isClosed && type === 'duration') {
    return ClockIcon;
  }

  if (isClosed && type === 'duration') {
    return ClockIconGray;
  }

  if (!isClosed && type === 'address') {
    return PathIcon;
  }

  if (isClosed && type === 'address') {
    return PathIconGray;
  }

  return undefined;
}
