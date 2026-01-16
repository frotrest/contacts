import { Component } from "react";
import styles from './contacts.module.css';

class Container extends Component {
    render() {
        return (
            <section className={this.props.classTitle}>
                <h2 className={styles.titleSection}>{this.props.sectionTitle}</h2>
                {this.props.children}
            </section>
        )
    }
}

export default Container;