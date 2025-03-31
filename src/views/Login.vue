<template>
    <div class="login-page">
      <div class="orange"> </div>
      <div class="blue"></div>
      <div class="blue small"></div>
      <div class="login-box">
        <div class="logo-box">
          <img src="@/assets/logo.png">
          <div>
            <div class="sys-name">Chase'OJ</div>
            <div class="sys-sub-name">旨在找到好工作</div>
          </div>
        </div>
        <div class="form-box-title">
          <span>验证码登录</span>
        </div>
        <div class="form-box">
          <div class="form-item">
            <img src="@/assets/images/shouji.png">
            <el-input v-model="mobileForm.phone" type="text" placeholder="请输入手机号" />
          </div>
          <div class="form-item">
            <img src="@/assets/images/yanzhengma.png">
            <el-input style="width:134px" v-model="mobileForm.code" type="text" placeholder="请输入验证码" />
            <div class="code-btn-box" @click="getCode">
              <span>{{ txt }}</span>
            </div>
          </div>
          <div class="submit-box" @click="loginFun">
            登录/注册
          </div>
        </div>
        <div class="gray-bot">
          <p>注册或点击登录代表您同意 <span>服务条款</span> 和 <span>隐私协议</span></p>
        </div>
      </div>
    </div>
  </template>
  <script setup>
  import { ref, reactive } from 'vue'
  import { setToken } from '@/utils/cookie'
  import { sendCodeService, codeLoginService } from '@/apis/user'
  import router from '@/router'
  
  // 验证码登录表单
  let mobileForm = reactive({
    phone: '',
    code: ''
  })
  let txt = ref('获取验证码')
  let timer = null
  async function getCode() {
    await sendCodeService(mobileForm)
    txt.value = '59s'
    let num = 59
    timer = setInterval(() => {
      num--
      if (num < 1) {
        txt.value = '重新获取验证码'
        clearInterval(timer)
      } else {
        txt.value = num + 's'
      }
    }, 1000)
  }
  
  async function loginFun() {
    const loginRef = await codeLoginService(mobileForm)
    setToken(loginRef.data)
    router.push('/c-oj/home/question')
  
  }
  </script>
  <style lang="scss" scoped>
  .login-page {
    width: 100vw;
    height: 100vh;
    position: relative;
    margin-top: -60px;
    margin-left: -20px;
    overflow: hidden;
  
    .login-box {
      width: 600px;
      height: 604px;
      background: #FFFFFF;
      box-shadow: 0px 0px 6px 0px rgba(0, 0, 0, 0.1);
      border-radius: 10px;
      opacity: 0.9;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      padding: 0 72px;
      padding-top: 50px;
      overflow: hidden;
  
      .logo-box {
        display: flex;
        align-items: center;
  
        &.refister-logo {
          margin-bottom: 56px;
        }
  
        img {
          width: 68px;
          height: 68px;
          margin-right: 16px;
        }
  
        .sys-name {
          height: 33px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          font-size: 24px;
          color: #222222;
          line-height: 33px;
          margin-bottom: 13px;
        }
  
        .sys-sub-name {
          height: 22px;
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 16px;
          color: #222222;
          line-height: 22px;
        }
      }
  
      .form-box-title {
        height: 116px;
        display: flex;
        align-items: center;
  
        span {
          font-family: PingFangSC, PingFang SC;
          font-weight: 400;
          font-size: 24px;
          color: #000000;
          line-height: 33px;
          display: block;
          height: 33px;
          margin-right: 40px;
          position: relative;
          letter-spacing: 1px;
          cursor: pointer;
  
          &.active {
            font-weight: bold;
  
            &::before {
              position: absolute;
              content: '';
              bottom: -13px;
              left: 0;
              width: 100%;
              height: 5px;
              background: #32C5FF;
              border-radius: 10px;
            }
          }
        }
      }
  
      .gray-bot {
        position: absolute;
        left: 0;
        text-align: center;
        margin-top: 56px;
        width: 100%;
        height: 50px;
        background: #FAFAFA;
        font-family: PingFangSC, PingFang SC;
        font-weight: 400;
        font-size: 14px;
        color: #666666;
        line-height: 50px;
  
        p {
          margin: 0;
        }
  
        span {
          color: #32C5FF;
          cursor: pointer;
        }
      }
  
      :deep(.form-box) {
        .submit-box {
          margin-top: 90px;
          width: 456px;
          height: 48px;
          background: #96E1FE;
          border-radius: 8px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: PingFangSC, PingFang SC;
          font-weight: 600;
          font-size: 16px;
          color: #FFFFFF;
          letter-spacing: 1px;
  
          &.refister-submit {
            margin-top: 72px;
          }
  
          &:hover {
            background: #32C5FF;
          }
        }
  
        .form-item {
          display: flex;
          align-items: center;
          width: 456px;
          height: 48px;
          background: #F8F8F8;
          border-radius: 8px;
          margin-bottom: 30px;
          position: relative;
  
          .code-btn-box {
            position: absolute;
            right: 0;
            width: 151px;
            height: 48px;
            background: #32C5FF;
            border-radius: 8px;
            top: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
  
            span {
              font-family: PingFangSC, PingFang SC;
              font-weight: 400;
              font-size: 16px;
              color: #FFFFFF;
            }
          }
  
          .error-tip {
            position: absolute;
            width: 140px;
            text-align: right;
            padding-right: 12px;
            height: 20px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 14px;
            color: #FD4C40;
            line-height: 20px;
            right: 0;
  
            &.bottom {
              right: 157px;
            }
          }
  
          .el-input {
            width: 380px;
            font-family: PingFangSC, PingFang SC;
            font-weight: 400;
            font-size: 16px;
            color: #222222;
          }
  
          .el-input__wrapper {
            border: none;
            box-shadow: none;
            background: transparent;
            width: 230px;
            padding-left: 0;
          }
  
          img {
            width: 24px;
            height: 24px;
            margin: 0 18px;
          }
        }
      }
    }
  
    &::after {
      position: absolute;
      top: 0;
      left: 0;
      height: 100vh;
      bottom: 0;
      right: 0;
      background: rgba(255, 255, 255, .8);
      z-index: 1;
      content: '';
    }
  
    .orange {
      background: #F0714A;
      width: 498px;
      height: 498px;
      border-radius: 50%;
      background: #F0714A;
      opacity: 0.67;
      filter: blur(50px);
      left: 14.2%;
      top: 41%;
      position: absolute;
    }
  
    .blue {
      width: 334px;
      height: 334px;
      background: #32C5FF;
      opacity: 0.67;
      filter: blur(50px);
      left: 14.2%;
      top: 42%;
      position: absolute;
      top: 16.3%;
      left: 80.7%;
  
      &.small {
        width: 186px;
        height: 186px;
        top: 8.2%;
        left: 58.2%;
      }
    }
  }
  </style>