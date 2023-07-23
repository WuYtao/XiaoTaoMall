import requset from "@/utils/http.js"
export const insetimages = (image, spid) => {
  console.log(image, spid);
  return requset({
    url: '/goodImage',
    method: 'post',
    data: {
      image,
      spid
    }
  })
}
export const selectimage = (spid) => {
  console.log(spid);
  return requset({
    url: '/goodImage/select',
    params: {
      spid
    }
  })
}