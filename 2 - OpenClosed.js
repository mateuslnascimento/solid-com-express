'use strict';

let allowedRoles = ['admin', 'owner'];

const checkPrivilege = (user) => {
    if (allowedRoles.includes(user.role)) return true;

    return false;
}

const addRoles = (role) => allowedRoles.push(role);