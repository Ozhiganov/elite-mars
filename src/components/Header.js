import React from 'react';
import _ from 'lodash';

import {classNames, Link, safePrefix} from '../utils';

export default class Header extends React.Component {
    render() {
        return (
            <header id="header" className={classNames({'alt': _.get(this.props, 'pageContext.frontmatter.template') === 'home'})}>
                <h1><Link to={safePrefix('/')}>{_.get(this.props, 'pageContext.site.siteMetadata.title')}</Link></h1>
                <nav id="nav">
                    <ul>
                        <li className="special">
                            <Link to="#menu" className="menuToggle"><span>Menu</span></Link>
                            <div id="menu">
                                <ul>
                                    {_.map(_.get(this.props, 'pageContext.menus.main'), (item, item_idx) => (
                                        <li key={item_idx}><Link to={safePrefix(_.get(item, 'url'))}>{_.get(item, 'title')}</Link></li>
                                    ))}
                                    {_.map(_.get(this.props, 'pageContext.site.data.menu.actions'), (action, action_idx) => (
                                        <li key={action_idx}><Link to={(_.get(action, 'url').startsWith('#') ? _.get(action, 'url') : safePrefix(_.get(action, 'url')))}>{_.get(action, 'label')}</Link></li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }
}
