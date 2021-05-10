/** 
 * This is an FLAMES algorithm by passing
 * two names can get a relation ship of 
 * those name.

   @Author Arunkumar
 */

var validate = require('./validate');

module.exports = function (name1, name2) {

    var checkValidation = validate(name1,name2);

    if(checkValidation.error){
        throw new Error(checkValidation.msg);
    }

    name1 = name1.replace(/ /g, '').toLowerCase();
    name2 = name2.replace(/ /g, '').toLowerCase();

    for (i = 0; i < name1.length; i++) {
        for (var j = 0; j < name2.length; j++) {
            if (name1[i] == name2[j]) {
                name1 = name1.slice(0, i) + '#' + name1.slice(i + 1);
                name2 = name2.slice(0, j) + '#' + name2.slice(j + 1);
                break;
            }
        }
    }

    var a = (name1 + name2).replace(/\#/g, '');
    var l = a.length;
    var f = 'FLAMES';

    while (f.length != 1) {

        var mod = 0;
        if (l > f.length) {
            mod = l % f.length;
        }
        else {
            mod = f.length % l;
        }
        if (mod == 0) {
            mod = f.length;
        }
        f = f.slice(mod) + f.slice(0, mod - 1);

    }

    var relation = '';

    switch (f) {
        case "F":
            relation = "Friend";
            break;
        case "L":
            relation = "Love";
            break;
        case "A":
            relation = "Affection";
            break;
        case "M":
            relation = "Marriage";
            break;
        case "E":
            relation = "Enemy";
            break;
        case "S":
            relation = "Sister";
            break;
        default:
            relation = "Sorry no result found";
    }

    return relation;

};