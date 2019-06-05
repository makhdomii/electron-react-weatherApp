import React from 'react'
import { FaLinkedin, FaGithub, FaAt, FaSearch, FaHome } from 'react-icons/fa'
// const { shell } = window.require('electron')
// const { shell } = window.require('electron');
// import { shell } from 'electron'
// import { MdHome, MdSearch, MdEmail } from 'react-icons/lib/md'
// import { GoMarkGithub } from 'react-icons/lib/go'
const Menu = props => {
    // if (window.isElectron()) {
        console.log(window.shell);
        // window.shell.on('pong', (event, arg) => {
        //     this.setState({ ipc: true })
        // })
        // window.shell.send('ping')
    // }
    const mail = () => window.shell.openExternal('https://github.com')
    const github = () => window.shell.openExternal('https://github.com')
    const linkedin = () => window.shell.openExternal('https://github.com')
    return (
        <div className="menu-loc">
            <nav className="menu">
                <input type="checkbox" href="javascript:;" className="menu-open" name="menu-open" id="menu-open" />
                <label className="menu-open-button" htmlFor="menu-open">
                    <span className="hamburger hamburger-1"></span>
                    <span className="hamburger hamburger-2"></span>
                    <span className="hamburger hamburger-3"></span>
                </label>
                <button onClick={() => props.history.push('/')} className="menu-item border-0"> <FaHome /> </button>
                <button onClick={mail} className="menu-item border-0"> <FaAt /> </button>
                <button onClick={github} className="menu-item border-0"> <FaGithub /> </button>
                <button onClick={linkedin} className="menu-item border-0"> <FaLinkedin /> </button>
            </nav>
            <svg className="svg-width" xmlns="http://www.w3.org/2000/svg" version="1.1">
                <defs>
                    <filter id="shadowed-goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feGaussianBlur in="goo" stdDeviation="3" result="shadow" />
                        <feColorMatrix in="shadow" mode="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 1 -0.2" result="shadow" />
                        <feOffset in="shadow" dx="1" dy="1" result="shadow" />
                        <feComposite in2="shadow" in="goo" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
                        <feComposite in2="goo" in="SourceGraphic" result="mix" />
                    </filter>
                </defs>
            </svg>
        </div>
    )
}

export default Menu