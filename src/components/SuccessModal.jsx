import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function SuccessModal({ open, onClose })
{
    if (!open) return null;
    return (
        <div
            className="fixed inset-0 z-50 flex items-start justify-center bg-black bg-opacity-40"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg shadow-lg mt-24 px-10 py-8 max-w-md w-full flex flex-col items-center"
                onClick={(e) => e.stopPropagation()}
            >
                <CheckCircleOutlineIcon
                    className="text-green-500"
                    style={{ fontSize: 68, marginBottom: 12 }}
                />
                <div className="font-bold text-2xl mb-2 text-center">
                    Congratualation
                </div>
                <div className="text-gray-600 mb-6 text-center">
                    Successfully created your account!
                </div>
                <button
                    className="bg-blue-500 text-white rounded px-6 py-2 font-semibold hover:bg-blue-600 transition"
                    onClick={onClose}
                >
                    OK
                </button>
            </div>
        </div>
    );
}
