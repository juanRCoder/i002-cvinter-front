import login_image from "../../../assets/login_image.png"
import cvinter_logo1 from "../../../assets/cvinter_logo_1.png"
import { ChangeEvent, useState } from "react"
import { loginValidations } from "../services/validations"

interface LoginData {
    email: string,
    password: string
}


const Login = () => {
    const [loginData, setLoginData] = useState<LoginData>({
        email: "",
        password: ""
    })

    const [loginErrors, setLoginErrors] = useState<LoginData>({
        email: "",
        password: ""
    })

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setLoginData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))

        setLoginErrors({
            ...loginErrors,
            [name]: loginValidations(name, value)
        })
    }

    const handleSubmitForm = (event: React.FormEvent) => {
        event.preventDefault()
        console.log("Se realizo el intento de login.", loginData);

    }
    return (
        <div className="flex w-full h-screen overflow-hidden">
            <div
                className="bg-cover bg-center w-1/2 h-full hidden md:block"
                style={{
                    backgroundImage: `url(${login_image})`,
                }}
            ></div>
            <div className="absolute top-10 md:top-2 right-10 md:right-10 hidden md:block">
                <img
                    src={cvinter_logo1}
                    alt="logo"
                    className="h-20 md:h-32 w-auto "
                />
            </div>
            {/* LOGIN FORM */}
            <div className="w-full md:w-1/2 h-screen flex items-center justify-center bg-gray-100">
                <div className="max-w-md w-full p-4">
                    <h2 className="text-2xl font-bold mb-6">Create account</h2>
                    <form onSubmit={handleSubmitForm} className="space-y-4">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-gray-700 mb-2 text-left"
                            >
                                Email
                            </label>
                            <input

                                value={loginData.email}
                                name="email"
                                onChange={handleInputChange}
                                type="text"
                                placeholder="Enter your email"
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500"
                            />
                            {loginErrors.email && <p className="text-red-500 text-sm mt-1">{loginErrors.email}</p>}
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
                                value={loginData.password}
                                name="password"
                                onChange={handleInputChange}
                                type="password"
                                placeholder="Enter your password"
                                className="w-full bg-white border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-blue-500 mb-2"
                            />
                            {loginErrors.password && <p className="text-red-500 text-sm mt-1">{loginErrors.password}</p>}
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
}

export default Login