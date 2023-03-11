import DropdownListItem, {
    IDropdownListItemProps,
} from '../DropdownListItem/DropdownListItem';

interface IDropdownListProps {
    items: IDropdownListItemProps[];
}

const DropdownList = ({ items }: IDropdownListProps): JSX.Element => {
    return (
        <ul className='py-2' aria-labelledby='user-menu-button'>
            {items.map((item, index) => (
                <DropdownListItem key={index} {...item} />
            ))}
        </ul>
    );
};

export default DropdownList;
