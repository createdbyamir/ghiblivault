
function Footer() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center">
            <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} <span className="font-semibold">GhibliVault</span>. Built for educational and portfolio use.
            </p>
        </div>
    )
}

export default Footer