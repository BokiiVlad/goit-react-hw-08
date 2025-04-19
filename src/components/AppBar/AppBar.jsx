import { useSelector } from "react-redux";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import UserMenu from "../UserMenu/UserMenu";
import AuthNav from "../AuthNav/AuthNav";
import { Toaster } from "react-hot-toast";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Toaster position="top-center" reverseOrder={false} />
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
export default AppBar;
