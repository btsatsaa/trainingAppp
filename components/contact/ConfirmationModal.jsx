// components/ConfirmationModal.js

import React from 'react'

function ConfirmationModal({ isOpen, message, onConfirm, onCancel }) {
    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center ${
                isOpen ? '' : 'hidden'
            }`}
        >
            <div className="fixed inset-0 bg-black opacity-50"></div>
            <div className="bg-white p-8 rounded-lg shadow-lg z-50">
                <p className="text-lg">{message}</p>
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-gray-200 px-4 py-2 mr-4 rounded"
                        onClick={onCancel}
                    >
                        No
                    </button>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={onConfirm}
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ConfirmationModal
