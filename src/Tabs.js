import React, { Component } from 'react';

import Tab from './Tab';
import { TabList, TabContent } from './components'

class Tabs extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <div>
        <TabList>
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </TabList>
        <TabContent>
          {children.map((child) => {
            if (child.props.label !== activeTab) return null;
            return child.props.children;
          })}
        </TabContent>
      </div>
    );
  }
}

export default Tabs;