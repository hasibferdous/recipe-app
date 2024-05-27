import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/firebase.config";
import { Link } from "react-router-dom";
import { CgLogOut } from "react-icons/cg";

export default function DashboardHome() {
  const [user] = useAuthState(auth);
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <div>
      <div className="card w-96 bg-base-200 shadow-xl rounded-4xl mt-24 mr-36">
        <h1 className="font-bold mt-4 ml-5 text-4xl">Profile</h1>
        <figure className="px-5 pt-5 rounded-3xl">
          <img
            src={user?.photoURL}
            alt="user-picture"
            className="rounded-3xl w-60 h-60"
          />
        </figure>
        <div className="divider"></div>
        <div className="card-body">
          <h1 className="card-title font-bold text-2xl">Name: {user?.displayName}</h1>
          <h2 className="font-bold text-xl">Email: {user?.email}</h2>
          <div className="mt-2">
            <Link
              className="gap-1 items-center"
              onClick={handleLogout}
            > <CgLogOut></CgLogOut>
              
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
