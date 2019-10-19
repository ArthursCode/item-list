import React, {Component} from 'react';
import {connect} from 'react-redux'
import style from './AddItem.module.css';
import {Col, Container, Row} from 'react-bootstrap';
import AllItems from "../all-items/AllItems";
import SelectedItems from "../selected-items/SelectedItems";

class AddItem extends Component {
    constructor(props){
        super(props);
        this.state={
            text: ''
        }
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        });
    };

    render() {
        return (
            <div>
                <Container>
                    <div className="AlignLeft">
                        <div className={style.AddItem}>
                            <input className={style.field}
                                   type="text"
                                   placeholder="New item input"
                                   value={this.state.text}
                                   onChange={this.handleTextChange}
                            />
                            <button className={style.btn}
                                    disabled={!this.state.text.trim()}
                                    onClick={() => this.props.handleTextAdd(this.state.text)}
                            ><span>+</span></button>
                            <span className={this.state.text.trim()? style.text : style.text_disabled} >Add</span>
                        </div>
                    </div>
                </Container>
                <Container>
                    <Row>
                        <Col>
                            <AllItems addedList={this.props.addedList}/>
                        </Col>
                        <Col>
                            <SelectedItems selectedList={this.props.selectedList}/>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        addedList: state.addedList,
        selectedList: state.selectedList
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleTextAdd: (item) => dispatch({type: 'ADD_TO_ALL', value: item})
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);