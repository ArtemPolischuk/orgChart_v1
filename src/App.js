import React, { Component } from 'react';
import './App.css';

// Components
import OrgChart from './components/OrgChart';
import OrgItem from './components/OrgItem';
import Modal from './components/Modal';
import LocationSearchInput from './components/LocationSearchInput';

// Styles
import './components/OrgChart/index.css'
import 'react-orgchart/index.css';

class App extends Component {
    state = {
        isNameEmpty: false,
        isTypeEmpty: false,
        isItemEditing: false,
        isItemCreating: false,
        currentId: Number,
        currentName: '',
        itemName: '',
        parentId: Number,
        itemTypes: [
            {
                name: 'Типи структур',
            },
            {
                name: 'Управління',
            },
            {
                name: 'Департамент',
            },
            {
                name: 'Відділ',
            },
        ],
        itemType: '',
        location: 'Kyivska 12, Kyiv, 011001',
        head: {
            full_name: "Випадкове ім'я",
            phone: '+38 099 925 52 12',
            email: 'somemail@mail.com',
            picture: '',
        },
        orgTree: {
            id: 100,
            name: "Головний департамент",
            location: 'Kyivska 12, Kyiv, 011001',
            type: 'Управління',
            head: {
                full_name: "Випадкове ім'я",
                phone: '+38 099 925 52 12',
                email: 'somemail@mail.com',
                picture: '',
            },
            vacancies: 20,
            employees: 34,
            children: [
                {
                    id: 200,
                    parent: 100,
                    name: "Департамент 200",
                    location: 'Kyivska 12, Kyiv, 011001',
                    type: 'Департамент',
                    head: {
                        full_name: "Випадкове ім'я",
                        phone: '+38 099 925 52 12',
                        email: 'somemail@mail.com',
                        picture: '',
                    },
                    vacancies: 20,
                    employees: 34,
                    hiddenChildren: [
                        {
                            id: 210,
                            parent: 200,
                            name: "Відділ 201",
                            location: 'Kyivska 12, Kyiv, 011001',
                            type: 'Відділ',
                            head: {
                                full_name: "Випадкове ім'я",
                                phone: '+38 099 925 52 12',
                                email: 'somemail@mail.com',
                                picture: '',
                            },
                            vacancies: 20,
                            employees: 34,
                        },
                        {
                            id  : 220,
                            parent: 200,
                            name: "Відділ 202",
                            location: 'Kyivska 12, Kyiv, 011001',
                            type: 'Відділ',
                            head: {
                                full_name: "Випадкове ім'я",
                                phone: '+38 099 925 52 12',
                                email: 'somemail@mail.com',
                                picture: '',
                            },
                            vacancies: 20,
                            employees: 34,
                            hiddenChildren: [
                                {
                                    id: 221,
                                    parent: 220,
                                    name: "Відділ 221",
                                    location: 'Kyivska 12, Kyiv, 011001',
                                    type: 'Відділ',
                                    head: {
                                        full_name: "Випадкове ім'я",
                                        phone: '+38 099 925 52 12',
                                        email: 'somemail@mail.com',
                                        picture: '',
                                    },
                                    vacancies: 20,
                                    employees: 34,
                                },
                                {
                                    id: 222,
                                    parent: 220,
                                    name: "Відділ 222",
                                    location: 'Kyivska 12, Kyiv, 011001',
                                    type: 'Відділ',
                                    head: {
                                        full_name: "Випадкове ім'я",
                                        phone: '+38 099 925 52 12',
                                        email: 'somemail@mail.com',
                                        picture: '',
                                    },
                                    vacancies: 20,
                                    employees: 34,
                                }
                            ]
                        }
                    ]
                },
                {
                    id: 300,
                    parent: 100,
                    name: "Департамент 300",
                    location: 'Kyivska 12, Kyiv, 011001',
                    type: 'Департамент',
                    head: {
                        full_name: "Випадкове ім'я",
                        phone: '+38 099 925 52 12',
                        email: 'somemail@mail.com',
                        picture: '',
                    },
                    vacancies: 20,
                    employees: 34,
                    hiddenChildren: [
                        {
                            id: 310,
                            parent: 300,
                            name: "Відділ 310",
                            location: 'Kyivska 12, Kyiv, 011001',
                            type: 'Відділ',
                            head: {
                                full_name: "Випадкове ім'я",
                                phone: '+38 099 925 52 12',
                                email: 'somemail@mail.com',
                                picture: '',
                            },
                            vacancies: 20,
                            employees: 34,
                        },
                        {
                            id: 320,
                            parent: 300,
                            name: "Відділ 320",
                            location: 'Kyivska 12, Kyiv, 011001',
                            type: 'Відділ',
                            head: {
                                full_name: "Випадкове ім'я",
                                phone: '+38 099 925 52 12',
                                email: 'somemail@mail.com',
                                picture: '',
                            },
                            vacancies: 20,
                            employees: 34,
                        }
                    ]
                },
                {
                    id: 400,
                    parent: 100,
                    name: "Департамент 400",
                    location: 'Kyivska 12, Kyiv, 011001',
                    type: 'Департамент',
                    head: {
                        full_name: "Випадкове ім'я",
                        phone: '+38 099 925 52 12',
                        email: 'somemail@mail.com',
                        picture: '',
                    },
                    vacancies: 20,
                    employees: 34,
                },
            ]
        },
    };

