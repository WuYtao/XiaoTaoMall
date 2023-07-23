import requset from "@/utils/http.js"
export const getorderall = () => {
  return requset({
    url: '/order/allto'
  })
}