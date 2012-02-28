/* Permet de retrouver le plus près élément en remontant le dom */

(function($) {
    /*
     * Retrieve the nearest selector
     * 
     * @author Danny Turcotte <turcottedanny@gmail.com>
     */
   
    $.fn.nearest = function (selector){
          if($(this).find(selector).length){
            return $(this).find(selector);
          }else if($(this).parent()){
            return $(this).parent().nearest(selector);
          }else{
            return false;
          }
    }
})(jQuery);
