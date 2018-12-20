// Core
import React from 'react';

// Icons
// import arrowDownIcon from '../../arrowDown.svg';
import employeesIcon from '../../employees.svg';
import vacanciesIcon from '../../vacancies.svg';
// import arrowUpIcon from '../../arrowUp.svg';
import dotsIcon from '../../dots2.svg';
import userIcon from '../../userGrey.svg';
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
        _setForRemoving,
        _toggleItemCreation,
        _toggleItemEditing,
        _toggleItemRemoving,
        node,
    }) => {


    const name = node.name.length >= 21 ? node.name.substr(0,20) + '...' : node.name;

    return (
        <div className="orgItem" >
            <div className="orgItem-head">
                <img src={userIcon} alt="userIcon" className="orgItem-head-img"/>
                <div className="orgItem-L">
                    <div className="orgItem-head">
                        <img src={userIcon} alt="userIcon" className='orgItem-L-img'/>
                        <div className="orgItem-head-info">
                            <span className="orgItem-head-heading">{node.name}</span>
                            <span className="orgItem-L-head-type">Тип структури: {node.type}</span>
                        </div>
                    </div>
                    <div className="orgItem-L-main">
                        <div className="orgItem-L-info">
                            <span className="orgItem-staticData">Керівник</span>
                            <span className='orgItem-data'>{node.head.full_name}</span>
                        </div>
                        <div className="orgItem-L-info">
                            <span className="orgItem-staticData">Електронна адреса</span>
                            <span className='orgItem-data'>{node.head.email}</span>
                        </div>
                        <div className="orgItem-L-info">
                            <span className="orgItem-staticData">Телефон</span>
                            <span className='orgItem-data'>{node.head.phone}</span>
                        </div>
                        <div className="orgItem-L-info">
                            <span className="orgItem-staticData">Адреса</span>
                            <span className='orgItem-data'>{node.location.formatted_address}</span>
                        </div>
                    </div>
                </div>
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
                    _setForEditing(node.id, node.name, node.type, node.location);
                    _toggleItemEditing();
                }}>
                    редагувати
                </span>

                {node.parent &&
                <span onClick={()=> {
                    console.log('node: ', node);
                    _setForRemoving(node.id, node.parent);
                    _toggleItemRemoving();
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

// (
//     <div className="orgItem-L" id="l">
//         <div className="orgItem-head">
//             <img src={userIcon} alt="userIcon" className='orgItem-L-img'/>
//             <div className="orgItem-head-info">
//                 <span className="orgItem-head-heading">{node.name}</span>
//                 <span className="orgItem-L-head-type">Тип структури: {node.type}</span>
//             </div>
//         </div>
//         <div className="orgItem-L-main">
//             <div className="orgItem-L-info">
//                 <span className="orgItem-staticData">Керівник</span>
//                 <span className='orgItem-data'>{node.head.full_name}</span>
//             </div>
//             <div className="orgItem-L-info">
//                 <span className="orgItem-staticData">Адреса</span>
//                 <span className='orgItem-data'>{node.location}</span>
//             </div>
//             <div className="orgItem-L-info">
//                 <span className="orgItem-staticData">Електронна адреса</span>
//                 <span className='orgItem-data'>{node.head.email}</span>
//             </div>
//             <div className="orgItem-L-info">
//                 <span className="orgItem-staticData">Телефон</span>
//                 <span className='orgItem-data'>{node.head.phone}</span>
//             </div>
//         </div>
// )