// import React from "react";
// import { useSelector } from "react-redux";

// const TaskList = () => {
//   const tasks = useSelector((state) => state.tasks.tasks.tasks);

//   return (
//     <div className="lg:mx-10 xl:mx-20 my-12 mx-2 sm:mx-0">
//       <h2 className="text-black text-center text-4xl mb-6 font-bold">
//         All Tasks
//       </h2>
//       <h2 className="text-black text-center text-lg mb-6 font-medium">
//         Total Tasks : {tasks.length}
//       </h2>
//       <div>
//         <table className="min-w-full font-light">
//           <thead className="bg-gray-700 text-gray-200">
//             <tr>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Title
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Description
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Status
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Priority
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody  className="bg-white divide-y divide-gray-200 text-center space-y-2">
//             {tasks.length > 0 ? (
//               tasks.map((task, index) => (
//                 <tr key={index}>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.title}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.description}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.status}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.priority}
//                   </td>
//                   <td className="flex justify-between space-x-2 px-6 py-4">
//                     <button className="bg-orange-700 px-6 py-2 text-white rounded-md font-medium">
//                       Mark as completed
//                     </button>
//                     <button className="bg-black px-6 py-2 text-white rounded-md font-medium">
//                       Edit
//                     </button>
//                     <button className="bg-red-600 px-6 py-2 text-white rounded-md font-medium">
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No task found</p>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskList;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTask } from "../../Redux/TaskSlice";
// import Swal from "sweetalert2";

// const TaskList = () => {
//   const tasks = useSelector((state) => state.tasks.tasks.tasks);
//   const dispatch = useDispatch();

//   const handleDelete = (id) => {
//     dispatch(deleteTask(id));
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "Task deleted successfully",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   return (
//     <div className="lg:mx-10 xl:mx-20 my-12 mx-2 sm:mx-0">
//       <h2 className="text-black text-center text-4xl mb-6 font-bold">
//         All Tasks
//       </h2>
//       <h2 className="text-black text-center text-lg mb-6 font-medium">
//         Total Tasks : {tasks.length}
//       </h2>
//       <div>
//         <table className="min-w-full font-light">
//           <thead className="bg-gray-700 text-gray-200">
//             <tr>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Title
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Description
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Status
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Priority
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200 text-center space-y-2">
//             {tasks.length > 0 ? (
//               tasks.map((task, index) => (
//                 <tr key={index}>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.title}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.description}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.status}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.priority}
//                   </td>
//                   <td className="flex justify-between space-x-2 px-6 py-4">
//                     <button className="bg-orange-700 px-6 py-2 text-white rounded-md font-medium">
//                       Mark as completed
//                     </button>
//                     <button className="bg-black px-6 py-2 text-white rounded-md font-medium">
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(task.id)}
//                       className="bg-red-600 px-6 py-2 text-white rounded-md font-medium"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No task found</p>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskList;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTask, updateTask } from "../../Redux/TaskSlice";
// import Swal from "sweetalert2";

// const TaskList = () => {
//   const tasks = useSelector((state) => state.tasks.tasks);
//   const dispatch = useDispatch();
//   const completedTask = tasks.filter((task) => task.status === "completed");

//   const handleDelete = (id) => {
//     dispatch(deleteTask(id));
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "Task deleted successfully",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };
//   const handleMarkAsCompleted = (task) => {
//     const updatedTaskStatus = { ...task, status: "completed" };
//     dispatch(updateTask(updatedTaskStatus));
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "Task marked as completed successfully",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   return (
//     <div className="lg:mx-10 xl:mx-20 my-12 mx-2 sm:mx-0">
//       <h2 className="text-black text-center text-4xl mb-6 font-bold">
//         All Tasks
//       </h2>
//       <h2 className="text-black text-center text-lg mb-6 font-medium">
//         Total Tasks : {tasks.length}
//       </h2>
//       <h2 className="text-black text-center text-lg mb-6 font-medium">
//         Completed Tasks : {completedTask.length}
//       </h2>
//       <div>
//         <table className="min-w-full font-light">
//           <thead className="bg-gray-700 text-gray-200">
//             <tr>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Title
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Description
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Status
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Priority
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200 text-center space-y-2">
//             {tasks.length > 0 ? (
//               tasks.map((task, index) => (
//                 <tr key={index}>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.title}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.description}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.status}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.priority}
//                   </td>
//                   <td className="flex justify-between space-x-2 px-6 py-4">
//                     <button
//                       onClick={() => handleMarkAsCompleted(task)}
//                       disabled={task.status === "completed"}
//                       className={`${
//                         task.status === "completed"
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : "bg-orange-700"
//                       }  px-6 py-2 text-white rounded-md font-medium`}
//                     >
//                       Mark as completed
//                     </button>
//                     <button className="bg-black px-6 py-2 text-white rounded-md font-medium">
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(task.id)}
//                       className="bg-red-600 px-6 py-2 text-white rounded-md font-medium"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No task found</p>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskList;

// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { deleteTask, selectPriority, updateTask } from "../../Redux/TaskSlice";
// import Swal from "sweetalert2";

// const TaskList = () => {
//   const tasks = useSelector((state) => state.tasks.tasks);
//   const dispatch = useDispatch();
//   const completedTask = tasks.filter((task) => task.status === "completed");
//   const selectedPriority = useSelector((state) => state.tasks.selectedPriority);

//   const handleDelete = (id) => {
//     dispatch(deleteTask(id));
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "Task deleted successfully",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };
//   const handleMarkAsCompleted = (task) => {
//     const updatedTaskStatus = { ...task, status: "completed" };
//     dispatch(updateTask(updatedTaskStatus));
//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "Task marked as completed successfully",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };
//   const filteredTasks =
//     selectedPriority === "all"
//       ? tasks
//       : tasks.filter((task) => task.priority === selectedPriority);

