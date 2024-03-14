type Props = {
    children: string;
    bgColor: string;
    fontColor: string;
    handleSign: () => void;
}

function Button({children, bgColor = 'bg-primary-2', fontColor = 'text-primary-4', handleSign}: Props) {
    return (
        <button
            className={`${bgColor} ${fontColor} w-[231px] h-[32px] text-m-16 md:text-m-18 font-montserrat font-medium rounded-md`}
            onClick={handleSign}
        >
            { children }
        </button>

    );
}

export default Button;