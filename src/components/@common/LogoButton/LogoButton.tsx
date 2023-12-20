import LogoIcon from '@/assets/images/logo_icon.svg'

interface LogoButtonProps {
  width: number
}

function LogoButton({ width }: LogoButtonProps) {
  const wrapperStyles = {
    width: `${width}rem`,
  }

  return (
    <div style={wrapperStyles}>
      <LogoIcon />
    </div>
  )
}

export default LogoButton
