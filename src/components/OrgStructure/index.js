// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import OrgChart from '../OrgChart';
import OrgItem from '../OrgItem';
import Modal from '../Modal';
import LocationSearchInput from '../LocationSearchInput';

// Helpers
import {hideChildren, implementItem, removeItem, showChildren, updateTreeItem} from './helpers';

// Styles
import './index.css';

class OrgStructure extends Component {
    state = {
        isLocationEmpty: false,
        isItemCreating: false,
        isItemRemoving: false,
        isItemEditing: false,
        isNameEmpty: false,
        isTypeEmpty: false,
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
        location: {
            formatted_address: '',
            place_id: '',
        },
        head: {
            full_name: "Випадкове ім'я",
            phone: '+38 099 925 52 12',
            email: 'somemail@mail.com',
            picture: '',
        },
        orgTree: {
            id: 100,
            name: "Головний департамент",
            location: {
                formatted_address: 'Kyivska 12, Kyiv, 011001',
                place_id: '',
            },
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
                    location: {
                        formatted_address: 'Kyivska 12, Kyiv, 011001',
                        place_id: '',
                    },
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
                            location: {
                                formatted_address: 'Kyivska 12, Kyiv, 011001',
                                place_id: '',
                            },
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
                            location: {
                                formatted_address: 'Kyivska 12, Kyiv, 011001',
                                place_id: '',
                            },
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
                                    location: {
                                        formatted_address: 'Kyivska 12, Kyiv, 011001',
                                        place_id: '',
                                    },
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
                                    location: {
                                        formatted_address: 'Kyivska 12, Kyiv, 011001',
                                        place_id: '',
                                    },
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
                    name: "Управління забезпечення перспективного розвитку ПЕК та координації будівництва об’єктів ПЕК",
                    location: {
                        formatted_address: 'Kyivska 12, Kyiv, 011001',
                        place_id: '',
                    },
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
                            location: {
                                formatted_address: 'Kyivska 12, Kyiv, 011001',
                                place_id: '',
                            },
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
                            location: {
                                formatted_address: 'Kyivska 12, Kyiv, 011001',
                                place_id: '',
                            },
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
                    location: {
                        formatted_address: 'Kyivska 12, Kyiv, 011001',
                        place_id: '',
                    },
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

    _toggleItemRemoving = () => {
        this.setState(({isItemRemoving}) => ({isItemRemoving: !isItemRemoving}));
    };

    _setForCreation = (id, name,) => {
        console.log('id, name: ', id, name);
        this.setState({
            currentName: name,
            currentId: id,
        })
    };

    _setForEditing = (currentId, name, itemType, location) => {
        console.log('id, name: ', currentId, name, itemType);
        this.setState({
            currentName: name,
            itemName: name,
            itemType,
            currentId,
            location,
        })
    };

    _setForRemoving = (currentId, parentId) => {
        this.setState({
            currentId,
            parentId,
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

    _handleItemLocation = (location) => {
        console.log('location: ', location);
        
        this.setState({ location });
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

        if(!itemName.trim()) {
            this.setState({isNameEmpty: true});
            return null;
        } else { this.setState({isNameEmpty: false}) }

        if(!itemType.trim() || itemType === 'Типи структур') {
            this.setState({isTypeEmpty: true});
            return null;
        } else { this.setState({isTypeEmpty: false}) }

        if(!location.formatted_address.trim()) {
            this.setState({isLocationEmpty: true});
            return null;
        } else {this.setState({isLocationEmpty: false})}

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
        
        implementItem(currentId, handleOrgTree, newItem);
        this.setState({
            location: {
                formatted_address: '',
                place_id: '',
            },
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
                  location,
              } = this.state;
        const handleOrgTree = {...orgTree};

        console.log('location: ', location);
        
        updateTreeItem(currentId, handleOrgTree, itemName, itemType, location);
        this.setState({
            location: {
                formatted_address: '',
                place_id: '',
            },
            orgTree: handleOrgTree,
            currentName: '',
            currentId: '',
            itemName: '',
            itemType: '',
        });
        this._toggleItemEditing();
    };


    _removeItem = () => {
        const { orgTree, currentId, parentId } = this.state;
        const handleOrgTree = {...orgTree};

        removeItem(parentId, handleOrgTree, currentId);
        this.setState({
            orgTree: handleOrgTree,
            currentId: '',
            parentId: '',
        });
        this._toggleItemRemoving();
    };

    _cancel = () => {
        this.setState({
            location: {
                formatted_address: '',
                place_id: '',
            },
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
        const handleOrgTree = {...this.state.orgTree};

        hideChildren(id, handleOrgTree);
        this.setState({
            orgTree: handleOrgTree
        })
    };

    _showChildrenNodes = (id) => {
        const handleOrgTree = {...this.state.orgTree};

        showChildren(id, handleOrgTree);
        this.setState({
            orgTree: handleOrgTree
        })
    };

    render() {
        const {
                  isLocationEmpty,
                  isItemCreating,
                  isItemRemoving,
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
            // will be changed by getUniqueId func
            const key = Math.random();

            return <option value={type.name} key={key}>{type.name}</option>
        });

        const buttonJSX = isItemCreating
            ? <button onClick={this._createItem} className='modal-button'>Створити</button>
            : <button onClick={this._editItem} className='modal-button'>Редагувати</button>;

        return (
            <div id='orgStructure'>
                <OrgChart
                    tree={orgTree}
                    NodeComponent={OrgItem}
                    _setForCreation={this._setForCreation}
                    _setForEditing={this._setForEditing}
                    _setForRemoving={this._setForRemoving}
                    _toggleItemCreation={this._toggleItemCreation}
                    _hideChildrenNodes={this._hideChildrenNodes}
                    _showChildrenNodes={this._showChildrenNodes}
                    _toggleItemEditing={this._toggleItemEditing}
                    _toggleItemRemoving={this._toggleItemRemoving}
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
                            {isLocationEmpty && <span>Виберить адресу</span>}
                            <label htmlFor="itemLocation">Адреса</label>
                            <LocationSearchInput
                                _handleItemLocation={this._handleItemLocation}
                                location={location}
                                id="itemLocation"
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

                {isItemRemoving &&
                <Modal>
                    <div className="modal-content">
                        <h1>
                            Видалення структури
                        </h1>
                        <p>
                            Ви дійсно бажаєте видалити орг структуру ?<br/>
                            Дочірні структури також будуть видалені
                        </p>

                        <div className='modal-footer'>
                            <button className='modal-button' onClick={() => {
                                this._cancel();
                                this._toggleItemRemoving();
                            }
                            }>Скасувати</button>
                            <button className='modal-button' onClick={this._removeItem}>Видалити</button>
                        </div>
                    </div>
                </Modal>
                }
            </div>
        );
    }
}

// location: {
//     "format_address": string,
//         "place_id": string
// }

OrgStructure.propTypes = {};

export default OrgStructure;
