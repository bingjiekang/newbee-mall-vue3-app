/**
 * 严肃声明：
 * 开源版本请务必保留此注释头信息，若删除我方将保留所有法律责任追究！
 * 本系统已申请软件著作权，受国家版权局知识产权以及国家计算机软件著作权保护！
 * 可正常分享和学习源码，不得用于违法犯罪活动，违者必究！
 * Copyright (c) 2020 陈尼克 all rights reserved.
 * 版权所有，侵权必究！
 */

import axios from '../utils/axios'

export function createOrder(params) {
  return axios.post('/saveOrder', params);
}

export function getOrderList(params) {
  return axios.get('/order', { params });
}

export function getOrderDetail(id) {
  return axios.get(`/order/${id}`);
}

export function cancelOrder(id) {
  return axios.put(`/order/${id}/cancel`);
}

export function confirmOrder(id) {
  return axios.put(`/order/${id}/finish`)
}

export function payOrder(params) {
  return axios.get('/paySuccess', { params })
}

// 将时间2021-11-25T15:02:10+08:00转为 2021-11-25 15:02:10 
export function timeTransfer(time){
  if (time == null || time == "") {
    return "";
  }
  return new Date(+new Date(time) + 8 * 3600 * 1000)
    .toISOString()
    .replace(/T/g, " ")
    .replace(/\.[\d]{3}Z/, "");
}

export function hideMiddleString(str) {
  const hid = 59; // 需要隐藏的截止位(保留前六后5)
  const start = str.substring(0, 11); // 保留前11位
  const end = str.substring(hid,str.length); // 保留后5位
  const hidden = '*'.repeat(11); // 中间用11位*代替
  return start + hidden + end;
}




