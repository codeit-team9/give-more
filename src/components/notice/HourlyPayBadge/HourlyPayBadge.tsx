import averageHourlyPay from '@/utils/averageHourlyPay';
import HourlyPayBadgeUI from './HourlyPayBadgeUI';

interface Props {
  defaultHourlyPay?: number;
  currentHourlyPay: number;
  isClosed: boolean;
}

function HourlyPayBadge({ defaultHourlyPay, currentHourlyPay, isClosed }: Props) {
  if (!defaultHourlyPay) return;
  const determineArrowDirection = () => {
    if (defaultHourlyPay <= currentHourlyPay) {
      return '↑';
    }

    return '↓';
  };

  // eslint-disable-next-line consistent-return
  return (
    <HourlyPayBadgeUI
      averageHourlyPay={averageHourlyPay({ defaultHourlyPay, currentHourlyPay })}
      arrow={determineArrowDirection()}
      isClosed={isClosed}
    />
  );
}

export default HourlyPayBadge;
