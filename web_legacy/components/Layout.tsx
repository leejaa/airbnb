import * as React from "react";
import Head from "next/head";
import Link from 'next/link'
import { useMeQuery } from "../generated/graphql";

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = "This is the default title"
}) => {
  const { data, loading } = useMeQuery();
  return (
    <div>
      <Head>
        <title>에어비앤비</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.11.2/css/all.css"></link>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <link rel="stylesheet" href="../static/css/styles.css"></link>
      </Head>
      <body className="text-gray-800">
        <header className="container max-w-full inset-0 flex items-center justify-between px-6 h-20 border-b border-gray-400 fixed bg-white">
          <div className="flex items-center w-1/3">
            <a href="" className="mr-6">
              <img className="w-8" src="data:image/png;base64,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" />
            </a>
            <form method="get" action="" className="w-9/12">
              <input
                className="search-box border px-5 w-full font-medium text-gray-900 placeholder-gray-600 py-3 rounded-sm w-64 shadow-md hover:shadow-lg focus:ouline-none"
                name="city"
                placeholder="도시를 검색해주세요"
              />
            </form>
          </div>
          <ul className="flex items-center text-sm font-medium h-full">
            <li className="nav_link">
              <a href="">
                호스팅을 시작하세요
              </a>
            </li>
            <li className="nav_link">
              <a href="">
                가장 좋아하는
              </a>
            </li>
            {
              data && data.me && (
                <li className="nav_link">
                  <Link href="/profile">
                    <a href="">
                      프로필
                    </a>
                  </Link>
                </li>
              )
            }
            <li className="nav_link">
              {
                data && data.me ? (
                  <Link href="/logout">
                    <a href="">
                      로그아웃
                    </a>
                  </Link>
                ) : (
                    <Link href="/login">
                      <a href="">
                        로그인
                    </a>
                    </Link>
                  )
              }
            </li>
          </ul>
        </header>
      </body>
      {children}
    </div>
  );
}

export default Layout;