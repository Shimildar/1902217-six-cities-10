import { FormEvent, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute, CityType } from '../../const/enums';
import { useAppDispatch } from '../../hooks';
import { selectCity } from '../../store/action';
import { loginAction } from '../../store/api-actions';
import { AuthData } from '../../types/auth-data';
import './password-error-message.css';

export default function Login(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const [isPasswordError, setPasswordError] = useState<boolean>(false);

  const re = /^(?=.*[A-Za-z])(?=.*[0-9]).{3,}$/;
  const TIMEOUT_PASSWORD_ERROR = 3000;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onSubmit = (authData: AuthData) => {
    dispatch(loginAction(authData));
  };

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setPasswordError(false);

    if (loginRef.current !== null && passwordRef.current !== null) {
      if (passwordRef.current.value.length >= 2 && re.test(passwordRef.current.value)) {
        onSubmit({
          login: loginRef.current.value,
          password: passwordRef.current.value,
        });
        navigate(AppRoute.Main);
      }

      setPasswordError(true);
      setTimeout(
        () => (setPasswordError(false)),
        TIMEOUT_PASSWORD_ERROR,
      );
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
              </div>

              <button className="login__submit form__submit button" type="submit">Sign in</button>
              {isPasswordError ? <span className='password-error-message'>The input field must contain at least two character</span> : ''}
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <div
                className="locations__item-link"
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  dispatch(selectCity(CityType.Amsterdam));
                  navigate(AppRoute.Main);
                }}
              >
                <span>{CityType.Amsterdam}</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
