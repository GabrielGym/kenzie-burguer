import { useForm, SubmitHandler } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ISubimitLogin } from './types';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { Api } from '../../../services/Api';

const LoginForm = () => {
  const { register, handleSubmit } = useForm<ISubimitLogin>();
  const navigate = useNavigate();

  const submit: SubmitHandler<ISubimitLogin> = async (data) => {
    try {
      const response = await Api.post('/login', data);
      const user = JSON.stringify(response.data.user);
      window.localStorage.setItem('@USER', user);
      window.localStorage.setItem('@TOKEN', response.data.accessToken);
      navigate('/shop');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input
        label='Insira seu email aqui...'
        type='email'
        id='email'
        {...register('email')}
      />
      <Input
        label='Insira sua senha aqui...'
        type='password'
        id='password'
        {...register('password')}
      />
      <StyledButton $buttonSize='default' $buttonStyle='green' type='submit'>
        Entrar
      </StyledButton>
    </StyledForm>
  );
};

export default LoginForm;
