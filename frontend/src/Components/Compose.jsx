import React,{Component} from 'react';
import {useHistory} from 'react-router-dom';
import Header from './Header';
import './styles/Compose.css'
import './styles/font-awesome/css/font-awesome.css'

import {createPost} from '../service/api';


class PostForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            author:'',
            topic: "",
            date: new Date(),
            content: "",
            like: '0',
            dislike: '0'
        };
        this.handleChange = this.handleChange.bind(this);
        this.savePost = this.savePost.bind(this);
    }

    handleChange(e){
        var value = e.target.value;
        var name = e.target.name;
        this.setState({
            [name]: value
          });
        
    }

    async savePost()  {
        this.setState({date:new Date()});
        const post = this.state;
        await createPost(post);
        this.props.history.push('/');
    }

    render(){
        var topic = this.state.topic;
        var Author = this.state.author;
        if(topic === ""){
            topic = "Topic";
        }
        if(Author ===""){
            Author = "Author";
        }
        return(
            <div className="container">
                <form>
                    <label> 
                        <h2>{Author}</h2>
                        <input type="text" placeholder="Author For Blog .." name="author" onChange={this.handleChange}/>
                    </label>
                    <label> 
                        <h3>{topic}</h3>
                        <input type="text" placeholder="Topic For Blog .." name="topic" onChange={this.handleChange}/>
                    </label>
                    <br />
                    <textarea className="blog-content" placeholder="Write Content of Blog here .." name="content" onChange={this.handleChange} rows="20"  cols="60"></textarea>
                    <br />
                    <button id="button" onClick={this.savePost}>Submit</button>
                </form>
            </div>

            
        );
    }
}



function Compose(){
    return(
        <>
            <Header header_ref={["Home","Profile","Logout"]} clicked={-1} />
            <div className="Box"></div>
            <PostForm history={useHistory()} />
        </>
    );
}


export default Compose;