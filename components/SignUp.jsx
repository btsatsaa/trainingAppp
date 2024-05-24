import React, { useState } from 'react'
import { IoCloseOutline } from 'react-icons/io5'

const SignupModal = ({ onClose, isLogged }) => {
    const [users_name, setName] = useState('')
    const [users_phone, setPhone] = useState('')
    const [users_email, setEmail] = useState('')
    const [users_password, setPassword] = useState('')
    const [agreementChecked, setAgreementChecked] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    const handleSignup = async () => {
        try {
            const response = await fetch('/api/usersData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    users_name,
                    users_phone,
                    users_email,
                    users_password,
                }),
            })

            if (response.ok) {
                const result = await response.json()
                if (result.success) {
                    setSuccessMessage('Signup successful!')
                    setTimeout(() => {
                        setSuccessMessage('')
                        onClose()
                    }, 3000) // Hide success message after 3 seconds
                } else {
                    setSuccessMessage('Signup failed. Please try again.')
                }
            } else {
                setSuccessMessage('Signup failed. Please try again.')
            }
        } catch (error) {
            console.error('Error during signup:', error)
            setSuccessMessage('Internal Server Error. Please try again later.')
        }
    }

    return (
        <div className="modal fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-md bg-secondary-light dark:bg-secondary-dark">
            <div className="flex justify-between">
                <h2 className="text-2xl font-bold mb-4">Бүртгүүлэх</h2>
                <button
                    className="text-gray-500"
                    onClick={() => (isLogged ? null : onClose())}
                >
                    <IoCloseOutline className="text-4xl" />
                </button>
            </div>

            <div className="mb-4">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 text-primary-dark dark:text-primary-light"
                >
                    Овог/Нэр
                </label>
                <input
                    type="text"
                    id="name"
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="энд нэрээ бичнэ үү"
                    value={users_name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 text-primary-dark dark:text-primary-light"
                >
                    Утасны дугаар
                </label>
                <input
                    type="tel"
                    id="phone"
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="энд утасны дугаараа бичнэ үү"
                    value={users_phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 text-primary-dark dark:text-primary-light"
                >
                    Имейл хаяг
                </label>
                <input
                    type="email"
                    id="email"
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="Имейл хаягаа оруулна уу"
                    value={users_email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 text-primary-dark dark:text-primary-light"
                >
                    Нууц үг
                </label>
                <input
                    type="password"
                    id="password"
                    className="mt-1 p-2 border rounded-md w-full"
                    placeholder="Шинэ нууц үг"
                    value={users_password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="mb-4">
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        className="form-checkbox"
                        checked={agreementChecked}
                        onChange={() => setAgreementChecked(!agreementChecked)}
                    />
                    <span className="ml-2 text-sm text-gray-700 text-primary-dark dark:text-primary-light">
                        Зөвшөөрч байна{' '}
                        <a
                            href="/terms"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            үйлчилгээний нөхцөл
                        </a>
                    </span>
                </label>
            </div>

            <button
                className="bg-green-500 text-white px-4 py-2 rounded-md mr-2"
                onClick={handleSignup}
            >
                Бүртгүүлэх
            </button>

            {successMessage && (
                <div className="mt-4 text-green-500">{successMessage}</div>
            )}

            <button className="text-gray-500" onClick={onClose}></button>
        </div>
    )
}

export default SignupModal
