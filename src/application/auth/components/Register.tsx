import signup_image from "../../../assets/signup_image.webp"
import cvinter_logo1 from "../../../assets/logos/cvinter_logo_1.webp"
import { UserFormData } from "../services/types";
import { ChangeEvent, useState } from "react";
import { validateInputErrors } from "../services/validations";
import { registerUser } from "../services/api";
import { Link } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

const Register: React.FC = () => {

    const mutation = useMutation({
        mutationFn: registerUser,
        onSuccess: (data) => {
            console.log('onSuccess say:', data);
        },
        onError: (error) => {
            console.error('onError say:', error);
        }
    })

    const [formData, setFormData] = useState<UserFormData>({
        name: "",
        email: "",
        password: ""
    })
    const [formErrors, setFormErrors] = useState<UserFormData>({
        name: "",
        email: "",
        password: ""
    })

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));

        setFormErrors({
            ...formErrors,
            [name]: validateInputErrors(name, value)
        })

    }

    const handleSubmitForm = (event: React.FormEvent) => {
        event.preventDefault()
        mutation.mutate(formData)
    }

    return (
        <div className="flex flex-col md:flex-row w-full h-screen">
            <div
                className="bg-cover bg-center w-1/2 h-full hidden md:block"
                style={{
                    backgroundImage: `url(${signup_image})`,
                }}
            ></div>
            <div className="absolute top-4 right-4 md:top-8 md:right-8 hidden md:block">
                <img
                    src={cvinter_logo1}
                    alt="logo"
                    className="h-20 md:h-16 lg:h-24 w-auto"
                />
            </div>

            <div className="w-full md:w-2/3 lg:w-1/2 flex items-center justify-center p-4">
                <div className="max-w-md w-full p-4">
                    <h2 className="text-xl font-lato font-extrabold mb-4">Create account</h2>
                    <form onSubmit={handleSubmitForm} className="space-y-4">
                        <div className="mb-4">
                            <label
                                htmlFor="name"
                                className="block text-gray-700 mb-1 text-left font-semibold text-sm"
                            >
                                Name
                            </label>
                            <input
                                value={formData.name}
                                name="name"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Enter your full name"
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#CDFFD8] focus:ring-2 focus:ring-[#CDFFD8]"
                            />
                            {formErrors.name && <p className="text-red-500 text-xs mt-1">{formErrors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="email"
                                className="block text-gray-700 mb-1 text-left font-semibold text-sm"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                value={formData.email}
                                name="email"
                                onChange={handleInputChange}
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#CDFFD8] focus:ring-2 focus:ring-[#CDFFD8]"
                            />
                            {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label
                                htmlFor="password"
                                className="block text-gray-700 mb-1 text-left font-semibold text-sm"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                value={formData.password}
                                name="password"
                                onChange={handleInputChange}
                                type="password"
                                placeholder="Enter your password"
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-[#CDFFD8] focus:ring-2 focus:ring-[#CDFFD8]"
                            />
                            {formErrors.password && <p className="text-red-500 text-xs mt-1">{formErrors.password}</p>}
                        </div>
                        <button
                            type="submit"
                            className="text-base font-lato w-full bg-[#94B9FF] text-white rounded-lg px-4 py-2 mt-3 hover:bg-[#7faafa] transition duration-200 font-bold"
                        >
                            Create account
                        </button>
                        <button
                            type="button"
                            className="text-base font-lato w-full bg-[#E6E5E4] text-[#1570EF] rounded-lg px-4 py-2 mt-3 flex items-center justify-center font-bold"
                        >
                            <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#EA4335" d="M23.6 12.3c0-.8-.1-1.6-.2-2.3H12v4.3h6.5c-.3 1.6-1.2 3-2.6 4v3.3h4.2c2.5-2.4 3.9-5.8 3.9-9.6z" />
                                <path fill="#34A853" d="M12 24c3.2 0 5.8-1 7.7-2.8l-4.2-3.3c-1 .6-2.3 1-3.5 1-2.7 0-5.1-1.8-5.9-4.3H2.8v3.4C4.7 21.4 8 24 12 24z" />
                                <path fill="#4A90E2" d="M6.1 14.6c-.3-1.1-.3-2.2 0-3.3V8H2.8C1.4 10.5 1.4 13.5 2.8 16l3.3-2.4z" />
                                <path fill="#FBBC05" d="M12 4.8c1.5 0 2.9.5 4 1.5l3-3C16.7 1.3 14.1 0 12 0 8 0 4.7 2.6 2.8 6l3.3 2.5c.8-2.5 3.2-4.3 5.9-4.3z" />
                            </svg>
                            Continue with Google
                        </button>
                        <p className="text-center font-lato text-base text-[#98A2B3] mt-3">¿Ya tienes una cuenta? <Link to="/login" className="font-lato text-base text-[#94B9FF] font-bold">
                            Log In
                        </Link></p>
                    </form>
                </div>
            </div>
        </div >
    )
};

export default Register