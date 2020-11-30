import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
import styled, { css } from 'styled-components';
import ApiCard from './apiCard';

//grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(195px, 1fr));
    margin: 20px;
    grid-column-gap: 10px;
    grid-row-gap: 20px;
`

// const CardHolder = styled.div`
//     display: inline-grid;
//     margin-left: auto;
//     margin-right: auto;
// `

// const Card = styled.div`
//     display: inline;
//     width: 195px;
//     box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
//     &:hover {
//         box-shadow: 0 0 5px 5px rgba(0,0,0,0.2);
//     }
// `

// const Poster = styled.img`
//     width: 100%;
//     height: 300px;
// `

// const CardBody = styled.div`
//     padding: 1.5rem;
// `

export default class apiTmdb extends Component {

    api_key = '9ad740896cb3ce8aefcf4103e4bdbd0';

    constructor(props) {
        super(props);
        this.state = {
            result: [],
            visible: false,
            title: '',
            release_date: '',
            overview: ''
        }
        var handleOverview = this.handleOverview.bind(this);
    }

    handleButton = (overview) => {
        alert(overview);
    }

    handleOverview(titleText, overviewText) {
        this.setState({
            visible: (overviewText != ''),
            title: titleText,
            overview: overviewText
        })
    }

    getData(page) {
        axios({
            method: "get",
            url: "https://api.themoviedb.org/3/discover/movie?api_key=" +
                this.api_key +
                "8&language=&sort_by=POPULARITY&include_adult=false&include_video=false&page=" +
                page +
                "&with_original_language=",
            headers: {
                accept: "*/*",
            },
        })
            .then((data) => {
                console.log(data.data);
                this.setState({
                    result: data.data.results,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getData(1)
    }

    render() {
        return (
            <div>
                <div className="boxWhite">
                    <div className="navBar">
                        <img src="/dark_iconFull.png" />
                        <p className="about">Kelompok 46</p>
                    </div>

                    <Modal
                        title={this.state.title}
                        centered
                        visible={this.state.visible}
                        onCancel={() => { this.setState({ visible: false }) }}
                        footer={null}>
                        <p>
                            {this.state.overview}
                        </p>
                    </Modal>

                    <Container>
                        {this.state.result.map((results, index) => {
                            return (
                                <ApiCard 
                                    poster={results.poster_path}
                                    title={results.title}
                                    release_date={results.release_date}
                                    handleOverview={this.handleOverview.bind(this)}
                                    overview={results.overview} />
                            )
                        })}
                    </Container>

                </div>
            </div>
        )
    }
}