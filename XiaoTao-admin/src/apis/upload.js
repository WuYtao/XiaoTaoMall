import requset from "@/utils/http.js"
export const uploadImage = (data) => {
  return requset({
    url: '/upload',
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' },
    data: data
  })
}