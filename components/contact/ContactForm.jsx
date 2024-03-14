import Button from '../reusable/Button';
import FormInput from '../reusable/FormInput';
import React, { Component } from "react";


import { useState } from "react";

function ContactForm() {
	return (
		<div className="w-full lg:w-3/4">
			<div className="leading-loose">
				<form
					onSubmit={(e) => {
						e.preventDefault();
					}}
					className=" m-4 p-6 sm:p-10 bg-secondary-light dark:bg-secondary-dark rounded-xl shadow-xl text-left"
				>
					<p className="font-general-medium text-primary-dark dark:text-primary-light text-2xl mb-8">
						Түнш болох хүсэл илгээх
					</p>

					<FormInput
						inputLabel="Байгууллагын нэр"
						labelFor="name"
						inputType="text"
						inputId="name"
						inputName="name"
						placeholderText="Байгууллагын нэр"
						ariaLabelName="Name"
					/>
					<FormInput
						inputLabel="Имейл хаяг"
						labelFor="email"
						inputType="email"
						inputId="email"
						inputName="email"
						placeholderText="Имейл хаяг"
						ariaLabelName="Email"
					/>
					<FormInput
						inputLabel="Фейсбүүк"
						labelFor="subject"
						inputType="text"
						inputId="subject"
						inputName="subject"
						placeholderText="Фейсбүүк"
						ariaLabelName="Subject"
					/>
					<FormInput
						inputLabel="Утас"
						labelFor="phone"
						inputType="subject"
						inputId="subject"
						inputName="subject"
						placeholderText="утас"
						ariaLabelName="Subject"
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
						></textarea>
					</div>

					<div className="mt-6">
						<span className="font-general-medium  px-7 py-4 text-white text-center font-medium tracking-wider bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 rounded-lg mt-6 duration-500">
							<Button
								title="Хүсэлт илгээх"
								type="submit"
								aria-label="Send Message"
							/>
						</span>
					</div>
				</form>


			</div>
		</div>
	);
}

export default ContactForm;
