const Header = () => {
    return (
        <header className="bg-blue-500 py-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">
                    Food Donation Platform
                </div>
                <nav className="flex space-x-4">
                    <a href="#" className="text-white hover:text-gray-200">
                        Restaurants
                    </a>
                    <a href="#" className="text-white hover:text-gray-200">
                        NGOs
                    </a>
                    <a href="#" className="text-white hover:text-gray-200">
                        About
                    </a>
                    <a href="#" className="text-white hover:text-gray-200">
                        Contact
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
