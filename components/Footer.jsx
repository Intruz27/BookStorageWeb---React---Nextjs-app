import React from 'react'

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
            <section className="border-top">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">
                                <i className="fas fa-gem"></i> BookStorageWeb
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lobortis sapien. Nullam scelerisque faucibus enim, non condimentum massa egestas in.
                            </p>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Przydatne Linki</h6>
                            <p>
                                <a href="#!" className="text-reset">Pomoc</a>
                            </p>
                        </div>
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            <h6 className="text-uppercase fw-bold mb-4">Kontakt</h6>
                            <p>
                                <i className="fas fa-home"></i> Złota 999/38, Warszawa, Polska
                            </p>
                            <p>
                                <i className="fas fa-envelope"></i> test@gmail.com
                            </p>
                            <p>
                                <i className="fas fa-phone"></i> +48 111 111 111
                            </p>
                            <p>
                                <i className="fas fa-print"></i> +48 222 222 222
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <div
                className="text-center p-4"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
            >
                © 2024 Copyright:
                <span className="fw-bold"> BookStorageWeb - Jarosław Grzęda</span>
            </div>
        </footer>
    )
}

export default Footer