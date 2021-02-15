import React, { Component } from 'react';
import Homethumbnail from "../homethumbnail/index";
import "./style.scss";

class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            catagories: {},
            loaded : false
        }
    }

    // async getData() {
    //     const res = await fetch('/json/homepage.json');
    //     const data = await res.json();
    //     this.setState(prev => ({catagories : data}));
    //     console.log(this.state);
    // }
    componentDidMount() {
        const url = "/mobikart/json/homepage.json";
        fetch(url,{
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            return res.json()
        })
        .then(
            (result) => {
                console.log(result)
                this.setState((prevState) => ({ catagories: result, loaded: true}), ()=>{console.log("done")})
                console.log(this.state)
            },
            (error) => {
                console.log(error)
            }
        )
        // this.getData();
    }

    render() {
        return (
            <React.Fragment>
            {this.state.loaded ? (
                <section>
                    <h2 className="SectionTitle">Top Categories :</h2>
                    <div className="categotySection">
                         {this.state.catagories.map(item => {
                             return(
                             <Homethumbnail urlParam={item.urlParam} Thumbnail={item.Thumbnail} categoryName={item.categoryName}/>)
                            })}
                    </div>
                </section>
            ) : (
                <p>Loading</p>
            )
            }
            </React.Fragment>
        )
    }

}

export default Home;