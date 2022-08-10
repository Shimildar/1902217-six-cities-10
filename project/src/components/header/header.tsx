import { AppRoute, AuthorizationStatus } from '../../const/enums';
import Logo from '../logo/logo';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { getUserData } from '../../services/user-data';
import { memo } from 'react';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

type HeaderProps = {
  count: number
}

function Header({ count }: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const userData = getUserData();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const isAuth = () => authorizationStatus === AuthorizationStatus.Auth;

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
                <Link className="header__nav-link header__nav-link--profile" to={isAuth() ? AppRoute.Favorites : AppRoute.Login}>
                  <div className="header__avatar-wrapper user__avatar-wrapper"
                    style={{ backgroundImage: `url(${userData.avatarUrl})` }}
                  >
                  </div>
                  {
                    isAuth() ?
                      <>
                        <span className="header__user-name user__name">{userData.name}</span>
                        <span className="header__favorite-count">{count !== undefined ? count : ''}</span>
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
                      onClick={() => dispatch(logoutAction())}
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

export default memo(Header);
