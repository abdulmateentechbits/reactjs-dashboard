import React from 'react'
import packageJSON from '../../../../package.json'
import {DateTime} from "luxon";

const Footer = () => {
    return (
        <footer className='main-footer'>
            <strong>
                <span className="ml-4">Copyright &copy; {DateTime.now().toFormat('y')} </span>
                <a className='pl-1' href="https://www.linkedin.com/in/abdulmateenchitrali/" target="_blank" rel="noopener noreferrer">
                    mateen.dev let's connect
                </a>
            </strong>
            <div className="float-right d-none d-sm-inline-block mr-4 ">
                <b>Version</b>
                <span className=' mr-4'>&nbsp;{packageJSON.version}</span>
            </div>
        </footer>
    )
}

export default Footer
