import averageWage from '@/utils/averageWage';
import WagebadgeUI from './WageBadgeUI';

interface Props {
  defaultWage: number;
  currentWage: number;
  isClosed: boolean;
}

function Wagebadge({ defaultWage, currentWage, isClosed }: Props) {
  const determineArrowDirection = () => {
    if (defaultWage <= currentWage) {
      return '↑';
    }
    return '↓';
  };

  return (
    <WagebadgeUI
      averageWage={averageWage({ defaultWage, currentWage })}
      arrow={determineArrowDirection()}
      isClosed={isClosed}
    />
  );
}

export default Wagebadge;
