
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
            className="float-right bg-blue-logo text-white py-2 px-10 mt-16 rounded-md shadow-md hover:bg-blue-2 focus:outline-none focus:ring-2 transition duration-300"
        >
            {label}
        </button>
    );
};

export default NextButton;