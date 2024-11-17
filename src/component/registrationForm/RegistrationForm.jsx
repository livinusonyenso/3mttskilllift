import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import apiClient from "../../utils/axios";

// Validation Schema
const schema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm password is required"),
  username: yup.string().required("Username is required"),
  role: yup.string().required("Role is required"),
  birthDate: yup.date().required("Date of birth is required"),
  location: yup.string().required("Location is required"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]+$/, "Enter a valid phone number")
    .required("Phone number is required"),
  school: yup.string().required("School is required"),
  gradeLevel: yup.string().required("Grade level is required"),
  areaOfInterest: yup.string().required("Area of interest is required"),
});

const ResponsiveRegistrationForm = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);

    const mappedData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
      confirmPass: data.confirmPassword,
      role: data.role,
      dateOfBirth: data.birthDate,
      location: data.location,
      phoneNo: data.phoneNumber,
      school: data.school,
      gradeLevel: data.gradeLevel,
      areaOfInterest: data.areaOfInterest,
    };

    try {
      console.log(mappedData);
      const response = await apiClient.post("/auth/register", mappedData);
      reset();
      console.log("Registration successful:", response.data);

      toast.success("Registration successful! Redirecting to login...", {
        position: "top-center",
        autoClose: 3000,
      });
      setTimeout(() => navigate("/signin"), 3000);
    } catch (error) {
      console.error(
        "Registration failed:",
        error.response?.data || error.message
      );
      toast.error(
        "Failed to register. Please check your details and try again.",
        {
          position: "top-center",
          autoClose: 5000,
        }
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md mt-10">
      <ToastContainer />
      <h2 className="text-2xl font-semibold text-center text-green-600 mb-6">
        Register
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {[
          { label: "First Name", name: "firstName", type: "text" },
          { label: "Last Name", name: "lastName", type: "text" },
          { label: "Email Address", name: "email", type: "email" },
          { label: "Password", name: "password", type: "password" },
          {
            label: "Confirm Password",
            name: "confirmPassword",
            type: "password",
          },
          { label: "Username", name: "username", type: "text" },
          {
            label: "Role",
            name: "role",
            type: "select",
            options: ["", "Student", "Teacher", "Admin"],
          },
          { label: "Date of Birth", name: "birthDate", type: "date" },
          { label: "Location", name: "location", type: "text" },
          { label: "Phone Number", name: "phoneNumber", type: "text" },
          { label: "School", name: "school", type: "text" },
          {
            label: "Grade",
            name: "gradeLevel",
            type: "select",
            options: ["", "SS1", "SS2", "SS3"],
          },
          {
            label: "Area of Interest",
            name: "areaOfInterest",
            type: "select",
            options: [
              "",
              "Web Development",
              "Data Science",
              "Cybersecurity",
              "Graphic Design",
              "Robotics",
            ],
          },
        ].map(({ label, name, type, options }) => (
          <div key={name}>
            <label className="block text-lg font-medium text-gray-700">
              {label}
            </label>
            {type === "select" ? (
              <select
                {...register(name)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {options.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={type}
                {...register(name)}
                className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            )}
            {errors[name] && (
              <p className="text-red-500 text-sm">{errors[name]?.message}</p>
            )}
          </div>
        ))}
        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-green-500 text-white py-3 px-6 rounded-md ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-green-600"
            } focus:outline-none focus:ring-2 focus:ring-green-500 flex items-center justify-center`}
          >
            {loading && (
              <span className="loader mr-2 w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"></span>
            )}
            {loading ? "Submitting..." : "Register"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResponsiveRegistrationForm;
