import React,{Component} from 'react';
import Header from './Header';
import {getPost,postInteractivity} from '../service/api';
import './styles/BlogDetail.css'
import './styles/font-awesome/css/font-awesome.css'




class BlogDetail extends Component{

    constructor(props){
        super(props);
        this.state = {data:{},id:props.match.params.id,like:false,dislike:false};
        this.fetchData = this.fetchData.bind(this);
        this.likeClick = this.likeClick.bind(this);
        this.dislikeClick = this.dislikeClick.bind(this);
    }

    async likeClick(){
        if(this.state.dislike){
            return;
        }

        if(this.state.like){
            this.setState({like:false});
            return;
        }

        this.setState({like:true});
        let data = this.state.data;
        data.like++;
        this.setState({data:data});
        await postInteractivity(data,this.state.id);
    }

    async dislikeClick(){
        if(this.state.like){
            return;
        }

        if(this.state.dislike){
            this.setState({dislike:false});
            return;
        }

        this.setState({dislike:true});
        let data = this.state.data;
        data.dislike++;
        this.setState({data:data});
        await postInteractivity(data,this.state.id);
    }

    async fetchData(){
        let data = await getPost(this.state.id);
        this.setState({data:data});
    }

    

    render(){
        this.fetchData();
        return(
            <>
                <Header  header_ref={["Home","Profile","Logout"]} clicked={-1} />
                <div className="Box"></div>
                <div className="container">
                    <h1 id="auth"> {this.state.data.author} </h1>
                    <div id="dt">
                        <p id="date">date: {new Date(this.state.data.date).toDateString()}</p>
                        <p id="topic">topic: {this.state.data.topic}</p>
                    </div>
                    <div id="content">
                        <p>
                            {this.state.data.content}
                        </p>
                    </div>
                    <div className="Interactivity">
                        <button id="like" onClick={this.likeClick}><h4>{this.state.data.like} <i class="fa fa-thumbs-o-up" aria-hidden="true"></i> </h4></button>
                        <button id="dislike" onClick={this.dislikeClick}><h4>{this.state.data.dislike} <i class="fa fa-thumbs-o-down" aria-hidden="true"></i> </h4></button>
                    </div>
                </div>

            </>
        );
    }
}

export default BlogDetail;