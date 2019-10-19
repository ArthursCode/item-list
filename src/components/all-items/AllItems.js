import React, {Component} from 'react';
import {Container} from 'react-bootstrap'
import style from './AllItems.module.css';
import EachItem from "../each-item/EachItem";
import emptyImg from '../../img/no-data/empty.png';

class AllItems extends Component {
    render() {
        return (

            <div className={style.AllItems}>
                <div className={style.header}>All items ({this.props.addedList.length})</div>
                {this.props.addedList.length>0?
                    this.props.addedList.map((val, key) => {
                        return <EachItem key={key} item={{key: key, val: val, fromSelected: false}}/>
                    }):
                    <Container className="emptyImg">
                        <img src={emptyImg} />
                        <div className="text">No new item</div>
                    </Container>
                }

            </div>

        )
    }
}

export default AllItems;