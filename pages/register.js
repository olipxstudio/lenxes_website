import React from "react";
import Layout from "../compoments/Layout";
import { useAppContext } from "../context/AppContext";

const register = () => {
  const { registerUser } = useAppContext();
  return (
    <Layout>
      <h1>Register</h1>

      <button
        type="button"
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => registerUser({ name: "John", age: 30 })}
      >
        Register
      </button>
    </Layout>
  );
};

export default register;
