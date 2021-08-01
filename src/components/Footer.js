import React from 'react'

export default function Footer(){
    return(
        <footer className="page-footer font-small pt-3 bg-dark text-light">
            <div className="container">
                <div>
                    <pre className="text-light">
                        <span className="font-weight-bold">Address:- </span> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,<br/>
                        totam rem  aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                        explicabo.
                    </pre>
                    <p>
                        Contact: (+91) 9999999999/8888888888
                    </p>
                </div>
            </div>

            <div className="footer-copyright text-center py-3">© 2021 Copyright:
                <a href="/home"> NinadChavan.com</a>
            </div>

        </footer>
    )
}