//   const handlePriorityChange = (e) => {
//     dispatch(selectPriority(e.target.value));
//   };
//   return (
//     <div className="lg:mx-10 xl:mx-20 my-12 mx-2 sm:mx-0">
//       <h2 className="text-black text-center text-4xl mb-6 font-bold">
//         All Tasks
//       </h2>
//       <h2 className="text-black text-center text-lg mb-6 font-medium">
//         Total Tasks : {tasks.length}
//       </h2>
//       <h2 className="text-black text-center text-lg mb-6 font-medium">
//         Completed Tasks : {completedTask.length}
//       </h2>
//       <div className="max-w-xl mx-auto">
//         <select
//           name=""
//           onChange={handlePriorityChange}
//           className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none mb-8 cursor-pointer"
//         >
//           <option value="all">All</option>
//           <option value="low">Low</option>
//           <option value="medium">Medium</option>
//           <option value="high">High</option>
//         </select>
//       </div>

//       <div>
//         <table className="min-w-full font-light">
//           <thead className="bg-gray-700 text-gray-200">
//             <tr>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Title
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Description
//               </th>
//               <th scope="col" className="px-6 py-3">
//                 Status
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Priority
//               </th>
//               <th scope="col" className="text-lg text-center px-6 py-3">
//                 Action
//               </th>
//             </tr>
//           </thead>
//           <tbody className="bg-white divide-y divide-gray-200 text-center space-y-2">
//             {filteredTasks.length > 0 ? (
//               filteredTasks.map((task, index) => (
//                 <tr key={index}>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.title}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.description}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.status}
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
//                     {task.priority}
//                   </td>
//                   <td className="flex justify-between space-x-2 px-6 py-4">
//                     <button
//                       onClick={() => handleMarkAsCompleted(task)}
//                       disabled={task.status === "completed"}
//                       className={`${
//                         task.status === "completed"
//                           ? "bg-gray-400 cursor-not-allowed"
//                           : "bg-orange-700"
//                       }  px-6 py-2 text-white rounded-md font-medium`}
//                     >
//                       Mark as completed
//                     </button>
//                     <button className="bg-black px-6 py-2 text-white rounded-md font-medium">
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(task.id)}
//                       className="bg-red-600 px-6 py-2 text-white rounded-md font-medium"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <p className="text-center text-gray-500">No task found</p>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default TaskList;

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, selectPriority, updateTask } from "../../Redux/TaskSlice";
import Swal from "sweetalert2";
import EditTaskModal from "../../Components/EditTaskModal/EditTaskModal";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const completedTask = tasks.filter((task) => task.status === "completed");
  const selectedPriority = useSelector((state) => state.tasks.selectedPriority);

  const [selectedTask, setSelectedTask] = useState(null); // State for selected task
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Task deleted successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const handleMarkAsCompleted = (task) => {
    const updatedTaskStatus = { ...task, status: "completed" };
    dispatch(updateTask(updatedTaskStatus));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Task marked as completed successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const filteredTasks =
    selectedPriority === "all"
      ? tasks
      : tasks.filter((task) => task.priority === selectedPriority);

  const handlePriorityChange = (e) => {
    dispatch(selectPriority(e.target.value));
  };

  const openEditModal = (task) => {
    setSelectedTask(task);
    setIsModalOpen(true);
  };
  const closeEditModal = () => {
    setSelectedTask(null);
    setIsModalOpen(false);
  };
  return (
    <>
      <div className="lg:mx-10 xl:mx-20 my-12 mx-2 sm:mx-0">
        <h2 className="text-black text-center text-4xl mb-6 font-bold">
          All Tasks
        </h2>
        <h2 className="text-black text-center text-lg mb-6 font-medium">
          Total Tasks : {tasks.length}
        </h2>
        <h2 className="text-black text-center text-lg mb-6 font-medium">
          Completed Tasks : {completedTask.length}
        </h2>
        <div className="max-w-xl mx-auto">
          <select
            name=""
            onChange={handlePriorityChange}
            className="border text-black border-gray-300 rounded-lg w-full p-3 outline-none mb-8 cursor-pointer"
          >
            <option value="all">All</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>

        <div>
          <table className="min-w-full font-light">
            <thead className="bg-gray-700 text-gray-200">
              <tr>
                <th scope="col" className="text-lg text-center px-6 py-3">
                  Title
                </th>
                <th scope="col" className="text-lg text-center px-6 py-3">
                  Description
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
                </th>
                <th scope="col" className="text-lg text-center px-6 py-3">
                  Priority
                </th>
                <th scope="col" className="text-lg text-center px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200 text-center space-y-2">
              {filteredTasks.length > 0 ? (
                filteredTasks.map((task, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                      {task.title}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                      {task.description}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                      {task.status}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-black text-[16px] font-medium">
                      {task.priority}
                    </td>
                    <td className="flex justify-between space-x-2 px-6 py-4">
                      <button
                        onClick={() => handleMarkAsCompleted(task)}
                        disabled={task.status === "completed"}
                        className={`${
                          task.status === "completed"
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-orange-700"
                        }  px-6 py-2 text-white rounded-md font-medium`}
                      >
                        Mark as completed
                      </button>
                      <button
                        onClick={() => openEditModal(task)}
                        className="bg-black px-6 py-2 text-white rounded-md font-medium"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(task.id)}
                        className="bg-red-600 px-6 py-2 text-white rounded-md font-medium"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <p className="text-center text-gray-500">No task found</p>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {isModalOpen && (
        <EditTaskModal task={selectedTask} closeModal={closeEditModal} />
      )}
    </>
  );
};

export default TaskList;
