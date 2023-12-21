import WagebadgeUI from './WageBadgeUI';

interface Props {
  defaultWage: number;
  currentWage: number;
  isClosed: boolean;
}

function Wagebadge({ defaultWage, currentWage, isClosed }: Props) {
  const averageWage = Math.trunc(((currentWage - defaultWage) / defaultWage) * 10) * 10;

  const determineArrowDirection = () => {
    if (defaultWage <= currentWage) {
      return '↑';
    }
    return '↓';
  };

  return <WagebadgeUI averageWage={averageWage} cursor={determineArrowDirection()} isClosed={isClosed} />;
}

export default Wagebadge;
