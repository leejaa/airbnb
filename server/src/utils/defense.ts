import _ from "lodash";

export const defense = (objects: any) => {
    _.forEach(objects, object => {
        Object.keys(object).forEach(key => {
            if (_.isEmpty(object[key])) {
                switch (key) {
                    case 'city':
                        object[key] = '';
                        break;
                    case 'review':
                        object[key] = '';
                        break;
                    default:
                        break;
                }
            }
        });
    });
    return objects;
};