import requset from "@/utils/http.js"
export const getgoodsall = () => {
  return requset({
    url: '/goods/all',
  })
}

export const insertgoods = ({ name, des, price, image, count, categoryid }) => {
  console.log(name, des, price, image, count, categoryid);
  return requset({
    url: '/goods/add',
    method: 'post',
    data: {
      name, des, price, image, count, categoryid
    }
  })
}
export const deletByid = (id) => {
  return requset({
    url: '/goods/delete',
    method: "delete",
    data: {
      id
    }
  })
}