import { baseApi } from "./base"
export function getPosts(options) {
    return baseApi.get("posts", options).then(res => res.data)
}
export function getPost(userId, options) {
    return baseApi.get(`posts/${userId}`, options).then(res => res.data)
}