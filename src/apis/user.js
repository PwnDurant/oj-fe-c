import service from "@/utils/request";

export function sendCodeService(params = {}) {
  return service({
    url: "/user/sendCode",
    method: "post",
    data: params,
  });
}

export function codeLoginService(params = {}) {
  return service({
    url: "/user/code/login",
    method: "post",
    data: params,
  });
}

export function logoutService() {
  return service({
    url: "/user/logout",
    method: "delete",
  });
}

export function getUserInfoService() {
  return service({
    url: "/user/info",
    method: "get",
  });
}

export function getUserDetailService(userId) {
  return service({
    url: "/user/detail",
    method: "get",
    params: { userId },
  });
}


export function editUserService(params = {}) {
  return service({
    url: "/user/edit",
    method: "put",
    data: params,
  });
}

export function updateHeadImageService(params = {}) {
  return service({
    url: "/user/head-image/update",
    method: "put",
    data: params,
  });
}

export function userSubmitService(params = {}) {
  return service({
    url: "/user/question/rabbit/submit",
    method: "post",
    data: params,
  });
}