import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const Login = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();

    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate( from, { replace: true})
            })
            .catch(err => {
                console.error(err.message)
                setLoginError(err.message)
            });
    }

    return (

        <div className='flex justify-center items-center mt-32 lg:mt-60 p-7 '>

            {/* <div className='flex justify-center items-center mt-32 lg:mt-60 p-7 shadow-lg w-96 mx-auto rounded-lg'>
                <div>
                    <h2 className="text-4xl text-center mb-9 font-semibold">Login</h2>
                    <form>
                        <h3 className="text-2xl mb-1">Email</h3>
                        <input className='mb-3 w-full p-3 rounded-lg' type="email" name="email" placeholder='Your Email' id="" />

                        <h3 className="text-2xl mb-1">Password</h3>
                        <input className='w-full p-3 rounded-lg mb-5' type="password" name="password" placeholder='Your Pasword' id="" />


                        <button className='btn w-full mb-3' type="submit">Login</button>
                        <p className='mb-4'>New to Doctors Portal? <Link to="/">Create New Account</Link></p>

                        <div className='flex items-center justify-center'>
                            <hr className='w-32 inline-block' /> <h2 className="text-lg font-semibold mx-2"> OR</h2> <hr className='w-32 inline-block' />
                        </div>

                    </form>
                </div>
            </div> */}


            <div className='w-96 p-7 shadow-lg rounded-lg'>
                <h2 className="text-xl font-bold text-center">Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>


                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text">Email</span> </label>
                        <input type="email"
                            {...register("email", {
                                required: 'Email Is Required'
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.email && <p className='text-red-400' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text">Password</span> </label>
                        <input type="password"
                            {...register("password", {
                                required: 'Password Is Required',
                                minLength: { value: 6, message: 'Password Must Be 6 Charecter' }
                            })}
                            className="input input-bordered w-full max-w-xs" />

                        {errors.password && <p className='text-red-400' role="alert">{errors.password?.message}</p>}
                    </div>

                    {
                        loginError && <p className='text-red-400'> {loginError} </p>
                    }

                    <label className="label">  <span className="label-text">Forgot Password?</span> </label>
                    <input className='btn w-full' value="login" type="submit" />



                    <p>New to Doctors Portal? <Link className='text-secondary mt-3 mb-4' to="/signup">Create new account</Link></p>

                    <div className="divider">OR</div>

                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>

        </div>
    );
};

export default Login;