import styles from './StateButton.module.css';

interface Props {
	type: 'accept' | 'reject';
}

function StateButton({ type }: Props) {
	const isAcceptType = type === 'accept';
	const buttonClassName = isAcceptType ? styles.accept : styles.reject;
	const buttonText = isAcceptType ? '승인하기' : '거절하기';

	return <div className={styles.wrapper}>
		<div className={buttonClassName}>{buttonText}</div>
	</div>;
}

export default StateButton;