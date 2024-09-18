document.addEventListener("DOMContentLoaded", function () {
		var openPopupButton = document.getElementById("open-popup");
		var nombreInput = document.getElementById("nombre");

		if (openPopupButton && nombreInput && popupNameElement && popupElement) {
        	openPopupButton.addEventListener("click", function (event) {
            
            event.preventDefault();
        
            popupElement.classList.add("active");

            
            setTimeout(function () {
                window.location.href = "../../public/pages/Home.html";
            }, 2500); 
			});
		} else {
			console.error("No se encontraron elementos necesarios para abrir el popup en el DOM.");
		}

		var successPopupButton = document.getElementById("success-popup-btn");

			if (successPopupButton) {
				successPopupButton.addEventListener("click", function () {
					popupElement.classList.remove("active");

					
					window.location.href = "../../public/pages/Home.html";
				});
			} else {
				console.error("No se encontró el botón 'success-popup-btn' en el DOM.");
			}
	});




document.addEventListener("DOMContentLoaded", function () {

    var urlParams = new URLSearchParams(window.location.search);
    var mensajeRegistro = urlParams.get('mensaje_registro');


    if (mensajeRegistro) {
        var successPopup = document.querySelector('.popup');
        var successMessage = document.querySelector('.success');
        successMessage.innerText = mensajeRegistro;
        successPopup.classList.add('active');
    }
});


