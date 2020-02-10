
const permissions = {
    'getUsers': {
    all: ['head_trainee'],
    read : ['trainee', 'trainer','head_trainee'],
    write : ['trainer','head_trainee'],
    delete: [],
    }
    }
    
export const hasPermissions = (moduleName, role, permissionType) => {
    if(permissions[moduleName][permissionType].includes(role)){
    console.log("true")
    return '';
    }else {
    console.log(permissions[moduleName][permissionType].includes(role),'------');
    console.log("false")
    return 'disabled';
    }
    }
    
    hasPermissions("getUsers", "head_trainee", "delete");