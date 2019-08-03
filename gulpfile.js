
var gulp = require("gulp");
var sass = require("gulp-sass");  //sass插件
var concat = require("gulp-concat"); //合并文件


gulp.task("copyhtml",async ()=>{
	//gulp.src("index.html").pipe(gulp.dest("dist"));
	gulp.src("*.html")
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\guomei"));
});
gulp.task("copyall",async ()=>{
	gulp.src("*.html")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\guomei"));
    gulp.src("*.php")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\guomei"));
    gulp.src("css/*.css")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\guomei\\css"));
    gulp.src("js/*.js")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\guomei\\js"));
    gulp.src("font/**/*")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\guomei\\font"));
    gulp.src("img2/*.{jpg,png,gif,webp,jpeg,ico}")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\guomei\\img2"));
    gulp.src("indexImg/*.{jpg,png,gif,webp,jpeg,ico}")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\guomei\\indexImg"));
    gulp.src("logainImg/*.{jpg,png,gif,webp,jpeg,ico}")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\guomei\\logainImg"));
    gulp.src("shoppingCarImg/*.{jpg,png,gif,webp,jpeg,ico}")
    .pipe(gulp.dest("D:\\phpStudy\\WWW\\guomei\\shoppingCarImg"));


    gulp.src('sass/**/*', async ()=>{
		gulp.src('sass/**/*')
		.pipe(sass())//把sass里的东西经过编译放到css中
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\guomei\\css'));
	});
    
});
gulp.task("watchall",async ()=>{
	// html文件
	gulp.watch('*.html',async ()=>{
		gulp.src('*.html')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\guomei'));
    })
    // php文件
	gulp.watch('*.php',async ()=>{
		gulp.src('*.php')
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\guomei'));
    })
    // font文件
	gulp.watch("font/**/*",async ()=>{
		gulp.src("font/**/*")
		.pipe(gulp.dest("D:\\phpStudy\\WWW\\guomei\\font"));
	})
	// css文件
	gulp.watch("css/*.css",async ()=>{
		gulp.src("css/*.css")
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\guomei\\css'));
	})	
	// js文件
	gulp.watch("js/*.js",async ()=>{
		gulp.src("js/*.js")
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\guomei\\js'));
	})
	// 图片
	gulp.watch("indexImg/*.{jpg,png,gif,webp,jpeg,ico}",async ()=>{
		gulp.src("indexImg/*.{jpg,png,gif,webp,jpeg,ico}")
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\guomei\\indexImg'));
    })
    gulp.watch("img2/*.{jpg,png,gif,webp,jpeg,ico}",async ()=>{
		gulp.src("img2/*.{jpg,png,gif,webp,jpeg,ico}")
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\guomei\\img2'));
    })
    gulp.watch("loginImg/*.{jpg,png,gif,webp,jpeg,ico}",async ()=>{
		gulp.src("loginImg/*.{jpg,png,gif,webp,jpeg,ico}")
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\guomei\\loginImg'));
    })
    gulp.watch("shoppingCarImg/*.{jpg,png,gif,webp,jpeg,ico}",async ()=>{
		gulp.src("shoppingCarImg/*.{jpg,png,gif,webp,jpeg,ico}")
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\guomei\\shoppingCarImg'));
    })


    gulp.watch('sass/*.scss', async ()=>{
		gulp.src('sass/*.scss')
		.pipe(sass())//把sass里的东西经过编译放到css中
		.pipe(gulp.dest('D:\\phpStudy\\WWW\\guomei\\css'));
	});
});