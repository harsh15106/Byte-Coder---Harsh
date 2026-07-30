import SoftAurora from "../effects/SoftAurora";

export default function AuthLayout({ children }) {
    return (
        <div className="relative min-h-screen overflow-hidden bg-black">

            {/* Aurora */}

            <div className="absolute inset-0">
                <SoftAurora
                    speed={0.5}
                    scale={1.5}
                    color1="#ffffff"
                    color2="#9333ea"
                    brightness={1}
                />
            </div>

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 flex min-h-screen items-center justify-center px-6">

                {children}

            </div>

        </div>
    );
}