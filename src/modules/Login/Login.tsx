import { useState } from 'react';
import { useFormik } from 'formik';
import FormBody from '../../components/forms/FormBody';
import FormHeader from '../../components/forms/FormHeader';
import InputField from '../../components/forms/InputField';
import LoginFormIndex from '../../components/forms/login';
import { setWindowClasses } from '../../utils/helpers'
import { Card } from 'react-bootstrap'
import * as Yup from 'yup';
import { authLogin } from '../../utils/authProviders';
import { useDispatch } from 'react-redux';
import { setAuthentication } from '../../store/reducers/auth';
import { toast } from 'react-toastify';
import { jwtDecode } from "jwt-decode";


const schema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
        .min(6, "Must be at least 6 characters")
        .max(30, "Must be 30 characters or less")
        .required("Required")
});

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isAuthLoading, setAuthLoading] = useState(false);
    const [googleAuthenticating, setGoogleAuthenticating] = useState(false);

    const dispatch = useDispatch();

    const { handleSubmit, handleChange, values, errors, resetForm } = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: schema,
        onSubmit: (values) => {
            doLogin(values.email, values.password)
        }
    });

    const doLogin = async (email: string, password: string) => {
        try {
            setAuthLoading(true);
            const response = await authLogin(email, password);
            console.log("🚀 ~ file: Login.tsx:38 ~ doLogin ~ response:", response);
            dispatch(setAuthentication(response as any))
            resetForm();
            toast.success("Login successful");
            setAuthLoading(false);
        } catch (error) {
            console.log("🚀 ~ file: Login.tsx:37 ~ doLogin ~ error:", error);
            setAuthLoading(false)
        }
    }

    const doGoogleLogin = (loggedInData: any) => {

        try {
            setGoogleAuthenticating(true)
            const decoded = jwtDecode(loggedInData?.credential);
            localStorage.setItem('authentication', JSON.stringify({ profile: decoded }))
            dispatch(setAuthentication({ profile: decoded } as any));
            setGoogleAuthenticating(false);
            toast.success('Login is succeeded!');
        } catch (error) {
            console.log("🚀 ~ doGoogleLogin ~ error:", error)
            setGoogleAuthenticating(false)
        }

    }

    const onGoogleLoginError = (error: any) => {
        console.log("🚀 ~ onGoogleLoginError ~ error:", error)
    }
    // setWindowClasses('hold-transition login-page');
    return (
        <div className='login-page'>
            <Card style={{ width: 500, padding: 10, paddingBottom: 20 }}>
                <FormHeader title="Login" />
                <FormBody>
                    <p className='login-box-msg'>Login to dashboard</p>
                    <LoginFormIndex
                        doGoogleLogin={doGoogleLogin}
                        onGoogleLoginError={onGoogleLoginError}
                        onSubmit={handleSubmit}
                        isAuthLoading={isAuthLoading}>
                        <InputField
                            label="Email"
                            name="email"
                            placeholder="Enter email"
                            onChange={handleChange}
                            value={values.email}
                            error={errors?.email ? errors?.email : ""}
                        />
                        <InputField
                            label="Password"
                            name="password"
                            type={showPassword ? 'text' : 'password'}
                            placeholder="Password"
                            onChange={handleChange}
                            value={values.password}
                            autoComplete='password'
                            error={errors?.password ? errors?.password : ""}
                            showPassword={showPassword}
                            setShowPassword={() => setShowPassword(prev => !prev)}
                        />
                    </LoginFormIndex>
                </FormBody>
            </Card>
        </div>
    )
}

export default Login