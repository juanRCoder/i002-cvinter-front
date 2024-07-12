
interface NextButtonProps {
    onClick: () => void;
    label: string;
    disabled?: boolean;
}

const NextButton: React.FC<NextButtonProps> = ({ onClick, disabled, label }) => {
    return (
        <button
            disabled={disabled}
            onClick={onClick}
            className="cursor-pointer float-right bg-blue-logo text-white py-3 px-12 rounded-md shadow-md hover:bg-blue-2 focus:outline-none focus:ring-2 transition duration-300"
        >
            {label}
        </button>
    );
};

export default NextButton;