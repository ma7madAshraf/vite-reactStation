const reducer = (state, action) => {
  if (action.type === "TOGGLE_THEME") {
    const newTheme = state.theme === "synthwave" ? "emerald" : "synthwave";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("reactStationTheme", newTheme);

    return { ...state, theme: newTheme };
  }
  if (action.type === "LOAD_DATA") {
    const { theScore } = action.payload;
    return { ...state, scores: theScore };
  }
  if (action.type === "SET_SCORES") {
    const { theScore } = action.payload;

    return { ...state, scores: theScore };
  }
};
export default reducer;
