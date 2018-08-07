
HTMLDivElement.prototype.toggleModal = function (toggle) {
    var modal = this;
    if (!modal.classList.contains('modal')) {
        return false;
    }
    var display = modal.style.display;
    if (toggle != undefined) {
        modal.style.display = !!toggle ? 'block' : 'none';
        return true;
    }
    modal.style.display = (display === 'none' || display === '') ? 'block' : 'none';
    return true;
}


//###Object extensions
Object.prototype.isEmpty = function() {
    for(var key in this) {
        if(this.hasOwnProperty(key))
            return false;
    }
    return true;
}

Object.prototype.toClass = function(classType){
	if(!classType || typeof(classType) != 'function' || !classType.prototype.constructor){ return new Object();}
	var objClass = new classType();
	if(this.isEmpty()){return objClass;}
	for(var eachItem in objClass)
    {
        objClass[eachItem] = this[eachItem] || objClass[eachItem];
    }
	return objClass;
}


