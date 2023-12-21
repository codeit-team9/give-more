import WagebadgeUI from './WageBadgeUI';

interface Props {
  defaultWage: number;
  currentWage: number;
}

function Wagebadge({ defaultWage, currentWage }: Props) {
  const averageWage = Math.trunc(((currentWage - defaultWage) / defaultWage) * 10) * 10;

  const determineArrowDirection = () => {
    if (defaultWage <= currentWage) {
      return '↑';
    }
    return '↓';
  };

  return <WagebadgeUI averageWage={averageWage} cursor={determineArrowDirection()} />;
}

export default Wagebadge;
