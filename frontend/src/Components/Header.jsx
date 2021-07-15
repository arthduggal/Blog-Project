import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './styles/Header.css'
import './styles/font-awesome/css/font-awesome.css'




class SeachBar extends Component{
    constructor(props){
        super(props);
        this.crossButton = this.crossButton.bind(this);
    }

    crossButton(){
        this.props.clickSearch();
    }

    render(){
        return(
            <div className="search input-group">
                <input type="text" placeholder="Search .." className="form-control" id="search-bar" />
                <i onClick={this.crossButton} class="fa fa-times fa-2x" aria-hidden="true"></i>
            </div>
        );
    }
}




class Header extends Component{
    constructor(props){
        super(props);
        this.clickSearch = this.clickSearch.bind(this);
        this.state = {searchClicked : false};
    }

    clickSearch(){
        let click = this.state.searchClicked;
        this.setState({searchClicked : !click});
    }
    
    render(){
        const row = [];
        const header_ref = this.props.header_ref;
        const clicked = this.props.clicked;
        let click = this.state.searchClicked;
        


        header_ref.forEach((link_val) => {
            if(link_val === "Search"){
                row.push(
                    // eslint-disable-next-line
                    <li onClick={this.clickSearch}><a>{link_val}</a></li>
                );
            }
            else if(link_val === header_ref[clicked]){
                row.push(
                    // eslint-disable-next-line
                    <Link to={"/"}><li><a className="active">{link_val}</a></li></Link>
                );
            }
            else
                row.push(
                    // eslint-disable-next-line
                    <Link to={"/"}><li><a>{link_val}</a></li></Link>
                );
        });
        let navVal;
        if(click){
            navVal = <SeachBar clickSearch={this.clickSearch}/>
        }
        else{
            navVal = <>
                        <ul class="nav">
                            {row}
                        </ul>
                        <a className='menu-trigger' href = '/'>
                            <span>Menu</span>
                        </a>
                    </>
        }
        return(
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* <!-- ***** Logo Start ***** --> */}
                                <a href="/" className="logo">
                                    <h1> Thought </h1>
                                </a>
                                {/* <!-- ***** Logo End ***** --> */}
                                {/* <!-- ***** Menu Start ***** --> */}
                                {navVal}
                                {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}



export default Header;