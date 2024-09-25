(function($) {

	$(document).ready(function() {
		$(window).scroll(function(){  //只要窗口滚动,就触发下面代码 
			var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度 
			if(scrollt>200){  //判断滚动后高度超过200px
				$("#gotop").fadeIn(400); //淡出
				if($(window).width() >= 1200){
					$(".navbar").stop().fadeTo(400, 0.2);
				}
			}else{
				$("#gotop").fadeOut(400); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动
				if($(window).width() >= 1200){
					$(".navbar").stop().fadeTo(400, 1);
				}
			}
		});
		$("#gotop").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部        
			$("html,body").animate({scrollTop:"0px"},200);
		});
		$(".navbar").mouseenter(function(){
			$(".navbar").fadeTo(100, 1);
		});
		$(".navbar").mouseleave(function(){
			var scrollt = document.documentElement.scrollTop + document.body.scrollTop;
			if (scrollt>200) {
				$(".navbar").fadeTo(100, 0.2);
			}
		});

		replaceMeta();

		$(window).resize(function(){
			replaceMeta();
		});
	});

	replaceMeta = function(){
		if ($(window).width() < 980) {
			if ($("#side_meta #post_meta").length>0) {
				$("#post_meta").appendTo("#top_meta");
			}
			if ($("#sidebar #site_search").length>0) {
				$("#site_search").appendTo("#top_search");
				$("#site_search #st-search-input").css("width", "95%");
			}
		} else {
			if ($("#top_meta #post_meta").length>0) {
				$("#post_meta").appendTo("#side_meta");
			}
			if ($("#top_search #site_search").length>0) {
				$("#site_search").prependTo("#sidebar");
				$("#site_search #st-search-input").css("width", "85%");
			}
		}
	}

	window.shareLink = function(evt) {
		let title = document.title;
		let href = location.href.toString().replace(/#.*/, "");
		try {
			title = evt.target.getAttribute("data-title") + " - " + siteName();
			href = evt.target.getAttribute("data-share");
			if(href.charAt(0) === "/") {
				href = location.origin + href;
			}
		}
		catch(e) {

		}
		navigator.clipboard.writeText(title + "\n" + href);
		if($(".notification").length > 0) {
			$(".notification").stop(true, true).show();
			$(".notification").text("已复制链接到剪贴板！");
			$(".notification").delay(1000).fadeOut(2000);
		}
		if(evt) {
			evt.stopPropagation();
			evt.preventDefault();
		}
	};

	window.likePost = function() {
		if($(".notification").length > 0) {
			$(".notification").stop(true, true).show();
			$(".notification").text("感谢您的支持！本站会继续发表优质内容！");
			$(".notification").delay(1000).fadeOut(2000);
		}
	};

	window.dislikePost = function() {
		if($(".notification").length > 0) {
			$(".notification").stop(true, true).show();
			$(".notification").text("敌人点了踩，说明我做对了\u{01f917}");
			$(".notification").delay(1000).fadeOut(2000);
		}
	};

	$(".entry-like").click(window.likePost);
	$(".entry-dislike").click(window.dislikePost);
	$(".share-link").click(window.shareLink);

	const variableSiteNames = [
		"知否", "知芋", "钟乎", "知平", "支乎", "乎知", "吱呼", "之乎", "蜘乎", "纸虎"
	];
	const siteSlogans = [
		"关于我在知乎被永封不得不自己建一个一模一样的钓鱼网站发帖这件事",
		"没有知识存在的荒原",
		"一切极权主义都是纸老虎",
		"这不是墙内网站",
		"上知乎，就润了",
		"手动狗头",
		"记录刚编的美好生活",
		"没有问题，也没有答案",
		"有问题，就解决提出问题的人",
		"与世界分享你刚编的故事",
		"能不能把你那破盐选删了",
		"谢邀，人在美国，刚下飞机",
		"超5亿回答就是没一个说到点上的",
		"时不时以阴阳怪气遮羞的邻座知乎同学",
		"还是太信息化了",
		"但是，这真的值得吗",
		"知乎号，前进四！",
		"向美好的知乎献上高仿！",
		"我的知乎故事会果然成为了荒原。",
		"知乎是这样的，提问只要引战就好，回答的人要考虑的就多了",
		"评论区关闭是网站体验的一部分，不服不要玩",
		"知乎用户对高赞的向往，就是我们的奋斗目标",
		"此事在知乎日报中亦有记载",
		"你这辈子就是被知乎害了",
		"答不上来，该罚！",
		"这样的事情天天在知乎各处上演",
		"我是来答题的，你们要干什么",
		"前面忘了，中间忘了，后面也忘了",
		"当年站长退出知乎我是坚决反对的",
		"哪有什么知乎，不过都是话术",
		"帮人上学就算了，能不能别帮人参军呐",
		"你究竟炸了多少号，荒原了多少话题",
		"不得擅自接受媒体采访，一切以知乎高赞为准",
		"知乎用户一切问题转政治的能力我是认可的",
		"时与势都在知乎民主共和国一边",
		"知乎越看越反动",
		"早打、大打、打核战争。在知乎打！",
		"在你凝视知乎的同时，知乎也在凝视你",
		"世界未来是中国，中国未来是朝鲜",
		"我觉得这是一种自信",
		"还不就是绝望吗",
		"绝望了！对永封账号的知乎绝望了！",
		"拐弯抹角，答出问题的就是好鸟",
		"提问是钩子，答题是乐子",
		"初民为信仰而信仰，末人为解构而解构",
		"且听龙赢！",
		"这末日，如你所愿",
		"怎么还真有人为知识付费啊",
		"讨论环境全面瓦解后，人们唯一能认真讨论的就是环境的瓦解本身",
		"向微博宣战！向贴吧宣战！向抖音宣战！向豆瓣宣战！向小红书宣战！",
		"一人枪毙五分钟没有无辜的",
		"培训班集中宣传点",
		"百万收入高净值人士之家",
		"孝急典乐蚌不住，润麻寄摆赢两次",
		"阴阳怪气和影射都消失后，只有歌颂热不热烈的区别",
		"无敌版",
		"吾爱修改版",
		"折腾版",
		"绿色版",
		"智狐指虎，直呼稚虎止乎纸糊"
	];

	function siteName() {
		return variableSiteNames[Math.floor(Math.random() * variableSiteNames.length)];
	}

	let oldTitle = document.title.toString();
	if(oldTitle.indexOf(" - ") != -1) {
		let essentialTitle = oldTitle.replace(/ \- .*?$/, "");
		document.title = essentialTitle + " - " + siteName();
	}
	else {
		document.title = siteName() + " - " + siteSlogans[Math.floor(Math.random() * siteSlogans.length)];
	}

})(jQuery);