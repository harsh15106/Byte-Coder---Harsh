import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useState } from "react";

export default function LoginForm() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleLogin(e) {
        e.preventDefault();

        setLoading(true);

        try {
            // TODO:
            // Firebase Authentication

            console.log({
                email,
                password,
                rememberMe,
            });

            navigate("/auth");
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-2xl">

            <h1 className="text-4xl font-black text-white">
                Welcome Back
            </h1>

            <p className="mt-2 text-gray-400">
                Sign in to continue planning your hackathon project.
            </p>

            <form
                onSubmit={handleLogin}
                className="mt-8 space-y-6"
            >

                {/* Email */}

                <div>

                    <label className="mb-2 block text-sm text-gray-300">
                        Email Address
                    </label>

                    <div className="flex items-center rounded-xl border border-white/10 bg-black/30 px-4 focus-within:border-violet-500">

                        <Mail
                            size={18}
                            className="text-gray-400"
                        />

                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="you@example.com"
                            className="w-full bg-transparent p-4 text-white placeholder:text-gray-500 outline-none"
                        />

                    </div>

                </div>

                {/* Password */}

                <div>

                    <label className="mb-2 block text-sm text-gray-300">
                        Password
                    </label>

                    <div className="flex items-center rounded-xl border border-white/10 bg-black/30 px-4 focus-within:border-violet-500">

                        <Lock
                            size={18}
                            className="text-gray-400"
                        />

                        <input
                            type={
                                showPassword
                                    ? "text"
                                    : "password"
                            }
                            required
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            placeholder="••••••••"
                            className="w-full bg-transparent p-4 text-white placeholder:text-gray-500 outline-none"
                        />

                        <button
                            type="button"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                            className="text-gray-400 transition hover:text-white"
                        >
                            {showPassword ? (
                                <EyeOff size={20} />
                            ) : (
                                <Eye size={20} />
                            )}
                        </button>

                    </div>

                </div>

                {/* Remember Me */}

                <div className="flex items-center justify-between">

                    <label className="flex cursor-pointer items-center gap-2 text-sm text-gray-400">

                        <input
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() =>
                                setRememberMe(!rememberMe)
                            }
                            className="accent-violet-500"
                        />

                        Remember Me

                    </label>

                    <Link
                        to="/forgot-password"
                        className="text-sm text-violet-400 hover:text-violet-300"
                    >
                        Forgot Password?
                    </Link>

                </div>

                {/* Login */}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-xl bg-violet-600 py-4 font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {loading ? "Signing In..." : "Login"}
                </button>

            </form>

            {/* Divider */}

            <div className="my-8 flex items-center">

                <div className="h-px flex-1 bg-white/10" />

                <span className="mx-4 text-sm text-gray-500">
                    OR
                </span>

                <div className="h-px flex-1 bg-white/10" />

            </div>

            {/* Google Login */}

            <button
                className="w-full rounded-xl border border-white/10 bg-white/5 py-4 font-medium text-white transition hover:bg-white/10"
            >
                Continue with Google
            </button>

            {/* Signup */}

            <p className="mt-8 text-center text-gray-400">

                Don't have an account?

                <Link
                    to="/signup"
                    className="ml-2 font-medium text-violet-400 hover:text-violet-300"
                >
                    Sign Up
                </Link>

            </p>

        </div>
    );
}