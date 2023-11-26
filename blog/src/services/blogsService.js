import {createAsyncThunk} from "@reduxjs/toolkit";
import customAxios from "./api";

export const getBlogs = createAsyncThunk (
    'blogs/getBlogs',
    async () => {
        let user = JSON.parse(localStorage.getItem('user'));
        if(user != null) {
            const res = await customAxios.get(`blogs/search-by-user-id?id=` + user.id)
            return res.data;
        } else {
            const res = await customAxios.get('blogs')
            return res.data;
        }
    }
)

export const getBlogByID = createAsyncThunk (
    'blogs/getBlogByID',
    async (id) => {
        const res = await customAxios.get('blogs/' + id)
        return res.data;
    }
)
export const addBlog = createAsyncThunk (
    'blogs/addBlog',
    async (data) => {
        await customAxios.post('blogs', data)
        let user = JSON.parse(localStorage.getItem('user'));
        return (await customAxios.get(`blogs/search-by-user-id?id=` + user.id)).data
        // gọi api để lấy list mới trả về
    }
)
export const editBlog = createAsyncThunk (
    'blogs/editBlog',
    async (data) => {
        await customAxios.put('blogs/' + data.id, data.data)
        return data;
    }
)
export const deleteBlog = createAsyncThunk (
    'blogs/deleteBlog',
    async (id) => {
        await customAxios.delete('blogs/' + id)
        return id;
    }
)
