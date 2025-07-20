export default function LogPage({ logs, onDeleteLog })
{
    return (
        <div className="max-w-7xl mx-auto bg-white rounded shadow p-4 sm:p-6 min-h-[calc(100vh-96px)]">
            <h1 className="text-2xl font-bold mb-6 text-blue-900">Logs</h1>

            {logs.length === 0 ? (
                <p className="text-gray-500 text-lg">No logs available.</p>
            ) : (
                <>
                    {/* Table for md+ screens */}
                    <div className="hidden md:block overflow-auto max-h-[80vh]">
                        <table className="min-w-full text-sm border border-gray-300 table-fixed">
                            <thead className="bg-blue-100 text-blue-900 font-semibold uppercase text-xs">
                                <tr>
                                    <th className="p-3 border w-6 text-center">#</th>
                                    <th className="p-3 border w-32">Date</th>
                                    <th className="p-3 border w-28">Name</th>
                                    <th className="p-3 border w-28">Company</th>
                                    <th className="p-3 border w-36">Email</th>
                                    <th className="p-3 border w-28">Website</th>
                                    <th className="p-3 border w-28">Main Phone</th>
                                    <th className="p-3 border w-28">CRM URL</th>
                                    <th className="p-3 border w-28">Organization</th>
                                    <th className="p-3 border w-20">From</th>
                                    <th className="p-3 border w-20">To</th>
                                    <th className="p-3 border w-24 text-center">Notify Inagic</th>
                                    <th className="p-3 border w-20 capitalize">Interval</th>
                                    <th className="p-3 border w-20 text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {logs.map((log, i) => (
                                    <tr
                                        key={i}
                                        className="border-b hover:bg-gray-50 even:bg-gray-50"
                                    >
                                        <td className="p-2 border text-center">{i + 1}</td>
                                        <td className="p-2 border whitespace-nowrap">
                                            {new Date(log.submittedAt).toLocaleString()}
                                        </td>
                                        <td className="p-2 border whitespace-nowrap">
                                            {log.firstName} {log.lastName}
                                        </td>
                                        <td className="p-2 border whitespace-nowrap">
                                            {log.companyName}
                                        </td>
                                        <td className="p-2 border whitespace-nowrap">{log.email}</td>
                                        <td className="p-2 border whitespace-nowrap">
                                            {log.website}
                                        </td>
                                        <td className="p-2 border whitespace-nowrap">
                                            {log.mainPhone}
                                        </td>
                                        <td className="p-2 border whitespace-nowrap">{log.crmUrl}</td>
                                        <td className="p-2 border whitespace-nowrap">
                                            {log.organization}
                                        </td>
                                        <td className="p-2 border whitespace-nowrap">{log.from}</td>
                                        <td className="p-2 border whitespace-nowrap">{log.to}</td>
                                        <td className="p-2 border text-center">
                                            {log.checkbox ? "Yes" : "No"}
                                        </td>
                                        <td className="p-2 border capitalize whitespace-nowrap">
                                            {log.interval}
                                        </td>
                                        <td className="p-2 border text-center whitespace-nowrap">
                                            <button
                                                className="text-red-600 hover:underline text-xs"
                                                onClick={() => onDeleteLog?.(i)}
                                            >
                                                Delete ❌
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Card list for small screens */}
                    <div className="md:hidden space-y-4 max-h-[80vh] overflow-y-auto">
                        {logs.map((log, i) => (
                            <div
                                key={i}
                                className="border rounded-md p-4 shadow-sm bg-white hover:shadow-md"
                            >
                                <div className="flex justify-between items-center mb-2">
                                    <h2 className="font-semibold text-lg text-blue-900">
                                        Log #{i + 1}
                                    </h2>
                                    <button
                                        className="text-red-600 hover:underline text-xs"
                                        onClick={() => onDeleteLog?.(i)}
                                        aria-label={`Delete log ${i + 1}`}
                                    >
                                        Delete ❌
                                    </button>
                                </div>

                                <div className="space-y-1 text-sm text-gray-700">
                                    <div>
                                        <strong>Date:</strong>{" "}
                                        {new Date(log.submittedAt).toLocaleString()}
                                    </div>
                                    <div>
                                        <strong>Name:</strong> {log.firstName} {log.lastName}
                                    </div>
                                    <div>
                                        <strong>Company:</strong> {log.companyName}
                                    </div>
                                    <div>
                                        <strong>Email:</strong> {log.email}
                                    </div>
                                    <div>
                                        <strong>Website:</strong> {log.website}
                                    </div>
                                    <div>
                                        <strong>Main Phone:</strong> {log.mainPhone}
                                    </div>
                                    <div>
                                        <strong>CRM URL:</strong> {log.crmUrl}
                                    </div>
                                    <div>
                                        <strong>Organization:</strong> {log.organization}
                                    </div>
                                    <div>
                                        <strong>From:</strong> {log.from}
                                    </div>
                                    <div>
                                        <strong>To:</strong> {log.to}
                                    </div>
                                    <div>
                                        <strong>Notify Inagic:</strong> {log.checkbox ? "Yes" : "No"}
                                    </div>
                                    <div className="capitalize">
                                        <strong>Interval:</strong> {log.interval}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
  