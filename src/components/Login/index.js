import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Alert } from 'uiw';

import { useSetToken } from '../../context';

import { cssValidOrInvalid, requestLogin, validateEmail } from '../../utils';
import Button from '../Button';

import user from './user_0001.webp';

function Login() {
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const setToken = useSetToken();
  const handleOpen = () => setOpen(!open);
  const onSubmit = (data) => {
    setDisabled((state) => !state);
    requestLogin
      .post(data)
      .then((response) => {
        if (response && response.status === 200) {
          setToken(response.data.token);
          history.push('/');
        }
      })
      .catch((error) => {
        handleOpen();
      })
      .finally(() => {
        setDisabled((state) => !state);
      });
  };
  return (
    <div>
      <Alert
        isOpen={open}
        confirmText="Sair"
        onClosed={handleOpen}
        content="Usuário inválido"
      />
      <div>
        <img src={user} className="img-fluid mb-2 mx-auto d-block" alt="" />
      </div>
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
            autoComplete="false"
            ref={register({ required: true, minLength: 5, maxLength: 30 })}
          />
          {/* <small id="passwordHelp" className="form-text text-danger">
            {errors.password?.type === 'required' && 'Write Password'}
            {errors.password?.type === 'minLength' &&
              'Write Password with 5 words'}
          </small> */}
        </div>
        <Button disabled={disabled} title={'Entrar'} />
      </form>
    </div>
  );
}

export default Login;
