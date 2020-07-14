$(document).ready(function() {
    
});


$(document).ready(function(){
	$("#menu a").click(function(){
		$("#top").append('<div class="loader"></div>'); // On ajoute le loader en haut
		page=$(this).attr("href");
		$.ajax({
			url: "contenu/"+page,
			cache:false,
			success:function(html){
				afficher(html);
			},
			error:function(XMLHttpRequest,textStatus, errorThrown){
				afficher("erreur lors du chagement de la page");
			}
		})
		return false;
	});
});

function afficher(data){
$(".loader").remove(); // On supprime le loader
$("#contenu").fadeOut(500,function(){
	$("#contenu").empty();
	$("#contenu").append(data);
	$("#contenu").fadeIn(1000);
})
}