import React from 'react';
import _ from 'lodash';

import {Link, htmlToReact} from '../utils';

export default class Footer extends React.Component {
    render() {
        return (
            <footer id="footer">
                {_.get(this.props, 'pageContext.site.data.footer.social_icons') && 
                    <ul className="icons">
                        {_.map(_.get(this.props, 'pageContext.site.data.footer.social_icons'), (item, item_idx) => (
                            <li key={item_idx}><Link to={_.get(item, 'url')} className={'icon ' + _.get(item, 'icon')}><span className="label">{_.get(item, 'title')}</span></Link></li>
                        ))}
                    </ul>
                }
                {_.get(this.props, 'pageContext.site.data.footer.copyright') && 
                    <ul className="copyright">
                        <li>
                            {htmlToReact(_.get(this.props, 'pageContext.site.data.footer.copyright'))}
                            &nbsp;
                            {_.map(_.get(this.props, 'pageContext.site.data.footer.links'), (link, link_idx) => (<React.Fragment key={link_idx}>
                                <Link key={link_idx} to={_.get(link, 'url')} {...(_.get(link, 'new_window') ? {target: '_blank', rel: 'noopener'} : null)}>{_.get(link, 'text')}</Link>.
                            </React.Fragment>))}
                        </li>
                    </ul>
                }
            </footer>
        );
    }
}
