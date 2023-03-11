import classNames from 'classnames';
import { IIconOrientationProps, IIconProps } from '../../../../ui/models';
import styles from './IconChevron.module.scss';

const IconChevron = ({
    width = 24,
    height = 24,
    fillColor = 'none',
    strokeColor = '#000',
    orientation = 'down',
    className,
}: IIconProps & IIconOrientationProps) => {
    const classes = classNames(
        className,
        styles['icon-chevron'],
        styles[`icon-chevron--${orientation}`]
    );

    return (
        <svg
            className={classes}
            width={width}
            height={height}
            viewBox='0 0 24 24'
            fill={fillColor}
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M5 8.5L12 15.5L19 8.5'
                stroke={strokeColor}
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    );
};

export default IconChevron;
