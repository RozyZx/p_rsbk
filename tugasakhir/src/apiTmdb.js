import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";

export default class apiTmdb extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            visible: false,
            title: '',
            release_date: '',
            overview: ''
        }
    }

    handleButton = (overview) => {
        alert(overview);
    }

    handleOverview = (titleText, overviewText) => {
        this.setState({
            visible: true,
            title: titleText,
            overview: overviewText
        })
    }

    componentDidMount() {
        console.log('did mount called')
        axios({
            method: "get",
            url: "https://api.themoviedb.org/3/discover/movie?api_key=9ad740896cb3ce8aefcf4103e4bdbd08&language=&sort_by=POPULARITY&include_adult=false&include_video=false&page=1&with_original_language=",
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

    render() {
        return (
            <div>
                <div className="boxWhite">
                    <center>
                        <h1>First page TMDB movie list by popularity</h1>
                    </center>

                    <Modal
                        title={this.state.title}
                        centered
                        visible={this.state.visible}
                        onCancel={() => {this.setState({visible: false})}}
                        footer={null}>
                        <p>
                            {this.state.overview}
                        </p>
                    </Modal>

                    {this.state.result.map((results, index) => {
                        return (
                            <div className="card" key={results.id}>
                                <div className="card-body">
                                    <h5 className="card-title">{results.title}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        {results.release_date}
                                    </h6>
                                </div>
                                <button
                                    className="button"
                                    onClick={() => this.handleOverview(results.title, results.overview)}
                                >
                                    Overview
                                </button>
                            </div>
                        )
                    })}

                </div>
            </div>
        )
    }
}