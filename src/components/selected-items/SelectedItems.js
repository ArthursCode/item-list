import React, {Component} from 'react';
import style from './SelectedItems.module.css';
import EachItem from "../each-item/EachItem";
import emptyImg from "../../img/no-data/empty.png";
import {Container} from "react-bootstrap";

class SelectedItems extends Component {
    render() {
        return (
            <div className={style.SelectedItems}>
                <div className={style.header}>Selected items ({this.props.selectedList.length})</div>
                {this.props.selectedList.length>0 ?
                    this.props.selectedList.map((val, key) => {
                        return <EachItem key={key} item={{key: key, val: val, fromSelected: true}}/>
                    }):
                    <Container className="emptyImg">
                        <img src={emptyImg} alt="No item"/>
                        <div className="text">No selected item</div>
                    </Container>
                }
            </div>
        )
    }
}

export default SelectedItems;