import React, { Component } from "react";
import axios from "axios";
import { Modal } from "antd";
import "antd/dist/antd.css";
import styled from 'styled-components';
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

// ================= challenge section =================
/*const posts = [
    {
      title: 'Post One',
      body: 'This is post one'
    },
    {
      title: 'Post Two',
      body: 'This is post two'
    }
  ]

  
const getPosts = () => {
    setTimeout( () => {
      posts.map( post => {
        console.log(post);
      })
    }, 1000);
  }
  
// contoh pembuatan promise
const createPost = (post) => {
    return new Promise( (resolve,reject) => {
      setTimeout(() => {
        posts.push(post);
        const state = false;
        (!state) ? resolve() : reject();
      }, 2000);
    })
  }

    
  // Async-Await
  const init = async () => {
    // Berjalan secara Asynchronous
    await createPost({
      "title" : "Post Four",
      "body"  : "This is post Four"
    });
    await getPosts();
    console.log('babon');
  }*/
  // ============== end of challenge section ==============

export default class apiTmdb extends Component {

    sortByProperty(property){  
        return function(a,b){  
           if(a[property] > b[property])  
              return 1;  
           else if(a[property] < b[property])  
              return -1;  
       
           return 0;  
        }  
     }

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
                    result: data.data.results.sort(this.sortByProperty('vote_average')),
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    componentDidMount() {
        this.getData(1);
        //init(); //challenge
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
                                <ApiCard key={results.id}
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