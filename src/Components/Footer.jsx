const Footer = () => {
    return (
        <section className="bg-white">
            <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
                <nav className="flex flex-wrap justify-center -mx-5 -my-2">
                    <div className="px-5 py-2">
                        <a href="https://www.facebook.com/profile.php?id=100064290565646" className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Facebook
                        </a>
                    </div>
                    <div href="https://www.instagram.com/theupprojectorg/" className="px-5 py-2">
                        <a className="text-base leading-6 text-gray-500 hover:text-gray-900">
                            Instagram
                        </a>
                    </div>
                </nav>
                <p className="mt-8 text-base leading-6 text-center text-gray-400">
                    © 2023 The Up Project season 6. All rights reserved.
                </p>
            </div>
        </section>
    );
}

export default Footer;