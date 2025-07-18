export default function LogPage({ logs, onDeleteLog })
{
    return (
        <div className="max-w-7xl mx-auto bg-white rounded shadow p-6 min-h-[calc(100vh-96px)]">
            <h1 className="text-2xl font-bold mb-6 text-blue-900">Logs</h1>

            {logs.length === 0 ? (
                <p className="text-gray-500 text-lg">No logs available.</p>
            ) : (
                <div className="overflow-auto max-h-[80vh]">
                    <table className="min-w-full text-sm border border-gray-300">
                        <thead className="bg-blue-100 text-blue-900 font-semibold uppercase text-xs">
                            <tr>
                                <th className="p-3 border">#</th>
                                <th className="p-3 border">Date</th>
                                <th className="p-3 border">Name</th>
                                <th className="p-3 border">Company</th>
                                <th className="p-3 border">Email</th>
                                <th className="p-3 border">Website</th>
                                <th className="p-3 border">Main Phone</th>
                                <th className="p-3 border">CRM URL</th>
                                <th className="p-3 border">Organization</th>
                                <th className="p-3 border">From</th>
                                <th className="p-3 border">To</th>
                                <th className="p-3 border">Notify Inagic</th>
                                <th className="p-3 border">Interval</th>
                                <th className="p-3 border text-center">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {logs.map((log, i) => (
                                <tr key={i} className="border-b hover:bg-gray-50">
                                    <td className="p-2 border text-center">{i + 1}</td>
                                    <td className="p-2 border">{new Date(log.submittedAt).toLocaleString()}</td>
                                    <td className="p-2 border">{log.firstName} {log.lastName}</td>
                                    <td className="p-2 border">{log.companyName}</td>
                                    <td className="p-2 border">{log.email}</td>
                                    <td className="p-2 border">{log.website}</td>
                                    <td className="p-2 border">{log.mainPhone}</td>
                                    <td className="p-2 border">{log.crmUrl}</td>
                                    <td className="p-2 border">{log.organization}</td>
                                    <td className="p-2 border">{log.from}</td>
                                    <td className="p-2 border">{log.to}</td>
                                    <td className="p-2 border text-center">{log.checkbox ? "Yes" : "No"}</td>
                                    <td className="p-2 border capitalize">{log.interval}</td>
                                    <td className="p-2 border text-center">
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
            )}
        </div>
    );
}
