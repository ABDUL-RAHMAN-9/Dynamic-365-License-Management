import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function SuccessModal({ data, onClose, onGoToLogs })
{
    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[100] p-4">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-md overflow-hidden animate-in zoom-in duration-300">
                <div className="bg-green-600 p-6 flex flex-col items-center text-white">
                    <CheckCircleIcon sx={{ fontSize: 60 }} />
                    <h2 className="text-xl font-bold mt-2">Activation Successful!</h2>
                </div>

                <div className="p-6 space-y-4">
                    <div className="bg-gray-50 p-4 rounded border border-gray-100 text-sm">
                        <p><strong>Name:</strong> {data?.firstName} {data?.lastName}</p>
                        <p><strong>CRM:</strong> {data?.crmUrl}</p>
                        <p><strong>Organization:</strong> {data?.organization}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button onClick={onGoToLogs} className="w-full bg-blue-900 text-white py-2 rounded font-bold hover:bg-blue-800 transition">VIEW ACTIVITY LOGS</button>
                        <button onClick={onClose} className="w-full text-gray-400 text-sm font-semibold hover:underline">CLOSE</button>
                    </div>
                </div>
            </div>
        </div>
    );
}