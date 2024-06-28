import signup_image from "../../../assets/signup_image.png"
import cvinter_logo1 from "../../../assets/cvinter_logo_1.png"
import { ChangeEvent, useState } from "react";
import { validateInputErrors } from "../services/validations";
import { registerUser } from "../services/api";

interface FormData {
    name: string;
    email: string;
    password: string;
}



const Register: React.FC = () => {

    const [formData, setFormData] = useState<FormData>({
        name: "",
        email: "",
        password: ""
    })
    const [formErrors, setFormErrors] = useState<FormData>({
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
        registerUser(formData)
    }

    return (
        <div className="flex w-auto h-screen">
            <div
                className="bg-cover bg-center w-1/2 h-full hidden md:block"
                style={{
                    backgroundImage: `url(${signup_image})`,
                }}
            ></div>
            <div className="absolute top-10 md:top-2 right-10 md:right-10 hidden md:block">
                <img
                    src={cvinter_logo1}
                    alt="logo"
                    className="h-20 md:h-32 w-auto "
                />
            </div>
            <div className="w-full md:w-1/2 h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-md w-full p-4">
                    <h2 className="text-2xl font-bold mb-6">Create account</h2>
                    <form onSubmit={handleSubmitForm} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-700 mb-2 text-left"
                            >
                                Name
                            </label>
                            <input

                                value={formData.name}
                                name="name"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Enter your name"
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                            {formErrors.name && <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>}
                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-gray-700 mb-2 text-left"
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
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                            {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-gray-700 mb-2 text-left"
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
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 mb-2"
                            />
                            {formErrors.password && <p className="text-red-500 text-sm mt-1">{formErrors.password}</p>}
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600 transition duration-200"
                        >
                            Create account
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
};

export default Register