import React from 'react';
import styles from './UniversalButton.module.scss';

interface IUniversalButton extends React.ComponentPropsWithoutRef<'button'> {
    width?: string | number;
    height?: string | number;
}

const UniversalButton: React.FC<IUniversalButton> = (
    {
        width = 250,
        height = 75,
        type = 'submit',
        ...rest
    }) => (
    <button
        type={type}
        style={{ width: `${String(width)}px`, height: `${String(height)}px` }}
        className={styles.UniversalButton}
        {...rest} />
);
export default UniversalButton;