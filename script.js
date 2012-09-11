/*
 * Je créer une fonction qui vas me permettre d'initialisé la map 
 * Je vais ensuite ajouter ses options 
 * Center: vas me permettre de donner la position initiale de la carte 
 * Zoom: me permet de choisir le niveau de zoom de la carte
 * mapTypeId: me permet de finir le model de map que je veux utiliser
 */


function initialisation(){
    
    var mapOptions = {
        
        center: new google.maps.LatLng(48.856614, 2.3522219000000177),
        zoom:7,
        mapTypeId: google.maps.MapTypeId.HYBRID
       
    };
    /*
     * Avec ma variable global map, je definie toute ma map avec ses option pour l'initialiser 
     */
    map = new google.maps.Map(document.getElementById("map"),
    mapOptions);
      
}  
/*
 * Je creer une nouvelle fonction pour pouvoir faire un itineraire
 * je creer une variable start pour pouvoir récupéré la ville de départ de l'utilisateur
 * je créér une variable end pour pouvoir prendre la ville d'arrivé de l'utilisateur 
 * je créer une variable route et lui indique son origine le point de départ et sa destination le terminus 
 * J'indique ensuite le mode de map que je veux DRIVING
 */
function codeRoute(){
    
    var start = document.getElementById("start");
    var end = document.getElementById("end");
    
    var route = {
        
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMod.DRIViNG
    }; 
    /*
     * Je vais maintenant définir une nouvelle variable pour ajouter une fonctionnalité
     * avec ma variable rendu j'ajoute l'option draggable qui me permet de pouvoir modifier le trajet avec mon curseur 
     */
    var rendu = {
        
        draggable: true
    };
    
    
    
    
}


