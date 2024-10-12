import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div>
                <div class="container-fluid bg-dark p-0 mb-5">
                    <div class="row g-0 flex-column-reverse flex-lg-row">
                        <div class="col-lg-6 p-0 wow fadeIn" data-wow-delay="0.1s">
                            <div
                                class="header-bg h-100 d-flex flex-column justify-content-center p-5">
                                <h1 class="display-4 text-light mb-5">
                                    เพลิดเพลินกับวันอันแสนวิเศษกับครอบครัวของคุณ
                                </h1>
                                <div
                                    class="d-flex align-items-center pt-4 animated slideInDown">
                                    <span></span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                        <div class="owl-carousel header-carousel">
                            <div class>
                                <img class src="img/imgAnimal/68943.jpg" width="100%"
                                    height="500" alt />
                            </div>
                            <div class>
                                <img class src="img/imgAnimal/68949.jpg" width="100%"
                                    height="500" alt />
                            </div>
                            <div class>
                                <img class src="img/imgAnimal/68954.jpg" width="100%"
                                    height="500" alt />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;