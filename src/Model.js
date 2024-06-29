import React from 'react';
import ReactDOM from 'react-dom';

const MODAL_STYLES = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'rgb(34, 34, 34)',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '90%',
  width: '90%',
  borderRadius: '25px',
};

const OVERLAY_STYLE = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.7)',
  zIndex: 1000,
  
};

export default function Model({ children, onClose }) {
  return ReactDOM.createPortal(
    <div >
      <div style={OVERLAY_STYLE} />
    

     
      <div style={MODAL_STYLES}>
      <button className='btn btn-danger'style={{marginTop:"15px",marginLeft:"90%",borderRadius:"10px"}} onClick={onClose}>
        X
        </button>
        {children}
       
      </div>
      
      
    </div>,
    document.getElementById('cart-root')
  );
}
