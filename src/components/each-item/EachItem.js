import React, {Component} from 'react';
import style from './EachItem.module.css';
import {Container, Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrashAlt, faPen, faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {connect} from "react-redux";

class EachItem extends Component {
    constructor(props){
        super(props);
        this.state={
            disabled: true,
            text: this.props.item.val
        }
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    };

    handleTextSave = (id, fromSelected) => {
        this.setState({
            disabled: true
        });
        fromSelected? this.props.selectedList[id] = this.state.text:
        this.props.addedList[id] = this.state.text
    };

    handleTextEdit = () => {
        this.setState({
            disabled: false
        })
    };

    render() {
        const selectText = this.props.item.fromSelected? 'Unselect' : 'Select';
        return (
            <div>
                <Container className={style.EachContent}>
                    <Row className="PaddingLeftRight10">
                        <Col className="Padding5">
                            <div onClick={() =>
                                this.props.item.fromSelected?
                                    this.props.handleTextDeleteSelected(this.props.item.key) :
                                    this.props.handleTextDelete(this.props.item.key)}
                                 className={[style.EachAction, style.delete].join(' ')}>
                                <FontAwesomeIcon icon={faTrashAlt} />
                                <div className={style.text}>Delete</div>
                            </div>
                        </Col>
                        <Col className="Padding5">
                            <div className={[style.EachAction, style.edit].join(' ')} onClick={this.handleTextEdit}>
                                <FontAwesomeIcon icon={faPen} />
                                <div className={style.text}>Edit</div>
                            </div>
                        </Col>
                        <Col className="Padding5">
                            <div onClick={() =>
                                this.props.item.fromSelected?
                                    this.props.handleUnSelect(this.props.item.key) :
                                    this.props.handleAddToSelected(this.props.item.key)}
                                 className={[style.EachAction, style.select].join(' ')}>
                                <FontAwesomeIcon icon={this.props.item.fromSelected? faArrowLeft: faArrowRight} />
                                <div className={style.text}>{selectText}</div>
                            </div>
                        </Col>
                    </Row>
                    <Row className="PaddingLeftRight10">
                        <input className={style.input} type="text"
                               onChange={this.handleTextChange}
                               onBlur={() =>
                                   this.props.item.fromSelected? this.handleTextSave(this.props.item.key, true):
                                       this.handleTextSave(this.props.item.key, false)
                               }
                               defaultValue={this.props.item.val}
                               disabled={this.state.disabled}/>
                    </Row>

                </Container>

            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        addedList: state.addedList,
        selectedList: state.selectedList,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleTextDelete: (key) => dispatch({type: 'DEL_ITEM', key: key}),
        handleAddToSelected: (key) => dispatch({type: 'ADD_TO_SELECTED', key: key}),
        handleUnSelect: (key) => dispatch({type: 'UNSELECT_SELECTED', key: key}),
        handleTextDeleteSelected: (key) => dispatch({type: 'DEL_FROM_SELECTED', key: key}),
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(EachItem);