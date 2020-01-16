import React, { useState } from "react";
import {
    Formik,
    Field,
    Form,
} from "formik";
import * as yup from "yup";
import Link from "next/link";
import Router from 'next/router'
import { useLoginMutation, MeQuery, MeDocument } from "../generated/graphql";

const validationSchema = yup.object({
    email: yup
        .string().email()
        .required(),
    password: yup
        .string()
        .required()
});

type Props = {
};

const Login: React.FunctionComponent<Props> = ({
}) => {
    const [login] = useLoginMutation();
    return (
        <div className="container lg:w-5/12 md:w-1/4 mx-auto my-16 flex flex-col items-center border p-6 border-gray-400">
            <div className="flex flex-col w-full">
                <a href="" className="btn border-2  text-gray-700 mb-2 border-gray-700 font-medium">
                    <i className="fab fa-github-alt mr-2 fa-lg"></i> 깃허브 로그인
                </a>
                <a href="{% url 'users:kakao-login' %}" className="btn border text-yellow-800 mb-2 border-yellow-400 bg-yellow-400 font-medium">
                    <i className="fas fa-comment mr-2 fa-lg"></i> 카카오 로그인
                </a>
            </div>
            <Formik
                validateOnChange={true}
                initialValues={{
                    email: "",
                    password: "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (data, { setSubmitting }) => {
                    setSubmitting(true);
                    const response = await login({
                        variables: {
                            email: data.email || "",
                            password: data.password || ""
                        },
                        update: (store, { data }) => {
                            if ( !data ) {
                                return null;
                            }
                            store.writeQuery<MeQuery>({
                                query: MeDocument,
                                data: {
                                    me: data.login.user as any
                                }
                            });
                        }
                    });
                    window.location.href = '/';
                    setSubmitting(false);
                }}
            >
                {({ values, errors, isSubmitting }) => (
                    <Form className="w-full">
                        <span className="text-red-700 font-medium text-sm">{ `${JSON.stringify(errors)}` }</span>
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
                        <button className="btn bg-red-500 text-white font-medium" type="submit">버튼</button>
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

export default Login;