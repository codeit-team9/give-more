import { useState } from 'react';
import CheckedIcon from './CheckedIcon';
import Blanked from '@/assets/images/blanked_icon.svg';
import styles from './UserTypeButton.module.css';
import classNames from 'classnames';

function UserTypeButton() {
	const [isSelected, setIsSelected] = useState(true);

	const handleSelected = () => {
		setIsSelected(!isSelected);
	};

	return (
		<div className={styles.wrapper}>
			<button className={classNames(styles.button, isSelected ? styles.selected : styles.notSelected)} onClick={() => handleSelected()}>{isSelected ? <CheckedIcon/> : <Blanked/>}<span>알바님</span></button>
			<button className={classNames(styles.button, isSelected ? styles.notSelected : styles.selected)} onClick={() => handleSelected()}>{isSelected ? <Blanked/> : <CheckedIcon/>}<span>사장님</span></button>
		</div>
	);
}

export default UserTypeButton;
