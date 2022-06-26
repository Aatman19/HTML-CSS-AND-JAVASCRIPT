(function () {
	var name=["Aatman","John","Kevin","Jacob","Alex","Jotaro","Kim","Jolly"];
	for (var i = 0; i < name.length; i++) {
		var firstLetter = name[i].charAt(0).toLowerCase();
		if (firstLetter === 'j') {
			saygoodbye(name[i])
		}
		else{
			sayhello(name[i])
		}
	}
})();