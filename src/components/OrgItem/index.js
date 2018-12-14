// Core
import React from 'react';

// Icons
// import arrowDownIcon from '../../arrowDown.svg';
import employeesIcon from '../../employees.svg';
import vacanciesIcon from '../../vacancies.svg';
// import arrowUpIcon from '../../arrowUp.svg';
import dotsIcon from '../../dots.svg';
import userIcon from '../../user.svg';
import arrowUpIcon from '../../arrowUp2.svg'
import arrowDownIcon from '../../arrowDown2.svg'

// Styles
import './index.css'

export default (
    {
        _hideChildrenNodes,
        _showChildrenNodes,
        _setForCreation,
        _setForEditing,
        _toggleItemCreation,
        _toggleItemEditing,
        _deleteItem,
        node,
    }) => {


    const name = node.name.length >= 21 ? node.name.substr(0,17) + '...' : node.name;

    return (
        <div className="orgItem" >
            <div className="orgItem-head">
                <img src={userIcon} alt="userIcon"/>

                <div className="orgItem-head-info">
                    <span className="orgItem-head-heading">{name}</span>
                    <span className="orgItem-head-type">Тип структури: {node.type}</span>
                </div>
            </div>
            <div className="orgItem-main">
                <div className="orgItem-main-item">
                    <img src={employeesIcon} alt="userIcon"/>
                    <a href="#" className="orgItem-main-link">Працівників {node.employees}</a>
                </div>
                <div className="orgItem-main-item">
                    <img src={vacanciesIcon} alt="userIcon"/>
                    <a href="#" className="orgItem-main-link">Вакансій {node.vacancies}</a>
                </div>
            </div>
            <div className='orgItem-options'>
                <img
                    className='orgItem-dots'
                    src={dotsIcon}
                    alt="dotsIcon"
                />
                <div className='orgItem-options-block'>
                <span onClick={()=> {
                    _setForCreation(node.id, node.name);
                    _toggleItemCreation();
                }}>
                    додати
                </span>
                <span onClick={()=> {
                    _setForEditing(node.id, node.name, node.type);
                    _toggleItemEditing();
                }}>
                    редагувати
                </span>

                {node.parent &&
                <span onClick={()=> {
                    console.log('node: ', node);
                    _deleteItem(node.id, node.parent);
                }}>
                    видалити
                </span>}
                </div>
            </div>

            {node.children &&
            <div
                className="orgItem-footer"
                onClick={() => _hideChildrenNodes(node.id)}>
                <img
                    src={arrowUpIcon}
                    alt="arrowUpIcon"
                />
            </div>}

            {node.hiddenChildren &&
            <div
                className="orgItem-footer"
                onClick={() => _showChildrenNodes(node.id)}>
                <img
                    src={arrowDownIcon}
                    alt="arrowDownIcon"
                />
            </div>}
        </div>
    );
};