    _toggleItemCreation = () => {
        this.setState(({isItemCreating}) => ({isItemCreating: !isItemCreating}))
    };

    _toggleItemEditing = () => {
        this.setState(({isItemEditing}) => ({isItemEditing: !isItemEditing}))
    };

    _setForCreation = (id, name,) => {
        console.log('id, name: ', id, name);
        this.setState({
            currentName: name,
            currentId: id,
        })
    };

    _setForEditing = (id, name, type,) => {
        console.log('id, name: ', id, name, type);
        this.setState({
            currentName: name,
            itemName: name,
            itemType: type,
            currentId: id,
        })
    };

    _handleItemName = (event) => {
        const { value } = event.target;

        this.setState({ itemName: value });
    };

    _handleItemType = (event) => {
        const { value } = event.target;
        console.log('value: ', value);
        this.setState({ itemType: value });
    };

    _handleLocation = (event) => {
        const { value } = event.target;

        this.setState({ location: value });
    };

    _handleHead = (event) => {
        const { value } = event.target;

        this.setState({ head: value });
    };

    _createItem = () => {
        const {
            currentId,
            itemName,
            location,
            itemType,
            orgTree,
            head,
              } = this.state;
        console.log('itemName,itemType,parentId,location,head: ', itemName,itemType,currentId,location,head);

        if(!itemName.trim()) {
            this.setState({isNameEmpty: true});
            return null;
        } else { this.setState({isNameEmpty: false}) }

        if(!itemType.trim()) {
            this.setState({isTypeEmpty: true});
            return null;
        } else { this.setState({isTypeEmpty: false}) }

        const newItem = {
            id: Math.random(),
            parent: currentId,
            name: itemName,
            vacancies: 20,
            employees: 34,
            location,
            type: itemType,
            head,
        };
        const handleOrgTree = {...orgTree};

        console.log('newItem: ', newItem);
        
        let f = false;
        const findObjectWithId = (value, obj) => {

            if(f) {return}
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
                    f = true;
                    break;
                } else {
                    if(prop === 'children'){
                        console.log('here');
                        obj[prop].forEach(element => findObjectWithId(value, element))
                    }
                }
            }
        };

        findObjectWithId(currentId, handleOrgTree);

        this.setState({
            orgTree: handleOrgTree,
            isNameEmpty: false,
            isTypeEmpty: false,
            parentId: Number,
            currentName: '',
            currentId: '',
            itemName: '',
            itemType: '',
        });

        this._toggleItemCreation();
    };

    _editItem = () => {
        const {
                  currentId,
                  itemName,
                  itemType,
                  orgTree,
              } = this.state;

        const handleOrgTree = {...orgTree};

        let f = false;
        const findObjectWithId = (value, obj) => {

            if(f) {return}
            for (let prop in obj) {
                console.log('prop: ', prop, 'obj[prop]:', obj[prop]);
                if(obj[prop] === value) {
                    console.log('obj: ', obj);
                    obj.name = itemName;
                    obj.type = itemType;

                    console.log('obj: ', obj);
                    f = true;
                    break;
                } else {
                    if(prop === 'children'){
                        console.log('here');
                        obj[prop].forEach(element => findObjectWithId(value, element))
                    }
                }
            }
        };

        findObjectWithId(currentId, handleOrgTree);


        this.setState({
            orgTree: handleOrgTree,
            currentName: '',
            currentId: '',
            itemName: '',
            itemType: '',
        });

        this._toggleItemEditing();
    };

    _deleteItem = (id, parent) => {
        console.log('id: ', id);
        console.log('parent: ', parent);
        const { orgTree } = this.state;

        const handleOrgTree = {...orgTree};

        let f = false;
        const findObjectWithId = (value, obj) => {

            if(f) {return}
            for (let prop in obj) {
                // console.log('prop: ', prop, 'obj[prop]:', obj[prop]);
                if(obj[prop] === value) {
                    console.log('obj: ', obj);
                    obj.children.forEach((child, index, array) => {
                        if(child.id === id) array.splice(index, 1);
                    });

                    console.log('obj: ', obj);
                    f = true;
                    break;
                } else {
                    if(prop === 'children'){
                        console.log('here');
                        obj[prop].forEach(child => findObjectWithId(value, child));
                    }
                }
            }
        };

        findObjectWithId(parent, handleOrgTree);

        this.setState({
            orgTree: handleOrgTree,
        });
    };

    _cancel = () => {
        this.setState({
            isItemEditing: false,
            isItemCreating: false,
            isTypeEmpty: false,
            isNameEmpty: false,
            parentId: Number,
            currentName: '',
            currentId: '',
            itemName: '',
            itemType: '',
        })
    };

    _hideChildrenNodes = (id) => {
        console.log(id);
        
        const handleOrgTree = {...this.state.orgTree};

        let f = false;
        const findObjectWithId = (value, obj) => {

            if(f) {return}
            for (let prop in obj) {
                console.log('prop: ', prop, 'obj[prop]:', obj[prop]);
                if(obj[prop] === value) {
                    console.log('obj: ', obj);
                    obj.hiddenChildren = [...obj.children];
                    delete obj.children;
                    console.log('obj: ', obj);
                    f = true;
                    break;
                } else {
                   if(prop === 'children'){
                       console.log('here');
                     obj[prop].forEach(element => findObjectWithId(value, element))
                   }
                }
            }
        };

        findObjectWithId(id, handleOrgTree);


        console.log('handleOrgTree: ', handleOrgTree);
        this.setState({
            orgTree: handleOrgTree
        })
    };

    _showChildrenNodes = (id) => {
        console.log(id);

        const handleOrgTree = {...this.state.orgTree};

        let f = false;
        const findObjectWithId = (value, obj) => {

            if(f) {return}
            for (let prop in obj) {
                console.log('prop: ', prop, 'obj[prop]:', obj[prop]);
                if(obj[prop] === value) {
                    console.log('obj: ', obj);
                    obj.children = [...obj.hiddenChildren];

                    delete obj.hiddenChildren;
                    console.log('obj: ', obj);
                    f = true;
                    break;
                } else {
                    if(prop === 'children'){
                        console.log('here');
                        obj[prop].forEach(element => findObjectWithId(value, element))
                    }
                }
            }
        };

        findObjectWithId(id, handleOrgTree);

        console.log('handleOrgTree: ', handleOrgTree);
        this.setState({
            orgTree: handleOrgTree
        })
    };

    render() {
        const {
            isItemCreating,
            isItemEditing,
            isNameEmpty,
            isTypeEmpty,
            orgTree,
            itemTypes,
            itemName,
            itemType,
            location,
            head,
        } = this.state;
        
        const headerJSX = isItemCreating
            ? `Створення дочірньої установи`
            : `Редагування установи`;
            // ? `створення дочірньої установи « ${currentName} »`
            // : `редагування установи « ${currentName} »`;

        const optionsJSX = itemTypes.map((type) => {
            const key = Math.random();

            return <option value={type.name} key={key}>{type.name}</option>
        });

        const buttonJSX = isItemCreating
            ? <button onClick={this._createItem} className='modal-button'>Створити</button>
            : <button onClick={this._editItem} className='modal-button'>Редагувати</button>;

        return (
            <div id='initechOrgChart'>
                <OrgChart
                    tree={orgTree}
                    NodeComponent={OrgItem}
                    _setForCreation={this._setForCreation}
                    _setForEditing={this._setForEditing}
                    _toggleItemCreation={this._toggleItemCreation}
                    _hideChildrenNodes={this._hideChildrenNodes}
                    _showChildrenNodes={this._showChildrenNodes}
                    _toggleItemEditing={this._toggleItemEditing}
                    _deleteItem={this._deleteItem}
                />
                {(isItemCreating || isItemEditing) &&
                    <Modal>
                        <div className="modal-content">
                            <h1>{headerJSX}</h1>
                            <div className='modal-input-wrapper'>
                                {isNameEmpty && <span>Введіть назву установи</span>}
                                <label htmlFor="itemName">Назва установи</label>
                                <input
                                    type="text"
                                    id="itemName"
                                    value={itemName}
                                    className={`modal-input ${isNameEmpty && 'modal-input-error'}`}
                                    onChange={this._handleItemName}
                                />
                            </div>
                            <div className='modal-input-wrapper'>
                                {isTypeEmpty && <span>Оберіть тип установи</span>}
                                <label htmlFor="itemType">Тип установи</label>
                                <select
                                    id="itemType"
                                    className={`modal-input ${isTypeEmpty && 'modal-input-error'}`}
                                    value={itemType}
                                    onChange={this._handleItemType}
                                >
                                    {optionsJSX}
                                </select>
                            </div>
                            <div className='modal-input-wrapper'>
                                <label htmlFor="itemLocation">Адреса</label>
                                <input
                                    type="text"
                                    id="itemLocation"
                                    value={location}
                                    disabled
                                    className='modal-input'
                                    onChange={this._handleLocation}
                                />
                            </div>
                            <div className='modal-input-wrapper'>
                                <label htmlFor="itemHead">Керівник</label>
                                <input
                                    type="text"
                                    id="itemLocation"
                                    value={head.full_name}
                                    className='modal-input'
                                    disabled
                                    onChange={this._handleHead}
                                />
                            </div>
                            <div className='modal-footer'>
                                <button className='modal-button' onClick={this._cancel}>Скасувати</button>
                                {buttonJSX}
                            </div>
                        </div>
                    </Modal>
                }
            </div>
        );
    }
}

export default App;