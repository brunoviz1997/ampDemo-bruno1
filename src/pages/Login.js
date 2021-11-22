import {useState} from 'react';
import LoginForm from '../Components/LoginForm';
import SignUpForm from '../Components/SignUpForm';

function Login() {

   const [visibleForm, setVisibleForm] = useState(0);

   return (
      <>
         {
            visibleForm === 0 && 
            <LoginForm setVisibleForm={setVisibleForm} />
         }
         {
         visibleForm === 1 &&
         <SignUpForm setVisibleForm={setVisibleForm} />}
      </>
   );
}


export default Login;