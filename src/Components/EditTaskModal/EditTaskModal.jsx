import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Formik, Form, Field } from "formik";
import { formValidation } from "../../Pages/TaskForm/FormValidation";
import { useDispatch } from "react-redux";
import { editTask } from "../../Redux/TaskSlice";

const EditTaskModal = ({ task, closeModal }) => {
  const dispatch = useDispatch();
  const initialValues = {
    title: task.title,
    description: task.description,
    status: task.status,
    priority: task.priority,
  };
  const handleEditForm = (values) => {
    const updatedFields = {
      id: task.id,
      title: values.title,
      description: values.description,
      status: values.status,
      priority: values.priority,
    };
    dispatch(editTask(updatedFields));
    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={formValidation}
      onSubmit={handleEditForm}
    >
      {({ errors, touched }) => (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <Form className="relative bg-white p-8 rounded-lg shadow-lg w-full max-w-xl">
            <button
              onClick={closeModal}
              className="absolute top-4 right-2 text-gray-500 hover:text-gray-700"
            >
              <AiOutlineClose size={26} />
            </button>
            <div className="mt-5">
              <h3 className="font-semibold text-black text-xl mb-5">
                Edit Task {task.title}
              </h3>
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

              <div className="flex justify-center gap-x-4 mt-4">
                <button
                  type="submit"
                  className="bg-[#6F4E37] text-lg text-white px-6 py-2 rounded-md font-semibold"
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={closeModal}
                  className="bg-gray-300 text-gray-700 text-lg px-6 py-2 rounded-md font-semibold"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default EditTaskModal;
