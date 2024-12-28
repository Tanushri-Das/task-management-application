import React from "react";
import { Formik, Form, Field } from "formik";
import { formValidation } from "./FormValidation";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import Swal from "sweetalert2";
import { addTask } from "../../Redux/TaskSlice";
import { useNavigate } from "react-router-dom";

const initialValues = {
  title: "",
  description: "",
  status: "",
  priority: "",
};

const TaskForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFormSubmit = (values, { resetForm }) => {
    const task = { id: uuidv4(), ...values };
    dispatch(addTask(task));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Task Added successfully",
      showConfirmButton: false,
      timer: 1500,
    });
    resetForm();
    navigate("/task-lists");
  };
  return (
    <div className="lg:mx-10 xl:mx-20 my-12 mx-2 sm:mx-0">
      <h1 className="text-black text-center text-4xl mb-6 font-bold">
        Add Task
      </h1>
      <Formik
        initialValues={initialValues}
        validationSchema={formValidation}
        onSubmit={handleFormSubmit}
      >
        {({ errors, touched }) => (
          <div className="w-full flex-shrink-0 sm:max-w-lg mx-auto">
            <Form className="space-y-4 max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-md border">
              <div>
                <label className="block text-black text-lg font-semibold mb-1">
                  Task Title
                </label>
                <Field
                  type="text"
                  name="title"
                  className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                />
                {errors.title && touched.title && (
                  <span className="text-red-500 mt-1">{errors.title}</span>
                )}
              </div>
              <div>
                <label className="block text-black text-lg font-semibold mb-1">
                  Task Description
                </label>
                <Field
                  as="textarea"
                  name="description"
                  className="h-28 border text-black border-gray-300 rounded-lg w-full p-3 outline-none"
                />
                {errors.description && touched.description && (
                  <span className="text-red-500 mt-1">
                    {errors.description}
                  </span>
                )}
              </div>
              <div>
                <label className="block text-black text-lg font-semibold mb-1">
                  Status
                </label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Field
                      type="radio"
                      name="status"
                      value="incomplete"
                      className="w-4 h-4"
                    />
                    <label htmlFor="incomplete" className="text-black">
                      Incomplete
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Field
                      type="radio"
                      name="status"
                      value="completed"
                      className="w-4 h-4"
                    />
                    <label htmlFor="completed" className="text-black">
                      Completed
                    </label>
                  </div>
                </div>
                {errors.status && touched.status && (
                  <span className="text-red-500 mt-1">{errors.status}</span>
                )}
              </div>
              <div>
                <label className="block text-black text-lg font-semibold mb-1">
                  Priority
                </label>
                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-2">
                    <Field
                      type="radio"
                      name="priority"
                      value="low"
                      id="low"
                      className="w-4 h-4"
                    />
                    <label htmlFor="low" className="text-black">
                      Low
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Field
                      type="radio"
                      name="priority"
                      id="medium"
                      value="medium"
                      className="w-4 h-4"
                    />
                    <label htmlFor="medium" className="text-black">
                      Medium
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Field
                      type="radio"
                      name="priority"
                      value="high"
                      id="high"
                      className="w-4 h-4"
                    />
                    <label htmlFor="high" className="text-black">
                      High
                    </label>
                  </div>
                </div>
                {errors.priority && touched.priority && (
                  <span className="text-red-500 mt-1">{errors.priority}</span>
                )}
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="bg-[#6F4E37] text-lg text-white px-6 py-2 rounded-md font-semibold"
                >
                  Submit
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default TaskForm;
