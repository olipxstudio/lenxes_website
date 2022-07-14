import React from "react";
import Layout from "../compoments/Layout";
import { useAppContext } from "../context/AppContext";

const register = () => {
    const { registerUser } = useAppContext();
    return (
        <Layout>
            <div className="block h-5 w-5 bg-black">
                <h1>Register</h1>

                <button
                type="button"
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => registerUser({ name: "John", age: 30 })}
                >
                Register
                </button>


                <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                    <div class="shrink-0">
                        {/* <img class="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"> */}
                    </div>
                    <div>
                        <div class="text-xl font-medium text-black">ChitChat</div>
                        <p class="text-slate-500">You have a new message!</p>
                    </div>
                </div>
            </div>
            
        </Layout>
    );
};

export default register;
