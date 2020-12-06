import logoreact from '../../images/logoreact.png'

const FormRegisterSuccess = () => {
  return (
    <>
      <div>
        <h1 className="text-center">We have received your request!</h1>
        <img className="logo-success" src={ logoreact } alt='success-image' />
      </div>
    </>
  );
};

export default FormRegisterSuccess;