
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

Object.prototype.toPrototype = function(targetPrototype){
	if(!targetPrototype || typeof(targetPrototype) != 'object' || !targetPrototype.constructor){ return new Object();}
	var sourceObject = this;
	var targetObject = new Object();

	try{targetObject = new targetPrototype.constructor();}catch(error){console.warn(error);try{targetObject = new targetPrototype.constructor({});}catch(e){console.error(e);}}

	if(this.isEmpty()){return objClass;}

	for(var item in targetObject)
    {
        (sourceObject[item] || typeof(sourceObject[item]) == 'boolean') && (targetObject[item] = sourceObject[item]);
    }

	return targetObject;
}


function dynamicSort(property, isAsc = true) {
    var sortOrder = isAsc ? 1 : -1;
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}
function sortArrayOfObjects(arrayOfObjects, searchOn){
	return arrayOfObjects.sort(dynamicSort(searchOn));
}

//
if (!Array.prototype.sortObjects) {
    Object.defineProperty(Array.prototype, 'sortObjects', {
        value: (function () {
            function dynamicSort(property, isAsc) {
                var sortOrder = (isAsc || isAsc === undefined) ? 1 : -1;
                return function (a, b) {
                    var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
                    return result * sortOrder;
                }
            }

            return function (searchOn, isAsc) {
                var arrayOfObjects =  Array.from(this);
                return arrayOfObjects.sort(dynamicSort(searchOn, isAsc));
            }
        })()
    });
}







//this comment is not required... used for testing git revert