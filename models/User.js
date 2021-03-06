'use strict'

/**
 * Created by rockey on 2018/3/6.
 */
var mongoose = require('mongoose');

//用户表结构
//此处只定义了 User Schema 然后在用户models中引用
var schema = new mongoose.Schema({
  username: String,
  password: String,
  //是否是超级管理员
  isSuperAdmin: {
    type: Boolean,
    default: false
  },
  //是否是管理员
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = schema;
