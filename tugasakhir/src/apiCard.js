import React, { Component } from "react";
import styled, { css } from 'styled-components';

const CardHolder = styled.div`
    display: inline-grid;
    margin-left: auto;
    margin-right: auto;
    cursor: default;
`

const Card = styled.div`
    display: inline;
    width: 195px;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
    &:hover {
        box-shadow: 0 0 5px 5px rgba(0,0,0,0.2);
    }
`

const Poster = styled.img`
    width: 100%;
    height: 300px;
`

const CardBody = styled.div`
    padding: 1.5rem;
`

export default class apiCard extends Component {
    render() {
        return (
            <CardHolder>
                <Card onClick={() => this.props.handleOverview(this.props.title, this.props.overview)}>
                    <Poster src={(this.props.poster == null) ? '/not_found.png' : ("http://image.tmdb.org/t/p/w185" + this.props.poster)} />
                    <CardBody>
                        <h5>{this.props.title}</h5>
                        <p>{this.props.release_date}</p>
                    </CardBody>
                </Card>
            </CardHolder>
        )
    }
}