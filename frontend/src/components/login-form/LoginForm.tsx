// import { useContext } from "react";
// import LoginContext from "../../contexts/LoginContext";


const LoginForm = () => {
//   const { user, onChangeUser, toggle } = useContext(LoginContext);
  

//   const formBtn = () => {
//     if (user.length >= 2) {
//       toggle();
//     }
//   };

  return (
    <>
      <section className="w-25 mx-auto">
        <h1>Sign In</h1>
        <form className="d-flex flex-column p-3 gap-2" action="">
          <label className="text-start" htmlFor="userName">
            User Name:
          </label>
          <input type="text" id="userName" autoComplete="off" required />
          {/* <label className="text-start" htmlFor="pwd">
            Password:
          </label>
          <input type="password" id="pwd" onChange={onChangePwd} value={pwd} required /> */}
          <input onClick={() => {console.log('Clicked')}} className="btn btn-primary" type="button" value="Sign In" />
        </form>
      </section>
    </>
  );
};

export default LoginForm ;
