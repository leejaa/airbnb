import React, { useState, useCallback } from "react";
import {
    Formik,
    Field,
    Form,
    useField,
    FieldAttributes,
    FieldArray
} from "formik";
import * as yup from "yup";
import Link from "next/link";
import Router from 'next/router'
import { useLoginMutation, MeQuery, MeDocument, useRegisterMutation } from "../generated/graphql";

const validationSchema = yup.object({
    email: yup
        .string().email()
        .required(),
    password: yup
        .string()
        .required(),
    password2: yup.string()
        .oneOf([yup.ref('password'), null], '비밃번호를 확인해주세요.'),
    emailSecret: yup
        .string()
});

type Props = {
};

const Join: React.FunctionComponent<Props> = ({
}) => {
    const [emailSecret, setEmailSecret] = useState(false);
    const [emailSecretText, setEmailSecretText] = useState("");
    const [register] = useRegisterMutation();
    const confirmEmailSecret = useCallback( () => {
        console.log('emailSecretText', emailSecretText);
    }, []);
    const onChange = useCallback( ( e ) => {
        setEmailSecretText( e.target.value );
    }, [ emailSecretText ]);
    return (
        <div className="container lg:w-5/12 md:w-1/4 mx-auto my-16 flex flex-col items-center border p-6 border-gray-400">
            <Formik
                validateOnChange={true}
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (data, { setSubmitting }) => {
                    setSubmitting(true);
                    const response = await register({
                        variables: {
                            email: data.email || "",
                            password: data.password || ""
                        },
                    });
                    setEmailSecret(true);
                    setSubmitting(false);
                }}
            >
                {({ values, errors, isSubmitting }) => (
                    <Form className="w-full">
                        <span className="text-red-700 font-medium text-sm">{`${JSON.stringify(errors)}`}</span>
                        <Field
                            placeholder="이메일주소"
                            name="email"
                            type="input"
                            className="mb-3"
                        />
                        <Field
                            placeholder="비밀번호"
                            name="password"
                            type="password"
                            className="mb-3"
                        />
                        <Field
                            placeholder="비밀번호 확인"
                            name="password2"
                            type="password"
                            className="mb-3"
                        />
                        {
                            emailSecret && (
                                <Field
                                    placeholder="인증번호"
                                    name="emailSecret"
                                    type="input"
                                    className="mb-3"
                                />
                            )
                        }
                        {
                            emailSecret ? (
                                <button className="btn bg-red-500 text-white font-medium" onClick={ confirmEmailSecret } onChange={ onChange }>인증번호 확인</button>
                            ) : (
                                 <button className="btn bg-red-500 text-white font-medium" type="submit" disabled={ isSubmitting }>회원가입</button>
                            )
                        }
                    </Form>
                )}
            </Formik>
            <div className="mt-5">
                <span className="mt-2">계정이 없다면?</span>
                <Link href="/join">
                    <a href="" className="text-teal-500 font-medium">회원가입</a>
                </Link>
            </div>
        </div>
    );
}

export default Join;