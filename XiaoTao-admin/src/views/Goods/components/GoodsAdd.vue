<script setup>
import { onMounted, ref } from 'vue'
import { uploadImage } from "@/apis/upload.js"
import { getcategory } from "@/apis/category.js"
import { insertgoods } from "@/apis/goods.js"
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter();
const Commondity = ref({
  name: '',
  des: '',
  price: '',
  image: '',
  count: "",
  categoryid: ''
})
const uploadArticleCover = async (param) => {
  console.log('进入了自定义上传')
  let formData = new FormData();
  formData.append('file', param.file)
  formData.append('pictureCategory', 'articleCover')
  const res = await uploadImage(formData)
  Commondity.value.image = res.data
}
// 
const select = ref('')
const options = ref([])
const getAllcategory = async () => {
  const res = await getcategory()
  options.value = res.data
}
onMounted(() => getAllcategory())
//添加图片操作
const getadd = async () => {
  Commondity.value.categoryid = select.value
  const res = await insertgoods(Commondity.value)
  console.log(res.data);
  if (res.data === 1) {
    ElNotification({
      title: 'Success',
      message: '添加成功',
      type: 'success',
    })
    router.push("/goods/all")
  } else {
    ElNotification({
      title: 'Warning',
      message: '添加失败',
      type: 'warning',
    })
  }
}
</script>
<template>
  <div class="main">
    <div class="imp">
      <div class="image">
        <img style="width: 150px; height: 150px;  border-radius: 5%;" :src="Commondity.image" alt="">
        <div style=" width: 180px;height: 20px;">
          <el-upload action="" class="upload-demo" drag :http-request="uploadArticleCover">
            <el-image :src="articleCoverCallbackUrl" style="height: 20px"></el-image>
            <div class="el-upload__text">将头像拖到此处<em>点击上传</em></div>
          </el-upload>
        </div>
      </div>
      <div class="biao">
        <td>
          <h4>商品名：</h4>
        </td>
        <td><el-input v-model="Commondity.name" /></td>
        <td>
          <h4>描述：</h4>
        </td>
        <td><el-input v-model="Commondity.des" /></td>
        <td>
          <h4>商品分类</h4>
        </td>
        <td> <el-select v-model="select" class="m-2" placeholder="请选择">
            <el-option v-for="item in options" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </td>
        <tr>
          <td>
            <h4>价格</h4>
          </td>
          <td><el-input-number v-model="Commondity.price" :precision="2" :step="10" /></td>
        </tr>
        <tr>
          <td>
            <h4>库存</h4>
          </td>
          <td> <el-input-number v-model="Commondity.count" :min="1" @change="handleChange" /></td>
        </tr>
      </div>
      <el-button style="margin-left:380px" type="success" round @click="getadd">添加</el-button>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.imp {
  width: 800px;
  margin: auto;
  border: 1px solid red;
  border-radius: 3%;
}

.image {
  display: inline-block;
  height: 200px;
  width: 100%;

  img {
    margin: 10px;
  }
}

.upload-demo {
  position: relative;
  left: 610px;
  top: -150px;
  border: 2px solid rgb(158, 144, 144);
  border-radius: 3%;
}

.biao {
  display: inline-block;
  height: 400px;
  width: 100%;
  border: 1px solid pink;
}
</style>