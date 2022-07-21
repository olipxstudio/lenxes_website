import React from "react";
import Layout from "../compoments/Layout";
import { useAppContext } from "../context/AppContext";
import Link from 'next/link'

const register = () => {
    const { registerUser } = useAppContext();
    return (
        <Layout>
            <div className="w-20 h-20 bg-red-800">
                <h1 className="font-millik text-4xl text-blue-600">Let's get your account set</h1>

                <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => registerUser({ name: "John", age: 30 })}
                >
                Register
                </button>
            </div>
        </Layout>
    );
};

export default register;
