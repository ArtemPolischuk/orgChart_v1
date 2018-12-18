export const implementItem = (value, obj, newItem) => {
    let escape = false;

    if(escape) {return}
    for (let prop in obj) {
        console.log('prop: ', prop, 'obj[prop]:', obj[prop]);
        if(obj[prop] === value) {
            console.log('obj: ', obj);
            if(obj.hasOwnProperty('hiddenChildren')) {
                obj.hiddenChildren = [...obj.hiddenChildren, newItem]
            }
            obj.hasOwnProperty('children')
                ? obj.children = [...obj.children, newItem]
                : obj.children = [newItem];

            console.log('obj: ', obj);
            escape = true;
            break;
        } else {
            if(prop === 'children'){
                console.log('here');
                obj[prop].forEach(element => implementItem(value, element, newItem));
                }
            }
        }
};

export const updateTreeItem = (value, obj, itemName, itemType) => {
    let escape = false;

    if(escape) {return}
    for (let prop in obj) {
        console.log('prop: ', prop, 'obj[prop]:', obj[prop]);
        if(obj[prop] === value) {
            console.log('obj: ', obj);
            obj.name = itemName;
            obj.type = itemType;

            console.log('obj: ', obj);
            escape = true;
            break;
        } else {
            if(prop === 'children'){
                console.log('here');
                obj[prop].forEach(element => updateTreeItem(value, element, itemName, itemType));
                }
            }
        }
};

export const hideChildren = (value, obj) => {
    let escape = false;

    if(escape) {return}
    for (let prop in obj) {
        console.log('prop: ', prop, 'obj[prop]:', obj[prop]);
        if(obj[prop] === value) {
            console.log('obj: ', obj);
            obj.hiddenChildren = [...obj.children];
            delete obj.children;
            console.log('obj: ', obj);
            escape = true;
            break;
        } else {
            if(prop === 'children'){
                console.log('here');
                obj[prop].forEach(element => hideChildren(value, element))
            }
        }
    }
};

export const showChildren = (value, obj) => {
    let escape = false;

    if(escape) {return}
    for (let prop in obj) {
        console.log('prop: ', prop, 'obj[prop]:', obj[prop]);
        if(obj[prop] === value) {
            console.log('obj: ', obj);
            obj.children = [...obj.hiddenChildren];

            delete obj.hiddenChildren;
            console.log('obj: ', obj);
            escape = true;
            break;
        } else {
            if(prop === 'children'){
                console.log('here');
                obj[prop].forEach(element => showChildren(value, element))
            }
        }
    }
};

export const removeItem = (value, obj, id) => {
    let escape = false;

    if(escape) {return}
    for (let prop in obj) {
        // console.log('prop: ', prop, 'obj[prop]:', obj[prop]);
        if(obj[prop] === value) {
            console.log('obj: ', obj);
            obj.children.forEach((child, index, array) => {
                if(child.id === id) array.splice(index, 1);
            });

            console.log('obj: ', obj);
            escape = true;
            break;
        } else {
            if(prop === 'children'){
                console.log('here');
                obj[prop].forEach(child => removeItem(value, child, id));
            }
        }
    }
};