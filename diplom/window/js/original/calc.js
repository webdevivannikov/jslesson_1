function calc() {
	//calc

	let popup_calc_btn = document.querySelectorAll('.popup_calc_btn'),
		popup_calc = document.querySelector('.popup_calc'),
		popup_calc_close = document.querySelector('.popup_calc_close'),
		popup_calc_content = document.querySelector('.popup_calc_content'),
		popup_calc_button = document.querySelector('.popup_calc_button'),
		popup_calc_profile = document.querySelector('.popup_calc_profile'),
		popup_calc_profile_content = document.querySelector('.popup_calc_profile_content'),
		popup_calc_profile_button = document.querySelector('.popup_calc_profile_button'),
		popup_calc_profile_close = document.querySelector('.popup_calc_profile_close'),
		popup_calc_end = document.querySelector('.popup_calc_end'),
		popup = document.querySelector('.popup'),
		popup_engineer = document.querySelector('.popup_engineer'),
		popup_calc_end_close = document.querySelector('.popup_calc_end_close'),
		balcon_icons = document.querySelector('.balcon_icons'),
		big_img = document.querySelector('.big_img'),
		form_attr = document.querySelectorAll('.form_attr'),
		mainList = {};

	//появляется калькулятор
	for (let i = 0; i < popup_calc_btn.length; i++){
		popup_calc_btn[i].addEventListener('click', () => {

			popup_calc.style.display = "block";
			document.body.style.overflow = 'hidden';

		});

	}

	function getChar(event) {
	   if (event.which == null) {
	     if (event.keyCode < 32) return null;
	     return String.fromCharCode(event.keyCode) // IE
	   }

	   if (event.which != 0 && event.charCode != 0) {
	     if (event.which < 32) return null;
	     return String.fromCharCode(event.which) // остальные
	   }

	   return null; // специальная клавиша
	}
	
	for (let i = 0; i < form_attr.length; i++){
		form_attr[i].onkeypress = function(e) {
		  e = e || event;

		  if (e.ctrlKey || e.altKey || e.metaKey) return;

		  let chr = getChar(e);

		  if (chr == null) return;

		  if (chr < '0' || chr > '9') {
		    return false;
		  }
		}
	}

	//close
	popup_calc_close.addEventListener('click', (event) => {
		event.preventDefault();
		popup_calc.style.display = "none";
		document.body.style.overflow = '';
	});

	popup_calc_profile_close.addEventListener('click', (event) => {
		popup_calc.style.display = "none";
		popup_calc_profile.style.display = "none";
		document.body.style.overflow = '';
	});	

	popup_calc_end_close.addEventListener('click', (event) => {
		popup_calc.style.display = "none";
		popup_calc_profile.style.display = "none";
		popup_calc_end.style.display = "none";

		document.body.style.overflow = '';
	});


	//closePopup(popup_calc, popup_calc_content);

/*	popup_calc_profile.addEventListener('click', (event) => {
		event.preventDefault();
		let target = event.target;
		console.log(target)
		if (!target.matches popup_calc_profile_content || !popup_calc_profile_content.contains(target) ) {
		
			popup_calc_profile.style.display = "none";
			document.body.style.overflow = '';
		} 

	});*/
	document.body.addEventListener('click', function (event) {
		let target = event.target;
			if(target.classList.contains('popup') || target.classList.contains('popup_calc') || target.classList.contains('popup_engineer')) {
				popup_calc.style.display = 'none';
				popup.style.display = 'none';
				popup_engineer.style.display = 'none';
			}
		});
	balcon_icons.addEventListener('click', (event)=> {
		event.preventDefault();
		let target = event.target;
		switch (target.parentElement.className) {
		 	case 'type1':
		 		document.getElementById("type2").style.display = "none";
		 		document.getElementById("type3").style.display = "none";
		 		document.getElementById("type4").style.display = "none";
		 		document.getElementById("type1").style.display = "inline-block";
		 		mainList.type = 'type1';
		 		break;
	 		case 'type2':
	 			document.getElementById("type1").style.display = "none";
			 	document.getElementById("type3").style.display = "none";
			 	document.getElementById("type4").style.display = "none";
		 		document.getElementById("type2").style.display = "inline-block";
		 		mainList.type = 'type2';
	 			break;
		 	case 'type3':
		 		document.getElementById("type1").style.display = "none";
			 	document.getElementById("type2").style.display = "none";
			 	document.getElementById("type4").style.display = "none";
		 		document.getElementById("type3").style.display = "inline-block";
		 		mainList.type = 'type3';
		 		break;
	 		case 'type4':
	 			document.getElementById("type1").style.display = "none";
			 	document.getElementById("type2").style.display = "none";
			 	document.getElementById("type3").style.display = "none";
		 		document.getElementById("type4").style.display = "inline-block";
		 		mainList.type = 'type4';
	 			break;
		 	default:
		 		break;
		 };
	});


	//закрываем окно с шириной и высотой
	popup_calc_button.addEventListener('click', (event) => {
		mainList.width = document.getElementById('width');
		mainList.height = document.getElementById('height');
		popup_calc.style.display = "none";
		popup_calc_profile.style.display = "block";
		
	});


	let chooseChecked = false;	
	popup_calc_profile_content.addEventListener('click', (event) => {
		let i = document.getElementById("view_type").options.selectedIndex;
		mainList.view_type = document.getElementById("view_type").options[i].text;

		let checkbox = document.getElementsByName('checkbox-test');
			
		  for (let i = 0; i < checkbox.length; i++) {
		    if (checkbox[i].checked) {
		        mainList.profile = checkbox[i].value;    
		        chooseChecked = true;
		        break;
		    } else {
		    	chooseChecked = false;
		    }
		  }
	});  


	popup_calc_profile_button.addEventListener('click', (event) => {
		if (chooseChecked) {
        	popup_calc.style.display = "none";
        	popup_calc_profile.style.display = "none";
        	popup_calc_end.style.display = "block";
    	}
    }); 
	
		

}

module.exports = calc;