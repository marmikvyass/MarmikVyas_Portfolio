import React from 'react'

function Footer() {
    return (
        <>
            <footer className="w-full bg-black text-white sm:pt-55 pt-15">
                <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 bottom-0 ">
                    <p className="text-sm text-center font-semibold sm:text-left">
                        © {new Date().getFullYear()} Marmik Vyas. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <a
                            href="https://github.com/marmikvyass"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white hover:underline transition font-semibold"
                        >
                            GitHub
                        </a>
                        <a
                            href="https://www.linkedin.com/in/marmik-vyas-9b2b72220/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white hover:underline transition font-semibold"
                        >
                            LinkedIn
                        </a>
                        <a
                            href="mailto:youremail@example.com"
                            className="hover:text-white hover:underline transition font-semibold"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer
