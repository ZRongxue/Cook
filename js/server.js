/**
 * Created by lenovo on 2017/5/3.
 */
//    引入Http模块
var http = require("http");
//    引入URL模块
var url = require("url");
//    引入fs模块
var fs = require("fs");
//    创建服务器
http.createServer(function(req,res){
    //设置响应头部
    res.setHeader("Access-Control-Allow-Origin","*");
    res.writeHead(200,{"Content-Type":"text/plain;charset=utf-8"});

    var myUrl = url.parse(req.url).pathname;
    //    路由逻辑
    if(myUrl=="/data1"){
        getData("../data/data1.json",req,res);
    }
    if(myUrl=="/data2"){
        getData("../data/data2.json",req,res);
    }
    //封装需要读取的json文件
    function getData(filename,req,res){
        fs.readFile(filename,function(err,data){
            if(err){
                console.log("请求失败"+err)
            }else{
                res.end(data)
            }
        })
    }
}).listen(7878);