import React, { Component } from 'react';
import { TabItem, TabItemActive } from './components'


class Tab extends Component {

    onClick = () => {
        const { label, onClick } = this.props;
        onClick(label);
    }

    render() {
        const {
            onClick,
            props: {
                activeTab,
                label,
            },
        } = this;

        return (

            activeTab === label ?
                <TabItemActive onClick={onClick}
                >
                    {label}
                </TabItemActive>
                :
                <TabItem onClick={onClick}>{label}</TabItem>
        );
    }
}


export default Tab;