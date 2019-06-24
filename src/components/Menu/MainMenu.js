import React, { Component } from "react"
import Link from "gatsby-link"
import Sidebar from "react-sidebar";
import styles from "./styles";

const mql = window.matchMedia(`(min-width: 800px)`);

class MainMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sidebarDocked: mql.matches,
            sidebarOpen: true
        };

        this.mediaQueryChanged = this.mediaQueryChanged.bind(this);
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
    }

    componentWillMount() {
        mql.addListener(this.mediaQueryChanged);
    }

    componentWillUnmount() {
        this.state.mql.removeListener(this.mediaQueryChanged);
    }

    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
    }

    mediaQueryChanged() {
        this.setState({ sidebarDocked: mql.matches, sidebarOpen: false });
    }

    render() {

        const data = this.props.menu.allWordpressWpApiMenusMenusItems.edges[0].node.items

        const sideBarContent = (
            <div>
                <ul>
                    {data.map((item) =>

                        <li key={item.object_slug}>
                            {console.log('item', item)}
                            <Link to={item.url}>
                                {item.title}
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        );
        return (
            <Sidebar
                styles={styles}
                sidebar={sideBarContent}
                open={this.state.sidebarOpen}
                docked={this.state.sidebarDocked}
                onSetOpen={this.onSetSidebarOpen}
            >
                <button style={{ color: "white" }} onClick={() => this.onSetSidebarOpen(true)}>
                    Open sidebar
        </button>

            </Sidebar>

            // <div style={{
            //     background: '#f4f4f4',
            //     paddingTop: '10px',
            // }}>
            //     <ul style={{
            //         listStyle: 'none',
            //         display: 'flex',
            //         justifyContent: 'space-evenly',
            //     }}>
            //         {data.map((item) =>
            //             <li key={item.object_slug}>
            //                 <Link to={item.url}>
            //                     {item.title}
            //                 </Link>
            //             </li>
            //         )}
            //     </ul>
            // </div>
        )
    }
}

export default MainMenu