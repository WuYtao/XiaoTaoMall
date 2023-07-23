<script setup>
import { computed, onMounted, ref } from 'vue'
import { getgoodsall, deletByid } from "@/apis/goods.js"
import { ElNotification } from 'element-plus'
import { insetimages, selectimage } from "@/apis/image.js"
import { uploadImage } from "@/apis/upload.js"
// 添加图片初始值为false
const drawer2 = ref(false)
// 固定在左边
const direction = ref('ltr')
// 添加商品的图片id
const myimageId = ref()
// 获取商品数据
const tableData = ref([])
const getMyallgoods = async () => {
  const res = await getgoodsall()
  tableData.value = res.data
}
// 查看图片商品详情操作
const handleEdit = async (index, row) => {
  console.log(index, row.id)
  myimageId.value = row.id
  const on = await selectimage(myimageId.value)
  console.log(on);
  if (on.data > 0) {
    ElNotification({
      title: 'Warning',
      message: '商品图片已添加',
      type: 'warning',
    })
    return
  }
  drawer2.value = true
}

// 关闭弹窗
function cancelClick() {
  drawer2.value = false
}
// 查找操作
const search = ref('')
const filterTableData = computed(() =>
  tableData.value.filter(
    (data) =>
      !search.value ||
      data.name.toLowerCase().includes(search.value.toLowerCase())
  )
)

// 删除商品操作
const handleDelete = async (index, row) => {
  const res = await deletByid(row.id)
  console.log(res);
  if (res.data > 1) {
    ElNotification({
      title: 'Success',
      message: '删除成功',
      type: 'success',
    })
    getMyallgoods()
  } else {
    ElNotification({
      title: 'Warning',
      message: '删除失败',
      type: 'warning',
    })
  }
}

// 定义山川的
onMounted(() => getMyallgoods())
// 定义上传的图片数据以及
const image = ref([]);
console.log(image.value);
// 上传图片操作
const uploadArticleCover = async (param) => {
  console.log('进入了自定义上传')
  let formData = new FormData();
  formData.append('file', param.file)
  formData.append('pictureCategory', 'articleCover')
  const res = await uploadImage(formData)
  image.value.push(res.data)
}
//添加图片操作
const confirmClick = async () => {
  if (image.value.length === 0) {
    ElNotification({
      title: 'Warning',
      message: '图片不能为空',
      type: 'warning',
    })
    return
  }
  const res = await insetimages(image.value, myimageId.value)
  console.log(res.data);
  console.log(res);
  if (res.data > 0) {
    ElNotification({
      title: 'Success',
      message: '添加图片成功',
      type: 'success',
    })
    drawer2.value = false
  } else {
    ElNotification({
      title: 'Warning',
      message: '添加图片失败',
      type: 'warning',
    })
  }
  image.value = []
}
</script>
<template>
  <div class="main">
    <div class="herad">
      <h1 style="display: flex; justify-content: center">非凡品质极致选择</h1>
    </div>
    <div class="bottm">
      <el-table :data="filterTableData" style="width: 100%">
        <el-table-column prop="image" label="商品图片" align="center" width="100">
          <template v-slot:default="scope">
            <el-image :src="scope.row.image" />
          </template>
        </el-table-column>
        <el-table-column label="id商品" prop="id" />
        <el-table-column label="商品名" prop="name" />
        <el-table-column label="库存" prop="count" />
        <el-table-column label="价格" prop="price" />
        <el-table-column label="销量" prop="salesVolume" />
        <el-table-column align="right">
          <template #header>
            <el-input v-model="search" size="small" placeholder="搜索商品" />
          </template>
          <template #default="scope">
            <el-button size="small" @click="handleEdit(scope.$index, scope.row)">添加详情图</el-button>
            <!--  -->
            <el-popconfirm title="确定删除？" cancel-button-text="取消" confirm-button-text="确定"
              @confirm="handleDelete(scope.$index, scope.row)">
              <template #reference>
                <el-button size="small" type="danger">删除</el-button>
              </template>
            </el-popconfirm>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
  <el-drawer v-model="drawer2" :direction="direction">
    <template #header>
      <h4>详情图片</h4>
    </template>
    <template #default>
      <div>
        <p>
        <div class="image">
          <img style="width: 150px; height: 150px;  border-radius: 5%;" :src="image[0]" alt="">
          <div style=" width: 180px;height: 20px;" id="inputtt">
            <el-upload action="" class="upload-demo" drag :http-request="uploadArticleCover">
              <el-image :src="articleCoverCallbackUrl" style="height: 20px"></el-image>
              <div class="el-upload__text">将头像拖到此处<em>点击上传</em></div>
            </el-upload>
          </div>
        </div>
        </p>
        <p>
        <div class="image">
          <img style="width: 150px; height: 150px;  border-radius: 5%;" :src="image[1]" alt="">
          <div style=" width: 180px;height: 20px;" id="inputtt">
            <el-upload action="" class="upload-demo" drag :http-request="uploadArticleCover">
              <el-image :src="articleCoverCallbackUrl" style="height: 20px"></el-image>
              <div class="el-upload__text">将头像拖到此处<em>点击上传</em></div>
            </el-upload>
          </div>
        </div>
        </p>
        <p>
        <div class="image">
          <img style="width: 150px; height: 150px;  border-radius: 5%;" :src="image[2]" alt="">
          <div style=" width: 180px;height: 20px;" id="inputtt">
            <el-upload action="" class="upload-demo" drag :http-request="uploadArticleCover">
              <el-image :src="articleCoverCallbackUrl" style="height: 20px"></el-image>
              <div class="el-upload__text">将头像拖到此处<em>点击上传</em></div>
            </el-upload>
          </div>
        </div>
        </p>
        <p>
        <div class="image">
          <img style="width: 150px; height: 150px;  border-radius: 5%;" :src="image[3]" alt="">
          <div style=" width: 180px;height: 20px;" id="inputtt">
            <el-upload action="" class="upload-demo" drag :http-request="uploadArticleCover">
              <el-image :src="articleCoverCallbackUrl" style="height: 20px"></el-image>
              <div class="el-upload__text">将头像拖到此处<em>点击上传</em></div>
            </el-upload>
          </div>
        </div>
        </p>
      </div>
    </template>
    <template #footer>
      <div style="flex: auto">
        <el-button @click="cancelClick">取消</el-button>
        <el-button type="primary" @click="confirmClick">添加</el-button>
      </div>
    </template>
  </el-drawer>
</template>
<style lang="scss" scoped>
.main {
  margin: auto;
  width: 1300px;
}

.herad {
  display: inline-block;
  height: 200px;
  width: 100%;
  background-color: rgb(155, 125, 125);
}

.bottm {
  display: inline-block;
  width: 100%;

  background-color: pink;
}

#inputtt {
  position: relative;
  top: -150px;
  left: 180px;
}
</style>