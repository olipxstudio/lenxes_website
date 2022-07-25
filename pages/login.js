import React, { useState, useEffect } from "react";
import Button from "../components/share/Button";
import { useAppContext } from "../context/AppContext";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import TextField from "../components/share/TextField";
import { IoAlertCircleSharp, IoCheckmarkCircle } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";


const login = () => {
  const { registerUser } = useAppContext();
  const [loading, setLoading] = useState(false);

  const validate = Yup.object({
    email: Yup.string().required("Field is required"),
    password: Yup.string().required("This feild is required"),
  });

  return (
    <div className="bg-slate-100 grid place-content-center items-center py-[4rem] relative">
      <div className="w-[450px] max-w-full ">
        <div className="card">
          <div className="p-4 flex flex-col items-center mb-7">
            <div className="relative w-[120px] h-[45px]">
              <Image
                src="/lenxes_logo.svg"
                alt="Lenxes"
                layout="fill"
                objectFit="contain"
              />
            </div>

            <h1 className="font-extrabold text-black text-[1.2rem] lg:text-[2rem]">
              Signin to Lenxes 
            </h1>
          </div>

          <div className="grid pb-7 gap-3 my-4 px-5 lg:px-[3rem]">
            <Button variant="outline" loading={loading} type="button">
              <FcGoogle className="text-[1.1rem] mr-3" />
              <span className="text-sub">Login with Google</span>
            </Button>
            <Button variant="outline" loading={loading} type="button">
              <BsFacebook className="text-[1.1rem] mr-3 text-blue-700" />
              <span className="text-sub">Login with Facebook</span>
            </Button>
          </div>

          <div className="grid place-content-center relative my-4">
            <span className="relative z-[2] bg-white rounded-full w-8 h-8 text-sm text-slate-500 grid place-content-center">
              OR
            </span>
            <hr className="border-gray-200 absolute left-0 top-[50%] translate-y-[-50%] w-full" />
          </div>

          <div className="px-7">
            <Formik
              enableReinitialize
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validate}
              onSubmit={async (values) => {
                setLoading(true);
                setTimeout(async () => {
                  setLoading(false);
                  await registerUser({
                    name: values.full_name,
                    phone: values.phone,
                  });
                }, 2000);
              }}
            >
              {({ setFieldValue }) => (
                <Form>
                  <TextField
                    clearable="true"
                    setFieldValue={setFieldValue}
                    name="email"
                    label="Email or Username"
                    type="text"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                  />
                  <TextField
                    clearable="true"
                    setFieldValue={setFieldValue}
                    name="password"
                    label="Password"
                    type="password"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                  />

                  <div className="relative w-full pb-4 grid">
                    <Button variant="primary" loading={loading} type="submit">
                      <span className="font-semibold">Login</span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
            <hr className="border-slate-200 my-4" />
            <div className="block justify-center pb-8 text-center relative">
              <Link href="/forgot-password">
                <a className="border py-2 border-slate-300 block font-bold text-slate-700 rounded-full w-full">Forgot Password?</a>
            </Link>
            </div>
          </div>
        </div>
        <div className="card ">
          <div className="flex items-center p-4">
            <h2 className="text-center text-slate-600">
              Don't have an account?
            </h2>
            <Link href="/register">
              <a className="ml-4 text-primary">Register</a>
            </Link>
          </div>
        </div>
        <div className="p-4 text-center">
          <p>Get the App</p>
          <div className="flex items-center space-x-7 justify-center py-2">
            <a href="">
              <img
                src="./play-download.png"
                alt="Play store"
                className="w-[150px] h-auto"
              />
            </a>
            <a href="">
              <img
                src="./app-store.png"
                alt="App store"
                className="w-[150px] h-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
