import React from "react";
import Layout from "../components/Layout";

export default () => {

    return (
        <Layout>
            <div className="w-full max-w-sm overflow-hidden rounded border bg-white shadow">
                <div className="relative">
                    <div className="h-48 bg-cover bg-no-repeat bg-center"
                        style={{ backgroundImage: 'url(https://picsum.photos/245/245)' }}>
                    </div>
                    <div style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
                        className="absolute bottom-0 mb-2 ml-3 px-2 py-1 rounded text-sm text-white">$ 16.80</div>
                    <div style={{ bottom: "-20px" }} className="absolute right-0 w-10 mr-2">
                        <a href="#">
                            <img className="rounded-full border-2 border-white" src="https://randomuser.me/api/portraits/women/17.jpg" />
                        </a>
                    </div>
                </div>
                <div className="p-3">
                    <h3 className="mr-10 text-sm truncate-2nd">
                        <a className="hover:text-blue-500" href="/huawwei-p20-pro-complete-set-with-box-a.7186128376">Some Title Here</a>
                    </h3>
                    <div className="flex items-start justify-between">
                        <p className="text-xs text-gray-500">Quezon City, Metro Manila</p>
                        <button className="outline text-xs text-gray-500 hover:text-blue-500" title="Bookmark this ad"><i className="far fa-bookmark"></i></button>
                    </div>
                    <p className="text-xs text-gray-500"><a href="#" className="hover:underline hover:text-blue-500">username2019</a> • 2 days ago</p>
                </div>
            </div>
        </Layout>
    );
};