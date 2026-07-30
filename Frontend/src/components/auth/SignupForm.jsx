import { Link, useNavigate } from "react-router-dom";
import {
    User,
    Mail,
    Lock,
    Eye,
    EyeOff,
    Briefcase,
    Building2,
} from "lucide-react";
import { useState } from "react";

export default function SignupForm() {
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        username: "",
        email: "",
        role: "Student",
        organization: "",
        password: "",
        confirmPassword: "",
        agree: false,
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    async function handleSignup(e) {
        e.preventDefault();

        if (form.password !== form.confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        if (!form.agree) {
            alert("Please accept the Terms & Privacy Policy.");
            return;
        }

        setLoading(true);

        try {
            // TODO:
            // Firebase Signup

            console.log(form);

            navigate("/auth");
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            <h1 className="text-4xl font-black text-white">
                Create Account
            </h1>

            <p className="mt-2 text-gray-400">
                Join SprintPilot AI and start building smarter projects.
            </p>

            <form
                onSubmit={handleSignup}
                className="mt-8 space-y-5"
            >

                {/* Full Name */}

                <div>
                    <label className="mb-2 block text-sm text-gray-300">
                        Full Name
                    </label>

                    <div className="flex items-center rounded-xl border border-white/10 bg-black/30 px-4">

                        <User size={18} className="text-gray-400" />

                        <input
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full bg-transparent p-4 text-white outline-none"
                        />

                    </div>
                </div>

                {/* Username */}

                <div>
                    <label className="mb-2 block text-sm text-gray-300">
                        Username
                    </label>

                    <div className="flex items-center rounded-xl border border-white/10 bg-black/30 px-4">

                        <User size={18} className="text-gray-400" />

                        <input
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                            required
                            placeholder="@username"
                            className="w-full bg-transparent p-4 text-white outline-none"
                        />

                    </div>
                </div>

                {/* Email */}

                <div>
                    <label className="mb-2 block text-sm text-gray-300">
                        Email
                    </label>

                    <div className="flex items-center rounded-xl border border-white/10 bg-black/30 px-4">

                        <Mail size={18} className="text-gray-400" />

                        <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                            className="w-full bg-transparent p-4 text-white outline-none"
                        />

                    </div>
                </div>

                {/* Role */}

                <div>
                    <label className="mb-2 block text-sm text-gray-300">
                        Role
                    </label>

                    <div className="flex items-center rounded-xl border border-white/10 bg-black/30 px-4">

                        <Briefcase size={18} className="text-gray-400" />

                        <select
                            name="role"
                            value={form.role}
                            onChange={handleChange}
                            className="w-full bg-transparent p-4 text-white outline-none"
                        >
                            <option className="bg-black">Student</option>
                            <option className="bg-black">Working Professional</option>
                            <option className="bg-black">Startup Founder</option>
                            <option className="bg-black">Faculty / Mentor</option>
                            <option className="bg-black">Other</option>
                        </select>

                    </div>
                </div>

                {/* Organization */}

                <div>
                    <label className="mb-2 block text-sm text-gray-300">
                        Organization / College (Optional)
                    </label>

                    <div className="flex items-center rounded-xl border border-white/10 bg-black/30 px-4">

                        <Building2 size={18} className="text-gray-400" />

                        <input
                            name="organization"
                            value={form.organization}
                            onChange={handleChange}
                            placeholder="VIT Bhopal"
                            className="w-full bg-transparent p-4 text-white outline-none"
                        />

                    </div>
                </div>

                {/* Password */}

                <div>
                    <label className="mb-2 block text-sm text-gray-300">
                        Password
                    </label>

                    <div className="flex items-center rounded-xl border border-white/10 bg-black/30 px-4">

                        <Lock size={18} className="text-gray-400" />

                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                            required
                            placeholder="••••••••"
                            className="w-full bg-transparent p-4 text-white outline-none"
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                        </button>

                    </div>
                </div>

                {/* Confirm Password */}

                <div>
                    <label className="mb-2 block text-sm text-gray-300">
                        Confirm Password
                    </label>

                    <div className="flex items-center rounded-xl border border-white/10 bg-black/30 px-4">

                        <Lock size={18} className="text-gray-400" />

                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            required
                            placeholder="••••••••"
                            className="w-full bg-transparent p-4 text-white outline-none"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowConfirmPassword(!showConfirmPassword)
                            }
                        >
                            {showConfirmPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>

                    </div>
                </div>

                {/* Terms */}

                <label className="flex items-center gap-3 text-sm text-gray-300">

                    <input
                        type="checkbox"
                        name="agree"
                        checked={form.agree}
                        onChange={handleChange}
                        className="accent-violet-600"
                    />

                    I agree to the Terms & Privacy Policy

                </label>

                {/* Submit */}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-500 disabled:opacity-60"
                >
                    {loading ? "Creating Account..." : "Create Account"}
                </button>

            </form>

            <p className="mt-8 text-center text-gray-400">

                Already have an account?

                <Link
                    to="/login"
                    className="ml-2 font-medium text-violet-400 hover:text-violet-300"
                >
                    Login
                </Link>

            </p>

        </div>
    );
}