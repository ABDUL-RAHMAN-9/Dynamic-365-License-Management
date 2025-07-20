import React, { useState } from "react";
import DynamicLogo from "../assets/Dynamic_Logo.png";
import LinkIcon from "@mui/icons-material/Link";

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

export default function LicenseForm({ onSubmitSuccess }) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [checkbox, setCheckbox] = useState(false);
  const [interval, setInterval] = useState("");

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validate = () => {
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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: false });
  };

  const handleActivate = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      const data = {
        ...form,
        interval,
        checkbox,
        submittedAt: new Date().toISOString(),
      };
      onSubmitSuccess(data);
      setForm(initialState);
      setCheckbox(false);
      setInterval("");
    }
  };

  return (
    <div className="w-full bg-white rounded shadow p-4 sm:p-6 md:p-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
        <img src={DynamicLogo} alt="DynamicLogo.png" className="h-20" />
        <div className="flex flex-col sm:flex-row gap-2">
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
        {/* Personal Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* First Name */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
              <label className="text-sm">First Name</label>
              <span className="text-red-500">*</span>
            </div>
            <input
              className={`w-full border rounded px-2 py-1 ${errors.firstName ? "border-red-500" : ""}`}
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
            {errors.firstName && <div className="text-xs text-red-500 mt-1">Required</div>}
          </div>

          {/* Last Name */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
              <label className="text-sm">Last Name</label>
              <span className="text-red-500">*</span>
            </div>
            <input
              className={`w-full border rounded px-2 py-1 ${errors.lastName ? "border-red-500" : ""}`}
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
            {errors.lastName && <div className="text-xs text-red-500 mt-1">Required</div>}
          </div>

          {/* Company Name */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
              <label className="text-sm">Company Name</label>
              <span className="text-red-500">*</span>
            </div>
            <input
              className={`w-full border rounded px-2 py-1 ${errors.companyName ? "border-red-500" : ""}`}
              name="companyName"
              value={form.companyName}
              onChange={handleChange}
            />
            {errors.companyName && <div className="text-xs text-red-500 mt-1">Required</div>}
          </div>

          {/* Email */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
              <label className="text-sm">Email</label>
              <span className="text-red-500">*</span>
            </div>
            <input
              type="email"
              className={`w-full border rounded px-2 py-1 ${errors.email ? "border-red-500" : ""}`}
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <div className="text-xs text-red-500 mt-1">Valid email required</div>}
          </div>

          {/* Website */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
              <label className="text-sm">Website</label>
              <span className="text-red-500">*</span>
            </div>
            <input
              className={`w-full border rounded px-2 py-1 ${errors.website ? "border-red-500" : ""}`}
              name="website"
              value={form.website}
              onChange={handleChange}
            />
            {errors.website && <div className="text-xs text-red-500 mt-1">Required</div>}
          </div>

          {/* Main Phone */}
          <div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1">
              <label className="text-sm">Main Phone</label>
              <span className="text-red-500">*</span>
            </div>
            <input
              className={`w-full border rounded px-2 py-1 ${errors.mainPhone ? "border-red-500" : ""}`}
              name="mainPhone"
              value={form.mainPhone}
              onChange={handleChange}
            />
            {errors.mainPhone && <div className="text-xs text-red-500 mt-1">Required</div>}
          </div>
        </div>

        {/* CRM Details */}
        <h3 className="text-lg font-bold text-black">CRM Details</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* CRM URL */}
          <div>
            <label className="text-sm flex gap-1 items-center">CRM URL <span className="text-red-500">*</span></label>
            <input
              className={`w-full border rounded px-2 py-1 ${errors.crmUrl ? "border-red-500" : ""}`}
              name="crmUrl"
              value={form.crmUrl}
              onChange={handleChange}
            />
            {errors.crmUrl && <div className="text-xs text-red-500 mt-1">Required</div>}
          </div>

          {/* Organization */}
          <div>
            <label className="text-sm flex gap-1 items-center">Organization <span className="text-red-500">*</span></label>
            <input
              className={`w-full border rounded px-2 py-1 ${errors.organization ? "border-red-500" : ""}`}
              name="organization"
              value={form.organization}
              onChange={handleChange}
            />
            {errors.organization && <div className="text-xs text-red-500 mt-1">Required</div>}
          </div>

          {/* CRM Version */}
          <div>
            <label className="text-sm">CRM Version</label>
            <input
              className="w-full border rounded px-2 py-1 bg-gray-100"
              value="9.2"
              readOnly
            />
          </div>

          {/* User License */}
          <div>
            <label className="text-sm">User License</label>
            <input
              className="w-full border rounded px-2 py-1 bg-gray-100"
              value="2"
              readOnly
            />
          </div>
        </div>

        {/* Notification */}
        <h3 className="text-lg font-bold text-blue-900">Notification</h3>
        <p className="text-sm text-gray-700">
          Notification Details<br />
          <i>(Notify User and Inagic about issues regarding licensing.)</i>
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="text-sm">From</label>
            <input
              className={`w-full border rounded px-2 py-1 ${errors.from ? "border-red-500" : ""}`}
              name="from"
              value={form.from}
              onChange={handleChange}
            />
            {errors.from && <div className="text-xs text-red-500 mt-1">Required</div>}
          </div>

          <div>
            <label className="text-sm">To</label>
            <input
              className={`w-full border rounded px-2 py-1 ${errors.to ? "border-red-500" : ""}`}
              name="to"
              value={form.to}
              onChange={handleChange}
            />
            {errors.to && <div className="text-xs text-red-500 mt-1">Required</div>}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={checkbox}
              onChange={(e) => setCheckbox(e.target.checked)}
            />
            Notify To Inagic
          </label>

          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 flex-wrap">
            <span className="text-sm">
              Notification Interval:<span className="text-red-500">*</span>
            </span>
            <label className="flex items-center gap-1 text-sm">
              <input
                type="radio"
                name="interval"
                checked={interval === "day"}
                onChange={() => setInterval("day")}
                className="h-4 w-4"
              />
              Once a day
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input
                type="radio"
                name="interval"
                checked={interval === "week"}
                onChange={() => setInterval("week")}
                className="h-4 w-4"
              />
              Once a week
            </label>
            <label className="flex items-center gap-1 text-sm">
              <input
                type="radio"
                name="interval"
                checked={interval === "month"}
                onChange={() => setInterval("month")}
                className="h-4 w-4"
              />
              Once a month
            </label>
            {errors.interval && (
              <div className="text-xs text-red-500">Required</div>
            )}
          </div>
        </div>

        <div>
          <a href="#" className="text-lg font-bold text-blue-900">
            License Registration using (*.lic) file
          </a>
        </div>
      </form>
    </div>
  );
}
