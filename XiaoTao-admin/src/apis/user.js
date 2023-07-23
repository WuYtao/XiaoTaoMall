import requset from "@/utils/http.js"
export const loginAPI = (username, password) => {
  console.log(username, password);
  return requset({
    url: '/user/login',
    method: 'POST',
    data: {
      username,
      password
    }
  })
}
export const UserAll = () => {
  return requset({
    url: '/user/all',
  })
}