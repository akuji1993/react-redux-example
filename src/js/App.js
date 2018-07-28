import React from 'react'; 
import {connect} from 'react-redux';
import styles from './App.scss';

class App extends React.Component {

    componentWillMount() {
        const {dispatch} = this.props; 
        
        // Example for dispatching to store
        dispatch({
            type: "ADD_ITEM", 
            payload: {
                id: 2, 
                value: "hallo"
            }
        }); 
    }

    render() {
        return (
            <div className={styles.app}>
                {this.props.items.map((item,idx) =>
                    <div
                        className={styles.item}
                        key={`item-${idx}`}>
                        {item.id} - {item.value}
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       items: state.root.items
   }
}

export default connect(mapStateToProps)(App);