/**
 * Created by rockey on 2018/2/13.
 */

/*
 *   内容相关数据模型
 *
 * */

var mongoose = require('mongoose');
var contentSchema = require('../schemas/contents');


module.exports = mongoose.model('Content', contentSchema);