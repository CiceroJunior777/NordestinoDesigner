import Logo from "./Logo";

function Navbar() {
    return (
        <div className="navbar">
            <div className="logo-name">
                <div>
                    <Logo />
                </div>
                <div>
                    <h1 className="h1"> Nordestino.psd </h1>
                </div>
            </div>

            <div>
                <a href="https://www.instagram.com/nordestinopsd?igsh=MTh5djB0eHF5NnhoNQ%3D%3D&utm_source=qr"> instagram</a>
            </div>
        </div>
    );
}

export default Navbar;