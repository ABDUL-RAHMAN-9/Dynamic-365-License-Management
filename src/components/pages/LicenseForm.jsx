import React, { useState } from "react";
import DynamicLogo from "../../assets/Dynamic_Logo.png";
import LinkIcon from "@mui/icons-material/Link";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export default function LicenseForm({ onActivate })
{
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        crmUrl: "",
        checkbox: false,
    });

    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const validate = () =>
    {
        let newErrors = {};

        // 1. Name Validation: Only Alphabets
        const nameRegex = /^[a-zA-Z\s]+$/;
        if (!form.firstName.trim())
        {
            newErrors.firstName = "First name is required";
        } else if (!nameRegex.test(form.firstName))
        {
            newErrors.firstName = "Numbers or symbols are not allowed";
        }

        if (!form.lastName.trim())
        {
            newErrors.lastName = "Last name is required";
        } else if (!nameRegex.test(form.lastName))
        {
            newErrors.lastName = "Numbers or symbols are not allowed";
        }

        // 2. Email Validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!form.email.trim())
        {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(form.email))
        {
            newErrors.email = "Enter a valid email address";
        }

        // 3. CRM URL Validation
        if (!form.crmUrl.trim())
        {
            newErrors.crmUrl = "CRM URL is required";
        } else
        {
            try
            {
                const parsedUrl = new URL(form.crmUrl);
                if (!parsedUrl.hostname.includes("crm.dynamics.com"))
                {
                    newErrors.crmUrl = "URL must be a valid .crm.dynamics.com domain";
                }
            } catch
            {
                // FIXED: Removed (error) from catch block to satisfy ESLint
                newErrors.crmUrl = "Invalid format. Include https://";
            }
        }

        // 4. Checkbox Validation
        if (!form.checkbox)
        {
            newErrors.checkbox = "Agreement is required";
        }

        return newErrors;
    };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        setIsSubmitted(true);
        const validationErrors = validate();

        if (Object.keys(validationErrors).length === 0)
        {
            onActivate({
                ...form,
                submittedAt: new Date().toLocaleString(),
            });
        } else
        {
            setErrors(validationErrors);
        }
    };

    const handleChange = (field, value) =>
    {
        setForm({ ...form, [field]: value });
        if (errors[field])
        {
            setErrors({ ...errors, [field]: null });
        }
    };

    return (
        <div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 animate-in slide-in-from-bottom-5 duration-700">
            <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-10 bg-gray-50/80 border-b border-gray-100 gap-6">
                <img src={DynamicLogo} alt="Logo" className="h-12 md:h-16 object-contain" />
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleSubmit}
                        className="flex items-center gap-2 bg-[#228B22] text-white px-8 py-3 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg active:scale-95"
                    >
                        <CheckCircleIcon fontSize="small" />
                        ACTIVATE
                    </button>
                    <button className="flex items-center gap-1 text-gray-400 font-bold text-xs uppercase hover:text-blue-600 transition-all tracking-widest">
                        <LinkIcon fontSize="small" /> Send Request
                    </button>
                </div>
            </div>

            <div className="p-8 md:p-12">
                <div className="mb-10">
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight">License Registration</h2>
                    <div className="h-1 w-20 bg-blue-600 rounded-full mt-2"></div>
                </div>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    <InputField
                        label="First Name *"
                        error={isSubmitted ? errors.firstName : null}
                        value={form.firstName}
                        placeholder="John"
                        onChange={(v) => handleChange("firstName", v)}
                    />

                    <InputField
                        label="Last Name *"
                        error={isSubmitted ? errors.lastName : null}
                        value={form.lastName}
                        placeholder="Doe"
                        onChange={(v) => handleChange("lastName", v)}
                    />

                    <InputField
                        label="Email Address *"
                        type="email"
                        error={isSubmitted ? errors.email : null}
                        value={form.email}
                        placeholder="admin@company.com"
                        onChange={(v) => handleChange("email", v)}
                    />

                    <InputField
                        label="CRM Dynamics URL *"
                        error={isSubmitted ? errors.crmUrl : null}
                        value={form.crmUrl}
                        placeholder="https://org.crm.dynamics.com"
                        onChange={(v) => handleChange("crmUrl", v)}
                    />

                    <div className="col-span-1 md:col-span-2">
                        <div
                            onClick={() => handleChange("checkbox", !form.checkbox)}
                            className={`flex items-start gap-4 p-5 rounded-2xl cursor-pointer transition-all border-2 ${form.checkbox
                                ? "bg-blue-50 border-blue-200"
                                : (isSubmitted && errors.checkbox) ? "bg-red-50 border-red-200" : "bg-gray-50 border-transparent"
                                }`}
                        >
                            <input type="checkbox" className="mt-1 w-5 h-5 accent-blue-600" checked={form.checkbox} readOnly />
                            <p className="text-xs font-bold text-slate-600 leading-relaxed">
                                I verify that the information above is correct and understand activation is bound to this CRM URL.
                            </p>
                        </div>
                        {isSubmitted && errors.checkbox && (
                            <p className="text-red-500 text-[10px] font-bold mt-2 uppercase flex items-center gap-1">
                                <ErrorOutlineIcon style={{ fontSize: 14 }} /> {errors.checkbox}
                            </p>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}

// Sub-component
function InputField({ label, value, onChange, error, type = "text", placeholder })
{
    return (
        <div className="flex flex-col gap-2">
            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">{label}</label>
            <div className="relative">
                <input
                    type={type}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className={`w-full border-2 p-4 rounded-2xl text-sm font-bold outline-none transition-all ${error
                        ? "border-red-100 bg-red-50 text-red-900 focus:border-red-300"
                        : "border-transparent bg-slate-50 text-slate-700 focus:bg-white focus:border-blue-500/20 focus:ring-4 focus:ring-blue-500/5"
                        }`}
                />
                {error && <div className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400"><ErrorOutlineIcon fontSize="small" /></div>}
            </div>
            {error && <p className="text-red-500 text-[10px] font-bold uppercase ml-1 tracking-tight">{error}</p>}
        </div>
    );
}