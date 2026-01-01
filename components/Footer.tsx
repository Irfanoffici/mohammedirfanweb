export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full py-12 px-6 md:px-12 border-t border-gray-100 dark:border-gray-900 mt-20">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-text-secondary">
                <p>© {currentYear} Mohammed Irfan. All rights reserved.</p>
                <div className="flex gap-6">
                    {/* Socials can go here if not in contact section, or repeated */}
                    <span className="opacity-50">Designed with intent</span>
                </div>
            </div>
        </footer>
    );
}
