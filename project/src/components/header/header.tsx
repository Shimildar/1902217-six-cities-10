import { AppRoute, AuthorizationStatus } from '../../const/enums';
import Logo from '../logo/logo';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';

export default function Header(): JSX.Element {
  const { authorizationStatus } = useAppSelector((state) => state);
  const isAuth = () => authorizationStatus === AuthorizationStatus.Auth;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logoutAction());
    navigate(AppRoute.Login);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo />
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={isAuth() ? '#todo' : AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {
                    isAuth() ?
                      <>
                        <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                        <span className="header__favorite-count">3</span>
                      </> :
                      <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
              {
                isAuth() ?
                  <li className="header__nav-item">
                    <div
                      className="header__nav-link"
                      style={{ cursor: 'pointer' }}
                      onClick={handleSignOut}
                    >
                      <span className="header__signout">Sign out</span>
                    </div>
                  </li> : ''
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

