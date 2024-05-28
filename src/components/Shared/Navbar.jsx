import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";

export default function Navbar() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };
  return (
    <div className="navbar bg-slate-200 sticky top-0 px-16 z-10 font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className=" lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/"}>All Recepies</Link>
            </li>
            <li>
              <Link to={"/about"}>About Us</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact Us</Link>
            </li>
          </ul>
        </div>
        <Link to={"/"} className=" text-xl">
          RecipeCart
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex items-center gap-6 px-1">
          <li>
            <Link
              to={"/"}
              className="hover:bg-amber-200 p-3 bg-slate-200 rounded-xl"
            >
              All Recepies
            </Link>
          </li>
          <li>
            <Link
              to={"/about"}
              className="hover:bg-amber-200 p-3 bg-slate-200 rounded-xl"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              to={"/contact"}
              className="hover:bg-amber-200 p-3 bg-slate-200 rounded-xl"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      {!user?.email ? (
        <div className="navbar-end flex gap-4">
          <Link to={"/login"} className="btn">
            Login
          </Link>
          <Link to={"/register"} className="btn">
            Registration
          </Link>
        </div>
      ) : (
        <div className="navbar-end flex gap-4">
          <>
            <div className="dropdown dropdown-end flex flex-row gap-2">
              <div>
                <Link to={"/dashboard"} className="btn">
                  Dashboard
                </Link>
              </div>
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Link to={"/dashboard"}>
                    <img
                      alt="#"
                      src={
                        user?.photoURL != null
                          ? user?.photoURL
                          : `https://ui-avatars.com/api/?name=${user?.displayName}&color=7F9CF5&background=EBF4FF`
                      }
                    />
                  </Link>
                </div>
              </label>
            </div>
          </>
          <Link
            className="gap-1 items-center text-center"
            onClick={handleLogout}
          >
            {" "}
            <CgLogOut></CgLogOut>Logout
          </Link>
        </div>
      )}
    </div>
  );
}
