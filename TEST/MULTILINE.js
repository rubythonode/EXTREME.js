require('./UPPERCASE.JS-COMMON.js');
require('../MULTILINE.js');

TEST('MULTILINE', function(ok) {
	'use strict';

	INIT_OBJECTS();
	
	var
	// multiline string
	multilineStr = MULTILINE(function() {/*!@preserve
		
		동해물과 백두산이 마르고 닳도록
		하느님이 보우하사 우리나라 만세
		무궁화 삼천리 화려강산
		대한 사람 대한으로 길이 보전하세

		남산 위에 저 소나무 철갑을 두른 듯
		바람서리 불변함은 우리 기상일세
		무궁화 삼천리 화려강산
		대한 사람 대한으로 길이 보전하세

		가을 하늘 공활한데 높고 구름 없이
		밝은 달은 우리 가슴 일편단심일세
		무궁화 삼천리 화려강산
		대한 사람 대한으로 길이 보전하세

		이 기상과 이 맘으로 충성을 다하여
		괴로우나 즐거우나 나라 사랑하세
		무궁화 삼천리 화려강산
		대한 사람 대한으로 길이 보전하세
		
	*/''});
	
	ok(multilineStr === '\r\n동해물과 백두산이 마르고 닳도록\r\n하느님이 보우하사 우리나라 만세\r\n무궁화 삼천리 화려강산\r\n대한 사람 대한으로 길이 보전하세\r\n\r\n남산 위에 저 소나무 철갑을 두른 듯\r\n바람서리 불변함은 우리 기상일세\r\n무궁화 삼천리 화려강산\r\n대한 사람 대한으로 길이 보전하세\r\n\r\n가을 하늘 공활한데 높고 구름 없이\r\n밝은 달은 우리 가슴 일편단심일세\r\n무궁화 삼천리 화려강산\r\n대한 사람 대한으로 길이 보전하세\r\n\r\n이 기상과 이 맘으로 충성을 다하여\r\n괴로우나 즐거우나 나라 사랑하세\r\n무궁화 삼천리 화려강산\r\n대한 사람 대한으로 길이 보전하세');
});
