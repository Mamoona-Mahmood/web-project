import { useRef } from "react";
import styles from "./Login.module.css";
import { useEffect } from "react";
//import loginImage from '@/public/image10.png';



const Login = () => {
  //const router = useRouter();
  //const { updateUser } = useUser();

  // useEffect(() => {
  //   const checkSession = async () => {
  //     const session = await getSession();
  //     if (session) {
  //       // If the user is already logged in, redirect to another page
  //       router.push('/'); // Redirect to home page 
  //       //window.location.href('/')
  //     }
  //   };

  //   checkSession();
  // }, []);

  const emailRef = useRef()
  const passwordRef = useRef()
  const nameRef = useRef()

  const handler = async(e) => {
    e.preventDefault()
  
    const email = emailRef.current.value
    const password =  passwordRef.current.value
    const name = nameRef.current.value

    // const result = await signIn("credentials",{
    //   redirect: false,
    //   email: email,
    //   password: password,
    // })
    // console.log("SignIn result:", result);

    // updateUser(name);
  
    // if (result.error) {
    //   alert(result.error);
    // } else {
    //   alert("Login successful!");
    //   router.push('/'); 
    // }
  
  }
  return (
    <div className={styles.container}>
      {/* Left Section: Login Form */}
      <div className={styles.leftSection}>
        <div className={styles.loginContainer}>
          <h1 className={styles.title}>Welcome Back</h1>
          <input
            type="fullname"
            placeholder="Enter your Full Name"
            className={styles.loginInput}
            ref={nameRef}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className={styles.loginInput}
            ref={emailRef}
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.loginInput}
            ref={passwordRef}
          />
          <div className={styles.optionsContainer}>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <a href="#" className={styles.forgotPassword}>
              Forgot Password?
            </a>
          </div>
          <button onClick={handler} className={styles.loginBtn}>
            Log in
          </button>
          <div className={styles.createAccount}>
            Not a member yet? <a href="/SignUp" className={styles.link}>Create an account</a>
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className={styles.rightSection}>
        <Image src={loginImage} alt="Login Illustration" />
      </div>
    </div>
  );
};

export default Login;
