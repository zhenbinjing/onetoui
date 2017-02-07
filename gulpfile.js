﻿var gulp = require('gulp');
var concat = require('gulp-concat');					//- 多个文件合并为一个
var tinypng = require('gulp-tinypng');					//- png图片压缩
var webp = require('gulp-webp');					//- 转webp图片
var autoprefixer = require('gulp-autoprefixer');			//- 补充浏览器前缀
var cleanCSS = require('gulp-clean-css');				//- 压缩CSS为一行
var px3rem = require('gulp-px3rem');					//- px转rem
var uncss = require('gulp-uncss');					//- 删除没用到的css
var img64 = require('gulp-imgbase64');					//- img转base64
var css64 = require('gulp-base64');					//- css文件转base64
var sass = require('gulp-sass');					//- scss文件编译
var fontSpider = require('gulp-font-spider');				//- 删除没用到的字体
var replace = require('gulp-replace');					//- 文本替换
var processhtml = require('gulp-processhtml');				//- html更改模板
var htmlmin = require('gulp-htmlmin');					//- html压缩
var browserSync = require('browser-sync');				//- 浏览器同步测试工具
var del = require('del');						//- 管理文件

var y_Sz="src";								//- 源码环境路径
var y_Dz="dist";							//- 上线环境路径

gulp.task('allcss',function(){						
	var date=new Date().getTime();					//- 创建版本时间	
	gulp.src(['./'+y_Sz+'/css/**/*.css'])				//- 需要处理的css文件，放到一个字符串数组里	
	.pipe(replace(/_VERSION_/gi,date))				//- 文件指纹							
	.pipe(autoprefixer({
	browsers: [
	'last 2 version',						//- 主流浏览器的最新两个版本
	'ios 7',							//- IOS7版本
	'android 2.3',							//- android 2.3版本
	'Firefox >= 20',						//- 火狐浏览器的版本大于或等于20
	'last 2 Explorer versions'],					//- IE的最新两个版本
	cascade: true,							//- 是否美化属性值 默认：true 像这样：-webkit-transform: rotate(45deg); transform: rotate(45deg);
	remove:true							//- 是否去掉不必要的前缀 默认：true 
	}))
	.pipe(css64({
	extensions: ['gif','png','jpg','webp'],
	maxImageSize: 10*1024, // bytes 
	debug: true
	}))
	.pipe(uncss({
	html: ['./'+y_Sz+'/**/*.html'],					//- 检查的页面
	ignore: ['abc','.abc','#abc']					//- 忽略的标签 class or id or 分号隔开
	}))
	.pipe(px3rem({remUnit: 100}))					//- px/100转rem值，如果有不想转换的类在值后面加/*no*/
	.pipe(cleanCSS({compatibility: 'ie8', keepBreaks:false, keepSpecialComments: '*'}))	//- 压缩处理成一行,兼容ie
	.pipe(concat('index.css'))					//- 合并后的文件名
	.pipe(gulp.dest('./'+y_Dz+'/css'));				//- 输出文件本地
});

gulp.task('vhtml',function(){						//- 修改html的dom
	var date = new Date().getTime();
	gulp.src('./'+y_Sz+'/**/*.html')
	.pipe(replace(/_VERSION_/gi, date))
	.pipe(processhtml())
	.pipe(gulp.dest('./'+y_Dz+'/'));
});

gulp.task('imgmin',function(){
	gulp.src('./'+y_Sz+'/img/**/*.{png,jpg,gif,ico}')
	.pipe(tinypng('i4PmfZF5yvFHbhn_S6vI1D6WcY5OM07o'))		//- 去官网注册一下,填写TinyPN API KEY 免费版一个月有500张压缩		
	.pipe(gulp.dest('./'+y_Dz+'/img'));				//- 输出路径
});

gulp.task('fontSpider',function(){
	return gulp.src(['./'+y_Sz+'/**/*.html'])			//- 删除多余的字体和图标，添加return返回最终的数据流
	.pipe(fontSpider());
});		

gulp.task('copy',['fontSpider'],function(){				//- 先把fs命令执行完后，再去执行cp命令，fs需要添加return
	gulp.src(['./'+y_Sz+'/font/**'],{				//- 被复制的文件夹下的所有文件
	base: './'+y_Sz+'/font'})					//- 被复制的目标路径 	
	.pipe(gulp.dest('./'+y_Dz+'/font'))				//- 输出路径	
	gulp.src(['./'+y_Sz+'/icon/**'],{				
	base: './'+y_Sz+'/icon'})					
	.pipe(gulp.dest('./'+y_Dz+'/icon'));
});

/*-------------(sass,webp,,base64,htmlmin,bs)需要时手动添加执行-----------------*/

gulp.task('sass', function () {
	return gulp.src('./'+y_Sz+'/sass/**/*.scss')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./'+y_Sz+'/sass/css/'));
});
 
gulp.task('sass:watch', function () {
	gulp.watch('./'+y_Sz+'/sass/**/*.scss', ['sass']);
});

gulp.task('webp',['webp_img'],function(){
	del(['./'+y_Dz+'/img/**/*.{png,jpg,gif,ico}', '!./'+y_Dz+'/img/**/*.{webp}']).then(paths => {
	console.log('Deleted files and folders:\n', paths.join('\n'));
	});	 
});	 

gulp.task('webp_img',['webp_css'],function(){
	return gulp.src('./'+y_Dz+'/img/**/*.{png,jpg,gif,ico}')	
	.pipe(webp())
	.pipe(gulp.dest('./'+y_Dz+'/img/'))
});

gulp.task('webp_css',['webp_html'],function(){
	return gulp.src(['./'+y_Dz+'/css/**/*.css'])	
	.pipe(replace(/.(jpg|png|gif)/gi,'.webp'))
	.pipe(gulp.dest('./'+y_Dz+'/css'));				
});

gulp.task('webp_html',function(){					
	return gulp.src('./'+y_Dz+'/**/*.html')
	.pipe(replace(/.(jpg|png|gif)/gi,'.webp'))
	.pipe(processhtml())
	.pipe(gulp.dest('./'+y_Dz+'/'));
});

gulp.task('css64',function(){						
	return gulp.src(['./'+y_Dz+'/css/**/*.css'])										
	.pipe(css64({
	extensions: ['gif','png','jpg','webp'],
	maxImageSize: 8*1024, // bytes 
	debug: true
	}))
	.pipe(concat('index.css'))					
	.pipe(gulp.dest('./'+y_Dz+'/css'));				
});

gulp.task('base64',['css64'],function() {
	gulp.src('./'+y_Dz+'/**/*.html')
   	.pipe(img64({limit: '8kb'}))
   	.on("error", function(error) {
         console.error(error.toString());
         this.emit("end");
  	 })
   	 .pipe(gulp.dest('./'+y_Dz+'/'));
});

gulp.task('htmlmin',function(){										
	var options = {
	removeComments: true,						//- 清除HTML注释
	collapseWhitespace: true,					//- 压缩HTML
	minifyJS: true,							//- 压缩页面JS
	minifyCSS: true							//- 压缩页面CSS
	};
	gulp.src('./'+y_Dz+'/**/*.html')				//- 压缩页面路径
	.pipe(htmlmin(options))
	.pipe(gulp.dest('./'+y_Dz+'/'));				//- 输出路径	
});

gulp.task('bs',function(){
	browserSync({
	files: "**",							//- 监控所有文件
	server: {baseDir: './'+y_Dz+'/'}				//- 目标文件夹路径
	});
});

//执行插件函数
gulp.task('default',['allcss','imgmin','vhtml','copy']);