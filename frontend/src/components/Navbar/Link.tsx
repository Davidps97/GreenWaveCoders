import {SelectedPage} from "@/shared/SelectedPage.ts";

type Props = {
    page: string,
    selectedPage: SelectedPage,
    setSelectedPage: (value: SelectedPage) => void;
    isAboveMediumScreen: boolean;
}

function Link({ page, selectedPage, setSelectedPage, isAboveMediumScreen }: Props) {
    const lowerCasePage = page.toLowerCase().replace(/ /g, "-") as SelectedPage;

    return (
        <a
            href={`${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
            className={`${(selectedPage === lowerCasePage && isAboveMediumScreen) ? 'text-primary-4' : 'text-black'}
                        ${!isAboveMediumScreen && lowerCasePage === SelectedPage.SignIn ? 'text-primary-4' : 'text-black'} font-karla font-medium text-k-16` }
        >
            { page }
        </a>
    );
}

export default Link;