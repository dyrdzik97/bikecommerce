import DropdownMobile from '../Dropdown/Dropdown';

interface IMenuDesktoProps {
  isActive: boolean;
  onHideDropdown: () => void;
}

const MenuDesktop = ({
  isActive = false,
  onHideDropdown,
}: IMenuDesktoProps): JSX.Element => {
  // TODO specify menu positions
  return (
    <>
      <button
        type='button'
        className='bg-gray-800 focus:ring-gray-300 focus:ring-gray-600 mr-3 flex rounded-full text-sm focus:ring-4 md:mr-0'
        id='user-menu-button'
        aria-expanded='false'
        data-dropdown-toggle='user-dropdown'
        data-dropdown-placement='bottom'
        onClick={onHideDropdown}
      >
        <span className='sr-only'>Open user menu</span>
        <img
          className='h-8 w-8 rounded-full'
          src='/docs/images/people/profile-picture-3.jpg'
          alt='user photo'
        />
      </button>
      <DropdownMobile isActive={isActive} onHideDropdown={onHideDropdown} />
    </>
  );
};

export default MenuDesktop;
