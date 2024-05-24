// components/ContactForm.js
import Button from '../components/reusable/Button'
import FormInput from '../components/reusable/FormInput'
import { useState } from 'react'

function ContactForm() {
    const initialFormData = {
        name: '',
        price: '',
        course: '',
        category: '',
        address: '',
        info: '',
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
            const response = await fetch('/api/addUser', {
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
                        Сургалт нэмэх
                    </p>

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
                        inputLabel="Үнийн мэдээлэл"
                        labelFor="price"
                        inputType="text"
                        inputId="price"
                        inputName="price"
                        placeholderText="Үнийн мэдээлэл"
                        ariaLabelName="Price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        inputLabel="Курс"
                        labelFor="course"
                        inputType="text"
                        inputId="course"
                        inputName="course"
                        placeholderText="Курс нэр"
                        ariaLabelName="Course"
                        value={formData.course}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        inputLabel="Ангилал"
                        labelFor="category"
                        inputType="text"
                        inputId="category"
                        inputName="category"
                        placeholderText="Ангилал"
                        ariaLabelName="Category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        inputLabel="Хаяг"
                        labelFor="address"
                        inputType="text"
                        inputId="address"
                        inputName="address"
                        placeholderText="Хаяг"
                        ariaLabelName="Address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                    />
                    <FormInput
                        inputLabel="Мэдээлэл"
                        labelFor="info"
                        inputType="text"
                        inputId="info"
                        inputName="info"
                        placeholderText="Мэдээлэл"
                        ariaLabelName="Info"
                        value={formData.info}
                        onChange={handleChange}
                        required
                    />

                    <div className="mt-6">
                        <span className="font-general-medium px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
                            <Button
                                title={
                                    loading
                                        ? 'Илгээж байна...'
                                        : 'Сургалт нэмэх'
                                }
                                type="submit"
                                aria-label="Send Message"
                                disabled={loading}
                            />
                        </span>
                    </div>
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
                </form>
            </div>
        </div>
    )
}

export default ContactForm
