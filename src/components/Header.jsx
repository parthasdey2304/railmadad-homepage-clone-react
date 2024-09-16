import logo_image from "../assets/image.png"

function Header() {
  return (
    <header className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src={ logo_image } alt="Logo" className="h-10" />
          <h1 className="text-2xl font-bold text-purple-800">RailMadad</h1>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-orange-500 font-bold">139</span>
          <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded">Log In</button>
          <button className="bg-purple-800 text-white px-4 py-2 rounded">Sign Up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;