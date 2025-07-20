import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function SuccessModal({ open, onClose })
{
    if (!open) return null;

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-xl shadow-xl w-full max-w-md sm:max-w-sm p-6 sm:p-8 flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <CheckCircleOutlineIcon
                    className="text-green-500 mb-4"
                    style={{ fontSize: 64 }}
                />
                <h2 className="text-xl sm:text-2xl font-bold mb-2 text-center text-gray-800">
                    Congratulations!
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-6 text-center">
                    Successfully created your account!
                </p>
                <button
                    className="w-full sm:w-auto bg-blue-500 text-white rounded px-5 py-2 font-semibold hover:bg-blue-600 transition"
                    onClick={onClose}
                >
                    OK
                </button>
            </div>
        </div>
    );
}
