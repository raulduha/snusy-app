// AgeVerificationModal.js
import React from 'react';
import './AgeVerificationModal.css';

function AgeVerificationModal({ onConfirm, onDeny }) {
    return (
        <div className="modal-background">
            <div className="modal-content">
                <h2>Verificación de Edad</h2>
                <p>¿Eres mayor de 18 años?</p>
                <button onClick={onConfirm}>Sí</button>
                <button onClick={onDeny}>No</button>
            </div>
        </div>
    );
}

export default AgeVerificationModal;
