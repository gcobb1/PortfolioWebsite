console.log('It Works')

$(document).ready(function () {
	$('.submit').click(function (event) {
		console.log('Clicked Button')

		var email = $('.email').val()

		var message = $('.message').val()
		var subject = $('.subject').val()
		var name = $('.name').val()
		var statusElm = $('.status')
		statusElm.empty()
		var flag = 0;
		if(email.length > 5 && email.includes('@') && email.includes('.')) {
		}
		else{
			event.preventDefault()
			statusElm.append('<div>Email is not valid</div>')
			flag = 1;
		}
		if(name.length < 2){	
			event.preventDefault()
			statusElm.append('<div>Name Must Be Longer</div>')
			flag = 1;
		}
	
		if(subject.length < 2){	
			event.preventDefault()
			statusElm.append('<div>Subject Must Be Longer</div>')
			flag = 1;
		}
		if(message.length < 2){
			event.preventDefault()
			statusElm.append('<div>Message Must Be Longer</div>')
			flag = 1;
		}
		if(flag == 0){
			statusElm.append('<div>Successfully Sent!</div>')
		}
		else{	
			statusElm.append('<div>Try Again Please</div>')
		}
	})
})
