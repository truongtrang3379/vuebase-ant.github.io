<template>
  <div class="vertical-center">
    <div class="text-center">
      <img alt="Vue logo" src="@/assets/logo.png" />
    </div>
    <a-form-model
      class="max-width-4 text-left"
      ref="ruleForm"
      :model="ruleForm"
      :rules="rules"
      v-bind="layout"
    >
      <a-form-model-item ref="email" label="Email" prop="email">
        <a-input
          type="email"
          size="large"
          v-model="ruleForm.email"
          placeholder="Email"
          @input="$refs.email.onFieldBlur()"
          @blur="$refs.email.onFieldBlur()"
        >
          <a-icon slot="prefix" class="mr-3" type="mail" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item ref="password" label="Password" prop="password">
        <a-input
          placeholder="Password"
          type="password"
          size="large"
          v-model="ruleForm.password"
          @input="$refs.password.onFieldBlur();"
          @blur="$refs.password.onFieldBlur();"
        >
          <a-icon slot="prefix" class="mr-3" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-button
          size="large"
          type="primary"
          html-type="submit"
          :disabled="ruleForm.email === '' || ruleForm.password === ''"
          @click="submitForm('ruleForm')"
          class="width-10 font-700"
        >{{$t('log-in')}}</a-button>
      </a-form-model-item>

      <a-form-model-item>
        <a-divider class="mt-0 font-700">OR</a-divider>
        <a-button size="large" class="width-10 font-700">
          <a-icon type="google" class="float-left font-size-10 mt-1" />
          <span style="line-height: 2.3;">{{$t('google')}}</span>
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  store: ["email"],
  data() {
    return {
      ruleForm: {
        email: "",
        password: "",
      },
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "Please input your E-mail!",
            trigger: "blur",
          },
          {
            type: "email",
            message: "The input is not valid E-mail!",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input your password!",
            trigger: "blur",
          },
        ],
      },
      layout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          console.log("ruleForm: ", this.ruleForm);
          this.email = this.ruleForm.email;
          this.$router.push("/getting-started");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
<style>
</style>