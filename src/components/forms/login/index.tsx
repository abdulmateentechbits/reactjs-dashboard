import React, { FC, FormEvent } from "react";
import { Button, Form } from "react-bootstrap";
import Divider from "../../Divider";

import { GoogleLogin } from "@react-oauth/google";

type FormProps = {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void;
    children: React.ReactNode;
    isAuthLoading?: boolean
    doGoogleLogin?: any
    onGoogleLoginError?:any
};

const LoginFormIndex: FC<FormProps> = ({onGoogleLoginError, onSubmit, children, isAuthLoading, doGoogleLogin }) => {
    return (
        <Form onSubmit={onSubmit}>
            {children}
            <Button variant="danger" style={{ paddingRight: 30, paddingLeft: 30 }} type="submit">
                {isAuthLoading ? "Logging.." : "Login"}
            </Button>
            <Divider message="Login With" />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                columnGap: 16,
                marginTop: 20
            }}>
                <GoogleLogin
                    onSuccess={doGoogleLogin}
                    onError={onGoogleLoginError}
                />


            </div>
        </Form>
    );
};

export default LoginFormIndex;