import {SelectedPage} from "@/shared/SelectedPage.ts";
import AnchorLink from 'react-anchor-link-smooth-scroll';

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
    isAboveMediumScreen: boolean;
}

function Link({ page, selectedPage, setSelectedPage, isAboveMediumScreen }: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "-") as SelectedPage;

    return (
        <AnchorLink
            href={`${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
            className={`${(selectedPage === lowerCasePage && isAboveMediumScreen) ? 'text-primary-4' : 'text-black'}
                        ${!isAboveMediumScreen && lowerCasePage === SelectedPage.SignIn ? 'text-primary-4' : 'text-black'} font-karla font-medium text-k-16` }
        >
            { page }
        </AnchorLink>
    );
}

export default Link;