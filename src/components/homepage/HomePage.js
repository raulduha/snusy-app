// Archivo: HomePage.js
import React from 'react';
import './HomePage.css';
import grizzlySnusImage from '../../assets/portada.jpg';  // Asegúrate de que la ruta a la imagen sea correcta
import productImage1 from '../../assets/1snus.png';
import productImage2 from '../../assets/2snus.png';
import productImage3 from '../../assets/3snus.png';
import productImage4 from '../../assets/4snusy.png';
const sections = [
    {
        title: 'Sobre Snus',
        content: (
            <div className="aboutContent">
                <p>
                    Descubre las características únicas del snus que lo diferencian de otros productos de tabaco.
                    Desde su naturaleza sin humo hasta su discreto empaque, descubre por qué el snus es una opción
                    preferida entre los entusiastas del tabaco.
                </p>
                <div className="features">
                    <div className="feature">
                        <h3>Alternativa sin humo</h3>
                        <p>El snus proporciona una experiencia auténtica de tabaco sin humo ni olor.</p>
                    </div>
                    <div className="feature">
                        <h3>Embalaje discreto</h3>
                        <p>El snus viene en paquetes delgados y portátiles, perfectos para su uso sobre la marcha sin llamar la atención.</p>
                    </div>
                    <div className="feature">
                        <h3>Sabor duradero</h3>
                        <p>Con el snus, puedes disfrutar del rico sabor y la liberación de nicotina durante un período prolongado.</p>
                    </div>
                </div>
            </div>
        )
    },
    {
        title: 'Instrucciónes sobre el uso del snus',
        content: (
            <div className="historyContent">
                <p>
                
                </p>
                <div className="historyImages">
                    {/* Asumiendo que las imágenes están en la carpeta src/assets */}
                    <img src={productImage1} alt="instrucción 1" />
                    <img src={productImage2} alt="instrucción 2" />
                    <img src={productImage3} alt="instrucción 3" />
                    <img src={productImage4} alt="instrucción 4" />
                </div>
            </div>
        )
    },
    
    
    {
        title: 'Contacto',
        content: (
            <div className="contactContent">
                <p>
                    Estamos aquí para ayudarte con cualquier consulta o soporte que necesites. Nuestro dedicado equipo de servicio al cliente está disponible para brindarte orientación y asegurarse de que tengas una experiencia fluida con Snus Chile.
                </p>
                {/* ... (información de contacto) */}
            </div>
        )
    },
    
];


const HomePage = () => {
    return (
        <div className="homePage">
            <div className="section photo" style={{ backgroundColor: 'gray !important', backgroundImage: `url(${grizzlySnusImage})` }}>
                <div className="welcomeText">
                    <h1>¡Bienvenido a SNUSYLAB!</h1>
                    <p>
                        Descubre la historia del snus en Chile y por qué se ha convertido en una opción popular entre los entusiastas del tabaco.
                        Explora nuestra amplia selección de productos auténticos de snus y vive los audaces sabores y la comodidad que ofrece el snus.
                        ¡Comienza hoy mismo!
                    </p>
                </div>
            </div>
            {sections.map((section, index) => (
                <div className={`section ${index % 2 === 0 ? 'black' : 'darkGray'}`} key={index}>
                    <h2>{typeof section === 'string' ? section : section.title}</h2>
                    {typeof section === 'string' ? null : section.content}
                    {/* Contenido de la sección aquí */}
                </div>
            ))}
        </div>
    );
};

export default HomePage;


