/*
 Validation File
 for given name
*/

module.exports = function (name1, name2) {

    var validation = {
        error : false,
        msg   : ''
    };

    if(name1 === null || name2 === null){
        validation.error  = true;
        validation.msg    = 'value can`t be null';
    }
    else if(name1 === undefined || name2 === undefined){
        validation.error  = true;
        validation.msg    = 'value can`t be undefined';
    }
    else if(typeof name1 !== 'string' || typeof name2 !== 'string'){
        validation.error  = true;
        validation.msg    = 'type of value is not a string';
    }
    else if(name1 == '' || name2 == ''){
        validation.error  = true;
        validation.msg    = 'value can`t be empty';
    }
    else {
        if(!name1.match(/^[a-zA-Z ]+$/) || !name2.match(/^[a-zA-Z ]+$/)){
            validation.error  = true;
            validation.msg    = 'value should contain only alphabets and or space';
        }
    }

    return validation;
}
