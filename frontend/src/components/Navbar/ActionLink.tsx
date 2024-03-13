import {NavLink} from "react-router-dom";

type Props = {
    page: string
}

function ActionLink({ page }: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "-");

    return (
        <NavLink to={`/${lowerCasePage}`} className={({ isActive }) =>
            isActive ?
                `active text-primary-1 font-karla text-k-16 font-medium` :
                `text-primary-3 font-karla text-k-16 font-medium hover:text-primary-1 ${lowerCasePage === 'sign-in' && 'text-primary-4 lg:text-primary-3'}`
        }>
            { page }
        </NavLink>
    );
}

export default ActionLink;