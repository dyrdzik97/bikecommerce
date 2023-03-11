import { ReactNode, useEffect, useState } from 'react';
import useCloseOnRouteChange from '../../../main/hooks/useCloseOnRouteChange';
import Footer from '../Footer/Footer';
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Navbar from '../Navbar/Navbar';

interface IDefaultLayoutProps {
    children: ReactNode;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps): JSX.Element => {
    const [isDropdownActive, setDropdownIsActive] = useState(false);

    useEffect(() => {
        if (isDropdownActive) {
            window.addEventListener('click', onClickOutside);
        } else {
            window.removeEventListener('click', onClickOutside);
        }

        return () => {
            window.removeEventListener('click', onClickOutside);
        };
    }, [isDropdownActive]);

    const onClickOutside = (event: MouseEvent) => {
        const section = document.documentElement.querySelector('.navbar');

        if (section && section.contains(event.target as Node)) {
            return;
        }

        const dropdown = document.documentElement.querySelector('.navbar');

        if (dropdown && !dropdown.contains(event.target as Node)) {
            setDropdownIsActive(false);
        }
    };

    const onActivateDropdown = () => {
        setDropdownIsActive((prev) => !prev);
    };

    useCloseOnRouteChange(onActivateDropdown);

    return (
        <Layout>
            <Navbar
                isDropdownActive={isDropdownActive}
                onActivateDropdown={onActivateDropdown}
            />
            <Main>{children}</Main>
            <Footer />
        </Layout>
    );
};

export default DefaultLayout;
