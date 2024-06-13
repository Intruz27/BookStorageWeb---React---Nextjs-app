import React from 'react'
import Image from 'next/image';


const MainPage = () => {
    return (
        <div className="col-12 py-5">
            <div className="row align-items-center py-5">
                <div className="col-12 col-lg-6">
                    <h1 className="display-5 fw-bold lh-1 mb-3">
                        BookStorageWeb - Nasza internetowa księgarnia!
                    </h1>
                    <p className="lead">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris non lobortis sapien. Nullam scelerisque faucibus enim, non condimentum massa egestas in. Maecenas facilisis, nunc vel vestibulum sollicitudin, risus nunc auctor mauris, vitae euismod justo ante et magna. Praesent eget nunc lacinia, dapibus metus nec, convallis sapien. Vivamus ultricies pulvinar risus nec tristique. Curabitur facilisis in libero at efficitur. Proin pretium finibus ipsum.
                        <br />
                        Sed maximus vel ex at consectetur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Aliquam dui purus, ullamcorper eu convallis eget, laoreet a leo. Morbi porttitor pulvinar ligula, in efficitur urna placerat eget. Aenean quis posuere erat. Nunc quis enim vestibulum, laoreet est a, porta tellus. Aenean venenatis arcu tellus, sit amet volutpat nisi rhoncus interdum. Morbi sit amet iaculis tellus. Fusce consequat eu lectus vitae ullamcorper.
                    </p>
                </div>
                <div className="col-12 col-lg-6">
                    <Image
                        src="/main.jpg"
                        alt="image"
                        width={600}
                        height={600}
                        className="card-img-top"
                        style={{ maxHeight: '600px', marginTop: '70px' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default MainPage