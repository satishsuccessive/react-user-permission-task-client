
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
    return '';
    }else {
    return 'disabled';
    }
    }
    
    hasPermissions("getUsers", "head_trainee", "delete");