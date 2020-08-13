import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSetToken } from '../../context';
import { cssValidOrInvalid, requestLogin, validateEmail } from '../../utils';

function Login() {
  const { register, handleSubmit, errors } = useForm();
  const setToken = useSetToken();
  const onSubmit = (data) => {
    requestLogin.post(data).then((response) => {
      console.log(response);
      if (response.status === 200) {
        setToken(response.data.token);
      }
    });
  };

  useEffect(() => {
    console.log('render');
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          {/* <label htmlFor="inputEmail">E-mail:</label> */}
          <input
            name="email"
            type="text"
            className={'form-control' + cssValidOrInvalid(errors, 'email')}
            id="inputEmail"
            aria-describedby="emailHelp"
            placeholder="E-mail"
            ref={register({
              required: true,
              maxLength: 100,
              validate: { emailTest: (value) => validateEmail(value) },
            })}
          />
          {/* <SMALL ID="PASSWORDHELP" CLASSNAME="FORM-TEXT TEXT-DANGER">
            {ERRORS.EMAIL?.TYPE === 'REQUIRED' && 'WRITE E-MAIL'}
            {ERRORS.EMAIL?.TYPE === 'EMAILTEST' && 'WRITE E-MAIL VALID'}
          </SMALL> */}
        </div>
        <div className="form-group">
          {/* <label htmlFor="inputPassword">Senha:</label> */}
          <input
            name="password"
            type="password"
            placeholder="Senha"
            className={'form-control' + cssValidOrInvalid(errors, 'password')}
            id="inputPassword"
            aria-describedby="passwordHelp"
            ref={register({ required: true, minLength: 5, maxLength: 30 })}
          />
          {/* <small id="passwordHelp" className="form-text text-danger">
            {errors.password?.type === 'required' && 'Write Password'}
            {errors.password?.type === 'minLength' &&
              'Write Password with 5 words'}
          </small> */}
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Enter
        </button>
      </form>
    </div>
  );
}

export default Login;
