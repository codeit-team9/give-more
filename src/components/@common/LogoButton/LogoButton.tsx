import Link from 'next/link';
import LogoIcon from '@/assets/images/logo_icon.svg';

interface Props {
  width: number;
}

function LogoButton({ width }: Props) {
  const wrapperStyles = {
    width: `${width}rem`,
  };

  return (
    <div style={wrapperStyles}>
      <Link href="/">
        <LogoIcon />
      </Link>
    </div>
  );
}

export default LogoButton;
