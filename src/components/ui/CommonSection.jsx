import React from 'react'
import { Container } from 'reactstrap'
import "../../styles/CommonSection.css"

const CommonSection = ({ title }) => {
    return (
        <div className="common__section">

            <Container className='text-center'>
                <h1>{title}</h1>

            </Container>

        </div>
    )
}

export default CommonSection