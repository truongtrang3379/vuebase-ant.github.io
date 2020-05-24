<template>
  <div class="vertical-center">
    <div class="text-center">
      <img alt="Vue logo" src="@/assets/logo.png" />
    </div>
    <a-form-model
      class="max-width-4 width-10 text-left"
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
          @blur="
          () => {
            $refs.email.onFieldBlur();
          }
        "
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
          @blur="
          () => {
            $refs.password.onFieldBlur();
          }
        "
        >
          <a-icon slot="prefix" class="mr-3" type="lock" style="color: rgba(0,0,0,.25)" />
        </a-input>
      </a-form-model-item>
      <a-form-model-item>
        <a-checkbox
          class="pr-10 text-left float-left"
          v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
        >{{$t('remember-me')}}</a-checkbox>
        <a
          class="float-right"
          @click="$router.push({path: '/forgot-password'})"
        >{{$t('forgot-password')}}</a>
        <a-button
          size="large"
          type="primary"
          :disabled="ruleForm.email === '' || ruleForm.password === ''"
          @click="submitForm('ruleForm')"
          class="width-10 font-700"
        >{{$t('log-in')}}</a-button>
      </a-form-model-item>

      <a-form-model-item>
        <a-divider class="mt-0 font-700">OR</a-divider>
        <a-button size="large" html-type="submit" class="max-width-3 px-2 font-700">
          <a-icon theme="filled" type="facebook" class="float-left font-size-10 mt-1" />
          <span style="line-height: 2.3;">{{$t('facebook')}}</span>
        </a-button>
        <a-button
          size="large"
          html-type="submit"
          style="margin: 0 11px;"
          class="max-width-3 px-2 width-3 font-700"
        >
          <a-icon type="google" class="float-left font-size-10 mt-1" />
          <span style="line-height: 2.3;">{{$t('google')}}</span>
        </a-button>
        <a-button size="large" html-type="submit" class="max-width-3 px-2 width-3 font-700">
          <a-icon type="twitter" class="float-left font-size-10 mt-1" />
          <span style="line-height: 2.3;">{{$t('twitter')}}</span>
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        email: "",
        password: ""
      },
      rules: {
        email: [
          {
            type: "email",
            required: true,
            message: "Please input your E-mail!",
            trigger: "blur"
          },
          {
            type: "email",
            // required: true,
            message: "The input is not valid E-mail!",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "Please input your password!",
            trigger: "blur"
          }
        ]
      },
      layout: {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 }
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log("ruleForm: ", this.ruleForm);
          this.$router.push("/getting-started");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
};
</script>
<style>
</style>