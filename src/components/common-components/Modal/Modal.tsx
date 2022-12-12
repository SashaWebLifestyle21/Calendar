import React from 'react';
import './Modal.css'
import Image from "../Image/Image";

interface IModal {
    title: string
    isOpen: boolean
    onCancel: () => void
    onSubmit: () => void
    children?: React.ReactNode
}


const Modal = ({ title, onCancel, onSubmit, isOpen, children }: IModal) => {
    return (
        <>
            {isOpen &&
                <div className='modal-overlay'>
                    <div className='modal-window'>
                        <div className='modal-header'>
                            <h2 className='modal-title'>{title}</h2>
                            <div>
                                <Image className={'modal-cancel'} src={'../Images/cancel.png'} alt={'cancel'} onClick={onCancel} />
                            </div>
                        </div>
                        <div className='modal-body'>
                            {children}
                        </div>
                        <div className='modal-footer'>
                            <button className='modal-btn-cancel' onClick={onCancel}>Отменить</button>
                            <button className='modal-btn-submit' onClick={onSubmit}>Ок</button>
                        </div>
                    </div>
                </div>
            }
        </>

    );
};

export default Modal;