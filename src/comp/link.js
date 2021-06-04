import React from "react"
import { Link } from "gatsby"

function LaxLink(props){

    if(props.internal) {
        return (
            <Link 
                to={props.url}
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    border: '4px solid #e4bbbb',
                    borderRadius: '15px',
                    padding: '10px',
                    color: '#333',
                    cursor: 'pointer',
                    background:'#e4bbbb',
                    marginBottom: '1rem'
                }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems:'center',
                        fontWeight: "bolder",
                        fontSize: "18px",
                        marginRight: "1rem",
                    }}>
                    {props.title}
                </div>
                <div
                    style={{
                        display: 'flex',
                        fontWeight: "bolder",
                        fontSize: "24px",
                        alignItems: 'center'
                    }}>
                        {props.children}
                </div>
            </Link>
        )
    } else {
        return (
            <a 
                href={props.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    display: 'flex',
                    justifyContent: 'space-around',
                    border: '4px solid #e4bbbb',
                    borderRadius: '15px',
                    padding: '10px',
                    color: '#333',
                    cursor: 'pointer',
                    background:'#e4bbbb',
                    marginBottom: '1rem'
                }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems:'center',
                        fontWeight: "bolder",
                        fontSize: "18px",
                        marginRight: "1rem",
                    }}>
                    {props.title}
                </div>
                <div
                    style={{
                        display: 'flex',
                        fontWeight: "bolder",
                        fontSize: "24px",
                        alignItems: 'center'
                    }}>
                        {props.children}
                </div>
            </a>

        )
    }
}

export default LaxLink