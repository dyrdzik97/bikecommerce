import { SyntheticEvent, useMemo } from 'react';
import DropdownList from '../DropdownList/DropdownList';

interface IDropdownProps {
    isActive: boolean;
    onHideDropdown: () => void;
    isUserLoggedIn?: boolean;
}

const Dropdown = ({
    isActive = false,
    onHideDropdown,
    isUserLoggedIn = false,
}: IDropdownProps): JSX.Element => {
    const items = useMemo(() => {
        // Handle it after adding user account
        // if (!user) {
        //     return [];
        // }

        const favouritesItem = {
            title: 'favorites',
            href: '/favorites',
            action: () => onHideDropdown,
        };
        const yourAccountItem = {
            title: 'yourAccount',
            href: '/userProfile',
            passHref: true,
            action: () => onHideDropdown,
        };
        const orderHistoryItem = {
            title: 'orderHistory',
            href: '/orderHistory',
            passHref: true,
            action: () => onHideDropdown,
        };
        const orderListsItem = {
            title: 'orderLists',
            href: '/orderLists',
            passHref: true,
            action: () => onHideDropdown,
        };
        const logoutItem = {
            title: 'logoutLabel',
            action: async (event: SyntheticEvent) => {
                event.preventDefault();
                event.stopPropagation();

                // await postLogout();

                onHideDropdown();
            },
        };

        return [
            favouritesItem,
            yourAccountItem,
            orderHistoryItem,
            orderListsItem,
            logoutItem,
        ];
    }, []);

    return (
        <div
            className={`divide-gray-100 bg-gray-700 divide-gray-600 ${
                isActive ? '' : 'hidden'
            }
        absolute top-8 right-5 z-50 my-4
      list-none divide-y rounded-lg bg-gray text-base shadow`}
            id='user-dropdown'
        >
            {isUserLoggedIn && (
                <div className='px-4 py-3'>
                    <span className='text-gray-900 block text-sm text-black'>
                        Bonnie Green
                    </span>
                    <span className='text-gray-500 text-gray-400 block truncate text-sm font-medium'>
                        name@flowbite.com
                    </span>
                </div>
            )}

            <ul className='py-2' aria-labelledby='user-menu-button'>
                {<DropdownList items={items} />}
            </ul>
        </div>
    );
};

export default Dropdown;
