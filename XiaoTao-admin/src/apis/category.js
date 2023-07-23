import requset from "@/utils/http.js"
export const getcategory = () => {
  return requset({
    url: '/category/all',
  })
}