import { createSlice } from "@reduxjs/toolkit";

const Slice=createSlice({
    name:"dictionary",
    initialState:[
    ],
    reducers:{
        add(state,action){
            const word= action.payload;
            state.push(word);
        },
        remove(state, action) {
            const index = action.payload;
            return state.filter((_, i) => i !== index);
          },
          edit(state,action){
            const{index,en,tr}=action.payload;
            state[index]={en,tr}
          },
    },
});

export default Slice; //.reducer ekleyebilirsin
export const { add ,remove,edit} =Slice.actions;