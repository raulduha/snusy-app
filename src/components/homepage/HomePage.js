// Archivo: HomePage.js
import React from 'react';
import './HomePage.css';
import grizzlySnusImage from '../../assets/GrizzlySnus.jpg';  // Asegúrate de que la ruta a la imagen sea correcta
import productImage1 from '../../assets/snp1.jpg';
import productImage2 from '../../assets/snp2.jpg';
import productImage3 from '../../assets/snp3.jpg';
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
        title: 'Historia del Snus',
        content: (
            <div className="historyContent">
                <p>
                    Sumérgete en la fascinante historia del snus, un producto de tabaco con raíces centenarias.
                    Desde sus orígenes en Suecia hasta su popularidad internacional, descubre cómo el snus ha
                    evolucionado a lo largo del tiempo y se ha convertido en una opción favorita para los amantes del tabaco.
                </p>
                <div className="historyImages">
                    {/* Asumiendo que las imágenes están en la carpeta src/assets */}
                    <img src={productImage1} alt="Historia 1" />
                    <img src={productImage2} alt="Historia 2" />
                    <img src={productImage3} alt="Historia 3" />
                </div>
            </div>
        )
    },
    
    {
        title: 'Cómo Hacer un Pedido',
        content: (
            <div className="orderingContent">
                <p>
                    Realizar un pedido de tus productos favoritos de snus es rápido y sencillo. Sigue nuestra guía paso a paso para completar tu compra sin complicaciones. Ofrecemos múltiples opciones de pago y brindamos servicios de envío confiables para asegurarnos de que tu pedido te llegue a tiempo.
                </p>
                {/* Los pasos de cómo hacer un pedido */}
                <div className="steps">
                    {/* ... (replica el siguiente bloque para cada paso) */}
                    <div className="step">
                        <h3>Paso 1: Explora nuestra selección</h3>
                        <p>Explora nuestro sitio web y navega por nuestra amplia gama de sabores y marcas de snus.</p>
                    </div>
                    {/* ... */}
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
    {
        title: 'Política de Devolución',
        content: (
            <div className="returnPolicyContent">
                <p>
                    Nos esforzamos por la satisfacción del cliente y ofrecemos una política de devolución justa. Si no estás completamente satisfecho con tus productos de snus, por favor revisa nuestra política de devolución e inicia el proceso de devolución o intercambio dentro de los 14 días posteriores a la compra.
                </p>
                {/* ... (información adicional) */}
            </div>
        )
    }
];


const HomePage = () => {
    return (
        <div className="homePage">
            <div className="section photo" style={{ backgroundColor: 'gray !important', backgroundImage: `url(${grizzlySnusImage})` }}>
                <div className="welcomeText">
                    <h1>¡Bienvenido a Snusy.cl! Tu tienda en línea de snus todo en uno</h1>
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


