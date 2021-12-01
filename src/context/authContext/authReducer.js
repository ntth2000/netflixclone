export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, status: "pending", error: null };
    case "LOGIN_SUCCESS":
      return { user: action.payload, status: "completed", error: null };
    case "LOGIN_ERROR":
      return {
        user: null,
        status: "completed",
        error: action.errorMessage || "Something went wrong!",
      };
    case "REGISTER_START":
      return { user: null, status: "pending", error: null };
    case "REGISTER_ERROR":
      return {
        user: null,
        status: "completed",
        error: action.errorMessage || "Something went wrong!",
      };
    case "LOGOUT":
      return { user: null, status: "completed", error: null };
    case "UPDATE_USER_START":
      return { ...state, status: "pending", error: null };
    case "UPDATE_USER_SUCCESS":
      return {
        user: { ...state.user, ...action.payload },
        status: "completed",
        error: null,
      };
    case "UPDATE_USER_ERROR":
      return {
        ...state,
        status: "completed",
        error: action.errorMessage || "Something went wrong!",
      };
    default:
      return state;
  }
};
