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


const register = () => {
  const { registerUser } = useAppContext();
  const [loading, setLoading] = useState(false);

  // input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [username, setUsername] = useState("");

  // input touched states
  const [emailTouched, setEmailTouched] = useState(false);
  const [phoneTouched, setPhoneTouched] = useState(false);
  const [usernameTouched, setUsernameTouched] = useState(false);

  const [showPassword, setShowPassword] = useState(false);

  // fields valid states
  const [emailValid, setEmailValid] = useState(undefined);
  const [phoneValid, setPhoneValid] = useState(undefined);
  const [usernameValid, setUsernameValid] = useState(undefined);

  // input loading states
  const [emailLoading, setEmailLoading] = useState(false);
  const [phoneLoading, setPhoneLoading] = useState(false);
  const [usernameLoading, setUsernameLoading] = useState(false);

  // input error states
  const [emailError, setEmailError] = useState(null);
  const [phoneError, setPhoneError] = useState(null);
  const [usernameError, setUsernameError] = useState(null);

  // run api for email
  async function validateEmail() {
    try {
      setEmailLoading(true);
      const res = await validate_email({ email });
      setEmailLoading(false);
      const { message, success, responseType, sugessted } = res;
      if (success) {
        setEmailValid(true);
        setEmailError(null);
      } else {
        if (responseType === "WRONG_FORMAT") {
          setEmailValid(false);
          setEmailError(`${message} ${sugessted && "Suggested: " + sugessted}`);
        } else {
          setEmailValid(false);
          setEmailError(message);
        }
      }
    } catch (error) {
      setEmailLoading(false);
      setEmailValid(false);
    }
  }

  // if email is touched, run api for email
  useEffect(() => {
    if (email && emailTouched) {
      validateEmail();
    }
    return;
  }, [emailTouched]);

  const validate = Yup.object({
    new_email: Yup.string()
      .email("Email is invalid")
      .required("Email is required"),
    full_name: Yup.string().required("Full name is required"),
    phone: Yup.string()
      .required("This field is Required")
      .min(11, "Must be a 11 digits numbers")
      .matches(
        /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
        "Phone number is not valid"
      ),
    category: Yup.string().required("This feild is required"),
    country: Yup.string().required("This feild is required"),
    state: Yup.string().required("This feild is required"),
    // username: Yup.string().required("Unsername is required"),
    // password: Yup.string()
    //   .min(4, "Must be at least 4 characters")
    //   .required("Password is required"),
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
              Join Lenxes today
            </h1>
          </div>
          <div className="px-7">
            <Formik
              enableReinitialize
              initialValues={{
                full_name: name,
                new_email: email,
                phone: phone,
                category: "",
                country: "",
                state: "",
                // username: username,
                // password: "",
                // referral: referralCode,
              }}
              validationSchema={validate}
              onSubmit={async (values) => {
                // if (!emailValid) {
                //   if (emailLoading) {
                //     return;
                //   }
                //   return setEmailError(
                //     emailError || "Please enter a valid email address"
                //   );
                // }
                // if (!phoneValid) {
                //   if (phoneLoading) {
                //     return;
                //   }
                //   return setPhoneError(
                //     phoneError || "Please enter a valid phone number"
                //   );
                // }
                setLoading(true);
                setTimeout(async () => {
                  setLoading(false);
                  await registerUser({ name: values.full_name, phone: values.phone });
                }, 2000);
              }}
            >
              {({ setFieldValue }) => (
                <Form>
                  <TextField
                    clearable="true"
                    setFieldValue={setFieldValue}
                    name="full_name"
                    label="Full Name"
                    type="text"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />

                  <TextField
                    helperText="We'll use this to verify your account"
                    clearable="true"
                    setFieldValue={setFieldValue}
                    name="new_email"
                    label="Email Address"
                    type="text"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    loading={emailLoading}
                    valid={emailValid}
                    error={emailError}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setEmailTouched(false);
                    }}
                    onBlur={() => setEmailTouched(true)}
                  />

                  <TextField
                    clearable="true"
                    setFieldValue={setFieldValue}
                    name="phone"
                    label="Mobile Number"
                    type="text"
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    loading={phoneLoading}
                    valid={phoneValid}
                    error={phoneError}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      setPhoneTouched(false);
                    }}
                    onBlur={() => setPhoneTouched(true)}
                  />

                  <TextField
                    helperText="Kowing how you intend to use Lenxes, will help us curate the best experience for you."
                    name="category"
                    label="How do you plan to use Lenxes?"
                    as="select"
                  >
                    <option value="">Select</option>
                    <option value="1">Buy</option>
                    <option value="2">Sell</option>
                    <option value="3">Both</option>
                  </TextField>

                  <div className="grid grid-cols-2 gap-x-4">
                    <TextField name="country" label="Country" as="select">
                      <option value="">Select</option>
                      <option value="1">Nigeria</option>
                    </TextField>
                    <TextField name="state" label="State" as="select">
                      <option value="">Select</option>
                      <option value="1">Lagos</option>
                    </TextField>
                  </div>

                  <div className="relative w-full pb-4 grid">
                    <Button variant="primary" loading={loading} type="submit">
                      <span className="font-semibold">Register</span>
                    </Button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        <div className="card ">
          <div className="flex items-center p-4">
            <h2 className="text-center text-slate-600">
              Already have an account?
            </h2>
            <Link href="/login">
              <a className="ml-4 text-primary">Login</a>
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

export default register;
