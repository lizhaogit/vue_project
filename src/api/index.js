/*
 * API 接口地址
 */

import {getRequest, postRequest, putRequest, deleteRequest, uploadFileRequest} from '../axios/index'

const root = process.env.API_ROOT

const api = {
  // 登录
  userLogin(params) {
    return postRequest('http://123.57.248.225:5000/permission/user/login', params)
  },
  // 测试
  demo(params) {
    return getRequest('http://192.168.0.105:6001/basecontroller/addAdministrative1', params)
  },

}


export default api;
