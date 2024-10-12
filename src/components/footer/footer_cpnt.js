import React, { Component } from 'react';

import './footer_cpnt.css'

class Footer extends Component {
    render() {
        return (
            <div class="container-fluid footer bg-dark text-light footer mt-5 pt-5 wow fadeIn">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h5 class="text-light mb-4">Address</h5>
                            <p class="mb-2">
                                <i class="fa fa-map-marker-alt me-3"></i>71 ถนนพระรามที่ 5
                                แขวงดุสิต เขตดุสิต กรุงเทพมหานคร
                            </p>
                            <p class="mb-2">
                                <i class="fa fa-phone-alt me-3"></i>0-2281-2000
                            </p>
                            <p class="mb-2">
                                <i class="fa fa-envelope me-3"></i>dusit@zoothailand.org
                            </p>
                        </div>
                    </div>
                    <div class="container">
                        <div class="copyright">
                            <div class="row">
                                <div
                                    class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <a class="border-bottom" href="#">Your Site
                                        Name</a>, All
                                    Right Reserved.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;