import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

    // <link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700" rel="stylesheet">
    // <link href="https://fonts.googleapis.com/css?family=Rokkitt:100,300,400,700" rel="stylesheet">
    //     <!-- Animate.css -->
    //     <link rel="stylesheet" href="css/animate.css">
    //         <!-- Icomoon Icon Fonts-->
    //         <link rel="stylesheet" href="css/icomoon.css">
    //             <!-- Ion Icon Fonts-->
    //             <link rel="stylesheet" href="css/ionicons.min.css">
    //                 <!-- Bootstrap  -->
    //                 <link rel="stylesheet" href="css/bootstrap.min.css">
    //
    //                     <!-- Magnific Popup -->
    //                     <link rel="stylesheet" href="css/magnific-popup.css">
    //
    //                         <!-- Flexslider  -->
    //                         <link rel="stylesheet" href="css/flexslider.css">
    //
    //                             <!-- Owl Carousel -->
    //                             <link rel="stylesheet" href="css/owl.carousel.min.css">
    //                                 <link rel="stylesheet" href="css/owl.theme.default.min.css">
    //
    //                                     <!-- Date Picker -->
    //                                     <link rel="stylesheet" href="css/bootstrap-datepicker.css">
    //                                         <!-- Flaticons  -->
    //                                         <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css">
    //
    //                                             <!-- Theme style  -->
    //                                             <link rel="stylesheet" href="css/style.css">
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
