import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { ISubimitLogin } from '../LoginForm/types';
import { Api } from '../../../services/Api';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<ISubimitLogin>();
  const navigate = useNavigate();

  const submit: SubmitHandler<ISubimitLogin> = async (data) => {
    try {
      const response = await Api.post('/users', data);
      navigate('/');
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
      <Input
        label='Insira seu nome aqui...'
        type='text'
        id='name'
        {...register('name')}
      />
      <StyledButton $buttonSize='default' $buttonStyle='gray' type='submit'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  );
};

export default RegisterForm;
