const initialState = {
  contacts: [],
};

const reducer = (state = initialState, action) => {
  // -------------------action to add a newContact-----------------------------
  if (action.type === "ADD_CONTACT") {
    console.log("the action payload", action.payload);
    return { ...state, contacts: [...state.contacts, action.payload] };
  }
  // --------------------------------action to delete a contact---------------------
  if (action.type === "DELETE_CONTACT") {
    const undeletedContacts = state.contacts.filter(
      (newContact) => newContact.id !== action.payload
    );
    return { ...state, contacts: undeletedContacts };
  }
  // -------------------------------------action to edit a contact----------------------
  if (action.type === "EDIT_CONTACT") {
    const updatedContacts = state.contacts.map((updetedContact) => {
      if (updetedContact.id === action.payload.id) {
        return action.payload.updetedContact;
      }
      return updetedContact;
    });
    return { ...state, contacts: updatedContacts };
  }
  // --------------------------------------------------to retrievev all contacts-------------------------------
  if (action.type === "SET_ALL_CONTACTS") {
    return { ...state, contacts: action.payload };
  } else return state;
};
export default reducer;
