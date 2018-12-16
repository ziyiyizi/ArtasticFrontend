import React, { Component } from 'react';
import {Form, FormControl}from 'react-bootstrap';
import {getSearch}from '../utils/request';
import { Link} from 'react-router-dom';
import {ButtonDropdown, Button as NewButton, DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';


class SearchButton extends Component{
    constructor(props) {
        super(props);
        this.state = {
          searchValue: "",
          isOpen:false,
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
        this.toggle=this.toggle.bind(this);
      }

      handleSearch(){
        getSearch(this.state.searchValue);
      }
    
      handleChange(e) {
        if (e.target.type === "search") {
          this.setState({
            searchValue:e.target.value,
          })
    
        } else {
          // do nothing
        }
      }
      toggle(){
        this.setState({isOpen:!this.state.isOpen})
      }

      render(){
          return(
            <Form inline>
            <FormControl type="search" placeholder="Search" onChange={this.handleChange} size="sm"/>
            <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
            <Link to={'/search/title/'+this.state.searchValue}><NewButton color="success" id="caret" outline size='sm'>Search</NewButton></Link>
            <DropdownToggle outline caret color="success" size='sm' />
            <DropdownMenu>
            <Link to={'/search/title/'+this.state.searchValue}><DropdownItem >Search as title</DropdownItem></Link>
            <Link to={'/search/member/'+this.state.searchValue}><DropdownItem >Search as member</DropdownItem></Link>
            <Link to={'/search/tweet/'+this.state.searchValue}><DropdownItem>Search as tweet</DropdownItem></Link>
            <Link to={'/search/tag/'+this.state.searchValue}><DropdownItem>Search as tag</DropdownItem></Link>
          
            </DropdownMenu>
          </ButtonDropdown>
          </Form>
          )
      }

}
export default SearchButton;