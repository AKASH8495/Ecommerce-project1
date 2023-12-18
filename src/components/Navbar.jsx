import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { cart } = useSelector((state) => state);

  return (
    <div>
      <nav className="lg:flex lg:justify-between lg:items-center sm:items-center sm:justify-between sm:flex h-20 lg:max-w-6xl sm:max-w-[500px] lg:mx-auto sm:mx-auto">
        <NavLink to="/">
          <div className="">
            <h1 className="lg:text-2xl font-bold text-white  lg:ml-8 sm:ml-4">Ecommerce</h1>
          </div>
        </NavLink>

        <div className="flex items-center font-medium text-slate-100 lg:mr-5 sm:mr-2 lg:space-x-10 space-x-5">
          <NavLink to="/">
            <p>Home</p>
          </NavLink>
          <NavLink to="/aboutus">
            <p>Aboutus</p>
          </NavLink>
          <NavLink to="/contact">
            <p>Contact</p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="text-2xl" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 rounded-full w-5 h-5 flex justify-center items-center text-white animate-bounce">
                  {cart.length}
                </span>
              )}
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
