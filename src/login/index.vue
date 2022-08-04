<template>
  <div id="login">
    <el-form
      class="login-container"
      :rules="rules"
      ref="loginForm"
      label-width="100px"
      :model="ruleForm"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" show-password v-model="ruleForm.password" />
      </el-form-item>
      <el-form-item label="验证码" prop="captcha">
        <div class="captcha-code">
          <el-input v-model="ruleForm.captcha"></el-input>
        </div>
        <div class="captcha-img" @click="refreshCaptcha">
          <img :src="captcha.image_content" style="height: 30px" />
        </div>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" plain @click="submitForm()">登录</el-button>
        <el-button plain @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import { getCaptcha } from "@/api/captcha";
const router = useRouter();
const loginForm = ref(null);
let captcha = reactive({
  key: null,
  image_content: null,
  expiredAt: null,
});
const ruleForm = reactive({
  username: null,
  password: null,
  captcha: null,
});
onMounted(() => {
  refreshCaptcha();
});
const refreshCaptcha = () => {
  getCaptcha().then((response) => {
    const data = response.data.data;
    captcha.key = data.key;
    captcha.image_content = data.image_content;
    captcha.expiredAt = data.expired_at;
  });
};
const submitForm = () => {
  loginForm.value.validate((valid) => {
    if (valid) {
      router.push({
        path: "/",
      });
    }
  });
};
const resetForm = () => {
  ruleForm.username = null;
  ruleForm.password = null;
  ruleForm.captcha = null;
};
const rules = {
  username: [
    {
      required: true,
      trigger: "blur",
      message: "输入不能为空",
    },
  ],
  password: [
    {
      required: true,
      trigger: "blur",
      message: "输入不能为空",
    },
  ],
  captcha: [
    {
      required: true,
      trigger: "blur",
      message: "输入不能为空",
    },
  ],
};
</script>

<style scoped lang="scss">
#login {
  height: 100%;
  .login-container {
    width: 350px;
    padding: 20px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -200px;
    margin-left: -195px;
    border: 1px solid #eaeaea;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    .captcha-code {
      flex: 1;
    }

    .captcha-img {
      width: 112px;
      margin-left: 5px;
      display: flex;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
