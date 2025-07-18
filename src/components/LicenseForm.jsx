import React, { useState } from "react";
import DynamicLogo from '../assets/Dynamic_Logo.png';
import LinkIcon from '@mui/icons-material/Link';
const initialState = {
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    website: "",
    mainPhone: "",
    crmUrl: "",
    organization: "",
    from: "",
    to: "",
};

export default function LicenseForm({ onSubmitSuccess })
{
    const [form, setForm] = useState(initialState);
    const [errors, setErrors] = useState({});
    const [checkbox, setCheckbox] = useState(false);
    const [interval, setInterval] = useState("");

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validate = () =>
    {
        let err = {};
        if (!form.firstName.trim()) err.firstName = true;
        if (!form.lastName.trim()) err.lastName = true;
        if (!form.companyName.trim()) err.companyName = true;
        if (!form.email.trim() || !isValidEmail(form.email)) err.email = true;
        if (!form.website.trim()) err.website = true;
        if (!form.mainPhone.trim()) err.mainPhone = true;
        if (!form.crmUrl.trim()) err.crmUrl = true;
        if (!form.organization.trim()) err.organization = true;
        if (!form.from.trim()) err.from = true;
        if (!form.to.trim()) err.to = true;
        if (!interval) err.interval = true;
        return err;
    };

    const handleChange = (e) =>
    {
        setForm({ ...form, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: false }); // Clear error on change
    };

    const handleActivate = (e) =>
    {
        e.preventDefault();
        const err = validate();
        setErrors(err);
        if (Object.keys(err).length === 0)
        {
            // All valid, prepare data to send up
            const data = {
                ...form,
                interval,
                checkbox,
                submittedAt: new Date().toISOString(),
            };
            onSubmitSuccess(data); // Notify parent
            // Reset form
            setForm(initialState);
            setCheckbox(false);
            setInterval("");
        }
    };

    return (
        <div className="w-full bg-white rounded shadow p-8 px-4 md:px-8">

            <div className="flex flex-col items-start gap-3 mb-6">
                <img
                    src={DynamicLogo}
                    alt="DynamicLogo.png"
                    className="h-30"
                />
                <div className="flex items-center gap-4">
                    <button
                        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
                        onClick={handleActivate}
                    >
                        ACTIVATE
                    </button>
                    <span className="text-gray-500 uppercase font-semibold text-sm flex items-center gap-1">
                        <LinkIcon fontSize="small" />
                        SEND REQUEST
                    </span>
                </div>

            </div>

            <h2 className="text-lg font-bold mb-2 text-blue-900">License Registration</h2>
            <form className="space-y-4" onSubmit={handleActivate} autoComplete="off">
                {/* Name and Contact */}
                <div className="grid grid-cols-2 gap-6">
                    {/* First Name */}
                    <div>
                        <div className="flex items-center gap-1">
                            <label className="w-22 text-l whitespace-nowrap flex items-center">
                                First Name
                            </label>
                            <span className="text-red-500 text-xl">*</span>
                            <div className=" ml-2">
                            </div>
                            <input
                                className={`flex-1 border rounded px-2 py-1 ${errors.firstName ? "border-red-500" : ""}`}
                                name="firstName"
                                value={form.firstName}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.firstName && (
                            <div className="text-xs text-red-500 ml-32 mt-1">Required</div>
                        )}
                    </div>

                    {/* Last Name */}
                    <div>
                        <div className="flex items-center gap-1">
                            <label className="w-22 text-l whitespace-nowrap flex items-center">
                                Last Name
                            </label>
                            <span className="text-red-500 text-xl">*</span>
                            <div className=" ml-2">
                            </div>
                            <input
                                className={`flex-1 border rounded px-2 py-1 ${errors.lastName ? "border-red-500" : ""}`}
                                name="lastName"
                                value={form.lastName}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.lastName && (
                            <div className="text-xs text-red-500 ml-32 mt-1">Required</div>
                        )}
                    </div>

                    {/* Company Name */}
                    <div>
                        <div className="flex items-center gap-1">
                            <label className="w-22 text-lm whitespace-nowrap flex items-center gap-1">
                                Company Na..
                            </label>
                            <span className="text-red-500 text-xl">*</span>
                            <div className=" ml-2">
                            </div>
                            <input
                                className={`flex-1 border rounded px-2 py-1 ${errors.companyName ? "border-red-500" : ""}`}
                                name="companyName"
                                value={form.companyName}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.companyName && (
                            <div className="text-xs text-red-500 ml-32 mt-1">Required</div>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <div className="flex items-center gap-1">
                            <label className="w-22 text-lm whitespace-nowrap flex items-center gap-1">
                                Email
                            </label>
                            <span className="text-red-500 text-xl">*</span>
                            <div className=" ml-2">
                            </div>
                            <input
                                type="email"
                                className={`flex-1 border rounded px-2 py-1 ${errors.email ? "border-red-500" : ""}`}
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.email && (
                            <div className="text-xs text-red-500 ml-32 mt-1">Valid email required</div>
                        )}
                    </div>

                    {/* Website */}
                    <div>
                        <div className="flex items-center gap-1">
                            <label className="w-22 text-lm whitespace-nowrap flex items-center gap-1">
                                Website

                            </label>
                            <span className="text-red-500 text-xl">*</span>
                            <div className=" ml-2">
                            </div>
                            <input
                                className={`flex-1 border rounded px-2 py-1 ${errors.website ? "border-red-500" : ""}`}
                                name="website"
                                value={form.website}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.website && (
                            <div className="text-xs text-red-500 ml-32 mt-1">Required</div>
                        )}
                    </div>

                    {/* Main Phone */}
                    <div>
                        <div className="flex items-center gap-1">
                            <label className="w-22 text-lm whitespace-nowrap flex items-center gap-1">
                                Main Phone

                            </label>
                            <span className="text-red-500 text-xl">*</span>
                            <div className=" ml-2">
                            </div>
                            <input
                                className={`flex-1 border rounded px-2 py-1 ${errors.mainPhone ? "border-red-500" : ""}`}
                                name="mainPhone"
                                value={form.mainPhone}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.mainPhone && (
                            <div className="text-xs text-red-500 ml-32 mt-1">Required</div>
                        )}
                    </div>
                </div>

                {/* CRM Details */}
                <h3 className="text-lg font-bold mb-2 text-black">CRM Details</h3>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <div className="flex items-center gap-1">
                            <label className="w-22 text-lm whitespace-nowrap flex items-center gap-1">
                                CRM URL

                            </label>
                            <span className="text-red-500 text-xl">*</span>
                            <div className=" ml-2">
                            </div>
                            <input
                                className={`flex-1 border rounded px-2 py-1 ${errors.crmUrl ? "border-red-500" : ""}`}
                                name="crmUrl"
                                value={form.crmUrl}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.crmUrl && (
                            <div className="text-xs text-red-500 ml-32 mt-1">Required</div>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center gap-1">
                            <label className="w-22 text-lm whitespace-nowrap flex items-center gap-1">
                                Organization

                            </label>
                            <span className="text-red-500 text-xl">*</span>
                            <div className=" ml-2">
                            </div>
                            <input
                                className={`flex-1 border rounded px-2 py-1 ${errors.organization ? "border-red-500" : ""}`}
                                name="organization"
                                value={form.organization}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.organization && (
                            <div className="text-xs text-red-500 ml-32 mt-1">Required</div>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center gap-1">
                            <label className="w-22 text-lm whitespace-nowrap flex items-center gap-1">
                                CRM Version

                            </label>
                            <span className="text-red-500 text-xl">*</span>
                            <div className=" ml-2">
                            </div>
                            <input
                                className="flex-1 border rounded px-2 py-1 bg-gray-100"
                                value="9.2"
                                readOnly
                            />
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-1">
                            <label className="w-22 text-lm whitespace-nowrap flex items-center gap-1">
                                User License

                            </label>
                            <span className="text-red-500 text-xl">*</span>
                            <div className=" ml-2">
                            </div>
                            <input
                                className="flex-1 border rounded px-2 py-1 bg-gray-100"
                                value="2"
                                readOnly
                            />
                        </div>
                    </div>
                </div>


                {/* Notification */}
                <h3 className="text-lg font-bold mb-2 text-blue-900">Notification</h3>
                <div className="mb-2 text-xl text-black">
                    Notification Details <br />
                    <span className="text-lg text-gray-700">
                        <i>  (Notify User and Inagic about issues regarding licensing.)</i>
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <div className="flex items-center gap-2">
                            <label className="w-32 text-sm">
                                From
                            </label>
                            <input
                                className={`flex-1 border rounded px-2 py-1 ${errors.from ? "border-red-500" : ""}`}
                                name="from"
                                value={form.from}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.from && (
                            <div className="text-xs text-red-500 ml-32">Required</div>
                        )}
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <label className="w-32 text-sm">
                                To
                            </label>
                            <input
                                className={`flex-1 border rounded px-2 py-1 ${errors.to ? "border-red-500" : ""}`}
                                name="to"
                                value={form.to}
                                onChange={handleChange}
                            />
                        </div>
                        {errors.to && (
                            <div className="text-xs text-red-500 ml-32">Required</div>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {/* Left: Notify Checkbox */}
                    <label className="flex items-center gap-2 text-sm">
                        <input
                            type="checkbox"
                            className="h-4 w-4"
                            checked={checkbox}
                            onChange={(e) => setCheckbox(e.target.checked)}
                        />
                        Notify To Inagic
                    </label>

                    {/* Right: Notification Interval and Radios */}
                    <div className="flex items-center gap-6 flex-wrap">
                        <span>
                            Notification Interval:<span className="text-red-500">*</span>
                        </span>
                        <label className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="interval"
                                checked={interval === "day"}
                                onChange={() => setInterval("day")}
                                className="h-4 w-4"
                            />{" "}
                            Once a day
                        </label>
                        <label className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="interval"
                                checked={interval === "week"}
                                onChange={() => setInterval("week")}
                                className="h-4 w-4"
                            />{" "}
                            Once a week
                        </label>
                        <label className="flex items-center gap-1">
                            <input
                                type="radio"
                                name="interval"
                                checked={interval === "month"}
                                onChange={() => setInterval("month")}
                                className="h-4 w-4"
                            />{" "}
                            Once a month
                        </label>
                        {errors.interval && (
                            <div className="text-xs text-red-500 ml-2">Required</div>
                        )}
                    </div>
                </div>


                <div>
                    <a href="#" className="text-lg font-bold mb-2 text-blue-900">
                        License Registration using (*.lic) file
                    </a>
                </div>
            </form>
        </div>
    );
}
