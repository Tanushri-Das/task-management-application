// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   tasks: [],
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//       localStorage.setItem("tasks", JSON.stringify(state.tasks));
//     },
//   },
// });
// export const { addTask } = taskSlice.actions;
// export default taskSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const persistedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// const initialState = {
//   tasks: persistedTasks,
//   totalTasks: persistedTasks.length,
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//       localStorage.setItem("tasks", JSON.stringify(state.tasks));
//       state.totalTasks = state.totalTasks + 1;
//     },
//   },
// });
// export const { addTask } = taskSlice.actions;
// export default taskSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const persistedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// const initialState = {
//   tasks: persistedTasks,
//   totalTasks: persistedTasks.length,
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//       localStorage.setItem("tasks", JSON.stringify(state.tasks));
//       state.totalTasks = state.totalTasks + 1;
//     },
//     deleteTask: (state, action) => {
//       const updatedTask = state.tasks.filter(
//         (task) => task.id !== action.payload
//       );
//       localStorage.setItem("tasks", JSON.stringify(updatedTask));
//       state.tasks = updatedTask;
//     },
//   },
// });
// export const { addTask, deleteTask } = taskSlice.actions;
// export default taskSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const persistedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// const initialState = {
//   tasks: persistedTasks,
//   totalTasks: persistedTasks.length,
//   completedTasks: 0,
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//       localStorage.setItem("tasks", JSON.stringify(state.tasks));
//       state.totalTasks = state.totalTasks + 1;
//       if (action.payload.status === "completed") {
//         state.completedTasks = state.completedTasks + 1;
//       }
//     },
//     deleteTask: (state, action) => {
//       const updatedTask = state.tasks.filter(
//         (task) => task.id !== action.payload
//       );
//       localStorage.setItem("tasks", JSON.stringify(updatedTask));
//       state.tasks = updatedTask;
//     },
//     updateTask: (state, action) => {
//       const updatedTask = state.tasks.map((task) =>
//         task.id === action.payload.id ? { ...task, status: "completed" } : task
//       );
//       state.tasks = updatedTask;
//       localStorage.setItem("tasks", JSON.stringify(updatedTask));
//       // Update completed tasks count
//       state.completedTasks = updatedTask.filter(
//         (task) => task.status === "completed"
//       ).length;
//     },
//   },
// });
// export const { addTask, deleteTask, updateTask } = taskSlice.actions;
// export default taskSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const persistedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

// const initialState = {
//   tasks: persistedTasks,
//   totalTasks: persistedTasks.length,
//   completedTasks: 0,
//   selectedPriority: "all",
// };

// const taskSlice = createSlice({
//   name: "tasks",
//   initialState,
//   reducers: {
//     addTask: (state, action) => {
//       state.tasks.push(action.payload);
//       localStorage.setItem("tasks", JSON.stringify(state.tasks));
//       state.totalTasks = state.totalTasks + 1;
//       if (action.payload.status === "completed") {
//         state.completedTasks = state.completedTasks + 1;
//       }
//     },
//     deleteTask: (state, action) => {
//       const updatedTask = state.tasks.filter(
//         (task) => task.id !== action.payload
//       );
//       localStorage.setItem("tasks", JSON.stringify(updatedTask));
//       state.tasks = updatedTask;
//     },
//     updateTask: (state, action) => {
//       const updatedTask = state.tasks.map((task) =>
//         task.id === action.payload.id ? { ...task, status: "completed" } : task
//       );
//       state.tasks = updatedTask;
//       localStorage.setItem("tasks", JSON.stringify(updatedTask));
//       // Update completed tasks count
//       state.completedTasks = updatedTask.filter(
//         (task) => task.status === "completed"
//       ).length;
//     },
//     selectPriority: (state, action) => {
//       state.selectedPriority = action.payload; // Update priority value
//     },
//   },
// });
// export const { addTask, deleteTask, updateTask, selectPriority } =
//   taskSlice.actions;
// export default taskSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const persistedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

const initialState = {
  tasks: persistedTasks,
  totalTasks: persistedTasks.length,
  completedTasks: 0,
  selectedPriority: "all",
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
      state.totalTasks = state.totalTasks + 1;
      if (action.payload.status === "completed") {
        state.completedTasks = state.completedTasks + 1;
      }
    },
    deleteTask: (state, action) => {
      const updatedTask = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTask));
      state.tasks = updatedTask;
    },
    updateTask: (state, action) => {
      const updatedTask = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, status: "completed" } : task
      );
      state.tasks = updatedTask;
      localStorage.setItem("tasks", JSON.stringify(updatedTask));
      // Update completed tasks count
      state.completedTasks = updatedTask.filter(
        (task) => task.status === "completed"
      ).length;
    },
    selectPriority: (state, action) => {
      state.selectedPriority = action.payload; // Update priority value
    },

    editTask: (state, action) => {
      const updatedTasks = state.tasks.map((task) =>
        task.id === action.payload.id ? { ...task, ...action.payload } : task
      );
      state.tasks = updatedTasks;
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    
      // Update completed tasks count
      state.completedTasks = updatedTasks.filter(
        (task) => task.status === "completed"
      ).length;
    },
    
  },
});
export const { addTask, deleteTask, updateTask, selectPriority, editTask } =
  taskSlice.actions;
export default taskSlice.reducer;
