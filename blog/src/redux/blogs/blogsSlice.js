import {createSlice} from "@reduxjs/toolkit";
import {addBlog, deleteBlog, editBlog, getBlogByID, getBlogs} from "../../services/blogsService";

const initialState = {
    blogs: [],
    blog: {}
}

const blogsSlice = createSlice({
    name: 'blogs',
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getBlogs.fulfilled, (state, action) => {
            state.blogs = action.payload
        })

        builder.addCase(addBlog.fulfilled, (state, action) => {
            // state.blogs.push(action.payload)
            state.blogs = action.payload
        })

        builder.addCase(getBlogByID.fulfilled, (state, action) => {
            state.blog = action.payload
        })

        builder.addCase(editBlog.fulfilled, (state, action) => {
            state.blogs = state.blogs.map(blog => (blog.id === action.payload.id ? action.payload : blog));
        })

        builder.addCase(deleteBlog.fulfilled, (state, action) => {
            state.blogs = state.blogs.filter(blog => blog.id !== action.payload)
        })
    }
})

export default blogsSlice.reducer