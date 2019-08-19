  var API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjA1OWIxODUyYzQ4NDc1OTZhODU4ZTUyYWQ5MjFhZDM0MDdjZWY1Y2E5ZTQ4OTEzZTdiMWQyN2RkZTAxMGE2MGZhYTMyMzM4OWIzOTc5M2UwIn0.eyJhdWQiOiIxMCIsImp0aSI6IjA1OWIxODUyYzQ4NDc1OTZhODU4ZTUyYWQ5MjFhZDM0MDdjZWY1Y2E5ZTQ4OTEzZTdiMWQyN2RkZTAxMGE2MGZhYTMyMzM4OWIzOTc5M2UwIiwiaWF0IjoxNTU0NTMyMDE4LCJuYmYiOjE1NTQ1MzIwMTgsImV4cCI6MTg3MDE1MTIxOCwic3ViIjoiMTYyNSIsInNjb3BlcyI6WyJ1c2VyQmFzZUluZm8iLCJ1c2VyRGV0YWlsZWRJbmZvIiwidXNlckNvdXJzZUluZm8iXX0.RSUGpL9JBmNq0CetjzSXpSJC7KD-6W7SjGzUNsJkG_HljyFM5DfHw3r9vn477pPKV_Dqh50TQ7SrIWksVVJrnHoI-m19og_FwNO4QPpPjVXbepiAuDrkDQ3E2Sje7K0qbdmkHtQQ0wNxv50ImvVW4hLWPNUBN6x95z9E8AQ6j0ONSqDni2tlIe7JHRDmQ0G-Owj-prGpCzhDryURplQDHwc4iau0Jg39n6JlDovaAkwwrfWBGGIoAF9tVptCk_DzFZTIiOeeB7jIwxMy_BiRLp8Etdu52os2HcN_0-8zQWL-10pXgg9_33WtEiyifh69Hb7L38W-F7ohQnL7L4ERQvLO3U3UTZamP9_yJJIyqZ2ap6Q8nrNjQUUNFAu2-7DQrc2goddlRfeqgr4u6CuYTSHTR8CT03xArErTn8tDI1EWFMzrleG__tcIIKzkqZ01POScYaKUShrTRqHr-Bpf9gWhgtKR6XoPIA1YmhbFJKqUioVaCtkQ2X6B4uVlxIBvh0xLO4LZNWjfJbeiLGnmAu8Zk9HSVQPPF296WCO2OxDPrItlsa8A6xjrOwUg_sSHE9orhnGWX-6inaZgOsn93uObLoDZhbtFVg8NLmNF-eeFrmlLxaVuhVaGo2RLdRYr4huGP24idmqjIynayYMtf70uYufPdPvuVp6t0qp5MKg';
  var client = new INTITAClient({
    key: API_KEY,
 });

client.getUserDetails(function (error, data) {
    document.getElementById('name').innerText = data.firstName + " " + data.secondName;
    document.getElementById('email').innerText = data.email;
    document.getElementById('phone').innerText = data.phone;
    document.getElementById('address').innerText = data.address;
    document.getElementById('facebook').href = data.facebook;
});

client.getCourseInfo(1, function(error,data){
   	document.getElementById('course').innerText = "I chose the course " + data['title_en'] + ".";
});

client.getModuleInfo(1, function(error, data){
	document.getElementById('moduleIntro').innerText = data['title_en'];
});

client.getModuleInfo(2, function(error, data){
	document.getElementById('moduleMath').innerText = data['title_en'];
});

client.getModuleInfo(3, function(error, data){
	document.getElementById('moduleCLanguage').innerText = data['title_en'];
});

client.getModuleInfo(4, function(error, data){
	document.getElementById('moduleHigherMath').innerText = data['title_en'];
});

client.getModuleInfo(7, function(error, data){
	document.getElementById('moduleNetworks').innerText = data['title_en'];
});

client.getModuleInfo(9, function(error, data){
	document.getElementById('moduleAlgorithms').innerText = data['title_en'];
});

client.getModuleInfo(10, function(error, data){
	document.getElementById('moduleDiscreteMath').innerText = data['title_en'];
});

client.getModuleInfo(11, function(error, data){
	document.getElementById('moduleDatabases').innerText = data['title_en'];
});

client.getModuleInfo(16, function(error, data){
	document.getElementById('modulePHP1').innerText = data['title_en'];
});

client.getModuleInfo(17, function(error, data){
	document.getElementById('modulePHP2').innerText = data['title_en'];
});

client.getModuleInfo(18, function(error, data){
	document.getElementById('moduleHTML').innerText = data['title_en'];
});

client.getModuleInfo(20, function(error, data){
	document.getElementById('moduleJavaScript').innerText = data['title_en'];
});

client.getModuleInfo(22, function(error, data){
	document.getElementById('moduleModern').innerText = data['title_en'];
});
