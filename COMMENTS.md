Please build a todo web app that will allow users to see a list of items. This application will first
pull the todo data from the jsonplaceholder api url provided below. We encourage you to review
the api documentation and briefly familiarize yourself with the endpoint. Users should then be
able to see this data in a table or data-table.

Acceptance Criteria:

- Limit each API call to any number between 10-40 rows.
- If possible, add pagination to the table.
- Make sure the application is responsive and mobile-screen friendly.
- Make sure that any error or failure states are handled.
- Add comments where you feel your code needs explanation.

EXPLANATION:

1. For a small application like that to manage state better use hooks coming from React such as useState, useReducer + Context API
   which carries almost similar logic as uses Reduxjs/toolkit.
2. For the Reduxjs/toolkit we can use:

- createSlice, createAsyncThunk from @reduxjs/toolkit
- creating createSlice includes extraReducers inside for the separate fetching function with createAsyncThunk.
- creating configureStore from @reduxjs/toolkit with reducer inside + Provider from react-redux wrapping the main "App" component

3. Pagination:
   I created my own logic for pagination. For the MUI library we can use TablePagination as I know but I need more time to figure it out
