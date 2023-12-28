import styles from './StateButton.module.css';

interface Props {
	type: 'accept' | 'reject';
}

function StateButton({ type }: Props) {
	return <div className={styles.wrapper}>
		{type === 'accept' ? <div className={styles.accept}>거절하기</div> : <div className={styles.reject}>승인하기</div>}
	</div>;
}

export default StateButton;