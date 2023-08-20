const initState = {
  users: [
    { id: 1, name: "Binh Pham" },
    { id: 2, name: "Van Binh" },
    { id: 3, name: "Pham Van Binh" },
  ],

  post: [],
};

const RootReducer = (state = initState, action) => {
  switch (action.type) {
    case "DELETE_USER":
      // console.log(">>> run into delete user: ", action);

      let users = state.users;
      users = users.filter((item) => item.id !== action.payload.id);
      return {
        ...state,
        users,
      };

    case "CREATE_USER":
      let id = Math.floor(Math.random() * 10000);
      let user = { id: id, name: `random - ${id}` };
      return {
        ...state,
        users: [...state.users, user],
      };

    default:
      return state;
  }
};

export default RootReducer;
