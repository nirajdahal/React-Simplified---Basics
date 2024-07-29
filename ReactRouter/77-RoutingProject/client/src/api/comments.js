import { baseApi } from "./base"
export function getComments(options) {
    const res = baseApi.get(`comments`, options).then(res => res.data)
    return res
}