/* Retourne la date sous format YYYY-mm-dd */

Date.prototype.getYmd = function(){
     return this.getFullYear() + '-' + (this.getMonth() < 10 ? '0' : '') + this.getMonth() + '-' + (this.getDay() < 10 ? '0': '') + this.getDay();
}
