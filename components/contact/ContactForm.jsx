// components/ContactForm.js

import Button from '../reusable/Button'
import FormInput from '../reusable/FormInput'
import { useState } from 'react'

function ContactForm() {
    const initialFormData = {
        name: '',
        email: '',
        facebook: '',
        phone: '',
        message: '',
    }

    const [formData, setFormData] = useState(initialFormData)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        setErrorMessage('') // Clear any previous error messages
        try {
            const response = await fetch('/api/reqCom', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`)
            }

            setShowSuccessMessage(true)
            setFormData(initialFormData) // Reset the form
            setTimeout(() => setShowSuccessMessage(false), 3000) // Hide after 3 seconds
        } catch (error) {
            console.error('Error submitting form:', error)
            setErrorMessage('Error inserting data')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="w-full lg:w-3/4">
            <div className="leading-loose">
                <form
                    onSubmit={handleSubmit}
                    className="m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
                >
                    <p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
                        Түнш болох хүсэл илгээх
                    </p>

                    {showSuccessMessage && (
                        <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                            Амжилттай илгээлээ!
                        </div>
                    )}

                    {errorMessage && (
                        <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                            {errorMessage}
                        </div>
                    )}

                    <FormInput
                        inputLabel="Байгууллагын нэр"
                        labelFor="name"
                        inputType="text"
                        inputId="name"
                        inputName="name"
                        placeholderText="Байгууллагын нэр"
                        ariaLabelName="Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        inputLabel="Имейл хаяг"
                        labelFor="email"
                        inputType="email"
                        inputId="email"
                        inputName="email"
                        placeholderText="Имейл хаяг"
                        ariaLabelName="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        inputLabel="Фейсбүүк"
                        labelFor="facebook"
                        inputType="text"
                        inputId="facebook"
                        inputName="facebook"
                        placeholderText="Фейсбүүк"
                        ariaLabelName="Facebook"
                        value={formData.facebook}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        inputLabel="Утас"
                        labelFor="phone"
                        inputType="text"
                        inputId="phone"
                        inputName="phone"
                        placeholderText="утас"
                        ariaLabelName="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
                    <div className="mt-6">
                        <label
                            className="block text-lg text-primary-dark dark:text-primary-light mb-2"
                            htmlFor="message"
                        >
                            Хүсэлт
                        </label>
                        <textarea
                            className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                            id="message"
                            name="message"
                            cols="14"
                            rows="6"
                            aria-label="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>

                    <div className="mt-6">
                        <span className="font-general-medium px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                            <Button
                                title={
                                    loading
                                        ? 'Илгээж байна...'
                                        : 'Хүсэлт илгээх'
                                }
                                type="submit"
                                aria-label="Send Message"
                                disabled={loading}
                            />
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
