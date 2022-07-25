import React from "react";
import { useField, Field, ErrorMessage } from "formik";
import { IoCloseCircle,  IoAlertCircleSharp, IoCheckmarkCircle } from "react-icons/io5";

export const Spinner = () => {
  return (
    <div>
      <svg
        role="status"
        className="w-4 h-4  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  );
};

const TextField = ({ label, setFieldValue, loading, valid, error, helperText, ...props }) => {
  const [field, meta] = useField(props);

  
  const clearable = props.clearable || "false";
  return (
    <div className="w-full relative mb-7">
      <div className="relative ">
        <Field
          className={`block px-2.5 pb-2.5 pt-4 w-full text-sm  bg-transparent rounded-lg border  appearance-none dark:text-white dark:border-gray-600  focus:outline-none focus:ring-1  peer ${
            error
              ? "text-red-600 border-red-500 focus:border-red-600 dark:focus:border-red-500"
              : "text-gray-900 border-gray-300 focus:border-blue-600 dark:focus:border-blue-500"
          }`}
          id={field.name}
          {...field}
          {...props}
          autoComplete="off"
          placeholder=" "
        />
        <label
          className={`absolute text-sm  duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-85 peer-focus:-translate-y-4 left-1 select-none ${
            error
              ? "text-red-600 dark:text-red-600 peer-focus:text-red-600 peer-focus:dark:text-red-50"
              : "text-gray-500 dark:text-gray-400 peer-focus:text-blue-600 peer-focus:dark:text-blue-500"
          }`}
          htmlFor={field.name}
        >
          {label}
        </label>
        

        {field.value.length > 0 && clearable === "true" && (
          <button
            className="text-gray-300 hover:text-gray-600 absolute right-0 top-[50%] translate-y-[-50%] mr-2 opacity-0 peer-focus:opacity-100"
            onClick={() => setFieldValue(field.name, "")}
          >
            <IoCloseCircle />
          </button>
        )}
        <div className="absolute right-[1.5rem] top-[50%] translate-y-[-50%]">
          {loading && (
            <div className="fadeIn slide_In transition-all">
              <Spinner />
            </div>
          )}
          {valid !== undefined && (
            <div className="fadeIn slide_In transition-all">
              {valid ? (
                <span>
                  <IoCheckmarkCircle className="text-[1.2rem] text-green-600" />
                </span>
              ) : (
                <span>
                  <IoAlertCircleSharp className="text-[1.2rem] text-red-500" />
                </span>
              )}
            </div>
          )}
        </div>
        
      </div>
      {helperText && (
        <p id={field.name} className="mt-2 text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
      )}

      <ErrorMessage
        component="div"
        name={field.name}
        className="mt-2 text-xs text-red-600 dark:text-red-400"
      />
      {error && (
        <ErrorMessage
          message={error}
          component="div"
          className="mt-2 text-xs text-red-600 dark:text-red-400"
        />
      )}
    </div>
  );
};

export default TextField; 
