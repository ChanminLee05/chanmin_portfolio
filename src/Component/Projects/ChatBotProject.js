import React, {useState} from 'react';
import {Link} from "react-router-dom";

import Github from "../../Assets/githubonly.png";
import EER from "../../Assets/EER diagram.png";
import e_main from "../../Assets/e-main.png";
import e_tab1 from "../../Assets/e-tab1.PNG";
import e_tab2 from "../../Assets/e-tab2.PNG";
import e_adminMain from "../../Assets/e-adminMain.PNG";
import e_cart from "../../Assets/e-cart.PNG";
import e_chatbot1 from "../../Assets/e-chatbot.PNG";
import e_chatbot2 from "../../Assets/e-chatbot2.PNG";
import e_forgotName from "../../Assets/e-forgotName.PNG";
import e_manageProduct from "../../Assets/e-manageProduct.PNG";
import e_signup from "../../Assets/e-signup.PNG";
import e_product1 from "../../Assets/e-product1.PNG";
import e_product2 from "../../Assets/e-product2.PNG";
import e_product3 from "../../Assets/e-product3.PNG";
import e_product4 from "../../Assets/e-product4.PNG";


export default function ChatBotProject() {
    const [showChallenge, setShowChallenge] = useState(true);

    function toggleShowChallenge() {
        setShowChallenge(!showChallenge);
    }

    return(
        <div className="project">
            <a href="https://github.com/ChanminLee05/E-commerce_Project_Frontend.git" target="_blank" rel="noopener noreferrer"><img src={Github} alt="git" className="git-img"/></a>
            <h1 className="project-title">E-commerce Project</h1>
            <div className="intro1">
                <p className="intro1-txt">
                    This E-commerce website, crafted with React.js for the frontend and Java Spring Boot with JPA for the backend, enables seamless user experiences.
                    Users can easily register, log in, and manage their shopping endeavors by manipulating their cart contents.
                    Moreover, the integrated admin interface empowers administrators to efficiently oversee product inventory and user interactions.
                </p>
            </div>
            <div className="project-intro row">
                <div className="intro2 col-6">
                    <h4 className="intro-title">Features</h4>
                    <ul>
                        <li className="intro2-list"><b>User Authentication:</b> Secure user registration, login, and logout with JWT token-based authentication.</li>
                        <li className="intro2-list"><b>Product Browsing:</b> Seamless browsing capabilities allow users to explore the extensive range of products available on the platform.</li>
                        <li className="intro2-list"><b>Cart Management:</b> Users can easily add or remove products from their carts with a simple click, streamlining the shopping experience.</li>
                        <li className="intro2-list"><b>Admin Privileges:</b> An intuitive admin interface empowers administrators to manage user accounts and product inventory effectively.
                            Admins can add, update, or delete user accounts and products as needed, ensuring efficient platform management.</li>
                    </ul>
                </div>
                <div className="intro3 col-3">
                    <h4 className="intro-title">Technologies Used</h4>
                    <p className="intro3-txt">React.js, Bootstrap, Java, Springboot JPA, JSX, CSS </p>
                </div>
            </div>
            <div className="cs-container">
                <div className={`nexus-flip-card ${showChallenge ? '' : 'flipped'}`} onClick={toggleShowChallenge}>
                    <div className="flip-card-inner">
                        <div className="flip-card-front challenge">
                            <h1 className="cs-title">Challenge</h1>
                            <ul>
                                <li className="c-list"><i className="bi bi-caret-right-fill"></i>Designing table structures resulted in malfunctions</li>
                                <li className="c-list"><i className="bi bi-caret-right-fill"></i>Designing table structures resulted in malfunctions</li>
                                <li className="c-list"><i className="bi bi-caret-right-fill"></i>First-time utilization of JPA was challenging, as it introduced a myriad of unexpected errors</li>
                                <li className="c-list"><i className="bi bi-caret-right-fill"></i>Building APIs required continuous adjustments to accommodate evolving feature demands</li>
                                <li className="c-list"><i className="bi bi-caret-right-fill"></i>Accommodating the continuous increase in feature demands necessitated additional development time</li>
                            </ul>
                        </div>
                        <div className="flip-card-back solution">
                            <h1 className="cs-title">Solution</h1>
                            <ul>
                                <li className="s-list"><i className="bi bi-caret-right-fill"></i>Meticulous testing and attention to detail were employed to rectify relational errors in table structures</li>
                                <li className="s-list"><i className="bi bi-caret-right-fill"></i>Diligent troubleshooting and refining bean configurations were essential to resolve JPA-related issues</li>
                                <li className="s-list"><i className="bi bi-caret-right-fill"></i>Agile adaptation to evolving feature requirements facilitated proactive adjustments in API building, ensuring seamless functionality</li>
                                <li className="s-list"><i className="bi bi-caret-right-fill"></i>Efficient time management and prioritization strategies were implemented to handle the continuous influx of feature demands</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="progress-container">
                <h1 className="progress-title">Project Development Key Activities</h1>
                <div className="progress-item">
                    <h3 className="item1">1. Designing Class Structure</h3>
                    <img src={EER} alt="eer diagram" />
                    <p className="item-txt">I meticulously strategized the architecture, delineating crucial classes such as User, Product, Cart, CartItem, Category, Role and Interfaces.
                        This approach ensured a well-organized and scalable system, facilitating seamless interaction between various components of the platform.</p>
                </div>
                <div className="progress-item">
                    <h3 className="item2">2. Implementing Features</h3>
                    <p className="item-txt">My primary focus was on integrating essential functionalities such as fetching data from API endpoints, user registration, login, and logout procedures utilizing JWT token authentication.
                        Additionally, I developed features enabling users to seamlessly add or delete products to/from their shopping carts,
                        as well as browse products filtered by categories.
                        Furthermore, comprehensive user and product management tools were implemented to empower administrators with the ability to oversee user accounts and product inventory efficiently.</p>
                </div>
                <div className="progress-item">
                    <h3 className="item1">3. Designing Frontend</h3>
                    <p className="item-txt">My goal was to simplify the user experience and interface for improved usability. I invested significant time in creating clear and intuitive components to enhance code readability and maintainability.</p>
                </div>
                <div className="progress-item">
                    <h3 className="item2">4. Deployment</h3>
                    <p className="item-txt">I hosted the frontend of the project on Netlify and the backend on Heroku.
                        This ensured accessibility for users from anywhere, not limited to local access.
                        By deploying both components, the project became readily available for users to access and utilize.</p>
                </div>
                <div className="progress-item">
                    <h3 className="item1">5. Testing</h3>
                    <p className="item-txt"> I conducted thorough testing from various environments to ensure the website's functionality.
                        Successfully accessing the website from different environments, I rigorously tested key features such as registration, login, and cart management.
                        This comprehensive testing verified the website's robustness and usability across diverse settings.</p>
                </div>
            </div>
            <div className="desc-container">
                <h1 className="desc-title">Description</h1>
                <div id="carouselExampleDark" className="carousel carousel-dark slide w-slide">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="6" aria-label="Slide 7"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="7" aria-label="Slide 8"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h5 className="w-title">Welcome to NexusHub Mall: Register, Login, and Start Shopping</h5>
                            <img src={e_main} className="d-block w-100 w-img" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Click to Easily Find What You Need</h5>
                            <div className="d-flex justify-content-between">
                                <img src={e_tab1} className="d-block w-50 w-img" alt="..."/>
                                <img src={e_tab2} className="d-block w-50 w-img" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Create an Account or Recover Your Account</h5>
                            <div className="d-flex justify-content-between">
                                <img src={e_signup} className="d-block w-50 w-img" alt="..."/>
                                <img src={e_forgotName} className="d-block w-50 w-img" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item carousel-container">
                            <h5 className="w-title">Select a Category to Find Your Products</h5>
                            <div className="d-flex position-relative">
                                <img src={e_product1} className="product-img1 product-img" alt="..."/>
                                <img src={e_product2} className="product-img2 product-img" alt="..."/>
                                <img src={e_product3} className="product-img3 product-img" alt="..."/>
                                <img src={e_product4} className="product-img4 product-img" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Streamline Your Shopping: Manage Your Cart and Place Your Order</h5>
                            <img src={e_cart} className="d-block w-100 w-img" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Get Instant Assistance from NexusBot: Available 24/7 for Your Queries</h5>
                            <div className="d-flex justify-content-between">
                                <img src={e_chatbot1} className="d-block w-50 w-img" alt="..."/>
                                <img src={e_chatbot2} className="d-block w-50 w-img" alt="..."/>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Admin Dashboard: Streamline User and Product Management, and Sales Reporting</h5>
                            <img src={e_adminMain} className="d-block w-100 w-img" alt="..."/>
                        </div>
                        <div className="carousel-item">
                            <h5 className="w-title">Product Management Hub: Seamlessly Add and Control Your Products</h5>
                            <img src={e_manageProduct} className="d-block w-100 w-img" alt="..."/>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <button className="btn btn-dark d-grid learn-btn">
                <Link to="https://nexushub-mall.netlify.app" className="what-to-eat-link">
                    Learn More
                </Link>
            </button>
        </div>
    )
}