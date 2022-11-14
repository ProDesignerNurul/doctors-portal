import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } =useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');




    const handleSignUp = (data) => {
        console.log(data);
        setSignUpError('');
        createUser(data.email, data.password)
        .then( result => {
            const user = result.user;
            console.log(user);
            toast('Sign Up Successfully')
            const userInfo = {
                displayName: data.name,
            }
            updateUser(userInfo)
            .then( () => {} )
            .catch( err => console.error(err))
        })
        .catch( err => {
            console.error( err );
            setSignUpError(err.message);
        });
    }






    return (
        <div className='flex justify-center items-center mt-32 lg:mt-60 p-7 '>

            <div className='w-96 p-7 shadow-lg rounded-lg'>
                <h2 className="text-xl font-bold text-center">Sign Up</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text">Name</span> </label>
                        <input type="text" 
                        {...register("name", {
                            required: true,
                        })}
                        className="input input-bordered w-full max-w-xs" />
                        {errors.name && <span className='text-red-400'>Name Includ is required</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text">Email</span> </label>
                        <input type="email" 
                        {...register("email", {
                            required: true,
                        })} 
                        className="input input-bordered w-full max-w-xs" />
                        {errors.email && <span className='text-red-400'>Email Includ is required</span>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">  <span className="label-text">Password</span> </label>
                        <input type="password" 
                        {...register("password", {
                            required: true,
                            minLength: {value: 6, message: 'password must be 6 charecter'}
                        })} 
                        className="input input-bordered w-full max-w-xs" />
                        {errors.password && <span className='text-red-400'>Password Includ is required</span>}

                    </div>

                    
                    <input className='btn w-full mt-4' value="Sign Up" type="submit" />

                    {
                        signUpError && <p className='text-red-400 my-2'> {signUpError} </p>
                    }

                    <p>Already Have an account? <Link className='text-secondary mt-3 mb-4' to="/login">Please Login</Link></p>

                    <div className="divider">OR</div>

                    <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                </form>
            </div>

        </div>
    );
};

export default SignUp;