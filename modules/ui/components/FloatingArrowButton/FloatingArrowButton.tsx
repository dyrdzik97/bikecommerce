import { MouseEventHandler } from 'react';
import IconChevron from '../../../main/utils/Icons/IconChevron/IconChevron';

interface IFloatingArrowButtonProps {
    left?: string;
    right?: string;
    onClick?: MouseEventHandler<HTMLElement>;
}

const FloatingArrowButton = ({
    left,
    right,
    onClick,
}: IFloatingArrowButtonProps) => {
    return (
        <button
            className={'top-50 absolute'}
            style={{
                left,
                right,
            }}
            onClick={onClick}
        >
            <IconChevron orientation={left ? 'left' : 'right'} />
        </button>
    );
};

export default FloatingArrowButton;
